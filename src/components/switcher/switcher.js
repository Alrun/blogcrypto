export class Switcher {
    /**
     * @param {HTMLElement} el
     */
    constructor(el) {
        this.el = el;
        this.el.Switcher = this;

        this.root = this.el;

        this.init();
    }

    init() {
        this.el.value = document.documentElement.lang;
        this.setListeners();
    }

    setListeners() {
        if (this.root) {
            this.root.addEventListener('change', e => this.setLocal(e.target.value));
        }
    }

    setLocal(local) {
        if (local !== 'en') {
            document.location.href = document.location.origin + '/' + local + '/index.html';
        } else {
            document.location.href = document.location.origin + '/index.html';
        }
    }
}
