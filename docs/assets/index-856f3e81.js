var te=Object.defineProperty;var ne=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var j=(e,t,n)=>(ne(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function y(){}function H(e){return e()}function U(){return Object.create(null)}function N(e){e.forEach(H)}function z(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let S;function K(e,t){return e===t?!0:(S||(S=document.createElement("a")),S.href=t,e===S.href)}function re(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function x(){return q(" ")}function oe(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ie(e){return Array.from(e.childNodes)}function se(e,t){t=""+t,e.data!==t&&(e.data=t)}let B;function L(e){B=e}const $=[],T=[];let v=[];const F=[],le=Promise.resolve();let P=!1;function ce(){P||(P=!0,le.then(J))}function V(e){v.push(e)}const k=new Set;let g=0;function J(){if(g!==0)return;const e=B;do{try{for(;g<$.length;){const t=$[g];g++,L(t),ue(t.$$)}}catch(t){throw $.length=0,g=0,t}for(L(null),$.length=0,g=0;T.length;)T.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];k.has(n)||(k.add(n),n())}v.length=0}while($.length);for(;F.length;)F.pop()();P=!1,k.clear(),L(e)}function ue(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}function fe(e){const t=[],n=[];v.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),v=t}const C=new Set;let ae;function Q(e,t){e&&e.i&&(C.delete(e),e.i(t))}function de(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),ae.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function he(e){e&&e.c()}function W(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),V(()=>{const i=e.$$.on_mount.map(H).filter(z);e.$$.on_destroy?e.$$.on_destroy.push(...i):N(i),e.$$.on_mount=[]}),o.forEach(V)}function X(e,t){const n=e.$$;n.fragment!==null&&(fe(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&($.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,r,o,i,c,f=[-1]){const d=B;L(e);const s=e.$$={fragment:null,ctx:[],props:i,update:y,not_equal:o,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:U(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};c&&c(s.root);let w=!1;if(s.ctx=n?n(e,t.props||{},(a,b,..._)=>{const p=_.length?_[0]:b;return s.ctx&&o(s.ctx[a],s.ctx[a]=p)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](p),w&&pe(e,a)),b}):[],s.update(),w=!0,N(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const a=ie(t.target);s.fragment&&s.fragment.l(a),a.forEach(I)}else s.fragment&&s.fragment.c();t.intro&&Q(e.$$.fragment),W(e,t.target,t.anchor),J()}L(d)}class Z{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!z(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_e);const me=""+new URL("svelte-a39f39b7.svg",import.meta.url).href,ge=""+new URL("../vite.svg",import.meta.url).href;function $e(e){let t,n,r,o,i;return{c(){t=h("button"),n=q("count is "),r=q(e[0])},m(c,f){G(c,t,f),l(t,n),l(t,r),o||(i=oe(t,"click",e[1]),o=!0)},p(c,[f]){f&1&&se(r,c[0])},i:y,o:y,d(c){c&&I(t),o=!1,i()}}}function ve(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class ye extends Z{constructor(t){super(),Y(this,t,ve,$e,D,{})}}function we(e){let t,n,r,o,i,c,f,d,s,w,a,b,_,p,M,A,R,E,O;return p=new ye({}),{c(){t=h("main"),n=h("div"),r=h("a"),o=h("img"),c=x(),f=h("a"),d=h("img"),w=x(),a=h("h1"),a.textContent="Vite + Svelte",b=x(),_=h("div"),he(p.$$.fragment),M=x(),A=h("p"),A.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',R=x(),E=h("p"),E.textContent="Click on the Vite and Svelte logos to learn more",K(o.src,i=ge)||u(o,"src",i),u(o,"class","logo svelte-11cv5lq"),u(o,"alt","Vite Logo"),u(r,"href","https://vitejs.dev"),u(r,"target","_blank"),u(r,"rel","noreferrer"),K(d.src,s=me)||u(d,"src",s),u(d,"class","logo svelte svelte-11cv5lq"),u(d,"alt","Svelte Logo"),u(f,"href","https://svelte.dev"),u(f,"target","_blank"),u(f,"rel","noreferrer"),u(_,"class","card"),u(E,"class","read-the-docs svelte-11cv5lq")},m(m,ee){G(m,t,ee),l(t,n),l(n,r),l(r,o),l(n,c),l(n,f),l(f,d),l(t,w),l(t,a),l(t,b),l(t,_),W(p,_,null),l(t,M),l(t,A),l(t,R),l(t,E),O=!0},p:y,i(m){O||(Q(p.$$.fragment,m),O=!0)},o(m){de(p.$$.fragment,m),O=!1},d(m){m&&I(t),X(p)}}}class be extends Z{constructor(t){super(),Y(this,t,null,we,D,{})}}new be({target:document.getElementById("app")});
