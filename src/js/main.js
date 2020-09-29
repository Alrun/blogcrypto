import { Market } from '../components/market/market';
import { Switcher } from '../components/switcher/switcher';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.js-market').forEach((el) => {
        new Market(el);
    });

    document.querySelectorAll('.js-switcher').forEach((el) => {
        new Switcher(el);
    });
});

