import { Market } from '../components/market/market';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.js-market').forEach((el) => {
        new Market(el);
    });
});
