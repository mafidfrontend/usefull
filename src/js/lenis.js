const clamp = (min, value, max) => Math.max(min, Math.min(max, value));

class Animate {
    constructor() {
        this.isRunning = false;
        this.currentTime = 0;
    }

    advance(deltaTime) {
        if (!this.isRunning) return;

        if (this.lerp) {
            const n = 60 * this.lerp;
            this.value =
                (1 - Math.exp(-n * deltaTime)) * this.to +
                Math.exp(-n * deltaTime) * this.value;
            if (Math.round(this.value) === this.to) {
                this.value = this.to;
                this.stop();
                this.onUpdate?.(this.value, true);
                return;
            }
        } else {
            this.currentTime += deltaTime;
            const progress = clamp(0, this.currentTime / this.duration, 1);
            const easedProgress = this.easing(progress);
            this.value = this.from + (this.to - this.from) * easedProgress;
            if (progress >= 1) {
                this.stop();
                this.onUpdate?.(this.value, true);
                return;
            }
        }

        this.onUpdate?.(this.value, false);
    }

    stop() {
        this.isRunning = false;
    }

    fromTo(
        from,
        to,
        { lerp = 0.1, duration = 1, easing = (t) => t, onStart, onUpdate }
    ) {
        this.from = this.value = from;
        this.to = to;
        this.lerp = lerp;
        this.duration = duration;
        this.easing = easing;
        this.currentTime = 0;
        this.isRunning = true;
        this.onUpdate = onUpdate;
        onStart?.();
    }
}

class Dimensions {
    constructor({ wrapper, content, autoResize = true }) {
        this.wrapper = wrapper;
        this.content = content;

        if (autoResize) {
            this.resize = this.resize.bind(this);
            this.debouncedResize = debounce(this.resize, 250);
            window.addEventListener("resize", this.debouncedResize);
        }

        this.resize();
    }

    destroy() {
        window.removeEventListener("resize", this.debouncedResize);
    }

    resize() {
        if (this.wrapper === window) {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        } else {
            this.width = this.wrapper.clientWidth;
            this.height = this.wrapper.clientHeight;
        }

        if (this.wrapper === window) {
            this.scrollHeight = this.content.scrollHeight;
            this.scrollWidth = this.content.scrollWidth;
        } else {
            this.scrollHeight = this.wrapper.scrollHeight;
            this.scrollWidth = this.wrapper.scrollWidth;
        }
    }

    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
        };
    }
}

class Emitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        (this.events[event] ||= []).push(callback);
        return () => this.off(event, callback);
    }

    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(
                (cb) => cb !== callback
            );
        }
    }

    emit(event, ...args) {
        (this.events[event] || []).forEach((cb) => cb(...args));
    }

    destroy() {
        this.events = {};
    }
}

class VirtualScroll {
    constructor(
        element,
        { wheelMultiplier = 1, touchMultiplier = 2, normalizeWheel = false }
    ) {
        this.element = element;
        this.wheelMultiplier = wheelMultiplier;
        this.touchMultiplier = touchMultiplier;
        this.normalizeWheel = normalizeWheel;
        this.touchStart = { x: 0, y: 0 };
        this.emitter = new Emitter();

        this.onWheel = this.onWheel.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);

        element.addEventListener("wheel", this.onWheel, { passive: false });
        element.addEventListener("touchstart", this.onTouchStart, {
            passive: false,
        });
        element.addEventListener("touchmove", this.onTouchMove, {
            passive: false,
        });
    }

    on(event, callback) {
        return this.emitter.on(event, callback);
    }

    destroy() {
        this.emitter.destroy();
        this.element.removeEventListener("wheel", this.onWheel);
        this.element.removeEventListener("touchstart", this.onTouchStart);
        this.element.removeEventListener("touchmove", this.onTouchMove);
    }

    onWheel(event) {
        let { deltaX, deltaY } = event;
        if (this.normalizeWheel) {
            deltaX = clamp(-100, deltaX, 100);
            deltaY = clamp(-100, deltaY, 100);
        }
        this.emitter.emit("scroll", {
            deltaX: deltaX * this.wheelMultiplier,
            deltaY: deltaY * this.wheelMultiplier,
            event,
        });
    }

    onTouchStart(event) {
        const touch = event.touches[0];
        this.touchStart.x = touch.clientX;
        this.touchStart.y = touch.clientY;
    }

    onTouchMove(event) {
        const touch = event.touches[0];
        const deltaX =
            -(touch.clientX - this.touchStart.x) * this.touchMultiplier;
        const deltaY =
            -(touch.clientY - this.touchStart.y) * this.touchMultiplier;

        this.touchStart.x = touch.clientX;
        this.touchStart.y = touch.clientY;

        this.emitter.emit("scroll", { deltaX, deltaY, event });
    }
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

export default class Lenis {
    constructor(options = {}) {
        const defaults = {
            wrapper: window,
            content: document.documentElement,
            smoothWheel: true,
            syncTouch: false,
            lerp: 0.1,
            touchMultiplier: 1,
            wheelMultiplier: 1,
            normalizeWheel: false,
            autoResize: true,
            orientation: "vertical",
        };
        this.options = { ...defaults, ...options };

        this.emitter = new Emitter();
        this.animate = new Animate();
        this.dimensions = new Dimensions({
            wrapper: this.options.wrapper,
            content: this.options.content,
            autoResize: this.options.autoResize,
        });

        this.scroll = 0;
        this.velocity = 0;
        this.isScrolling = false;
        this.isSmooth = this.options.smoothWheel;

        this.virtualScroll = new VirtualScroll(this.options.wrapper, {
            touchMultiplier: this.options.touchMultiplier,
            wheelMultiplier: this.options.wheelMultiplier,
            normalizeWheel: this.options.normalizeWheel,
        });

        this.virtualScroll.on("scroll", this.onVirtualScroll.bind(this));
    }

    onVirtualScroll({ deltaX, deltaY }) {
        const delta =
            this.options.orientation === "horizontal" ? deltaX : deltaY;
        this.scroll += delta;
        this.scroll = clamp(0, this.scroll, this.limit);
        this.emitter.emit("scroll", this.scroll);
    }

    get limit() {
        const { x, y } = this.dimensions.limit;
        return this.options.orientation === "horizontal" ? x : y;
    }

    destroy() {
        this.emitter.destroy();
        this.animate.stop();
        this.virtualScroll.destroy();
        this.dimensions.destroy();
    }
}