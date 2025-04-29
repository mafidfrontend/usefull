const DEFAULT_OPTIONS = {
    selector: ".odometer",
    format: "(,ddd)",
    duration: 2000,
    theme: "default",
    animation: "slide",
    auto: true,
};

const FORMAT_REGEX = /^\(?([^)]*)\)?(?:(.)(d+))?$/;
export default class Odometer {
    constructor(options = {}) {
        this.options = { ...DEFAULT_OPTIONS, ...options };
        this.el = this.options.el;
        if (!this.el) throw new Error("Odometer: Element is required");

        if (this.el.odometer) return this.el.odometer;
        this.el.odometer = this;

        this.value = this.cleanValue(
            this.options.value || this.el.innerText || this.el.textContent || 0
        );
        this.format = this.parseFormat(this.options.format);
        this.inside = document.createElement("div");
        this.inside.className = "odometer-inside";
        this.el.innerHTML = "";
        this.el.appendChild(this.inside);

        this.digits = [];
        this.render();

        if (MutationObserver) {
            this.observer = new MutationObserver(() => {
                const value = this.el.innerText || this.el.textContent;
                this.update(value);
            });
            this.startObserving();
        }
    }

    parseFormat(format) {
        const match = FORMAT_REGEX.exec(format);
        if (!match) throw new Error("Odometer: Unparsable format");
        const [repeating, radix, decimals] = match;
        return {
            repeating: repeating || "",
            radix: radix || ".",
            precision: decimals ? decimals.length : 0,
        };
    }

    cleanValue(value) {
        if (typeof value === "string") {
            value = parseFloat(value.replace(/[^\d.-]/g, "")) || 0;
        }
        return this.round(value, this.format.precision);
    }

    round(value, precision) {
        const factor = Math.pow(10, precision);
        return Math.round(value * factor) / factor;
    }

    startObserving() {
        if (this.observer) {
            this.observer.observe(this.el, { childList: true, subtree: true });
        }
    }

    stopObserving() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}