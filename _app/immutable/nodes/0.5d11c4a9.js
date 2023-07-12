import{o as Le,s as ne,n as W,c as xe,u as Ae,g as Ce,d as we}from"../chunks/scheduler.a0009ae6.js";import{S as se,i as ie,g as a,s as p,m as T,h as r,j as s,x as X,c as m,n as V,f as l,k as g,a as te,y as e,r as $e,u as be,v as Ie,d as le,t as oe,w as ye}from"../chunks/index.d0d955fd.js";import{b as O}from"../chunks/paths.f5286489.js";let De=b=>{const o=Array.from(document.querySelectorAll(".grid img, .new_grid img"));if("IntersectionObserver"in window){const i=new IntersectionObserver((f,v)=>{f.forEach(c=>{if(c.isIntersecting){const u=c.target;u.src=u.dataset.src,i.unobserve(u)}})});o.forEach(f=>i.observe(f))}};const He=!0;Le(()=>{De()});const Ne=Object.freeze(Object.defineProperty({__proto__:null,prerender:He},Symbol.toStringTag,{value:"Module"}));function Me(b){let o,i,f="free shipping on orders over $100 NZD",v,c,u,h,d,t,n,I,U="home",x,k,A,z,C,q,w,S,D,j,H,N,y,M,P='<img src="img/logo.png"/>';return{c(){o=a("header"),i=a("div"),i.textContent=f,v=p(),c=a("div"),u=a("a"),h=T("bandhan"),d=p(),t=a("nav"),n=a("ul"),I=a("li"),I.textContent=U,x=p(),k=a("li"),A=a("a"),z=T("shop"),C=p(),q=a("li"),w=a("a"),S=T("doll care"),D=p(),j=a("li"),H=a("a"),N=T("contact"),y=p(),M=a("li"),M.innerHTML=P,this.h()},l(F){o=r(F,"HEADER",{});var E=s(o);i=r(E,"DIV",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-z2r0lu"&&(i.textContent=f),v=m(E),c=r(E,"DIV",{class:!0});var L=s(c);u=r(L,"A",{href:!0});var G=s(u);h=V(G,"bandhan"),G.forEach(l),d=m(L),t=r(L,"NAV",{});var J=s(t);n=r(J,"UL",{});var _=s(n);I=r(_,"LI",{class:!0,"data-svelte-h":!0}),X(I)!=="svelte-1vn31qi"&&(I.textContent=U),x=m(_),k=r(_,"LI",{});var Y=s(k);A=r(Y,"A",{href:!0});var K=s(A);z=V(K,"shop"),K.forEach(l),Y.forEach(l),C=m(_),q=r(_,"LI",{});var R=s(q);w=r(R,"A",{href:!0});var ee=s(w);S=V(ee,"doll care"),ee.forEach(l),R.forEach(l),D=m(_),j=r(_,"LI",{});var Z=s(j);H=r(Z,"A",{href:!0});var B=s(H);N=V(B,"contact"),B.forEach(l),Z.forEach(l),y=m(_),M=r(_,"LI",{"data-svelte-h":!0}),X(M)!=="svelte-xq5umz"&&(M.innerHTML=P),_.forEach(l),J.forEach(l),L.forEach(l),E.forEach(l),this.h()},h(){g(i,"class","top_banner"),g(u,"href",O+"/"),g(I,"class","active"),g(A,"href",O+"/shop"),g(w,"href",O+"/doll_care"),g(H,"href",O+"/contact"),g(c,"class","logo")},m(F,E){te(F,o,E),e(o,i),e(o,v),e(o,c),e(c,u),e(u,h),e(c,d),e(c,t),e(t,n),e(n,I),e(n,x),e(n,k),e(k,A),e(A,z),e(n,C),e(n,q),e(q,w),e(w,S),e(n,D),e(n,j),e(j,H),e(H,N),e(n,y),e(n,M)},p:W,i:W,o:W,d(F){F&&l(o)}}}class Te extends se{constructor(o){super(),ie(this,o,null,Me,ne,{})}}function Ve(b){let o,i,f,v,c="site information",u,h,d,t,n,I,U,x,k,A,z,C,q,w,S,D,j,H,N,y,M,P,F,E,L,G,J,_,Y='<h2>sign up for special offers!</h2> <div style="display:flex"><input id="signup_email" type="email" placeholder="email..."/> <button id="signup_button">sign up</button></div>',K,R,ee='<h2>get in touch</h2> <div class="social"><a href="https://www.instagram.com/bandhan_nz" target="_blank"><i class="icon-instagram"></i></a> <a href="https://facebook.com/bandhanNZ/" target="_blank"><i class="icon-facebook"></i></a> <a href="mailto:info@bandhan.co.nz"><i class="icon-email"></i></a></div>';return{c(){o=a("footer"),i=a("div"),f=a("div"),v=a("h2"),v.textContent=c,u=p(),h=a("ul"),d=a("li"),t=a("a"),n=T("home"),I=p(),U=a("li"),x=a("a"),k=T("shop"),A=p(),z=a("li"),C=a("a"),q=T("doll care"),w=p(),S=a("li"),D=a("a"),j=T("contact"),H=p(),N=a("li"),y=a("a"),M=T("shipping policy"),P=a("a"),F=p(),E=a("li"),L=a("a"),G=T("privacy policy"),J=p(),_=a("div"),_.innerHTML=Y,K=p(),R=a("div"),R.innerHTML=ee,this.h()},l(Z){o=r(Z,"FOOTER",{});var B=s(o);i=r(B,"DIV",{class:!0});var Q=s(i);f=r(Q,"DIV",{});var ae=s(f);v=r(ae,"H2",{"data-svelte-h":!0}),X(v)!=="svelte-c4qg1b"&&(v.textContent=c),u=m(ae),h=r(ae,"UL",{});var $=s(h);d=r($,"LI",{});var ce=s(d);t=r(ce,"A",{href:!0});var fe=s(t);n=V(fe,"home"),fe.forEach(l),ce.forEach(l),I=m($),U=r($,"LI",{});var he=s(U);x=r(he,"A",{href:!0});var de=s(x);k=V(de,"shop"),de.forEach(l),he.forEach(l),A=m($),z=r($,"LI",{});var ue=s(z);C=r(ue,"A",{href:!0});var ve=s(C);q=V(ve,"doll care"),ve.forEach(l),ue.forEach(l),w=m($),S=r($,"LI",{});var _e=s(S);D=r(_e,"A",{href:!0});var pe=s(D);j=V(pe,"contact"),pe.forEach(l),_e.forEach(l),H=m($),N=r($,"LI",{});var me=s(N);y=r(me,"A",{href:!0});var re=s(y);M=V(re,"shipping policy"),P=r(re,"A",{}),s(P).forEach(l),re.forEach(l),me.forEach(l),F=m($),E=r($,"LI",{});var ge=s(E);L=r(ge,"A",{href:!0});var Ee=s(L);G=V(Ee,"privacy policy"),Ee.forEach(l),ge.forEach(l),$.forEach(l),ae.forEach(l),J=m(Q),_=r(Q,"DIV",{"data-svelte-h":!0}),X(_)!=="svelte-15y2kx8"&&(_.innerHTML=Y),K=m(Q),R=r(Q,"DIV",{"data-svelte-h":!0}),X(R)!=="svelte-1l74zh2"&&(R.innerHTML=ee),Q.forEach(l),B.forEach(l),this.h()},h(){g(t,"href",O+"/"),g(x,"href",O+"/shop"),g(C,"href",O+"/doll_care"),g(D,"href",O+"/contact"),g(y,"href",O+"/shipping"),g(L,"href",O+"/privacy"),g(i,"class","footer_grid")},m(Z,B){te(Z,o,B),e(o,i),e(i,f),e(f,v),e(f,u),e(f,h),e(h,d),e(d,t),e(t,n),e(h,I),e(h,U),e(U,x),e(x,k),e(h,A),e(h,z),e(z,C),e(C,q),e(h,w),e(h,S),e(S,D),e(D,j),e(h,H),e(h,N),e(N,y),e(y,M),e(y,P),e(h,F),e(h,E),e(E,L),e(L,G),e(i,J),e(i,_),e(i,K),e(i,R)},p:W,i:W,o:W,d(Z){Z&&l(o)}}}class Oe extends se{constructor(o){super(),ie(this,o,null,Ve,ne,{})}}function ke(b){let o,i,f,v,c,u;o=new Te({});const h=b[1].default,d=xe(h,b,b[0],null);return c=new Oe({}),{c(){$e(o.$$.fragment),i=p(),f=a("div"),d&&d.c(),v=p(),$e(c.$$.fragment),this.h()},l(t){be(o.$$.fragment,t),i=m(t),f=r(t,"DIV",{class:!0});var n=s(f);d&&d.l(n),n.forEach(l),v=m(t),be(c.$$.fragment,t),this.h()},h(){g(f,"class","content")},m(t,n){Ie(o,t,n),te(t,i,n),te(t,f,n),d&&d.m(f,null),te(t,v,n),Ie(c,t,n),u=!0},p(t,[n]){d&&d.p&&(!u||n&1)&&Ae(d,h,t,t[0],u?we(h,t[0],n,null):Ce(t[0]),null)},i(t){u||(le(o.$$.fragment,t),le(d,t),le(c.$$.fragment,t),u=!0)},o(t){oe(o.$$.fragment,t),oe(d,t),oe(c.$$.fragment,t),u=!1},d(t){t&&(l(i),l(f),l(v)),ye(o,t),d&&d.d(t),ye(c,t)}}}function ze(b,o,i){let{$$slots:f={},$$scope:v}=o;return b.$$set=c=>{"$$scope"in c&&i(0,v=c.$$scope)},[v,f]}class Fe extends se{constructor(o){super(),ie(this,o,ze,ke,ne,{})}}export{Fe as component,Ne as universal};
