!function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i});
    }, n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(t, '__esModule', {value: !0});
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t) for (var o in t) n.d(i, o, function (e) {
            return t[e];
        }.bind(null, o));
        return i;
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default;
        } : function () {
            return t;
        };
        return n.d(e, 'a', e), e;
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = '', n(n.s = 1);
}([function (t, e, n) {
    'use strict';
    t.exports = function (t) {
        const e = n(7), i = t ? t.preset : 'ru',
            o = {'а': 'a', 'б': 'b', 'в': 'v', 'д': 'd', 'з': 'z', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'ь': ''};
        let r;
        'ru' === i ? Object.assign(o, {'г': 'g', 'и': 'i', 'ъ': '', 'ы': 'i', 'э': 'e'}) : 'uk' === i && Object.assign(o, {
            'г': 'h',
            'ґ': 'g',
            'е': 'e',
            'и': 'y',
            'і': 'i',
            '\'': '',
            '’': '',
            'ʼ': ''
        }), 'ru' === i ? r = Object.assign(e(o), {i: 'и', '': ''}) : 'uk' === i && (r = Object.assign(e(o), {'': ''}));
        const s = 'ru' === i ? {'е': 'ye'} : {'є': 'ye', 'ї': 'yi'}, a = {'ё': 'yo', 'ж': 'zh', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ю': 'yu', 'я': 'ya'},
            l = Object.assign({}, a, s), c = Object.assign(e(l)), u = Object.assign(o, l), f = Object.assign({}, o, {'й': 'i'});
        let h;
        'ru' === i ? Object.assign(f, {'е': 'e'}) : 'uk' === i && Object.assign(f, {'ї': 'i'}), 'ru' === i ? h = Object.assign(e(o), {
            i: 'и',
            y: 'ы',
            e: 'е',
            '': ''
        }) : 'uk' === i && (h = Object.assign(e(o), {'': ''}));
        let d = {};
        'uk' === i && (d = {'є': 'ie', 'ю': 'iu', 'я': 'ia'});
        const p = Object.assign(a, d), g = Object.assign(e(p)), m = Object.assign(f, p);
        return {
            transform: function (t, e) {
                if (!t) return '';
                const n = t.normalize();
                let o = '', r = !1;
                for (let t = 0; t < n.length; t++) {
                    const s = n[t] === n[t].toUpperCase();
                    let a, l = n[t].toLowerCase();
                    ' ' !== l ? ('uk' === i && 'зг' === n.slice(t - 1, t + 1).toLowerCase() ? a = 'gh' : 0 === t || r ? (a = u[l], r = !1) : a = m[l], void 0 === a ? o += s ? l.toUpperCase() : l : s ? a.length > 1 ? o += a[0].toUpperCase() + a.slice(1) : o += a.toUpperCase() : o += a) : (o += e || ' ', r = !0);
                }
                return o;
            }, reverse: function (t, e) {
                if (!t) return '';
                const n = t.normalize();
                let i = '', o = !1, s = 0;
                for (; s < n.length;) {
                    const t = n[s] === n[s].toUpperCase();
                    let a, l = n[s].toLowerCase(), u = s;
                    if (' ' === l || l === e) {
                        i += ' ', o = !0, s++;
                        continue;
                    }
                    let f = n.slice(s, s + 2).toLowerCase();
                    0 === s || o ? (a = c[f], a ? s += 2 : (a = r[l], s++), o = !1) : (a = g[f], a ? s += 2 : (a = h[l], s++)), 'shch' === n.slice(u, u + 4).toLowerCase() ? (a = 'щ', s = u + 4) : 'zgh' === n.slice(u - 1, u + 2).toLowerCase() && (a = 'г', s = u + 2), void 0 === a ? i += t ? l.toUpperCase() : l : t ? a.length > 1 ? i += a[0].toUpperCase() + a.slice(1) : i += a.toUpperCase() : i += a;
                }
                return i;
            }
        };
    };
}, function (t, e, n) {
    'use strict';
    n.r(e);
    n(2), n(4), n(5), n(6);
    var i = n(0), o = n.n(i);
    console.log(o()().transform('Как купить биткоин и любую другую криптовалюту?', '-').toLowerCase());
}, function (t, e, n) {
    (function (e) {
        /*!
  * Bootstrap v5.0.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
        t.exports = function () {
            'use strict';

            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function n(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e;
            }

            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}) : t[e] = n, t;
            }

            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }))), n.push.apply(n, i);
                }
                return n;
            }

            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach((function (e) {
                        i(t, e, n[e]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }));
                }
                return t;
            }

            var s, a, l, c, u = function (t) {
                    do {
                        t += Math.floor(1e6 * Math.random());
                    } while (document.getElementById(t));
                    return t;
                }, f = function (t) {
                    var e = t.getAttribute('data-target');
                    if (!e || '#' === e) {
                        var n = t.getAttribute('href');
                        e = n && '#' !== n ? n.trim() : null;
                    }
                    return e;
                }, h = function (t) {
                    var e = f(t);
                    return e && document.querySelector(e) ? e : null;
                }, d = function (t) {
                    var e = f(t);
                    return e ? document.querySelector(e) : null;
                }, p = function (t) {
                    if (!t) return 0;
                    var e = window.getComputedStyle(t), n = e.transitionDuration, i = e.transitionDelay, o = parseFloat(n), r = parseFloat(i);
                    return o || r ? (n = n.split(',')[0], i = i.split(',')[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
                }, g = function (t) {
                    t.dispatchEvent(new Event('transitionend'));
                }, m = function (t) {
                    return (t[0] || t).nodeType;
                }, v = function (t, e) {
                    var n = !1, i = e + 5;
                    t.addEventListener('transitionend', (function e() {
                        n = !0, t.removeEventListener('transitionend', e);
                    })), setTimeout((function () {
                        n || g(t);
                    }), i);
                }, _ = function (t, e, n) {
                    Object.keys(n).forEach((function (i) {
                        var o, r = n[i], s = e[i], a = s && m(s) ? 'element' : null == (o = s) ? '' + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".');
                    }));
                }, b = function (t) {
                    if (!t) return !1;
                    if (t.style && t.parentNode && t.parentNode.style) {
                        var e = getComputedStyle(t), n = getComputedStyle(t.parentNode);
                        return 'none' !== e.display && 'none' !== n.display && 'hidden' !== e.visibility;
                    }
                    return !1;
                }, y = function () {
                    return function () {
                    };
                }, w = function (t) {
                    return t.offsetHeight;
                }, E = function () {
                    var t = window.jQuery;
                    return t && !document.body.hasAttribute('data-no-jquery') ? t : null;
                }, T = (s = {}, a = 1, {
                    set: function (t, e, n) {
                        void 0 === t.key && (t.key = {key: e, id: a}, a++), s[t.key.id] = n;
                    }, get: function (t, e) {
                        if (!t || void 0 === t.key) return null;
                        var n = t.key;
                        return n.key === e ? s[n.id] : null;
                    }, delete: function (t, e) {
                        if (void 0 !== t.key) {
                            var n = t.key;
                            n.key === e && (delete s[n.id], delete t.key);
                        }
                    }
                }), k = function (t, e, n) {
                    T.set(t, e, n);
                }, L = function (t, e) {
                    return T.get(t, e);
                }, O = function (t, e) {
                    T.delete(t, e);
                }, C = Element.prototype.querySelectorAll, A = Element.prototype.querySelector,
                S = (l = new CustomEvent('Bootstrap', {cancelable: !0}), (c = document.createElement('div')).addEventListener('Bootstrap', (function () {
                    return null;
                })), l.preventDefault(), c.dispatchEvent(l), l.defaultPrevented), D = /:scope\b/;
            (function () {
                var t = document.createElement('div');
                try {
                    t.querySelectorAll(':scope *');
                } catch (t) {
                    return !1;
                }
                return !0;
            })() || (C = function (t) {
                if (!D.test(t)) return this.querySelectorAll(t);
                var e = Boolean(this.id);
                e || (this.id = u('scope'));
                var n = null;
                try {
                    t = t.replace(D, '#' + this.id), n = this.querySelectorAll(t);
                } finally {
                    e || this.removeAttribute('id');
                }
                return n;
            }, A = function (t) {
                if (!D.test(t)) return this.querySelector(t);
                var e = C.call(this, t);
                return void 0 !== e[0] ? e[0] : null;
            });
            var x = E(), j = /[^.]*(?=\..*)\.|.*/, N = /\..*/, I = /::\d+$/, P = {}, M = 1, H = {mouseenter: 'mouseover', mouseleave: 'mouseout'},
                B = ['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll'];

            function R(t, e) {
                return e && e + '::' + M++ || t.uidEvent || M++;
            }

            function F(t) {
                var e = R(t);
                return t.uidEvent = e, P[e] = P[e] || {}, P[e];
            }

            function U(t, e, n) {
                void 0 === n && (n = null);
                for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
                    var s = t[i[o]];
                    if (s.originalHandler === e && s.delegationSelector === n) return s;
                }
                return null;
            }

            function W(t, e, n) {
                var i = 'string' == typeof e, o = i ? n : e, r = t.replace(N, ''), s = H[r];
                return s && (r = s), B.indexOf(r) > -1 || (r = t), [i, o, r];
            }

            function Q(t, e, n, i, o) {
                if ('string' == typeof e && t) {
                    n || (n = i, i = null);
                    var r = W(e, n, i), s = r[0], a = r[1], l = r[2], c = F(t), u = c[l] || (c[l] = {}), f = U(u, a, s ? n : null);
                    if (f) f.oneOff = f.oneOff && o; else {
                        var h = R(a, e.replace(j, '')), d = s ? function (t, e, n) {
                            return function i(o) {
                                for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode) for (var a = r.length; a--;) if (r[a] === s) return i.oneOff && z.off(t, o.type, n), n.apply(s, [o]);
                                return null;
                            };
                        }(t, n, i) : function (t, e) {
                            return function n(i) {
                                return n.oneOff && z.off(t, i.type, e), e.apply(t, [i]);
                            };
                        }(t, n);
                        d.delegationSelector = s ? n : null, d.originalHandler = a, d.oneOff = o, d.uidEvent = h, u[h] = d, t.addEventListener(l, d, s);
                    }
                }
            }

            function V(t, e, n, i, o) {
                var r = U(e[n], i, o);
                r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent]);
            }

            var z = {
                on: function (t, e, n, i) {
                    Q(t, e, n, i, !1);
                }, one: function (t, e, n, i) {
                    Q(t, e, n, i, !0);
                }, off: function (t, e, n, i) {
                    if ('string' == typeof e && t) {
                        var o = W(e, n, i), r = o[0], s = o[1], a = o[2], l = a !== e, c = F(t), u = '.' === e.charAt(0);
                        if (void 0 === s) {
                            u && Object.keys(c).forEach((function (n) {
                                !function (t, e, n, i) {
                                    var o = e[n] || {};
                                    Object.keys(o).forEach((function (r) {
                                        if (r.indexOf(i) > -1) {
                                            var s = o[r];
                                            V(t, e, n, s.originalHandler, s.delegationSelector);
                                        }
                                    }));
                                }(t, c, n, e.slice(1));
                            }));
                            var f = c[a] || {};
                            Object.keys(f).forEach((function (n) {
                                var i = n.replace(I, '');
                                if (!l || e.indexOf(i) > -1) {
                                    var o = f[n];
                                    V(t, c, a, o.originalHandler, o.delegationSelector);
                                }
                            }));
                        } else {
                            if (!c || !c[a]) return;
                            V(t, c, a, s, r ? n : null);
                        }
                    }
                }, trigger: function (t, e, n) {
                    if ('string' != typeof e || !t) return null;
                    var i, o = e.replace(N, ''), r = e !== o, s = B.indexOf(o) > -1, a = !0, l = !0, c = !1, u = null;
                    return r && x && (i = x.Event(e, n), x(t).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), c = i.isDefaultPrevented()), s ? (u = document.createEvent('HTMLEvents')).initEvent(o, a, !0) : u = new CustomEvent(e, {
                        bubbles: a,
                        cancelable: !0
                    }), void 0 !== n && Object.keys(n).forEach((function (t) {
                        Object.defineProperty(u, t, {
                            get: function () {
                                return n[t];
                            }
                        });
                    })), c && (u.preventDefault(), S || Object.defineProperty(u, 'defaultPrevented', {
                        get: function () {
                            return !0;
                        }
                    })), l && t.dispatchEvent(u), u.defaultPrevented && void 0 !== i && i.preventDefault(), u;
                }
            }, q = 'alert', Y = function () {
                function t(t) {
                    this._element = t, this._element && k(t, 'bs.alert', this);
                }

                var e = t.prototype;
                return e.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t));
                    var n = this._triggerCloseEvent(e);
                    null === n || n.defaultPrevented || this._removeElement(e);
                }, e.dispose = function () {
                    O(this._element, 'bs.alert'), this._element = null;
                }, e._getRootElement = function (t) {
                    return d(t) || t.closest('.alert');
                }, e._triggerCloseEvent = function (t) {
                    return z.trigger(t, 'close.bs.alert');
                }, e._removeElement = function (t) {
                    var e = this;
                    if (t.classList.remove('show'), t.classList.contains('fade')) {
                        var n = p(t);
                        z.one(t, 'transitionend', (function () {
                            return e._destroyElement(t);
                        })), v(t, n);
                    } else this._destroyElement(t);
                }, e._destroyElement = function (t) {
                    t.parentNode && t.parentNode.removeChild(t), z.trigger(t, 'closed.bs.alert');
                }, t.jQueryInterface = function (e) {
                    return this.each((function () {
                        var n = L(this, 'bs.alert');
                        n || (n = new t(this)), 'close' === e && n[e](this);
                    }));
                }, t.handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }, t.getInstance = function (t) {
                    return L(t, 'bs.alert');
                }, n(t, null, [{
                    key: 'VERSION', get: function () {
                        return '5.0.0-alpha1';
                    }
                }]), t;
            }();
            z.on(document, 'click.bs.alert.data-api', '[data-dismiss="alert"]', Y.handleDismiss(new Y));
            var K = E();
            if (K) {
                var X = K.fn[q];
                K.fn[q] = Y.jQueryInterface, K.fn[q].Constructor = Y, K.fn[q].noConflict = function () {
                    return K.fn[q] = X, Y.jQueryInterface;
                };
            }
            var G = function () {
                function t(t) {
                    this._element = t, k(t, 'bs.button', this);
                }

                var e = t.prototype;
                return e.toggle = function () {
                    this._element.setAttribute('aria-pressed', this._element.classList.toggle('active'));
                }, e.dispose = function () {
                    O(this._element, 'bs.button'), this._element = null;
                }, t.jQueryInterface = function (e) {
                    return this.each((function () {
                        var n = L(this, 'bs.button');
                        n || (n = new t(this)), 'toggle' === e && n[e]();
                    }));
                }, t.getInstance = function (t) {
                    return L(t, 'bs.button');
                }, n(t, null, [{
                    key: 'VERSION', get: function () {
                        return '5.0.0-alpha1';
                    }
                }]), t;
            }();
            z.on(document, 'click.bs.button.data-api', '[data-toggle="button"]', (function (t) {
                t.preventDefault();
                var e = t.target.closest('[data-toggle="button"]'), n = L(e, 'bs.button');
                n || (n = new G(e)), n.toggle();
            }));
            var $ = E();
            if ($) {
                var Z = $.fn.button;
                $.fn.button = G.jQueryInterface, $.fn.button.Constructor = G, $.fn.button.noConflict = function () {
                    return $.fn.button = Z, G.jQueryInterface;
                };
            }

            function J(t) {
                return 'true' === t || 'false' !== t && (t === Number(t).toString() ? Number(t) : '' === t || 'null' === t ? null : t);
            }

            function tt(t) {
                return t.replace(/[A-Z]/g, (function (t) {
                    return '-' + t.toLowerCase();
                }));
            }

            var et = {
                    setDataAttribute: function (t, e, n) {
                        t.setAttribute('data-' + tt(e), n);
                    }, removeDataAttribute: function (t, e) {
                        t.removeAttribute('data-' + tt(e));
                    }, getDataAttributes: function (t) {
                        if (!t) return {};
                        var e = r({}, t.dataset);
                        return Object.keys(e).forEach((function (t) {
                            e[t] = J(e[t]);
                        })), e;
                    }, getDataAttribute: function (t, e) {
                        return J(t.getAttribute('data-' + tt(e)));
                    }, offset: function (t) {
                        var e = t.getBoundingClientRect();
                        return {top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft};
                    }, position: function (t) {
                        return {top: t.offsetTop, left: t.offsetLeft};
                    }, toggleClass: function (t, e) {
                        t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e));
                    }
                }, nt = {
                    matches: function (t, e) {
                        return t.matches(e);
                    }, find: function (t, e) {
                        var n;
                        return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, C.call(e, t));
                    }, findOne: function (t, e) {
                        return void 0 === e && (e = document.documentElement), A.call(e, t);
                    }, children: function (t, e) {
                        var n;
                        return (n = []).concat.apply(n, t.children).filter((function (t) {
                            return t.matches(e);
                        }));
                    }, parents: function (t, e) {
                        for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.parentNode;
                        return n;
                    }, prev: function (t, e) {
                        for (var n = t.previousElementSibling; n;) {
                            if (n.matches(e)) return [n];
                            n = n.previousElementSibling;
                        }
                        return [];
                    }, next: function (t, e) {
                        for (var n = t.nextElementSibling; n;) {
                            if (this.matches(n, e)) return [n];
                            n = n.nextElementSibling;
                        }
                        return [];
                    }
                }, it = 'carousel', ot = {interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0},
                rt = {interval: '(number|boolean)', keyboard: 'boolean', slide: '(boolean|string)', pause: '(string|boolean)', wrap: 'boolean', touch: 'boolean'}, st = {TOUCH: 'touch', PEN: 'pen'},
                at = function () {
                    function t(t, e) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = nt.findOne('.carousel-indicators', this._element), this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners(), k(t, 'bs.carousel', this);
                    }

                    var e = t.prototype;
                    return e.next = function () {
                        this._isSliding || this._slide('next');
                    }, e.nextWhenVisible = function () {
                        !document.hidden && b(this._element) && this.next();
                    }, e.prev = function () {
                        this._isSliding || this._slide('prev');
                    }, e.pause = function (t) {
                        t || (this._isPaused = !0), nt.findOne('.carousel-item-next, .carousel-item-prev', this._element) && (g(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
                    }, e.cycle = function (t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                    }, e.to = function (t) {
                        var e = this;
                        this._activeElement = nt.findOne('.active.carousel-item', this._element);
                        var n = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) z.one(this._element, 'slid.bs.carousel', (function () {
                            return e.to(t);
                        })); else {
                            if (n === t) return this.pause(), void this.cycle();
                            var i = t > n ? 'next' : 'prev';
                            this._slide(i, this._items[t]);
                        }
                    }, e.dispose = function () {
                        z.off(this._element, '.bs.carousel'), O(this._element, 'bs.carousel'), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
                    }, e._getConfig = function (t) {
                        return t = r(r({}, ot), t), _(it, t, rt), t;
                    }, e._handleSwipe = function () {
                        var t = Math.abs(this.touchDeltaX);
                        if (!(t <= 40)) {
                            var e = t / this.touchDeltaX;
                            this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
                        }
                    }, e._addEventListeners = function () {
                        var t = this;
                        this._config.keyboard && z.on(this._element, 'keydown.bs.carousel', (function (e) {
                            return t._keydown(e);
                        })), 'hover' === this._config.pause && (z.on(this._element, 'mouseenter.bs.carousel', (function (e) {
                            return t.pause(e);
                        })), z.on(this._element, 'mouseleave.bs.carousel', (function (e) {
                            return t.cycle(e);
                        }))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
                    }, e._addTouchEventListeners = function () {
                        var t = this, e = function (e) {
                            t._pointerEvent && st[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX);
                        }, n = function (e) {
                            t._pointerEvent && st[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), 'hover' === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
                                return t.cycle(e);
                            }), 500 + t._config.interval));
                        };
                        nt.find('.carousel-item img', this._element).forEach((function (t) {
                            z.on(t, 'dragstart.bs.carousel', (function (t) {
                                return t.preventDefault();
                            }));
                        })), this._pointerEvent ? (z.on(this._element, 'pointerdown.bs.carousel', (function (t) {
                            return e(t);
                        })), z.on(this._element, 'pointerup.bs.carousel', (function (t) {
                            return n(t);
                        })), this._element.classList.add('pointer-event')) : (z.on(this._element, 'touchstart.bs.carousel', (function (t) {
                            return e(t);
                        })), z.on(this._element, 'touchmove.bs.carousel', (function (e) {
                            return function (e) {
                                e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX;
                            }(e);
                        })), z.on(this._element, 'touchend.bs.carousel', (function (t) {
                            return n(t);
                        })));
                    }, e._keydown = function (t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
                            case'ArrowLeft':
                                t.preventDefault(), this.prev();
                                break;
                            case'ArrowRight':
                                t.preventDefault(), this.next();
                        }
                    }, e._getItemIndex = function (t) {
                        return this._items = t && t.parentNode ? nt.find('.carousel-item', t.parentNode) : [], this._items.indexOf(t);
                    }, e._getItemByDirection = function (t, e) {
                        var n = 'next' === t, i = 'prev' === t, o = this._getItemIndex(e), r = this._items.length - 1;
                        if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                        var s = (o + ('prev' === t ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                    }, e._triggerSlideEvent = function (t, e) {
                        var n = this._getItemIndex(t), i = this._getItemIndex(nt.findOne('.active.carousel-item', this._element));
                        return z.trigger(this._element, 'slide.bs.carousel', {relatedTarget: t, direction: e, from: i, to: n});
                    }, e._setActiveIndicatorElement = function (t) {
                        if (this._indicatorsElement) {
                            for (var e = nt.find('.active', this._indicatorsElement), n = 0; n < e.length; n++) e[n].classList.remove('active');
                            var i = this._indicatorsElement.children[this._getItemIndex(t)];
                            i && i.classList.add('active');
                        }
                    }, e._slide = function (t, e) {
                        var n, i, o, r = this, s = nt.findOne('.active.carousel-item', this._element), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s),
                            c = this._getItemIndex(l), u = Boolean(this._interval);
                        if ('next' === t ? (n = 'carousel-item-left', i = 'carousel-item-next', o = 'left') : (n = 'carousel-item-right', i = 'carousel-item-prev', o = 'right'), l && l.classList.contains('active')) this._isSliding = !1; else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
                            if (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), this._element.classList.contains('slide')) {
                                l.classList.add(i), w(l), s.classList.add(n), l.classList.add(n);
                                var f = parseInt(l.getAttribute('data-interval'), 10);
                                f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                                var h = p(s);
                                z.one(s, 'transitionend', (function () {
                                    l.classList.remove(n, i), l.classList.add('active'), s.classList.remove('active', i, n), r._isSliding = !1, setTimeout((function () {
                                        z.trigger(r._element, 'slid.bs.carousel', {relatedTarget: l, direction: o, from: a, to: c});
                                    }), 0);
                                })), v(s, h);
                            } else s.classList.remove('active'), l.classList.add('active'), this._isSliding = !1, z.trigger(this._element, 'slid.bs.carousel', {
                                relatedTarget: l,
                                direction: o,
                                from: a,
                                to: c
                            });
                            u && this.cycle();
                        }
                    }, t.carouselInterface = function (e, n) {
                        var i = L(e, 'bs.carousel'), o = r(r({}, ot), et.getDataAttributes(e));
                        'object' == typeof n && (o = r(r({}, o), n));
                        var s = 'string' == typeof n ? n : o.slide;
                        if (i || (i = new t(e, o)), 'number' == typeof n) i.to(n); else if ('string' == typeof s) {
                            if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                            i[s]();
                        } else o.interval && o.ride && (i.pause(), i.cycle());
                    }, t.jQueryInterface = function (e) {
                        return this.each((function () {
                            t.carouselInterface(this, e);
                        }));
                    }, t.dataApiClickHandler = function (e) {
                        var n = d(this);
                        if (n && n.classList.contains('carousel')) {
                            var i = r(r({}, et.getDataAttributes(n)), et.getDataAttributes(this)), o = this.getAttribute('data-slide-to');
                            o && (i.interval = !1), t.carouselInterface(n, i), o && L(n, 'bs.carousel').to(o), e.preventDefault();
                        }
                    }, t.getInstance = function (t) {
                        return L(t, 'bs.carousel');
                    }, n(t, null, [{
                        key: 'VERSION', get: function () {
                            return '5.0.0-alpha1';
                        }
                    }, {
                        key: 'Default', get: function () {
                            return ot;
                        }
                    }]), t;
                }();
            z.on(document, 'click.bs.carousel.data-api', '[data-slide], [data-slide-to]', at.dataApiClickHandler), z.on(window, 'load.bs.carousel.data-api', (function () {
                for (var t = nt.find('[data-ride="carousel"]'), e = 0, n = t.length; e < n; e++) at.carouselInterface(t[e], L(t[e], 'bs.carousel'));
            }));
            var lt = E();
            if (lt) {
                var ct = lt.fn[it];
                lt.fn[it] = at.jQueryInterface, lt.fn[it].Constructor = at, lt.fn[it].noConflict = function () {
                    return lt.fn[it] = ct, at.jQueryInterface;
                };
            }
            var ut = 'collapse', ft = {toggle: !0, parent: ''}, ht = {toggle: 'boolean', parent: '(string|element)'}, dt = function () {
                function t(t, e) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = nt.find('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]');
                    for (var n = nt.find('[data-toggle="collapse"]'), i = 0, o = n.length; i < o; i++) {
                        var r = n[i], s = h(r), a = nt.find(s).filter((function (e) {
                            return e === t;
                        }));
                        null !== s && a.length && (this._selector = s, this._triggerArray.push(r));
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), k(t, 'bs.collapse', this);
                }

                var e = t.prototype;
                return e.toggle = function () {
                    this._element.classList.contains('show') ? this.hide() : this.show();
                }, e.show = function () {
                    var e = this;
                    if (!this._isTransitioning && !this._element.classList.contains('show')) {
                        var n, i;
                        this._parent && 0 === (n = nt.find('.show, .collapsing', this._parent).filter((function (t) {
                            return 'string' == typeof e._config.parent ? t.getAttribute('data-parent') === e._config.parent : t.classList.contains('collapse');
                        }))).length && (n = null);
                        var o = nt.findOne(this._selector);
                        if (n) {
                            var r = n.filter((function (t) {
                                return o !== t;
                            }));
                            if ((i = r[0] ? L(r[0], 'bs.collapse') : null) && i._isTransitioning) return;
                        }
                        if (!z.trigger(this._element, 'show.bs.collapse').defaultPrevented) {
                            n && n.forEach((function (e) {
                                o !== e && t.collapseInterface(e, 'hide'), i || k(e, 'bs.collapse', null);
                            }));
                            var s = this._getDimension();
                            this._element.classList.remove('collapse'), this._element.classList.add('collapsing'), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((function (t) {
                                t.classList.remove('collapsed'), t.setAttribute('aria-expanded', !0);
                            })), this.setTransitioning(!0);
                            var a = 'scroll' + (s[0].toUpperCase() + s.slice(1)), l = p(this._element);
                            z.one(this._element, 'transitionend', (function () {
                                e._element.classList.remove('collapsing'), e._element.classList.add('collapse', 'show'), e._element.style[s] = '', e.setTransitioning(!1), z.trigger(e._element, 'shown.bs.collapse');
                            })), v(this._element, l), this._element.style[s] = this._element[a] + 'px';
                        }
                    }
                }, e.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && this._element.classList.contains('show') && !z.trigger(this._element, 'hide.bs.collapse').defaultPrevented) {
                        var e = this._getDimension();
                        this._element.style[e] = this._element.getBoundingClientRect()[e] + 'px', w(this._element), this._element.classList.add('collapsing'), this._element.classList.remove('collapse', 'show');
                        var n = this._triggerArray.length;
                        if (n > 0) for (var i = 0; i < n; i++) {
                            var o = this._triggerArray[i], r = d(o);
                            r && !r.classList.contains('show') && (o.classList.add('collapsed'), o.setAttribute('aria-expanded', !1));
                        }
                        this.setTransitioning(!0), this._element.style[e] = '';
                        var s = p(this._element);
                        z.one(this._element, 'transitionend', (function () {
                            t.setTransitioning(!1), t._element.classList.remove('collapsing'), t._element.classList.add('collapse'), z.trigger(t._element, 'hidden.bs.collapse');
                        })), v(this._element, s);
                    }
                }, e.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }, e.dispose = function () {
                    O(this._element, 'bs.collapse'), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
                }, e._getConfig = function (t) {
                    return (t = r(r({}, ft), t)).toggle = Boolean(t.toggle), _(ut, t, ht), t;
                }, e._getDimension = function () {
                    return this._element.classList.contains('width') ? 'width' : 'height';
                }, e._getParent = function () {
                    var t = this, e = this._config.parent;
                    m(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = nt.findOne(e);
                    var n = '[data-toggle="collapse"][data-parent="' + e + '"]';
                    return nt.find(n, e).forEach((function (e) {
                        var n = d(e);
                        t._addAriaAndCollapsedClass(n, [e]);
                    })), e;
                }, e._addAriaAndCollapsedClass = function (t, e) {
                    if (t) {
                        var n = t.classList.contains('show');
                        e.length && e.forEach((function (t) {
                            n ? t.classList.remove('collapsed') : t.classList.add('collapsed'), t.setAttribute('aria-expanded', n);
                        }));
                    }
                }, t.collapseInterface = function (e, n) {
                    var i = L(e, 'bs.collapse'), o = r(r(r({}, ft), et.getDataAttributes(e)), 'object' == typeof n && n ? n : {});
                    if (!i && o.toggle && 'string' == typeof n && /show|hide/.test(n) && (o.toggle = !1), i || (i = new t(e, o)), 'string' == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]();
                    }
                }, t.jQueryInterface = function (e) {
                    return this.each((function () {
                        t.collapseInterface(this, e);
                    }));
                }, t.getInstance = function (t) {
                    return L(t, 'bs.collapse');
                }, n(t, null, [{
                    key: 'VERSION', get: function () {
                        return '5.0.0-alpha1';
                    }
                }, {
                    key: 'Default', get: function () {
                        return ft;
                    }
                }]), t;
            }();
            z.on(document, 'click.bs.collapse.data-api', '[data-toggle="collapse"]', (function (t) {
                'A' === t.target.tagName && t.preventDefault();
                var e = et.getDataAttributes(this), n = h(this);
                nt.find(n).forEach((function (t) {
                    var n, i = L(t, 'bs.collapse');
                    i ? (null === i._parent && 'string' == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = 'toggle') : n = e, dt.collapseInterface(t, n);
                }));
            }));
            var pt = E();
            if (pt) {
                var gt = pt.fn[ut];
                pt.fn[ut] = dt.jQueryInterface, pt.fn[ut].Constructor = dt, pt.fn[ut].noConflict = function () {
                    return pt.fn[ut] = gt, dt.jQueryInterface;
                };
            }
            var mt = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator, vt = function () {
                for (var t = ['Edge', 'Trident', 'Firefox'], e = 0; e < t.length; e += 1) if (mt && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
                return 0;
            }(), _t = mt && window.Promise ? function (t) {
                var e = !1;
                return function () {
                    e || (e = !0, window.Promise.resolve().then((function () {
                        e = !1, t();
                    })));
                };
            } : function (t) {
                var e = !1;
                return function () {
                    e || (e = !0, setTimeout((function () {
                        e = !1, t();
                    }), vt));
                };
            };

            function bt(t) {
                return t && '[object Function]' === {}.toString.call(t);
            }

            function yt(t, e) {
                if (1 !== t.nodeType) return [];
                var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
                return e ? n[e] : n;
            }

            function wt(t) {
                return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
            }

            function Et(t) {
                if (!t) return document.body;
                switch (t.nodeName) {
                    case'HTML':
                    case'BODY':
                        return t.ownerDocument.body;
                    case'#document':
                        return t.body;
                }
                var e = yt(t), n = e.overflow, i = e.overflowX, o = e.overflowY;
                return /(auto|scroll|overlay)/.test(n + o + i) ? t : Et(wt(t));
            }

            function Tt(t) {
                return t && t.referenceNode ? t.referenceNode : t;
            }

            var kt = mt && !(!window.MSInputMethodContext || !document.documentMode), Lt = mt && /MSIE 10/.test(navigator.userAgent);

            function Ot(t) {
                return 11 === t ? kt : 10 === t ? Lt : kt || Lt;
            }

            function Ct(t) {
                if (!t) return document.documentElement;
                for (var e = Ot(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === yt(n, 'position') ? Ct(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
            }

            function At(t) {
                return null !== t.parentNode ? At(t.parentNode) : t;
            }

            function St(t, e) {
                if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
                var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? t : e, o = n ? e : t, r = document.createRange();
                r.setStart(i, 0), r.setEnd(o, 0);
                var s = r.commonAncestorContainer;
                if (t !== s && e !== s || i.contains(o)) return function (t) {
                    var e = t.nodeName;
                    return 'BODY' !== e && ('HTML' === e || Ct(t.firstElementChild) === t);
                }(s) ? s : Ct(s);
                var a = At(t);
                return a.host ? St(a.host, e) : St(t, At(e).host);
            }

            function Dt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top', n = 'top' === e ? 'scrollTop' : 'scrollLeft', i = t.nodeName;
                if ('BODY' === i || 'HTML' === i) {
                    var o = t.ownerDocument.documentElement, r = t.ownerDocument.scrollingElement || o;
                    return r[n];
                }
                return t[n];
            }

            function xt(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = Dt(e, 'top'), o = Dt(e, 'left'), r = n ? -1 : 1;
                return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t;
            }

            function jt(t, e) {
                var n = 'x' === e ? 'Left' : 'Top', i = 'Left' === n ? 'Right' : 'Bottom';
                return parseFloat(t['border' + n + 'Width'], 10) + parseFloat(t['border' + i + 'Width'], 10);
            }

            function Nt(t, e, n, i) {
                return Math.max(e['offset' + t], e['scroll' + t], n['client' + t], n['offset' + t], n['scroll' + t], Ot(10) ? parseInt(n['offset' + t]) + parseInt(i['margin' + ('Height' === t ? 'Top' : 'Left')]) + parseInt(i['margin' + ('Height' === t ? 'Bottom' : 'Right')]) : 0);
            }

            function It(t) {
                var e = t.body, n = t.documentElement, i = Ot(10) && getComputedStyle(n);
                return {height: Nt('Height', e, n, i), width: Nt('Width', e, n, i)};
            }

            var Pt = function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            }, Mt = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }

                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                };
            }(), Ht = function (t, e, n) {
                return e in t ? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}) : t[e] = n, t;
            }, Bt = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
            };

            function Rt(t) {
                return Bt({}, t, {right: t.left + t.width, bottom: t.top + t.height});
            }

            function Ft(t) {
                var e = {};
                try {
                    if (Ot(10)) {
                        e = t.getBoundingClientRect();
                        var n = Dt(t, 'top'), i = Dt(t, 'left');
                        e.top += n, e.left += i, e.bottom += n, e.right += i;
                    } else e = t.getBoundingClientRect();
                } catch (t) {
                }
                var o = {left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top}, r = 'HTML' === t.nodeName ? It(t.ownerDocument) : {}, s = r.width || t.clientWidth || o.width,
                    a = r.height || t.clientHeight || o.height, l = t.offsetWidth - s, c = t.offsetHeight - a;
                if (l || c) {
                    var u = yt(t);
                    l -= jt(u, 'x'), c -= jt(u, 'y'), o.width -= l, o.height -= c;
                }
                return Rt(o);
            }

            function Ut(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = Ot(10), o = 'HTML' === e.nodeName, r = Ft(t), s = Ft(e), a = Et(t), l = yt(e),
                    c = parseFloat(l.borderTopWidth, 10), u = parseFloat(l.borderLeftWidth, 10);
                n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
                var f = Rt({top: r.top - s.top - c, left: r.left - s.left - u, width: r.width, height: r.height});
                if (f.marginTop = 0, f.marginLeft = 0, !i && o) {
                    var h = parseFloat(l.marginTop, 10), d = parseFloat(l.marginLeft, 10);
                    f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d;
                }
                return (i && !n ? e.contains(a) : e === a && 'BODY' !== a.nodeName) && (f = xt(f, e)), f;
            }

            function Wt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = t.ownerDocument.documentElement, i = Ut(t, n), o = Math.max(n.clientWidth, window.innerWidth || 0),
                    r = Math.max(n.clientHeight, window.innerHeight || 0), s = e ? 0 : Dt(n), a = e ? 0 : Dt(n, 'left'),
                    l = {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r};
                return Rt(l);
            }

            function Qt(t) {
                var e = t.nodeName;
                if ('BODY' === e || 'HTML' === e) return !1;
                if ('fixed' === yt(t, 'position')) return !0;
                var n = wt(t);
                return !!n && Qt(n);
            }

            function Vt(t) {
                if (!t || !t.parentElement || Ot()) return document.documentElement;
                for (var e = t.parentElement; e && "none" === yt(e, "transform");) e = e.parentElement;
                return e || document.documentElement;
            }

            function zt(t, e, n, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], r = {top: 0, left: 0}, s = o ? Vt(t) : St(t, Tt(e));
                if ('viewport' === i) r = Wt(s, o); else {
                    var a = void 0;
                    'scrollParent' === i ? 'BODY' === (a = Et(wt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = 'window' === i ? t.ownerDocument.documentElement : i;
                    var l = Ut(a, s, o);
                    if ('HTML' !== a.nodeName || Qt(s)) r = l; else {
                        var c = It(t.ownerDocument), u = c.height, f = c.width;
                        r.top += l.top - l.marginTop, r.bottom = u + l.top, r.left += l.left - l.marginLeft, r.right = f + l.left;
                    }
                }
                var h = 'number' == typeof (n = n || 0);
                return r.left += h ? n : n.left || 0, r.top += h ? n : n.top || 0, r.right -= h ? n : n.right || 0, r.bottom -= h ? n : n.bottom || 0, r;
            }

            function qt(t) {
                return t.width * t.height;
            }

            function Yt(t, e, n, i, o) {
                var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === t.indexOf('auto')) return t;
                var s = zt(n, i, r, o), a = {
                    top: {width: s.width, height: e.top - s.top},
                    right: {width: s.right - e.right, height: s.height},
                    bottom: {width: s.width, height: s.bottom - e.bottom},
                    left: {width: e.left - s.left, height: s.height}
                }, l = Object.keys(a).map((function (t) {
                    return Bt({key: t}, a[t], {area: qt(a[t])});
                })).sort((function (t, e) {
                    return e.area - t.area;
                })), c = l.filter((function (t) {
                    var e = t.width, i = t.height;
                    return e >= n.clientWidth && i >= n.clientHeight;
                })), u = c.length > 0 ? c[0].key : l[0].key, f = t.split('-')[1];
                return u + (f ? '-' + f : '');
            }

            function Kt(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = i ? Vt(e) : St(e, Tt(n));
                return Ut(n, o, i);
            }

            function Xt(t) {
                var e = t.ownerDocument.defaultView.getComputedStyle(t), n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                    i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
                return {width: t.offsetWidth + i, height: t.offsetHeight + n};
            }

            function Gt(t) {
                var e = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
                return t.replace(/left|right|bottom|top/g, (function (t) {
                    return e[t];
                }));
            }

            function $t(t, e, n) {
                n = n.split('-')[0];
                var i = Xt(t), o = {width: i.width, height: i.height}, r = -1 !== ['right', 'left'].indexOf(n), s = r ? 'top' : 'left', a = r ? 'left' : 'top', l = r ? 'height' : 'width',
                    c = r ? 'width' : 'height';
                return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[Gt(a)], o;
            }

            function Zt(t, e) {
                return Array.prototype.find ? t.find(e) : t.filter(e)[0];
            }

            function Jt(t, e, n) {
                return (void 0 === n ? t : t.slice(0, function (t, e, n) {
                    if (Array.prototype.findIndex) return t.findIndex((function (t) {
                        return t[e] === n;
                    }));
                    var i = Zt(t, (function (t) {
                        return t[e] === n;
                    }));
                    return t.indexOf(i);
                }(t, 'name', n))).forEach((function (t) {
                    t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
                    var n = t.function || t.fn;
                    t.enabled && bt(n) && (e.offsets.popper = Rt(e.offsets.popper), e.offsets.reference = Rt(e.offsets.reference), e = n(e, t));
                })), e;
            }

            function te() {
                if (!this.state.isDestroyed) {
                    var t = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                    t.offsets.reference = Kt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = Yt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = $t(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', t = Jt(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
                }
            }

            function ee(t, e) {
                return t.some((function (t) {
                    var n = t.name;
                    return t.enabled && n === e;
                }));
            }

            function ne(t) {
                for (var e = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                    var o = e[i], r = o ? '' + o + n : t;
                    if (void 0 !== document.body.style[r]) return r;
                }
                return null;
            }

            function ie() {
                return this.state.isDestroyed = !0, ee(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[ne('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
            }

            function oe(t) {
                var e = t.ownerDocument;
                return e ? e.defaultView : window;
            }

            function re() {
                this.state.eventsEnabled || (this.state = function (t, e, n, i) {
                    n.updateBound = i, oe(t).addEventListener('resize', n.updateBound, {passive: !0});
                    var o = Et(t);
                    return function t(e, n, i, o) {
                        var r = 'BODY' === e.nodeName, s = r ? e.ownerDocument.defaultView : e;
                        s.addEventListener(n, i, {passive: !0}), r || t(Et(s.parentNode), n, i, o), o.push(s);
                    }(o, 'scroll', n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
                }(this.reference, this.options, this.state, this.scheduleUpdate));
            }

            function se() {
                var t, e;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, oe(t).removeEventListener('resize', e.updateBound), e.scrollParents.forEach((function (t) {
                    t.removeEventListener('scroll', e.updateBound);
                })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
            }

            function ae(t) {
                return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
            }

            function le(t, e) {
                Object.keys(e).forEach((function (n) {
                    var i = '';
                    -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && ae(e[n]) && (i = 'px'), t.style[n] = e[n] + i;
                }));
            }

            var ce = mt && /Firefox/i.test(navigator.userAgent);

            function ue(t, e, n) {
                var i = Zt(t, (function (t) {
                    return t.name === e;
                })), o = !!i && t.some((function (t) {
                    return t.name === n && t.enabled && t.order < i.order;
                }));
                if (!o) {
                    var r = '`' + e + '`', s = '`' + n + '`';
                    console.warn(s + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
                }
                return o;
            }

            var fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
                he = fe.slice(3);

            function de(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = he.indexOf(t), i = he.slice(n + 1).concat(he.slice(0, n));
                return e ? i.reverse() : i;
            }

            var pe = {
                placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
                }, onUpdate: function () {
                }, modifiers: {
                    shift: {
                        order: 100, enabled: !0, fn: function (t) {
                            var e = t.placement, n = e.split('-')[0], i = e.split('-')[1];
                            if (i) {
                                var o = t.offsets, r = o.reference, s = o.popper, a = -1 !== ['bottom', 'top'].indexOf(n), l = a ? 'left' : 'top', c = a ? 'width' : 'height',
                                    u = {start: Ht({}, l, r[l]), end: Ht({}, l, r[l] + r[c] - s[c])};
                                t.offsets.popper = Bt({}, s, u[i]);
                            }
                            return t;
                        }
                    }, offset: {
                        order: 200, enabled: !0, fn: function (t, e) {
                            var n, i = e.offset, o = t.placement, r = t.offsets, s = r.popper, a = r.reference, l = o.split('-')[0];
                            return n = ae(+i) ? [+i, 0] : function (t, e, n, i) {
                                var o = [0, 0], r = -1 !== ['right', 'left'].indexOf(i), s = t.split(/(\+|\-)/).map((function (t) {
                                    return t.trim();
                                })), a = s.indexOf(Zt(s, (function (t) {
                                    return -1 !== t.search(/,|\s/);
                                })));
                                s[a] && -1 === s[a].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
                                var l = /\s*,\s*|\s+/, c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                                return (c = c.map((function (t, i) {
                                    var o = (1 === i ? !r : r) ? 'height' : 'width', s = !1;
                                    return t.reduce((function (t, e) {
                                        return '' === t[t.length - 1] && -1 !== ['+', '-'].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e);
                                    }), []).map((function (t) {
                                        return function (t, e, n, i) {
                                            var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +o[1], s = o[2];
                                            if (!r) return t;
                                            if (0 === s.indexOf('%')) {
                                                var a = void 0;
                                                switch (s) {
                                                    case'%p':
                                                        a = n;
                                                        break;
                                                    case'%':
                                                    case'%r':
                                                    default:
                                                        a = i;
                                                }
                                                return Rt(a)[e] / 100 * r;
                                            }
                                            return 'vh' === s || 'vw' === s ? ('vh' === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r;
                                        }(t, o, e, n);
                                    }));
                                }))).forEach((function (t, e) {
                                    t.forEach((function (n, i) {
                                        ae(n) && (o[e] += n * ('-' === t[i - 1] ? -1 : 1));
                                    }));
                                })), o;
                            }(i, s, a, l), 'left' === l ? (s.top += n[0], s.left -= n[1]) : 'right' === l ? (s.top += n[0], s.left += n[1]) : 'top' === l ? (s.left += n[0], s.top -= n[1]) : 'bottom' === l && (s.left += n[0], s.top += n[1]), t.popper = s, t;
                        }, offset: 0
                    }, preventOverflow: {
                        order: 300, enabled: !0, fn: function (t, e) {
                            var n = e.boundariesElement || Ct(t.instance.popper);
                            t.instance.reference === n && (n = Ct(n));
                            var i = ne('transform'), o = t.instance.popper.style, r = o.top, s = o.left, a = o[i];
                            o.top = '', o.left = '', o[i] = '';
                            var l = zt(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                            o.top = r, o.left = s, o[i] = a, e.boundaries = l;
                            var c = e.priority, u = t.offsets.popper, f = {
                                primary: function (t) {
                                    var n = u[t];
                                    return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), Ht({}, t, n);
                                }, secondary: function (t) {
                                    var n = 'right' === t ? 'left' : 'top', i = u[n];
                                    return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ('right' === t ? u.width : u.height))), Ht({}, n, i);
                                }
                            };
                            return c.forEach((function (t) {
                                var e = -1 !== ['left', 'top'].indexOf(t) ? 'primary' : 'secondary';
                                u = Bt({}, u, f[e](t));
                            })), t.offsets.popper = u, t;
                        }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent'
                    }, keepTogether: {
                        order: 400, enabled: !0, fn: function (t) {
                            var e = t.offsets, n = e.popper, i = e.reference, o = t.placement.split('-')[0], r = Math.floor, s = -1 !== ['top', 'bottom'].indexOf(o), a = s ? 'right' : 'bottom',
                                l = s ? 'left' : 'top', c = s ? 'width' : 'height';
                            return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t;
                        }
                    }, arrow: {
                        order: 500, enabled: !0, fn: function (t, e) {
                            var n;
                            if (!ue(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
                            var i = e.element;
                            if ('string' == typeof i) {
                                if (!(i = t.instance.popper.querySelector(i))) return t;
                            } else if (!t.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t;
                            var o = t.placement.split('-')[0], r = t.offsets, s = r.popper, a = r.reference, l = -1 !== ['left', 'right'].indexOf(o), c = l ? 'height' : 'width',
                                u = l ? 'Top' : 'Left', f = u.toLowerCase(), h = l ? 'left' : 'top', d = l ? 'bottom' : 'right', p = Xt(i)[c];
                            a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]), t.offsets.popper = Rt(t.offsets.popper);
                            var g = a[f] + a[c] / 2 - p / 2, m = yt(t.instance.popper), v = parseFloat(m['margin' + u], 10), _ = parseFloat(m['border' + u + 'Width'], 10),
                                b = g - t.offsets.popper[f] - v - _;
                            return b = Math.max(Math.min(s[c] - p, b), 0), t.arrowElement = i, t.offsets.arrow = (Ht(n = {}, f, Math.round(b)), Ht(n, h, ''), n), t;
                        }, element: '[x-arrow]'
                    }, flip: {
                        order: 600, enabled: !0, fn: function (t, e) {
                            if (ee(t.instance.modifiers, 'inner')) return t;
                            if (t.flipped && t.placement === t.originalPlacement) return t;
                            var n = zt(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed), i = t.placement.split('-')[0], o = Gt(i),
                                r = t.placement.split('-')[1] || '', s = [];
                            switch (e.behavior) {
                                case'flip':
                                    s = [i, o];
                                    break;
                                case'clockwise':
                                    s = de(i);
                                    break;
                                case'counterclockwise':
                                    s = de(i, !0);
                                    break;
                                default:
                                    s = e.behavior;
                            }
                            return s.forEach((function (a, l) {
                                if (i !== a || s.length === l + 1) return t;
                                i = t.placement.split('-')[0], o = Gt(i);
                                var c = t.offsets.popper, u = t.offsets.reference, f = Math.floor,
                                    h = 'left' === i && f(c.right) > f(u.left) || 'right' === i && f(c.left) < f(u.right) || 'top' === i && f(c.bottom) > f(u.top) || 'bottom' === i && f(c.top) < f(u.bottom),
                                    d = f(c.left) < f(n.left), p = f(c.right) > f(n.right), g = f(c.top) < f(n.top), m = f(c.bottom) > f(n.bottom),
                                    v = 'left' === i && d || 'right' === i && p || 'top' === i && g || 'bottom' === i && m, _ = -1 !== ['top', 'bottom'].indexOf(i),
                                    b = !!e.flipVariations && (_ && 'start' === r && d || _ && 'end' === r && p || !_ && 'start' === r && g || !_ && 'end' === r && m),
                                    y = !!e.flipVariationsByContent && (_ && 'start' === r && p || _ && 'end' === r && d || !_ && 'start' === r && m || !_ && 'end' === r && g), w = b || y;
                                (h || v || w) && (t.flipped = !0, (h || v) && (i = s[l + 1]), w && (r = function (t) {
                                    return 'end' === t ? 'start' : 'start' === t ? 'end' : t;
                                }(r)), t.placement = i + (r ? '-' + r : ''), t.offsets.popper = Bt({}, t.offsets.popper, $t(t.instance.popper, t.offsets.reference, t.placement)), t = Jt(t.instance.modifiers, t, 'flip'));
                            })), t;
                        }, behavior: 'flip', padding: 5, boundariesElement: 'viewport', flipVariations: !1, flipVariationsByContent: !1
                    }, inner: {
                        order: 700, enabled: !1, fn: function (t) {
                            var e = t.placement, n = e.split('-')[0], i = t.offsets, o = i.popper, r = i.reference, s = -1 !== ['left', 'right'].indexOf(n), a = -1 === ['top', 'left'].indexOf(n);
                            return o[s ? 'left' : 'top'] = r[n] - (a ? o[s ? 'width' : 'height'] : 0), t.placement = Gt(e), t.offsets.popper = Rt(o), t;
                        }
                    }, hide: {
                        order: 800, enabled: !0, fn: function (t) {
                            if (!ue(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
                            var e = t.offsets.reference, n = Zt(t.instance.modifiers, (function (t) {
                                return 'preventOverflow' === t.name;
                            })).boundaries;
                            if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                                if (!0 === t.hide) return t;
                                t.hide = !0, t.attributes['x-out-of-boundaries'] = '';
                            } else {
                                if (!1 === t.hide) return t;
                                t.hide = !1, t.attributes['x-out-of-boundaries'] = !1;
                            }
                            return t;
                        }
                    }, computeStyle: {
                        order: 850, enabled: !0, fn: function (t, e) {
                            var n = e.x, i = e.y, o = t.offsets.popper, r = Zt(t.instance.modifiers, (function (t) {
                                return 'applyStyle' === t.name;
                            })).gpuAcceleration;
                            void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                            var s, a, l = void 0 !== r ? r : e.gpuAcceleration, c = Ct(t.instance.popper), u = Ft(c), f = {position: o.position}, h = function (t, e) {
                                var n = t.offsets, i = n.popper, o = n.reference, r = Math.round, s = Math.floor, a = function (t) {
                                        return t;
                                    }, l = r(o.width), c = r(i.width), u = -1 !== ['left', 'right'].indexOf(t.placement), f = -1 !== t.placement.indexOf('-'), h = e ? u || f || l % 2 == c % 2 ? r : s : a,
                                    d = e ? r : a;
                                return {left: h(l % 2 == 1 && c % 2 == 1 && !f && e ? i.left - 1 : i.left), top: d(i.top), bottom: d(i.bottom), right: h(i.right)};
                            }(t, window.devicePixelRatio < 2 || !ce), d = 'bottom' === n ? 'top' : 'bottom', p = 'right' === i ? 'left' : 'right', g = ne('transform');
                            if (a = 'bottom' === d ? 'HTML' === c.nodeName ? -c.clientHeight + h.bottom : -u.height + h.bottom : h.top, s = 'right' === p ? 'HTML' === c.nodeName ? -c.clientWidth + h.right : -u.width + h.right : h.left, l && g) f[g] = 'translate3d(' + s + 'px, ' + a + 'px, 0)', f[d] = 0, f[p] = 0, f.willChange = 'transform'; else {
                                var m = 'bottom' === d ? -1 : 1, v = 'right' === p ? -1 : 1;
                                f[d] = a * m, f[p] = s * v, f.willChange = d + ', ' + p;
                            }
                            var _ = {'x-placement': t.placement};
                            return t.attributes = Bt({}, _, t.attributes), t.styles = Bt({}, f, t.styles), t.arrowStyles = Bt({}, t.offsets.arrow, t.arrowStyles), t;
                        }, gpuAcceleration: !0, x: 'bottom', y: 'right'
                    }, applyStyle: {
                        order: 900, enabled: !0, fn: function (t) {
                            return le(t.instance.popper, t.styles), function (t, e) {
                                Object.keys(e).forEach((function (n) {
                                    !1 !== e[n] ? t.setAttribute(n, e[n]) : t.removeAttribute(n);
                                }));
                            }(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && le(t.arrowElement, t.arrowStyles), t;
                        }, onLoad: function (t, e, n, i, o) {
                            var r = Kt(o, e, t, n.positionFixed), s = Yt(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return e.setAttribute('x-placement', s), le(e, {position: n.positionFixed ? 'fixed' : 'absolute'}), n;
                        }, gpuAcceleration: void 0
                    }
                }
            }, ge = function () {
                function t(e, n) {
                    var i = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Pt(this, t), this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update);
                    }, this.update = _t(this.update.bind(this)), this.options = Bt({}, t.Defaults, o), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Bt({}, t.Defaults.modifiers, o.modifiers)).forEach((function (e) {
                        i.options.modifiers[e] = Bt({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
                    })), this.modifiers = Object.keys(this.options.modifiers).map((function (t) {
                        return Bt({name: t}, i.options.modifiers[t]);
                    })).sort((function (t, e) {
                        return t.order - e.order;
                    })), this.modifiers.forEach((function (t) {
                        t.enabled && bt(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                    })), this.update();
                    var r = this.options.eventsEnabled;
                    r && this.enableEventListeners(), this.state.eventsEnabled = r;
                }

                return Mt(t, [{
                    key: 'update', value: function () {
                        return te.call(this);
                    }
                }, {
                    key: 'destroy', value: function () {
                        return ie.call(this);
                    }
                }, {
                    key: 'enableEventListeners', value: function () {
                        return re.call(this);
                    }
                }, {
                    key: 'disableEventListeners', value: function () {
                        return se.call(this);
                    }
                }]), t;
            }();
            ge.Utils = ('undefined' != typeof window ? window : e).PopperUtils, ge.placements = fe, ge.Defaults = pe;
            var me = 'dropdown', ve = new RegExp('ArrowUp|ArrowDown|Escape'), _e = {offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic', popperConfig: null},
                be = {offset: '(number|string|function)', flip: 'boolean', boundary: '(string|element)', reference: '(string|element)', display: 'string', popperConfig: '(null|object)'},
                ye = function () {
                    function t(t, e) {
                        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners(), k(t, 'bs.dropdown', this);
                    }

                    var e = t.prototype;
                    return e.toggle = function () {
                        if (!this._element.disabled && !this._element.classList.contains('disabled')) {
                            var e = this._element.classList.contains('show');
                            t.clearMenus(), e || this.show();
                        }
                    }, e.show = function () {
                        if (!(this._element.disabled || this._element.classList.contains('disabled') || this._menu.classList.contains('show'))) {
                            var e = t.getParentFromElement(this._element), n = {relatedTarget: this._element};
                            if (!z.trigger(this._element, 'show.bs.dropdown', n).defaultPrevented) {
                                if (!this._inNavbar) {
                                    if (void 0 === ge) throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org)');
                                    var i = this._element;
                                    'parent' === this._config.reference ? i = e : m(this._config.reference) && (i = this._config.reference, void 0 !== this._config.reference.jquery && (i = this._config.reference[0])), 'scrollParent' !== this._config.boundary && e.classList.add('position-static'), this._popper = new ge(i, this._menu, this._getPopperConfig());
                                }
                                var o;
                                'ontouchstart' in document.documentElement && !e.closest('.navbar-nav') && (o = []).concat.apply(o, document.body.children).forEach((function (t) {
                                    return z.on(t, 'mouseover', null, (function () {
                                    }));
                                })), this._element.focus(), this._element.setAttribute('aria-expanded', !0), et.toggleClass(this._menu, 'show'), et.toggleClass(this._element, 'show'), z.trigger(e, 'shown.bs.dropdown', n);
                            }
                        }
                    }, e.hide = function () {
                        if (!this._element.disabled && !this._element.classList.contains('disabled') && this._menu.classList.contains('show')) {
                            var e = t.getParentFromElement(this._element), n = {relatedTarget: this._element};
                            z.trigger(e, 'hide.bs.dropdown', n).defaultPrevented || (this._popper && this._popper.destroy(), et.toggleClass(this._menu, 'show'), et.toggleClass(this._element, 'show'), z.trigger(e, 'hidden.bs.dropdown', n));
                        }
                    }, e.dispose = function () {
                        O(this._element, 'bs.dropdown'), z.off(this._element, '.bs.dropdown'), this._element = null, this._menu = null, this._popper && (this._popper.destroy(), this._popper = null);
                    }, e.update = function () {
                        this._inNavbar = this._detectNavbar(), this._popper && this._popper.scheduleUpdate();
                    }, e._addEventListeners = function () {
                        var t = this;
                        z.on(this._element, 'click.bs.dropdown', (function (e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle();
                        }));
                    }, e._getConfig = function (t) {
                        return t = r(r(r({}, this.constructor.Default), et.getDataAttributes(this._element)), t), _(me, t, this.constructor.DefaultType), t;
                    }, e._getMenuElement = function () {
                        return nt.next(this._element, '.dropdown-menu')[0];
                    }, e._getPlacement = function () {
                        var t = this._element.parentNode, e = 'bottom-start';
                        return t.classList.contains('dropup') ? (e = 'top-start', this._menu.classList.contains('dropdown-menu-right') && (e = 'top-end')) : t.classList.contains('dropright') ? e = 'right-start' : t.classList.contains('dropleft') ? e = 'left-start' : this._menu.classList.contains('dropdown-menu-right') && (e = 'bottom-end'), e;
                    }, e._detectNavbar = function () {
                        return Boolean(this._element.closest('.navbar'));
                    }, e._getOffset = function () {
                        var t = this, e = {};
                        return 'function' == typeof this._config.offset ? e.fn = function (e) {
                            return e.offsets = r(r({}, e.offsets), t._config.offset(e.offsets, t._element) || {}), e;
                        } : e.offset = this._config.offset, e;
                    }, e._getPopperConfig = function () {
                        var t = {
                            placement: this._getPlacement(),
                            modifiers: {offset: this._getOffset(), flip: {enabled: this._config.flip}, preventOverflow: {boundariesElement: this._config.boundary}}
                        };
                        return 'static' === this._config.display && (t.modifiers.applyStyle = {enabled: !1}), r(r({}, t), this._config.popperConfig);
                    }, t.dropdownInterface = function (e, n) {
                        var i = L(e, 'bs.dropdown');
                        if (i || (i = new t(e, 'object' == typeof n ? n : null)), 'string' == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    }, t.jQueryInterface = function (e) {
                        return this.each((function () {
                            t.dropdownInterface(this, e);
                        }));
                    }, t.clearMenus = function (e) {
                        if (!e || 2 !== e.button && ('keyup' !== e.type || 'Tab' === e.key)) for (var n = nt.find('[data-toggle="dropdown"]'), i = 0, o = n.length; i < o; i++) {
                            var r = t.getParentFromElement(n[i]), s = L(n[i], 'bs.dropdown'), a = {relatedTarget: n[i]};
                            if (e && 'click' === e.type && (a.clickEvent = e), s) {
                                var l, c = s._menu;
                                n[i].classList.contains('show') && !(e && ('click' === e.type && /input|textarea/i.test(e.target.tagName) || 'keyup' === e.type && 'Tab' === e.key) && c.contains(e.target) || z.trigger(r, 'hide.bs.dropdown', a).defaultPrevented) && ('ontouchstart' in document.documentElement && (l = []).concat.apply(l, document.body.children).forEach((function (t) {
                                    return z.off(t, 'mouseover', null, (function () {
                                    }));
                                })), n[i].setAttribute('aria-expanded', 'false'), s._popper && s._popper.destroy(), c.classList.remove('show'), n[i].classList.remove('show'), z.trigger(r, 'hidden.bs.dropdown', a));
                            }
                        }
                    }, t.getParentFromElement = function (t) {
                        return d(t) || t.parentNode;
                    }, t.dataApiKeydownHandler = function (e) {
                        if (!(/input|textarea/i.test(e.target.tagName) ? 'Space' === e.key || 'Escape' !== e.key && ('ArrowDown' !== e.key && 'ArrowUp' !== e.key || e.target.closest('.dropdown-menu')) : !ve.test(e.key)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !this.classList.contains('disabled'))) {
                            var n = t.getParentFromElement(this), i = this.classList.contains('show');
                            if ('Escape' === e.key) return (this.matches('[data-toggle="dropdown"]') ? this : nt.prev(this, '[data-toggle="dropdown"]')[0]).focus(), void t.clearMenus();
                            if (i && 'Space' !== e.key) {
                                var o = nt.find('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)', n).filter(b);
                                if (o.length) {
                                    var r = o.indexOf(e.target);
                                    'ArrowUp' === e.key && r > 0 && r--, 'ArrowDown' === e.key && r < o.length - 1 && r++, o[r = -1 === r ? 0 : r].focus();
                                }
                            } else t.clearMenus();
                        }
                    }, t.getInstance = function (t) {
                        return L(t, 'bs.dropdown');
                    }, n(t, null, [{
                        key: 'VERSION', get: function () {
                            return '5.0.0-alpha1';
                        }
                    }, {
                        key: 'Default', get: function () {
                            return _e;
                        }
                    }, {
                        key: 'DefaultType', get: function () {
                            return be;
                        }
                    }]), t;
                }();
            z.on(document, 'keydown.bs.dropdown.data-api', '[data-toggle="dropdown"]', ye.dataApiKeydownHandler), z.on(document, 'keydown.bs.dropdown.data-api', '.dropdown-menu', ye.dataApiKeydownHandler), z.on(document, 'click.bs.dropdown.data-api', ye.clearMenus), z.on(document, 'keyup.bs.dropdown.data-api', ye.clearMenus), z.on(document, 'click.bs.dropdown.data-api', '[data-toggle="dropdown"]', (function (t) {
                t.preventDefault(), t.stopPropagation(), ye.dropdownInterface(this, 'toggle');
            })), z.on(document, 'click.bs.dropdown.data-api', '.dropdown form', (function (t) {
                return t.stopPropagation();
            }));
            var we = E();
            if (we) {
                var Ee = we.fn[me];
                we.fn[me] = ye.jQueryInterface, we.fn[me].Constructor = ye, we.fn[me].noConflict = function () {
                    return we.fn[me] = Ee, ye.jQueryInterface;
                };
            }
            var Te = {backdrop: !0, keyboard: !0, focus: !0, show: !0}, ke = {backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean'}, Le = function () {
                function t(t, e) {
                    this._config = this._getConfig(e), this._element = t, this._dialog = nt.findOne('.modal-dialog', t), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0, k(t, 'bs.modal', this);
                }

                var e = t.prototype;
                return e.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }, e.show = function (t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        this._element.classList.contains('fade') && (this._isTransitioning = !0);
                        var n = z.trigger(this._element, 'show.bs.modal', {relatedTarget: t});
                        this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), z.on(this._element, 'click.dismiss.bs.modal', '[data-dismiss="modal"]', (function (t) {
                            return e.hide(t);
                        })), z.on(this._dialog, 'mousedown.dismiss.bs.modal', (function () {
                            z.one(e._element, 'mouseup.dismiss.bs.modal', (function (t) {
                                t.target === e._element && (e._ignoreBackdropClick = !0);
                            }));
                        })), this._showBackdrop((function () {
                            return e._showElement(t);
                        })));
                    }
                }, e.hide = function (t) {
                    var e = this;
                    if (t && t.preventDefault(), this._isShown && !this._isTransitioning && !z.trigger(this._element, 'hide.bs.modal').defaultPrevented) {
                        this._isShown = !1;
                        var n = this._element.classList.contains('fade');
                        if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), z.off(document, 'focusin.bs.modal'), this._element.classList.remove('show'), z.off(this._element, 'click.dismiss.bs.modal'), z.off(this._dialog, 'mousedown.dismiss.bs.modal'), n) {
                            var i = p(this._element);
                            z.one(this._element, 'transitionend', (function (t) {
                                return e._hideModal(t);
                            })), v(this._element, i);
                        } else this._hideModal();
                    }
                }, e.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (t) {
                        return z.off(t, '.bs.modal');
                    })), z.off(document, 'focusin.bs.modal'), O(this._element, 'bs.modal'), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
                }, e.handleUpdate = function () {
                    this._adjustDialog();
                }, e._getConfig = function (t) {
                    return t = r(r({}, Te), t), _('modal', t, ke), t;
                }, e._showElement = function (t) {
                    var e = this, n = this._element.classList.contains('fade'), i = nt.findOne('.modal-body', this._dialog);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = 'block', this._element.removeAttribute('aria-hidden'), this._element.setAttribute('aria-modal', !0), this._element.setAttribute('role', 'dialog'), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && w(this._element), this._element.classList.add('show'), this._config.focus && this._enforceFocus();
                    var o = function () {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, z.trigger(e._element, 'shown.bs.modal', {relatedTarget: t});
                    };
                    if (n) {
                        var r = p(this._dialog);
                        z.one(this._dialog, 'transitionend', o), v(this._dialog, r);
                    } else o();
                }, e._enforceFocus = function () {
                    var t = this;
                    z.off(document, 'focusin.bs.modal'), z.on(document, 'focusin.bs.modal', (function (e) {
                        document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus();
                    }));
                }, e._setEscapeEvent = function () {
                    var t = this;
                    this._isShown ? z.on(this._element, 'keydown.dismiss.bs.modal', (function (e) {
                        t._config.keyboard && 'Escape' === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || 'Escape' !== e.key || t._triggerBackdropTransition();
                    })) : z.off(this._element, 'keydown.dismiss.bs.modal');
                }, e._setResizeEvent = function () {
                    var t = this;
                    this._isShown ? z.on(window, 'resize.bs.modal', (function () {
                        return t._adjustDialog();
                    })) : z.off(window, 'resize.bs.modal');
                }, e._hideModal = function () {
                    var t = this;
                    this._element.style.display = 'none', this._element.setAttribute('aria-hidden', !0), this._element.removeAttribute('aria-modal'), this._element.removeAttribute('role'), this._isTransitioning = !1, this._showBackdrop((function () {
                        document.body.classList.remove('modal-open'), t._resetAdjustments(), t._resetScrollbar(), z.trigger(t._element, 'hidden.bs.modal');
                    }));
                }, e._removeBackdrop = function () {
                    this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
                }, e._showBackdrop = function (t) {
                    var e = this, n = this._element.classList.contains('fade') ? 'fade' : '';
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement('div'), this._backdrop.className = 'modal-backdrop', n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), z.on(this._element, 'click.dismiss.bs.modal', (function (t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition();
                        })), n && w(this._backdrop), this._backdrop.classList.add('show'), !n) return void t();
                        var i = p(this._backdrop);
                        z.one(this._backdrop, 'transitionend', t), v(this._backdrop, i);
                    } else if (!this._isShown && this._backdrop) {
                        this._backdrop.classList.remove('show');
                        var o = function () {
                            e._removeBackdrop(), t();
                        };
                        if (this._element.classList.contains('fade')) {
                            var r = p(this._backdrop);
                            z.one(this._backdrop, 'transitionend', o), v(this._backdrop, r);
                        } else o();
                    } else t();
                }, e._triggerBackdropTransition = function () {
                    var t = this;
                    if ('static' === this._config.backdrop) {
                        if (z.trigger(this._element, 'hidePrevented.bs.modal').defaultPrevented) return;
                        this._element.classList.add('modal-static');
                        var e = p(this._element);
                        z.one(this._element, 'transitionend', (function () {
                            t._element.classList.remove('modal-static');
                        })), v(this._element, e), this._element.focus();
                    } else this.hide();
                }, e._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + 'px');
                }, e._resetAdjustments = function () {
                    this._element.style.paddingLeft = '', this._element.style.paddingRight = '';
                }, e._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
                }, e._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        nt.find('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top').forEach((function (e) {
                            var n = e.style.paddingRight, i = window.getComputedStyle(e)['padding-right'];
                            et.setDataAttribute(e, 'padding-right', n), e.style.paddingRight = parseFloat(i) + t._scrollbarWidth + 'px';
                        })), nt.find('.sticky-top').forEach((function (e) {
                            var n = e.style.marginRight, i = window.getComputedStyle(e)['margin-right'];
                            et.setDataAttribute(e, 'margin-right', n), e.style.marginRight = parseFloat(i) - t._scrollbarWidth + 'px';
                        }));
                        var e = document.body.style.paddingRight, n = window.getComputedStyle(document.body)['padding-right'];
                        et.setDataAttribute(document.body, 'padding-right', e), document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + 'px';
                    }
                    document.body.classList.add('modal-open');
                }, e._resetScrollbar = function () {
                    nt.find('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top').forEach((function (t) {
                        var e = et.getDataAttribute(t, 'padding-right');
                        void 0 !== e && (et.removeDataAttribute(t, 'padding-right'), t.style.paddingRight = e);
                    })), nt.find('.sticky-top').forEach((function (t) {
                        var e = et.getDataAttribute(t, 'margin-right');
                        void 0 !== e && (et.removeDataAttribute(t, 'margin-right'), t.style.marginRight = e);
                    }));
                    var t = et.getDataAttribute(document.body, 'padding-right');
                    void 0 === t ? document.body.style.paddingRight = '' : (et.removeDataAttribute(document.body, 'padding-right'), document.body.style.paddingRight = t);
                }, e._getScrollbarWidth = function () {
                    var t = document.createElement('div');
                    t.className = 'modal-scrollbar-measure', document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }, t.jQueryInterface = function (e, n) {
                    return this.each((function () {
                        var i = L(this, 'bs.modal'), o = r(r(r({}, Te), et.getDataAttributes(this)), 'object' == typeof e && e ? e : {});
                        if (i || (i = new t(this, o)), 'string' == typeof e) {
                            if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                            i[e](n);
                        } else o.show && i.show(n);
                    }));
                }, t.getInstance = function (t) {
                    return L(t, 'bs.modal');
                }, n(t, null, [{
                    key: 'VERSION', get: function () {
                        return '5.0.0-alpha1';
                    }
                }, {
                    key: 'Default', get: function () {
                        return Te;
                    }
                }]), t;
            }();
            z.on(document, 'click.bs.modal.data-api', '[data-toggle="modal"]', (function (t) {
                var e = this, n = d(this);
                'A' !== this.tagName && 'AREA' !== this.tagName || t.preventDefault(), z.one(n, 'show.bs.modal', (function (t) {
                    t.defaultPrevented || z.one(n, 'hidden.bs.modal', (function () {
                        b(e) && e.focus();
                    }));
                }));
                var i = L(n, 'bs.modal');
                if (!i) {
                    var o = r(r({}, et.getDataAttributes(n)), et.getDataAttributes(this));
                    i = new Le(n, o);
                }
                i.show(this);
            }));
            var Oe = E();
            if (Oe) {
                var Ce = Oe.fn.modal;
                Oe.fn.modal = Le.jQueryInterface, Oe.fn.modal.Constructor = Le, Oe.fn.modal.noConflict = function () {
                    return Oe.fn.modal = Ce, Le.jQueryInterface;
                };
            }
            var Ae = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'], Se = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
                De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

            function xe(t, e, n) {
                var i;
                if (!t.length) return t;
                if (n && 'function' == typeof n) return n(t);
                for (var o = (new window.DOMParser).parseFromString(t, 'text/html'), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll('*')), a = function (t, n) {
                    var i, o = s[t], a = o.nodeName.toLowerCase();
                    if (-1 === r.indexOf(a)) return o.parentNode.removeChild(o), 'continue';
                    var l = (i = []).concat.apply(i, o.attributes), c = [].concat(e['*'] || [], e[a] || []);
                    l.forEach((function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n)) return -1 === Ae.indexOf(n) || Boolean(t.nodeValue.match(Se) || t.nodeValue.match(De));
                            for (var i = e.filter((function (t) {
                                return t instanceof RegExp;
                            })), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;
                            return !1;
                        })(t, c) || o.removeAttribute(t.nodeName);
                    }));
                }, l = 0, c = s.length; l < c; l++) a(l);
                return o.body.innerHTML;
            }

            var je = 'tooltip', Ne = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'), Ie = ['sanitize', 'whiteList', 'sanitizeFn'], Pe = {
                animation: 'boolean',
                template: 'string',
                title: '(string|element|function)',
                trigger: 'string',
                delay: '(number|object)',
                html: 'boolean',
                selector: '(string|boolean)',
                placement: '(string|function)',
                offset: '(number|string|function)',
                container: '(string|element|boolean)',
                fallbackPlacement: '(string|array)',
                boundary: '(string|element)',
                sanitize: 'boolean',
                sanitizeFn: '(null|function)',
                whiteList: 'object',
                popperConfig: '(null|object)'
            }, Me = {AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left'}, He = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: 'hover focus',
                title: '',
                delay: 0,
                html: !1,
                selector: !1,
                placement: 'top',
                offset: 0,
                container: !1,
                fallbackPlacement: 'flip',
                boundary: 'scrollParent',
                sanitize: !0,
                sanitizeFn: null,
                whiteList: {
                    '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
                    a: ['target', 'href', 'title', 'rel'],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                },
                popperConfig: null
            }, Be = {
                HIDE: 'hide.bs.tooltip',
                HIDDEN: 'hidden.bs.tooltip',
                SHOW: 'show.bs.tooltip',
                SHOWN: 'shown.bs.tooltip',
                INSERTED: 'inserted.bs.tooltip',
                CLICK: 'click.bs.tooltip',
                FOCUSIN: 'focusin.bs.tooltip',
                FOCUSOUT: 'focusout.bs.tooltip',
                MOUSEENTER: 'mouseenter.bs.tooltip',
                MOUSELEAVE: 'mouseleave.bs.tooltip'
            }, Re = function () {
                function t(t, e) {
                    if (void 0 === ge) throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org)');
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = '', this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners(), k(t, this.constructor.DATA_KEY, this);
                }

                var e = t.prototype;
                return e.enable = function () {
                    this._isEnabled = !0;
                }, e.disable = function () {
                    this._isEnabled = !1;
                }, e.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }, e.toggle = function (t) {
                    if (this._isEnabled) if (t) {
                        var e = this.constructor.DATA_KEY, n = L(t.target, e);
                        n || (n = new this.constructor(t.target, this._getDelegateConfig()), k(t.target, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                    } else {
                        if (this.getTipElement().classList.contains('show')) return void this._leave(null, this);
                        this._enter(null, this);
                    }
                }, e.dispose = function () {
                    clearTimeout(this._timeout), O(this.element, this.constructor.DATA_KEY), z.off(this.element, this.constructor.EVENT_KEY), z.off(this.element.closest('.modal'), 'hide.bs.modal', this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
                }, e.show = function () {
                    var t = this;
                    if ('none' === this.element.style.display) throw new Error('Please use show on visible elements');
                    if (this.isWithContent() && this._isEnabled) {
                        var e = z.trigger(this.element, this.constructor.Event.SHOW), n = function t(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ('function' == typeof e.getRootNode) {
                                var n = e.getRootNode();
                                return n instanceof ShadowRoot ? n : null;
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null;
                        }(this.element), i = null === n ? this.element.ownerDocument.documentElement.contains(this.element) : n.contains(this.element);
                        if (e.defaultPrevented || !i) return;
                        var o = this.getTipElement(), r = u(this.constructor.NAME);
                        o.setAttribute('id', r), this.element.setAttribute('aria-describedby', r), this.setContent(), this.config.animation && o.classList.add('fade');
                        var s = 'function' == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, a = this._getAttachment(s);
                        this._addAttachmentClass(a);
                        var l, c = this._getContainer();
                        k(o, this.constructor.DATA_KEY, this), this.element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(o), z.trigger(this.element, this.constructor.Event.INSERTED), this._popper = new ge(this.element, o, this._getPopperConfig(a)), o.classList.add('show'), 'ontouchstart' in document.documentElement && (l = []).concat.apply(l, document.body.children).forEach((function (t) {
                            z.on(t, 'mouseover', (function () {
                            }));
                        }));
                        var f = function () {
                            t.config.animation && t._fixTransition();
                            var e = t._hoverState;
                            t._hoverState = null, z.trigger(t.element, t.constructor.Event.SHOWN), 'out' === e && t._leave(null, t);
                        };
                        if (this.tip.classList.contains('fade')) {
                            var h = p(this.tip);
                            z.one(this.tip, 'transitionend', f), v(this.tip, h);
                        } else f();
                    }
                }, e.hide = function () {
                    var t = this, e = this.getTipElement(), n = function () {
                        'show' !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t.element.removeAttribute('aria-describedby'), z.trigger(t.element, t.constructor.Event.HIDDEN), t._popper.destroy();
                    };
                    if (!z.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
                        var i;
                        if (e.classList.remove('show'), 'ontouchstart' in document.documentElement && (i = []).concat.apply(i, document.body.children).forEach((function (t) {
                            return z.off(t, 'mouseover', y);
                        })), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains('fade')) {
                            var o = p(e);
                            z.one(e, 'transitionend', n), v(e, o);
                        } else n();
                        this._hoverState = '';
                    }
                }, e.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }, e.isWithContent = function () {
                    return Boolean(this.getTitle());
                }, e.getTipElement = function () {
                    if (this.tip) return this.tip;
                    var t = document.createElement('div');
                    return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
                }, e.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(nt.findOne('.tooltip-inner', t), this.getTitle()), t.classList.remove('fade', 'show');
                }, e.setElementContent = function (t, e) {
                    if (null !== t) return 'object' == typeof e && m(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = '', t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = xe(e, this.config.whiteList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
                }, e.getTitle = function () {
                    var t = this.element.getAttribute('data-original-title');
                    return t || (t = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                }, e._getPopperConfig = function (t) {
                    var e = this;
                    return r(r({}, {
                        placement: t,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: '.' + this.constructor.NAME + '-arrow'},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                        },
                        onUpdate: function (t) {
                            return e._handlePopperPlacementChange(t);
                        }
                    }), this.config.popperConfig);
                }, e._addAttachmentClass = function (t) {
                    this.getTipElement().classList.add('bs-tooltip-' + t);
                }, e._getOffset = function () {
                    var t = this, e = {};
                    return 'function' == typeof this.config.offset ? e.fn = function (e) {
                        return e.offsets = r(r({}, e.offsets), t.config.offset(e.offsets, t.element) || {}), e;
                    } : e.offset = this.config.offset, e;
                }, e._getContainer = function () {
                    return !1 === this.config.container ? document.body : m(this.config.container) ? this.config.container : nt.findOne(this.config.container);
                }, e._getAttachment = function (t) {
                    return Me[t.toUpperCase()];
                }, e._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(' ').forEach((function (e) {
                        if ('click' === e) z.on(t.element, t.constructor.Event.CLICK, t.config.selector, (function (e) {
                            return t.toggle(e);
                        })); else if ('manual' !== e) {
                            var n = 'hover' === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN, i = 'hover' === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            z.on(t.element, n, t.config.selector, (function (e) {
                                return t._enter(e);
                            })), z.on(t.element, i, t.config.selector, (function (e) {
                                return t._leave(e);
                            }));
                        }
                    })), this._hideModalHandler = function () {
                        t.element && t.hide();
                    }, z.on(this.element.closest('.modal'), 'hide.bs.modal', this._hideModalHandler), this.config.selector ? this.config = r(r({}, this.config), {}, {
                        trigger: 'manual',
                        selector: ''
                    }) : this._fixTitle();
                }, e._fixTitle = function () {
                    var t = typeof this.element.getAttribute('data-original-title');
                    (this.element.getAttribute('title') || 'string' !== t) && (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''), this.element.setAttribute('title', ''));
                }, e._enter = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || L(t.target, n)) || (e = new this.constructor(t.target, this._getDelegateConfig()), k(t.target, n, e)), t && (e._activeTrigger['focusin' === t.type ? 'focus' : 'hover'] = !0), e.getTipElement().classList.contains('show') || 'show' === e._hoverState ? e._hoverState = 'show' : (clearTimeout(e._timeout), e._hoverState = 'show', e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function () {
                        'show' === e._hoverState && e.show();
                    }), e.config.delay.show) : e.show());
                }, e._leave = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || L(t.target, n)) || (e = new this.constructor(t.target, this._getDelegateConfig()), k(t.target, n, e)), t && (e._activeTrigger['focusout' === t.type ? 'focus' : 'hover'] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = 'out', e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function () {
                        'out' === e._hoverState && e.hide();
                    }), e.config.delay.hide) : e.hide());
                }, e._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1;
                }, e._getConfig = function (t) {
                    var e = et.getDataAttributes(this.element);
                    return Object.keys(e).forEach((function (t) {
                        -1 !== Ie.indexOf(t) && delete e[t];
                    })), t && 'object' == typeof t.container && t.container.jquery && (t.container = t.container[0]), 'number' == typeof (t = r(r(r({}, this.constructor.Default), e), 'object' == typeof t && t ? t : {})).delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), 'number' == typeof t.title && (t.title = t.title.toString()), 'number' == typeof t.content && (t.content = t.content.toString()), _(je, t, this.constructor.DefaultType), t.sanitize && (t.template = xe(t.template, t.whiteList, t.sanitizeFn)), t;
                }, e._getDelegateConfig = function () {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t;
                }, e._cleanTipClass = function () {
                    var t = this.getTipElement(), e = t.getAttribute('class').match(Ne);
                    null !== e && e.length > 0 && e.map((function (t) {
                        return t.trim();
                    })).forEach((function (e) {
                        return t.classList.remove(e);
                    }));
                }, e._handlePopperPlacementChange = function (t) {
                    var e = t.instance;
                    this.tip = e.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement));
                }, e._fixTransition = function () {
                    var t = this.getTipElement(), e = this.config.animation;
                    null === t.getAttribute('x-placement') && (t.classList.remove('fade'), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
                }, t.jQueryInterface = function (e) {
                    return this.each((function () {
                        var n = L(this, 'bs.tooltip'), i = 'object' == typeof e && e;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i)), 'string' == typeof e)) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]();
                        }
                    }));
                }, t.getInstance = function (t) {
                    return L(t, 'bs.tooltip');
                }, n(t, null, [{
                    key: 'VERSION', get: function () {
                        return '5.0.0-alpha1';
                    }
                }, {
                    key: 'Default', get: function () {
                        return He;
                    }
                }, {
                    key: 'NAME', get: function () {
                        return je;
                    }
                }, {
                    key: 'DATA_KEY', get: function () {
                        return 'bs.tooltip';
                    }
                }, {
                    key: 'Event', get: function () {
                        return Be;
                    }
                }, {
                    key: 'EVENT_KEY', get: function () {
                        return '.bs.tooltip';
                    }
                }, {
                    key: 'DefaultType', get: function () {
                        return Pe;
                    }
                }]), t;
            }(), Fe = E();
            if (Fe) {
                var Ue = Fe.fn[je];
                Fe.fn[je] = Re.jQueryInterface, Fe.fn[je].Constructor = Re, Fe.fn[je].noConflict = function () {
                    return Fe.fn[je] = Ue, Re.jQueryInterface;
                };
            }
            var We = 'popover', Qe = new RegExp('(^|\\s)bs-popover\\S+', 'g'), Ve = r(r({}, Re.Default), {}, {
                placement: 'right',
                trigger: 'click',
                content: '',
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), ze = r(r({}, Re.DefaultType), {}, {content: '(string|element|function)'}), qe = {
                HIDE: 'hide.bs.popover',
                HIDDEN: 'hidden.bs.popover',
                SHOW: 'show.bs.popover',
                SHOWN: 'shown.bs.popover',
                INSERTED: 'inserted.bs.popover',
                CLICK: 'click.bs.popover',
                FOCUSIN: 'focusin.bs.popover',
                FOCUSOUT: 'focusout.bs.popover',
                MOUSEENTER: 'mouseenter.bs.popover',
                MOUSELEAVE: 'mouseleave.bs.popover'
            }, Ye = function (t) {
                var e, i;

                function o() {
                    return t.apply(this, arguments) || this;
                }

                i = t, (e = o).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
                var r = o.prototype;
                return r.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }, r.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(nt.findOne('.popover-header', t), this.getTitle());
                    var e = this._getContent();
                    'function' == typeof e && (e = e.call(this.element)), this.setElementContent(nt.findOne('.popover-body', t), e), t.classList.remove('fade', 'show');
                }, r._addAttachmentClass = function (t) {
                    this.getTipElement().classList.add('bs-popover-' + t);
                }, r._getContent = function () {
                    return this.element.getAttribute('data-content') || this.config.content;
                }, r._cleanTipClass = function () {
                    var t = this.getTipElement(), e = t.getAttribute('class').match(Qe);
                    null !== e && e.length > 0 && e.map((function (t) {
                        return t.trim();
                    })).forEach((function (e) {
                        return t.classList.remove(e);
                    }));
                }, o.jQueryInterface = function (t) {
                    return this.each((function () {
                        var e = L(this, 'bs.popover'), n = 'object' == typeof t ? t : null;
                        if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), k(this, 'bs.popover', e)), 'string' == typeof t)) {
                            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                            e[t]();
                        }
                    }));
                }, o.getInstance = function (t) {
                    return L(t, 'bs.popover');
                }, n(o, null, [{
                    key: 'VERSION', get: function () {
                        return '5.0.0-alpha1';
                    }
                }, {
                    key: 'Default', get: function () {
                        return Ve;
                    }
                }, {
                    key: 'NAME', get: function () {
                        return We;
                    }
                }, {
                    key: 'DATA_KEY', get: function () {
                        return 'bs.popover';
                    }
                }, {
                    key: 'Event', get: function () {
                        return qe;
                    }
                }, {
                    key: 'EVENT_KEY', get: function () {
                        return '.bs.popover';
                    }
                }, {
                    key: 'DefaultType', get: function () {
                        return ze;
                    }
                }]), o;
            }(Re), Ke = E();
            if (Ke) {
                var Xe = Ke.fn[We];
                Ke.fn[We] = Ye.jQueryInterface, Ke.fn[We].Constructor = Ye, Ke.fn[We].noConflict = function () {
                    return Ke.fn[We] = Xe, Ye.jQueryInterface;
                };
            }
            var Ge = 'scrollspy', $e = {offset: 10, method: 'auto', target: ''}, Ze = {offset: 'number', method: 'string', target: '(string|element)'}, Je = function () {
                function t(t, e) {
                    var n = this;
                    this._element = t, this._scrollElement = 'BODY' === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + ' .nav-link,' + this._config.target + ' .list-group-item,' + this._config.target + ' .dropdown-item', this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, z.on(this._scrollElement, 'scroll.bs.scrollspy', (function (t) {
                        return n._process(t);
                    })), this.refresh(), this._process(), k(t, 'bs.scrollspy', this);
                }

                var e = t.prototype;
                return e.refresh = function () {
                    var t = this, e = this._scrollElement === this._scrollElement.window ? 'offset' : 'position', n = 'auto' === this._config.method ? e : this._config.method,
                        i = 'position' === n ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), nt.find(this._selector).map((function (t) {
                        var e, o = h(t);
                        if (o && (e = nt.findOne(o)), e) {
                            var r = e.getBoundingClientRect();
                            if (r.width || r.height) return [et[n](e).top + i, o];
                        }
                        return null;
                    })).filter((function (t) {
                        return t;
                    })).sort((function (t, e) {
                        return t[0] - e[0];
                    })).forEach((function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1]);
                    }));
                }, e.dispose = function () {
                    O(this._element, 'bs.scrollspy'), z.off(this._scrollElement, '.bs.scrollspy'), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
                }, e._getConfig = function (t) {
                    if ('string' != typeof (t = r(r({}, $e), 'object' == typeof t && t ? t : {})).target && m(t.target)) {
                        var e = t.target.id;
                        e || (e = u(Ge), t.target.id = e), t.target = '#' + e;
                    }
                    return _(Ge, t, Ze), t;
                }, e._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }, e._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }, e._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                }, e._process = function () {
                    var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                    }
                }, e._activate = function (t) {
                    this._activeTarget = t, this._clear();
                    var e = this._selector.split(',').map((function (e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                    })), n = nt.findOne(e.join(','));
                    n.classList.contains('dropdown-item') ? (nt.findOne('.dropdown-toggle', n.closest('.dropdown')).classList.add('active'), n.classList.add('active')) : (n.classList.add('active'), nt.parents(n, '.nav, .list-group').forEach((function (t) {
                        nt.prev(t, '.nav-link, .list-group-item').forEach((function (t) {
                            return t.classList.add('active');
                        })), nt.prev(t, '.nav-item').forEach((function (t) {
                            nt.children(t, '.nav-link').forEach((function (t) {
                                return t.classList.add('active');
                            }));
                        }));
                    }))), z.trigger(this._scrollElement, 'activate.bs.scrollspy', {relatedTarget: t});
                }, e._clear = function () {
                    nt.find(this._selector).filter((function (t) {
                        return t.classList.contains('active');
                    })).forEach((function (t) {
                        return t.classList.remove('active');
                    }));
                }, t.jQueryInterface = function (e) {
                    return this.each((function () {
                        var n = L(this, 'bs.scrollspy');
                        if (n || (n = new t(this, 'object' == typeof e && e)), 'string' == typeof e) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]();
                        }
                    }));
                }, t.getInstance = function (t) {
                    return L(t, 'bs.scrollspy');
                }, n(t, null, [{
                    key: 'VERSION', get: function () {
                        return '5.0.0-alpha1';
                    }
                }, {
                    key: 'Default', get: function () {
                        return $e;
                    }
                }]), t;
            }();
            z.on(window, 'load.bs.scrollspy.data-api', (function () {
                nt.find('[data-spy="scroll"]').forEach((function (t) {
                    return new Je(t, et.getDataAttributes(t));
                }));
            }));
            var tn = E();
            if (tn) {
                var en = tn.fn[Ge];
                tn.fn[Ge] = Je.jQueryInterface, tn.fn[Ge].Constructor = Je, tn.fn[Ge].noConflict = function () {
                    return tn.fn[Ge] = en, Je.jQueryInterface;
                };
            }
            var nn = function () {
                function t(t) {
                    this._element = t, k(this._element, 'bs.tab', this);
                }

                var e = t.prototype;
                return e.show = function () {
                    var t = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains('active') || this._element.classList.contains('disabled'))) {
                        var e, n = d(this._element), i = this._element.closest('.nav, .list-group');
                        if (i) {
                            var o = 'UL' === i.nodeName || 'OL' === i.nodeName ? ':scope > li > .active' : '.active';
                            e = (e = nt.find(o, i))[e.length - 1];
                        }
                        var r = null;
                        if (e && (r = z.trigger(e, 'hide.bs.tab', {relatedTarget: this._element})), !(z.trigger(this._element, 'show.bs.tab', {relatedTarget: e}).defaultPrevented || null !== r && r.defaultPrevented)) {
                            this._activate(this._element, i);
                            var s = function () {
                                z.trigger(e, 'hidden.bs.tab', {relatedTarget: t._element}), z.trigger(t._element, 'shown.bs.tab', {relatedTarget: e});
                            };
                            n ? this._activate(n, n.parentNode, s) : s();
                        }
                    }
                }, e.dispose = function () {
                    O(this._element, 'bs.tab'), this._element = null;
                }, e._activate = function (t, e, n) {
                    var i = this, o = (!e || 'UL' !== e.nodeName && 'OL' !== e.nodeName ? nt.children(e, '.active') : nt.find(':scope > li > .active', e))[0],
                        r = n && o && o.classList.contains('fade'), s = function () {
                            return i._transitionComplete(t, o, n);
                        };
                    if (o && r) {
                        var a = p(o);
                        o.classList.remove('show'), z.one(o, 'transitionend', s), v(o, a);
                    } else s();
                }, e._transitionComplete = function (t, e, n) {
                    if (e) {
                        e.classList.remove('active');
                        var i = nt.findOne(':scope > .dropdown-menu .active', e.parentNode);
                        i && i.classList.remove('active'), 'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !1);
                    }
                    t.classList.add('active'), 'tab' === t.getAttribute('role') && t.setAttribute('aria-selected', !0), w(t), t.classList.contains('fade') && t.classList.add('show'), t.parentNode && t.parentNode.classList.contains('dropdown-menu') && (t.closest('.dropdown') && nt.find('.dropdown-toggle').forEach((function (t) {
                        return t.classList.add('active');
                    })), t.setAttribute('aria-expanded', !0)), n && n();
                }, t.jQueryInterface = function (e) {
                    return this.each((function () {
                        var n = L(this, 'bs.tab') || new t(this);
                        if ('string' == typeof e) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]();
                        }
                    }));
                }, t.getInstance = function (t) {
                    return L(t, 'bs.tab');
                }, n(t, null, [{
                    key: 'VERSION', get: function () {
                        return '5.0.0-alpha1';
                    }
                }]), t;
            }();
            z.on(document, 'click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (t) {
                t.preventDefault(), (L(this, 'bs.tab') || new nn(this)).show();
            }));
            var on = E();
            if (on) {
                var rn = on.fn.tab;
                on.fn.tab = nn.jQueryInterface, on.fn.tab.Constructor = nn, on.fn.tab.noConflict = function () {
                    return on.fn.tab = rn, nn.jQueryInterface;
                };
            }
            var sn = {animation: 'boolean', autohide: 'boolean', delay: 'number'}, an = {animation: !0, autohide: !0, delay: 500}, ln = function () {
                function t(t, e) {
                    this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners(), k(t, 'bs.toast', this);
                }

                var e = t.prototype;
                return e.show = function () {
                    var t = this;
                    if (!z.trigger(this._element, 'show.bs.toast').defaultPrevented) {
                        this._config.animation && this._element.classList.add('fade');
                        var e = function () {
                            t._element.classList.remove('showing'), t._element.classList.add('show'), z.trigger(t._element, 'shown.bs.toast'), t._config.autohide && (t._timeout = setTimeout((function () {
                                t.hide();
                            }), t._config.delay));
                        };
                        if (this._element.classList.remove('hide'), w(this._element), this._element.classList.add('showing'), this._config.animation) {
                            var n = p(this._element);
                            z.one(this._element, 'transitionend', e), v(this._element, n);
                        } else e();
                    }
                }, e.hide = function () {
                    var t = this;
                    if (this._element.classList.contains('show') && !z.trigger(this._element, 'hide.bs.toast').defaultPrevented) {
                        var e = function () {
                            t._element.classList.add('hide'), z.trigger(t._element, 'hidden.bs.toast');
                        };
                        if (this._element.classList.remove('show'), this._config.animation) {
                            var n = p(this._element);
                            z.one(this._element, 'transitionend', e), v(this._element, n);
                        } else e();
                    }
                }, e.dispose = function () {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains('show') && this._element.classList.remove('show'), z.off(this._element, 'click.dismiss.bs.toast'), O(this._element, 'bs.toast'), this._element = null, this._config = null;
                }, e._getConfig = function (t) {
                    return t = r(r(r({}, an), et.getDataAttributes(this._element)), 'object' == typeof t && t ? t : {}), _('toast', t, this.constructor.DefaultType), t;
                }, e._setListeners = function () {
                    var t = this;
                    z.on(this._element, 'click.dismiss.bs.toast', '[data-dismiss="toast"]', (function () {
                        return t.hide();
                    }));
                }, t.jQueryInterface = function (e) {
                    return this.each((function () {
                        var n = L(this, 'bs.toast');
                        if (n || (n = new t(this, 'object' == typeof e && e)), 'string' == typeof e) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e](this);
                        }
                    }));
                }, t.getInstance = function (t) {
                    return L(t, 'bs.toast');
                }, n(t, null, [{
                    key: 'VERSION', get: function () {
                        return '5.0.0-alpha1';
                    }
                }, {
                    key: 'DefaultType', get: function () {
                        return sn;
                    }
                }, {
                    key: 'Default', get: function () {
                        return an;
                    }
                }]), t;
            }(), cn = E();
            if (cn) {
                var un = cn.fn.toast;
                cn.fn.toast = ln.jQueryInterface, cn.fn.toast.Constructor = ln, cn.fn.toast.noConflict = function () {
                    return cn.fn.toast = un, ln.jQueryInterface;
                };
            }
            return {Alert: Y, Button: G, Carousel: at, Collapse: dt, Dropdown: ye, Modal: Le, Popover: Ye, ScrollSpy: Je, Tab: nn, Toast: ln, Tooltip: Re};
        }();
    }).call(this, n(3));
}, function (t, e) {
    var n;
    n = function () {
        return this;
    }();
    try {
        n = n || new Function('return this')();
    } catch (t) {
        'object' == typeof window && (n = window);
    }
    t.exports = n;
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
    var n = /^(?:0|[1-9]\d*)$/;
    var i, o, r = Object.prototype, s = r.hasOwnProperty, a = r.toString, l = r.propertyIsEnumerable, c = (i = Object.keys, o = Object, function (t) {
        return i(o(t));
    });

    function u(t, e) {
        var n = m(t) || function (t) {
            return function (t) {
                return function (t) {
                    return !!t && 'object' == typeof t;
                }(t) && v(t);
            }(t) && s.call(t, 'callee') && (!l.call(t, 'callee') || '[object Arguments]' == a.call(t));
        }(t) ? function (t, e) {
            for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
            return i;
        }(t.length, String) : [], i = n.length, o = !!i;
        for (var r in t) !e && !s.call(t, r) || o && ('length' == r || g(r, i)) || n.push(r);
        return n;
    }

    var f, h = function (t, e, n) {
        for (var i = -1, o = Object(t), r = n(t), s = r.length; s--;) {
            var a = r[f ? s : ++i];
            if (!1 === e(o[a], a, o)) break;
        }
        return t;
    };

    function d(t, e, n, i) {
        return function (t, e) {
            t && h(t, e, w);
        }(t, (function (t, o, r) {
            e(i, n(t), o, r);
        })), i;
    }

    function p(t) {
        if (n = (e = t) && e.constructor, i = 'function' == typeof n && n.prototype || r, e !== i) return c(t);
        var e, n, i, o = [];
        for (var a in Object(t)) s.call(t, a) && 'constructor' != a && o.push(a);
        return o;
    }

    function g(t, e) {
        return !!(e = null == e ? 9007199254740991 : e) && ('number' == typeof t || n.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }

    var m = Array.isArray;

    function v(t) {
        return null != t && function (t) {
            return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
        }(t.length) && !function (t) {
            var e = function (t) {
                var e = typeof t;
                return !!t && ('object' == e || 'function' == e);
            }(t) ? a.call(t) : '';
            return '[object Function]' == e || '[object GeneratorFunction]' == e;
        }(t);
    }

    var _, b, y = (_ = function (t, e, n) {
        t[e] = n;
    }, b = function (t) {
        return function () {
            return t;
        };
    }((function (t) {
        return t;
    })), function (t, e) {
        return d(t, _, b(e), {});
    });

    function w(t) {
        return v(t) ? u(t) : p(t);
    }

    t.exports = y;
}]);
