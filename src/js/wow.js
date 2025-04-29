class WOW {
    constructor(options = {}) {
        this.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
            callback: null,
        };
        this.config = { ...this.defaults, ...options };
        this.scrolled = true;
        this.boxes = [];
        this.all = [];
        this.init();
    }

    init() {
        this.element = window.document.documentElement;
        if (["interactive", "complete"].includes(document.readyState)) {
            this.start();
        } else {
            document.addEventListener(
                "DOMContentLoaded",
                this.start.bind(this)
            );
        }
        this.finished = [];
    }

    start() {
        this.stopped = false;
        this.boxes = [
            ...this.element.querySelectorAll(`.${this.config.boxClass}`),
        ];
        this.all = [...this.boxes];

        if (this.boxes.length) {
            if (this.disabled()) {
                this.resetStyle();
            } else {
                this.boxes.forEach((box) => this.applyStyle(box, true));
            }
        }

        if (!this.disabled()) {
            window.addEventListener("scroll", this.scrollHandler.bind(this));
            window.addEventListener("resize", this.scrollHandler.bind(this));
            this.interval = setInterval(this.scrollCallback.bind(this), 50);
        }

        if (this.config.live && window.MutationObserver) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => this.doSync(node));
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    stop() {
        this.stopped = true;
        window.removeEventListener("scroll", this.scrollHandler.bind(this));
        window.removeEventListener("resize", this.scrollHandler.bind(this));
        if (this.interval) clearInterval(this.interval);
    }

    sync() {
        this.doSync(this.element);
    }

    doSync(element = this.element) {
        if (element.nodeType !== 1) return;
        const boxes = [...element.querySelectorAll(`.${this.config.boxClass}`)];
        boxes.forEach((box) => {
            if (!this.all.includes(box)) {
                this.boxes.push(box);
                this.all.push(box);
                if (!this.stopped && !this.disabled()) {
                    this.applyStyle(box, true);
                }
            }
        });
    }

    show(box) {
        this.applyStyle(box);
        box.classList.add(this.config.animateClass);
        if (this.config.callback) {
            this.config.callback(box);
        }
        this.emitEvent(box);
        [
            "animationend",
            "oanimationend",
            "webkitAnimationEnd",
            "MSAnimationEnd",
        ].forEach((event) => {
            box.addEventListener(event, this.resetAnimation.bind(this));
        });
    }

    applyStyle(box, hidden) {
        const duration = box.getAttribute("data-wow-duration");
        const delay = box.getAttribute("data-wow-delay");
        const iteration = box.getAttribute("data-wow-iteration");
        this.animate(() => {
            this.customStyle(box, hidden, duration, delay, iteration);
        });
    }

    animate(callback) {
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(callback);
        } else {
            callback();
        }
    }

    resetStyle() {
        this.boxes.forEach((box) => {
            box.style.visibility = "visible";
        });
    }

    resetAnimation(event) {
        if (event.type.toLowerCase().includes("animationend")) {
            event.target.classList.remove(this.config.animateClass);
        }
    }

    customStyle(box, hidden, duration, delay, iteration) {
        if (hidden) box.style.visibility = "hidden";
        else box.style.visibility = "visible";
        if (duration) box.style.animationDuration = duration;
        if (delay) box.style.animationDelay = delay;
        if (iteration) box.style.animationIterationCount = iteration;
    }

    scrollHandler() {
        this.scrolled = true;
    }

    scrollCallback() {
        if (!this.scrolled) return;
        this.scrolled = false;

        this.boxes = this.boxes.filter((box) => {
            if (this.isVisible(box)) {
                this.show(box);
                return false;
            }
            return true;
        });

        if (!this.boxes.length && !this.config.live) {
            this.stop();
        }
    }

    offsetTop(element) {
        let top = 0;
        while (element) {
            top += element.offsetTop;
            element = element.offsetParent;
        }
        return top;
    }

    isVisible(box) {
        const offset =
            parseInt(box.getAttribute("data-wow-offset")) || this.config.offset;
        const viewTop = window.pageYOffset;
        const viewBottom =
            viewTop +
            Math.min(this.element.clientHeight, window.innerHeight) -
            offset;
        const top = this.offsetTop(box);
        const bottom = top + box.clientHeight;
        return viewBottom >= top && bottom >= viewTop;
    }

    emitEvent(box) {
        const event = new Event(this.config.boxClass);
        box.dispatchEvent(event);
    }

    disabled() {
        return (
            !this.config.mobile &&
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        );
    }
}

export default WOW;