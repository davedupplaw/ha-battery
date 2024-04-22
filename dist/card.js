/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = window, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$n = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(n, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, n)=>{
    $def2de46b9306e8a$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $19fe8e3abedf4df0$var$s;
const $19fe8e3abedf4df0$var$e = window, $19fe8e3abedf4df0$var$r = $19fe8e3abedf4df0$var$e.trustedTypes, $19fe8e3abedf4df0$var$h = $19fe8e3abedf4df0$var$r ? $19fe8e3abedf4df0$var$r.emptyScript : "", $19fe8e3abedf4df0$var$o = $19fe8e3abedf4df0$var$e.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $19fe8e3abedf4df0$var$l = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
}, $19fe8e3abedf4df0$var$d = "finalized";
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = $19fe8e3abedf4df0$var$l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || $19fe8e3abedf4df0$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d)) return !1;
        this[$19fe8e3abedf4df0$var$d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(i));
        } else void 0 !== i && s.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = $19fe8e3abedf4df0$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d] = !0, $19fe8e3abedf4df0$export$c7c07a37856565d.elementProperties = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $19fe8e3abedf4df0$var$o || $19fe8e3abedf4df0$var$o({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), (null !== ($19fe8e3abedf4df0$var$s = $19fe8e3abedf4df0$var$e.reactiveElementVersions) && void 0 !== $19fe8e3abedf4df0$var$s ? $19fe8e3abedf4df0$var$s : $19fe8e3abedf4df0$var$e.reactiveElementVersions = []).push("1.6.3");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $f58f44579a4747ac$var$t;
const $f58f44579a4747ac$var$i = window, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$o = "$lit$", $f58f44579a4747ac$var$n = `lit$${(Math.random() + "").slice(9)}$`, $f58f44579a4747ac$var$l = "?" + $f58f44579a4747ac$var$n, $f58f44579a4747ac$var$h = `<${$f58f44579a4747ac$var$l}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$u = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$d = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$c = Array.isArray, $f58f44579a4747ac$var$v = (t)=>$f58f44579a4747ac$var$c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $f58f44579a4747ac$var$a = "[ 	\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$a}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$a}*=${$f58f44579a4747ac$var$a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$w(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$w(2), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$E = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129, null, !1);
function $f58f44579a4747ac$var$P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === $f58f44579a4747ac$var$f ? "!--" === c[1] ? u = $f58f44579a4747ac$var$_ : void 0 !== c[1] ? u = $f58f44579a4747ac$var$m : void 0 !== c[2] ? ($f58f44579a4747ac$var$y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = $f58f44579a4747ac$var$p) : void 0 !== c[3] && (u = $f58f44579a4747ac$var$p) : u === $f58f44579a4747ac$var$p ? ">" === c[0] ? (u = null != l ? l : $f58f44579a4747ac$var$f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? $f58f44579a4747ac$var$p : '"' === c[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : u === $f58f44579a4747ac$var$$ || u === $f58f44579a4747ac$var$g ? u = $f58f44579a4747ac$var$p : u === $f58f44579a4747ac$var$_ || u === $f58f44579a4747ac$var$m ? u = $f58f44579a4747ac$var$f : (u = $f58f44579a4747ac$var$p, l = void 0);
        const w = u === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$h : v >= 0 ? (e.push(d), s.slice(0, v) + $f58f44579a4747ac$var$o + s.slice(v) + $f58f44579a4747ac$var$n + w) : s + $f58f44579a4747ac$var$n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        $f58f44579a4747ac$var$P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = $f58f44579a4747ac$var$V(t, i);
        if (this.el = $f58f44579a4747ac$var$N.createElement(a, e), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = $f58f44579a4747ac$var$C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith($f58f44579a4747ac$var$o) || i.startsWith($f58f44579a4747ac$var$n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + $f58f44579a4747ac$var$o).split($f58f44579a4747ac$var$n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $f58f44579a4747ac$var$H : "?" === i[1] ? $f58f44579a4747ac$var$L : "@" === i[1] ? $f58f44579a4747ac$var$z : $f58f44579a4747ac$var$k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if ($f58f44579a4747ac$var$y.test(h.tagName)) {
                    const t = h.textContent.split($f58f44579a4747ac$var$n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], $f58f44579a4747ac$var$u()), $f58f44579a4747ac$var$C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], $f58f44579a4747ac$var$u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === $f58f44579a4747ac$var$l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf($f58f44579a4747ac$var$n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += $f58f44579a4747ac$var$n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = $f58f44579a4747ac$var$d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $f58f44579a4747ac$var$S(t, r._$AS(t, i.values), r, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $f58f44579a4747ac$var$r).importNode(s, !0);
        $f58f44579a4747ac$var$C.currentNode = o;
        let n = $f58f44579a4747ac$var$C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new $f58f44579a4747ac$var$R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new $f58f44579a4747ac$var$Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = $f58f44579a4747ac$var$C.nextNode(), l++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$d(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $f58f44579a4747ac$var$v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$d(this._$AH) ? this._$AA.nextSibling.data = t : this.$($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new $f58f44579a4747ac$var$M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$E.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$E.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    T(t) {
        $f58f44579a4747ac$var$c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.k($f58f44579a4747ac$var$u()), this.k($f58f44579a4747ac$var$u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $f58f44579a4747ac$var$S(this, t, i, 0), n = !$f58f44579a4747ac$var$d(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $f58f44579a4747ac$var$S(this, e[s + l], i, l), h === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$f58f44579a4747ac$var$d(h) || h !== this._$AH[l]), h === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
const $f58f44579a4747ac$var$I = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $f58f44579a4747ac$var$I) : this.element.removeAttribute(this.name);
    }
}
class $f58f44579a4747ac$var$z extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $f58f44579a4747ac$var$S(this, t, i, 0)) && void 0 !== s ? s : $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $f58f44579a4747ac$export$45b790e32b2810ee && e !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (e === $f58f44579a4747ac$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    O: $f58f44579a4747ac$var$o,
    P: $f58f44579a4747ac$var$n,
    A: $f58f44579a4747ac$var$l,
    C: 1,
    M: $f58f44579a4747ac$var$V,
    L: $f58f44579a4747ac$var$M,
    R: $f58f44579a4747ac$var$v,
    D: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    V: $f58f44579a4747ac$var$k,
    H: $f58f44579a4747ac$var$L,
    N: $f58f44579a4747ac$var$z,
    U: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$Z
}, $f58f44579a4747ac$var$B = $f58f44579a4747ac$var$i.litHtmlPolyfillSupport;
null == $f58f44579a4747ac$var$B || $f58f44579a4747ac$var$B($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), (null !== ($f58f44579a4747ac$var$t = $f58f44579a4747ac$var$i.litHtmlVersions) && void 0 !== $f58f44579a4747ac$var$t ? $f58f44579a4747ac$var$t : $f58f44579a4747ac$var$i.litHtmlVersions = []).push("2.8.0");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $ab210b2da7b39b9d$var$l, $ab210b2da7b39b9d$var$o;
const $ab210b2da7b39b9d$export$8bf27daf9e8907c9 = (0, $19fe8e3abedf4df0$export$c7c07a37856565d);
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157.finalized = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, null === ($ab210b2da7b39b9d$var$l = globalThis.litElementHydrateSupport) || void 0 === $ab210b2da7b39b9d$var$l || $ab210b2da7b39b9d$var$l.call(globalThis, {
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$n = globalThis.litElementPolyfillSupport;
null == $ab210b2da7b39b9d$var$n || $ab210b2da7b39b9d$var$n({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== ($ab210b2da7b39b9d$var$o = globalThis.litElementVersions) && void 0 !== $ab210b2da7b39b9d$var$o ? $ab210b2da7b39b9d$var$o : globalThis.litElementVersions = []).push("3.3.3");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;





var $03ddd8217c3375aa$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    .error {
        color: red;
    }
    
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    svg {
        flex: 0;
        
        g.in {
            line {
                stroke-dasharray: 10px;
                stroke: cadetblue;
                stroke-dashoffset: 20px;
                animation: stroke 0.5s linear infinite;
            }
            text {
                fill: cadetblue;
                text-anchor: end;
            }
        }
        
        g.out {
            line {
                stroke-dasharray: 10px;
                stroke: cadetblue;
                stroke-dashoffset: 20px;
                animation: stroke 0.5s linear infinite;
            }
            text {
                fill: cadetblue;
            }
        }
        
        polygon.delta-up, polygon.delta-down {
            fill: white;
            animation: flash 1s linear infinite;
        }
    }

    @keyframes stroke {
        to {
            stroke-dashoffset: 0;
        }
    }
    
    @keyframes flash {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
    
    .charge {
        font-size: 16px;
    }

    .charge span {
        font-size: 12px;
        color: #888;
    }
`;



function $ba95f5c8a32314b8$export$3866196f8b775770(inputs) {
    const socEntity = inputs.socEntity;
    const kWhEntity = inputs.kWhEntity;
    const colour = inputs.colour;
    const soc = +socEntity.state;
    const kWh = +kWhEntity.state;
    const minPos = 465;
    const maxPos = 775;
    const height = maxPos - minPos;
    const size = +soc / 100 * height;
    const topPos = maxPos - size;
    const socStr = socEntity ? `${soc}%` : "";
    const kWhStr = kWhEntity ? `(${kWh.toFixed(2)} kWh)` : "";
    const chargingKw = +inputs.chargeW.state;
    const dischargingKw = +inputs.dischargeW.state;
    const chargingStr = chargingKw > 1000 ? `${(chargingKw / 1000).toFixed(2)} kW` : `${chargingKw.toFixed(0)} W`;
    const dischargingStr = dischargingKw > 1000 ? `${(dischargingKw / 1000).toFixed(2)} kW` : `${dischargingKw.toFixed(0)} W`;
    const chargingDeltaStr = chargingKw > dischargingKw ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`<polygon points="144,460 136,472 152,472" class="delta-up"/>` : ``;
    const dischargingDeltaStr = dischargingKw > chargingKw ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`<polygon points="144,472 136,460 152,460" class="delta-down"/>` : ``;
    // console.log("Battery state:", soc, kWh, chargingKw, dischargingKw);
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <div class="wrapper">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-100 0 450 400"
                    width="${inputs.sizePx}"
                    version="1.1"
            >
                <defs id="defs4">
                    <linearGradient id="linearGradient4084">
                        <stop id="stop4086" offset="0"/>
                        <stop id="stop4088" stop-opacity="0" offset="1"/>
                    </linearGradient>
                    <linearGradient id="linearGradient3863">
                        <stop id="stop3865" offset="0"/>
                        <stop id="stop3867" stop-color="#333" offset=".0714"/>
                        <stop id="stop3869" stop-color="#808080" offset=".15816"/>
                        <stop id="stop3871" stop-color="#e6e6e6" offset=".25005"/>
                        <stop id="stop3873" stop-color="#333" offset=".35198"/>
                        <stop id="stop3875" stop-color="#333" offset=".46945"/>
                        <stop id="stop3877" stop-color="#999" offset=".56627"/>
                        <stop id="stop3879" stop-color="#999" offset=".62756"/>
                        <stop id="stop3881" stop-color="#999" offset=".71424"/>
                        <stop id="stop3883" stop-color="#1a1a1a" offset=".82665"/>
                        <stop id="stop3885" stop-color="#1a1a1a" offset=".89796"/>
                        <stop id="stop3887" stop-color="#808080" offset="1"/>
                    </linearGradient>
                    <linearGradient id="linearGradient3776">
                        <stop id="stop3778" offset="0"/>
                        <stop id="stop3800" stop-color="#1a1a1a" offset=".11222"/>
                        <stop id="stop3784" stop-color="#808080" offset=".15816"/>
                        <stop id="stop3786" stop-color="#e6e6e6" offset=".20923"/>
                        <stop id="stop3788" stop-color="#e6e6e6" offset=".26527"/>
                        <stop id="stop3790" stop-color="#333" offset=".37762"/>
                        <stop id="stop3802" stop-color="#1a1a1a" offset=".50509"/>
                        <stop id="stop3792" stop-color="#333" offset=".59185"/>
                        <stop id="stop3794" stop-color="#b3b3b3" offset=".69383"/>
                        <stop id="stop3796" stop-color="#b3b3b3" offset=".72962"/>
                        <stop id="stop3798" stop-color="#1a1a1a" offset=".82654"/>
                        <stop id="stop3780" offset="1"/>
                    </linearGradient>
                    <filter id="filter4272" height="1.6248" width="1.0664" y="-.31241" x="-.033187"
                            color-interpolation-filters="sRGB">
                        <feGaussianBlur id="feGaussianBlur4274" stdDeviation="3.8133258"/>
                    </filter>
                    <linearGradient
                            id="linearGradient4786"
                            y2="615.98"
                            xlink:href="#linearGradient3776"
                            gradientUnits="userSpaceOnUse"
                            x2="238.4"
                            gradientTransform="matrix(-.23228 0 0 -.040355 176.47 467.74)"
                            y1="616.99"
                            x1="40.406"
                    />
                    <linearGradient
                            id="linearGradient4788"
                            y2="615.98"
                            xlink:href="#linearGradient3776"
                            gradientUnits="userSpaceOnUse"
                            x2="238.4"
                            gradientTransform="translate(3.9467 -.081604)"
                            y1="616.99"
                            x1="40.406"
                    />
                    <linearGradient
                            id="linearGradient4790"
                            y2="615.98"
                            xlink:href="#linearGradient3863"
                            gradientUnits="userSpaceOnUse"
                            x2="238.4"
                            gradientTransform="matrix(-1 0 0 -.88215 283.95 1180.7)"
                            y1="616.99"
                            x1="40.406"
                    />
                    <linearGradient
                            id="linearGradient4796"
                            y2="490.22"
                            gradientUnits="userSpaceOnUse"
                            x2="47.857"
                            y1="490.22"
                            x1="61.429"
                    >
                        <stop id="stop4666" stop-color="#fff" offset="0"/>
                        <stop id="stop4668" stop-color="#fff" stop-opacity="0" offset="1"/>
                    </linearGradient>
                    <linearGradient
                            id="linearGradient4798"
                            y2="623.32"
                            xlink:href="#linearGradient3909"
                            gradientUnits="userSpaceOnUse"
                            x2="73.83"
                            gradientTransform="translate(3.9467 -.081604)"
                            y1="623.32"
                            x1="68.284"
                    />
                    <linearGradient
                            id="linearGradient4800"
                            y2="622.84"
                            xlink:href="#linearGradient4084"
                            gradientUnits="userSpaceOnUse"
                            x2="736.34"
                            gradientTransform="translate(-521.82 -3.5522)"
                            y1="622.84"
                            x1="722.21"
                    />
                </defs>
                <g class="out" style="opacity: ${dischargingKw > 0 ? 1 : 0}">
                    <line x1="220" y1="300" x2="330" y2="300" stroke="#000" stroke-width="10"/>
                    <text x="230" y="330" font-size="20" class="label">Discharging</text>
                    <text x="230" y="280" font-size="20" class="value">${dischargingStr}</text>
                </g>
                <g class="in" style="opacity: ${chargingKw > 0 ? 1 : 0}">
                    <line x1="-80" y1="300" x2="25" y2="300" stroke="#000" stroke-width="10"/>
                    <text x="15" y="330" font-size="20" class="label">Charging</text>
                    <text x="15" y="280" font-size="20" class="value">${chargingStr}</text>
                </g>
                <g id="layer1" transform="translate(-25.193 -427.28)">
                    <g id="g4684" transform="translate(4.0203 -4)">
                        <path
                                id="path4250"
                                opacity=".62996"
                                d="m281.83 528.12c0 8.0894-61.734 14.647-137.89 14.647-76.152 0-137.89-6.5578-137.89-14.647 0-8.0894 61.734-14.647 137.89-14.647 76.152 0 137.89 6.5578 137.89 14.647z"
                                transform="matrix(.80764 0 0 1 27.69 275.36)"
                                filter="url(#filter4272)"
                                fill="#4d4d4d"
                        />
                        <g id="g4672">
                            <path
                                    id="path3946"
                                    d="m167.18 449.48s-15.476 0.20177-23.228 0.20177c-7.7525 0-23.228-0.20177-23.228-0.20177v-14.124s15.476-0.20178 23.228-0.20178c7.7525 0 23.228 0.20178 23.228 0.20178z"
                                    fill="url(#linearGradient4786)"
                            />
                            <path
                                    id="rect2985"
                                    d="m43.947 452.28s66.625-5 100-5 100 5 100 5v350s-66.625 5-100 5-100-5-100-5z"
                                    fill="url(#linearGradient4788)"
                            />

                            <path
                                    id="path3804"
                                    d="m43.947 461.13s66.625-4.7615 100-4.7615 100 4.7615 100 4.7615v333.3s-66.625 4.7615-100 4.7615-100-4.7615-100-4.7615z"
                            />

                            <path
                                    id="path3814"
                                    d="m243.95 781.66s-66.625 4.4108-100 4.4108-100-4.4108-100-4.4108v-308.75s66.625-4.4108 100-4.4108 100 4.4108 100 4.4108z"
                                    fill="url(#linearGradient4790)"
                            />

                            <!-- Filling -->
                            <path
                                    id="path3897"
                                    d="m243.86 782s-66.625 3.9337-100 3.9337-100-3.9337-100-3.9337v-${size + 7}s66.625-3.9337 100-3.9337 100 3.9337 100 3.9337z"
                                    fill="${colour}"
                            />
                            <!-- Top -->
                            <path
                                    id="path3950"
                                    d="m43.947 ${topPos}s66.625-0.10357 100-0.10357 100 0.10357 100 0.10357v7.2496s-66.625 0.10357-100 0.10357-100-0.10357-100-0.10357z"
                                    fill="${colour}"
                            />
                            <path
                                    id="path3889"
                                    opacity=".6"
                                    d="m63.129 775.6s-4.7077 4.4108-7.066 4.4108-7.066-4.4108-7.066-4.4108v-308.75s4.7077-4.4108 7.066-4.4108 7.066 4.4108 7.066 4.4108z"
                                    fill="url(#linearGradient4796)"
                            />
                            <path
                                    id="path3893"
                                    d="m77.777 777.62s-1.8474 4.4108-2.7728 4.4108c-0.92543 0-2.7728-4.4108-2.7728-4.4108v-308.75s1.8474-4.4108 2.7728-4.4108c0.92543 0 2.7728 4.4108 2.7728 4.4108z"
                                    fill="url(#linearGradient4798)"
                            />
                            <path
                                    id="path3939"
                                    opacity=".25306"
                                    d="m143.95 503.85c-33.375 0-99.643-1.1101-99.643-1.1101l-0.36 280.14c90.563-50.63 181.33-195.87 159.34-279.52-19.587-1.0415-44.114 0.49022-59.344 0.49022z"
                                    fill="#e5ffd5"
                            />
                            <path
                                    id="path4642"
                                    opacity=".6"
                                    d="m214.52 773.67s-4.7077 4.4108-7.066 4.4108-7.066-4.4108-7.066-4.4108v-308.75s4.7077-4.4108 7.066-4.4108 7.066 4.4108 7.066 4.4108z"
                                    fill="url(#linearGradient4800)"
                            />
                            ${chargingDeltaStr}
                            ${dischargingDeltaStr}
                        </g>
                    </g>
                </g>
            </svg>
            <div class="charge">Charge: ${socStr} <span>${kWhStr}</span></div>
        </div>
    `;
}


class $bf513b85805031e6$export$6c09f32188f2c974 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static styles = (0, $03ddd8217c3375aa$export$2e2bcd8739ae039);
    static getConfigElement() {
        return document.createElement("battery-card-editor");
    }
    static getStubConfig() {
        return {
            socEntity: "",
            kWhEntity: "",
            dischargeWEntity: "",
            chargeWEntity: "",
            header: "Battery",
            colours: "25:#aa0000,50:#ffaa00,100:#00ff00",
            sizePx: 200
        };
    }
    static get properties() {
        return {
            _config: {
                state: true
            },
            _header: {
                state: true
            },
            _socEntity: {
                state: true
            },
            _kWhEntity: {
                state: true
            },
            _dischargeWEntity: {
                state: true
            },
            _chargeWEntity: {
                state: true
            },
            _colour: {
                state: true
            }
        };
    }
    _hass;
    // noinspection JSUnusedGlobalSymbols
    setConfig(config) {
        this._config = config;
        this._header = config.header === "" ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : config.header;
        this._socEntity = config.socEntity === "" ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : this.toEntity(config.socEntity);
        this._kWhEntity = config.kWhEntity === "" ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : this.toEntity(config.kWhEntity);
        this._dischargeWEntity = config.dischargeWEntity === "" ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : this.toEntity(config.dischargeWEntity);
        this._chargeWEntity = config.chargeWEntity === "" ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : this.toEntity(config.chargeWEntity);
        console.log("Battery config updates:", config);
        if (this._hass) this.hass = this._hass;
    }
    set hass(hass) {
        this._hass = hass;
        this._socEntity = this.updateEntity(this._socEntity);
        this._kWhEntity = this.updateEntity(this._kWhEntity);
        this._dischargeWEntity = this.updateEntity(this._dischargeWEntity);
        this._chargeWEntity = this.updateEntity(this._chargeWEntity);
        const cols = this._config.colours.split(",").map((x)=>{
            let strings = x.split(":");
            return {
                upto: +strings[0],
                colour: strings[1]
            };
        });
        this._colour = (cols.find((col)=>col.upto >= +this._socEntity.state) || cols[cols.length - 1]).colour;
    }
    toEntity(entity) {
        return {
            sensor: entity,
            name: entity
        };
    }
    updateEntity(entity) {
        const state = this._hass.states[entity.sensor];
        const fn = state?.attributes?.friendly_name;
        entity.name = fn ? fn : entity.sensor;
        entity.state = state?.state;
        return {
            ...entity
        };
    }
    render() {
        const content = !this._socEntity?.state ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)` <p class="error">${this._socEntity?.name} is unavailable.</p> ` : (0, $ba95f5c8a32314b8$export$3866196f8b775770)({
            socEntity: this._socEntity,
            kWhEntity: this._kWhEntity,
            colour: this._colour,
            dischargeW: this._dischargeWEntity,
            chargeW: this._chargeWEntity,
            sizePx: this._config.sizePx
        });
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-card header="${this._header}">
                <div class="card-content">${content}</div>
            </ha-card>
        `;
    }
}



class $fc7d6e547b6fcb14$export$40be632222f2f3fe extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            _hass: {},
            _config: {
                state: true
            }
        };
    }
    static styles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
        .table {
            display: table;
        }

        .row {
            display: table-row;
        }

        .cell {
            display: table-cell;
            padding: 0.5em;
        }
    `;
    setConfig(config) {
        this._config = config;
    }
    set hass(hass) {
        this._hass = hass;
    }
    render() {
        const values = {
            "Header": this._config.header,
            "Preferred Height (px)": this._config.sizePx,
            "Battery SOC (%) Sensor": this._config.socEntity,
            "Battery SOC (kWh) Sensor": this._config.kWhEntity,
            "Battery Charge Rate (W) Sensor": this._config.chargeWEntity,
            "Battery Discharge Rate (W) Sensor": this._config.dischargeWEntity
        };
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-form
                    .hass=${this._hass}
                    .data=${values}
                    .schema=${[
            {
                name: "Header",
                selector: {
                    text: {}
                }
            },
            {
                name: "Preferred Height (px)",
                selector: {
                    number: {}
                }
            },
            {
                name: "Battery SOC (%) Sensor",
                selector: {
                    entity: {}
                }
            },
            {
                name: "Battery SOC (kWh) Sensor",
                selector: {
                    entity: {}
                }
            },
            {
                name: "Battery Charge Rate (W) Sensor",
                selector: {
                    entity: {}
                }
            },
            {
                name: "Battery Discharge Rate (W) Sensor",
                selector: {
                    entity: {}
                }
            }
        ]}
                    @value-changed=${this.handleChangedEvent}
            ></ha-form>
        `;
    }
    handleChangedEvent(changedEvent) {
        // this._config is readonly, copy needed
        const newConfig = Object.assign({}, this._config);
        const values = changedEvent.detail.value;
        newConfig.header = changedEvent.target.value;
        newConfig.socEntity = values["Battery SOC (%) Sensor"];
        newConfig.kWhEntity = values["Battery SOC (kWh) Sensor"];
        newConfig.chargeWEntity = values["Battery Charge Rate (W) Sensor"];
        newConfig.dischargeWEntity = values["Battery Discharge Rate (W) Sensor"];
        newConfig.sizePx = values["Preferred Height (px)"];
        const messageEvent = new CustomEvent("config-changed", {
            detail: {
                config: newConfig
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(messageEvent);
    }
}


customElements.define("battery-card", (0, $bf513b85805031e6$export$6c09f32188f2c974));
customElements.define("battery-card-editor", (0, $fc7d6e547b6fcb14$export$40be632222f2f3fe));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "battery-card",
    name: "Battery Card",
    description: "Display a battery SOC"
});


//# sourceMappingURL=card.js.map
