export class Switcher {
    /**
     * @param {HTMLElement} el
     */
    constructor(el) {
        this.el = el;
        this.el.Switcher = this;

        this.root = this.el;

        this.userLang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;

        this.init();
    }

    init() {
        this.el.value = document.documentElement.lang || 'en';


        if (!localStorage.getItem('local')) {
            if (document.location.pathname === '/') {
                this.setLocal(this.userLang ? this.userLang.substring(0, 2) : 'en');
            } else {
                localStorage.setItem('local', this.el.value);
            }
        }

        if (document.location.pathname === '/404.html' || document.location.pathname === '/search.html') {
            const link = document.querySelectorAll('.js-link-home');

            document.body.classList.add('page_hide-local');

            if (localStorage.getItem('local') !== 'en') {
                link.forEach(item => item.href = document.location.origin + '/' + localStorage.getItem('local') + '/index.html');
            } else {
                link.forEach(item => item.href = document.location.origin + '/index.html');
            }
        }

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

        localStorage.setItem('local', local);
    }
}
