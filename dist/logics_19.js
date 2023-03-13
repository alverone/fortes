/*! For license information please see logics_19.js.LICENSE.txt */
(()=>{"use strict";const t="splide",n=`data-${t}`,e={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5};function i(t){t.length=0}function o(t){return!a(t)&&"object"==typeof t}function s(t){return Array.isArray(t)}function c(t){return"string"==typeof t}function r(t){return void 0===t}function a(t){return null===t}function l(t){return t instanceof HTMLElement}function u(t){return s(t)?t:[t]}function d(t,n){u(t).forEach(n)}function f(t,n){return t.indexOf(n)>-1}function h(t,n){return t.push(...u(n)),t}const g=Array.prototype;function p(t,n,e){return g.slice.call(t,n,e)}function m(t,n,e){t&&d(n,(n=>{n&&t.classList[e?"add":"remove"](n)}))}function v(t,n){m(t,c(n)?n.split(" "):n,!0)}function b(t,n){d(n,t.appendChild.bind(t))}function y(t,n){d(t,(t=>{const e=n.parentNode;e&&e.insertBefore(t,n)}))}function w(t,n){return l(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function _(t,n){return t?p(t.children).filter((t=>w(t,n))):[]}function k(t,n){return n?_(t,n)[0]:t.firstElementChild}function x(t,n,e){if(t){let i=Object.keys(t);i=e?i.reverse():i;for(let e=0;e<i.length;e++){const o=i[e];if("__proto__"!==o&&!1===n(t[o],o))break}}return t}function C(t){return p(arguments,1).forEach((n=>{x(n,((e,i)=>{t[i]=n[i]}))})),t}function E(t,n){return x(n,((n,e)=>{s(n)?t[e]=n.slice():o(n)?t[e]=E(o(t[e])?t[e]:{},n):t[e]=n})),t}function S(t,n){t&&d(n,(n=>{t.removeAttribute(n)}))}function A(t,n,e){o(n)?x(n,((n,e)=>{A(t,e,n)})):a(e)?S(t,n):t.setAttribute(n,String(e))}function P(t,n,e){const i=document.createElement(t);return n&&(c(n)?v(i,n):A(i,n)),e&&b(e,i),i}function L(t,n,e){if(r(e))return getComputedStyle(t)[n];if(!a(e)){const{style:i}=t;e=`${e}`,i[n]!==e&&(i[n]=e)}}function z(t,n){L(t,"display",n)}function D(t,n){return t.getAttribute(n)}function B(t,n){return t&&t.classList.contains(n)}function T(t){return t.getBoundingClientRect()}function N(t){d(t,(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)}))}function I(t){return k((new DOMParser).parseFromString(t,"text/html").body)}function M(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function j(t,n){return t&&t.querySelector(n)}function F(t,n){return p(t.querySelectorAll(n))}function R(t,n){m(t,n,!1)}function O(t){return c(t)?t:t?`${t}px`:""}function W(n,e=""){if(!n)throw new Error(`[${t}] ${e}`)}function q(t){setTimeout(t)}const X=()=>{};function H(t){return requestAnimationFrame(t)}const{min:Y,max:G,floor:U,ceil:Z,abs:J}=Math;function K(t,n,e,i){const o=Y(n,e),s=G(n,e);return i?o<t&&t<s:o<=t&&t<=s}function Q(t,n,e){const i=Y(n,e),o=G(n,e);return Y(G(i,t),o)}function V(t){return+(t>0)-+(t<0)}function tt(t,n){return d(n,(n=>{t=t.replace("%s",`${n}`)})),t}function nt(t){return t<10?`0${t}`:`${t}`}const et={};function it(t){return`${t}${nt(et[t]=(et[t]||0)+1)}`}const ot="mounted",st="ready",ct="move",rt="moved",at="shifted",lt="click",ut="visible",dt="hidden",ft="slide:keydown",ht="refresh",gt="updated",pt="resize",mt="resized",$t="repositioned",vt="scroll",bt="scrolled",yt="destroy",wt="navigation:mounted",_t="lazyload:loaded";function kt(t){const{event:n}=t,e={};let i=[];function o(t,n,e){s(t,n,((t,n)=>{i=i.filter((i=>!!(i[0]!==t||i[1]!==n||e&&i[2]!==e)||(t.removeEventListener(n,i[2],i[3]),!1)))}))}function s(t,n,e){d(t,(t=>{t&&n.split(" ").forEach(e.bind(null,t))}))}function c(){i=i.filter((t=>o(t[0],t[1]))),n.offBy(e)}return n.on(yt,c,e),{on:function(t,i,o){n.on(t,i,e,o)},off:function(t){n.off(t,e)},emit:n.emit,bind:function(t,n,e,o){s(t,n,((t,n)=>{i.push([t,n,e,o]),t.addEventListener(n,e,o)}))},unbind:o,destroy:c}}function xt(t,n,e,i){const{now:o}=Date;let s,c,r=0,a=!0,l=0;function u(){if(!a){const c=o()-s;if(c>=t?(r=1,s=o()):r=c/t,e&&e(r),1===r&&(n(),i&&++l>=i))return d();H(u)}}function d(){a=!0}function f(){cancelAnimationFrame(c),r=0,c=0,a=!0}return{start:function(n){!n&&f(),s=o()-(n?r*t:0),a=!1,H(u)},rewind:function(){s=o(),r=0,e&&e(r)},pause:d,cancel:f,set:function(n){t=n},isPaused:function(){return a}}}function Ct(t,n){let e;return function(){e||(e=xt(n||0,(()=>{t.apply(this,arguments),e=null}),null,1),e.start())}}const Et="ttb",St={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};function At(t,n,e){return{resolve:function(t,n){const{direction:i}=e;return St[t]["rtl"!==i||n?i===Et?0:-1:1]||t},orient:function(t){return t*("rtl"===e.direction?1:-1)}}}const Pt=t,Lt=`${t}__slider`,zt=`${t}__track`,Dt=`${t}__list`,Bt=`${t}__slide`,Tt=`${Bt}--clone`,Nt=`${Bt}__container`,It=`${t}__arrows`,Mt=`${t}__arrow`,jt=`${Mt}--prev`,Ft=`${Mt}--next`,Rt=`${t}__pagination`,Ot=`${t}__progress`,Wt=`${Ot}__bar`,qt=`${t}__autoplay`,Xt=`${t}__play`,Ht=`${t}__pause`,Yt="is-active",Gt="is-prev",Ut="is-next",Zt="is-visible",Jt="is-loading",Kt=[Yt,Zt,Gt,Ut,Jt],Qt={slide:Bt,clone:Tt,arrows:It,arrow:Mt,prev:jt,next:Ft,pagination:Rt,page:`${Rt}__page`,spinner:`${t}__spinner`};const Vt="role",tn="aria-controls",nn="aria-current",en="aria-label",on="aria-hidden",sn="tabindex",cn="aria-orientation",rn=[Vt,tn,nn,en,on,cn,sn,"disabled"],an="slide",ln="loop",un="fade";function dn(t,n,e,i){const{on:o,emit:s,bind:c,destroy:r}=kt(t),{Components:a,root:l,options:u}=t,{isNavigation:d,updateOnMove:f}=u,{resolve:h}=a.Direction,g=D(i,"style"),p=e>-1,$=k(i,`.${Nt}`),v=u.focusableNodes&&F(i,u.focusableNodes);let b;function y(){const o=p?e:n,s=tt(u.i18n.slideX,o+1),c=t.splides.map((t=>t.splide.root.id)).join(" ");A(i,en,s),A(i,tn,c),A(i,Vt,"menuitem"),x(C())}function w(){b||_()}function _(){if(!b){const{index:e}=t;x(C()),function(t){const n=!t&&!C();A(i,on,n||null),A(i,sn,!n&&u.slideFocus?0:null),v&&v.forEach((t=>{A(t,sn,n?-1:null)}));t!==B(i,Zt)&&(m(i,Zt,t),s(t?ut:dt,E))}(function(){if(t.is(un))return C();const n=T(a.Elements.track),e=T(i),o=h("left"),s=h("right");return U(n[o])<=Z(e[o])&&U(e[s])<=Z(n[s])}()),m(i,Gt,n===e-1),m(i,Ut,n===e+1)}}function x(t){t!==B(i,Yt)&&(m(i,Yt,t),d&&A(i,nn,t||null),s(t?"active":"inactive",E))}function C(){const{index:i}=t;return i===n||u.cloneStatus&&i===e}const E={index:n,slideIndex:e,slide:i,container:$,isClone:p,mount:function(){p||(i.id=`${l.id}-slide${nt(n+1)}`),c(i,"click keydown",(t=>{s("click"===t.type?lt:ft,E,t)})),o([ht,$t,at,rt,bt],_),o(wt,y),f&&o(ct,w)},destroy:function(){b=!0,r(),R(i,Kt),S(i,rn),A(i,"style",g)},update:_,style:function(t,n,e){L(e&&$||i,t,n)},isWithin:function(e,i){let o=J(e-n);return p||!u.rewind&&!t.is(ln)||(o=Y(o,t.length-o)),o<=i}};return E}const fn="http://www.w3.org/2000/svg",hn="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";const gn=`${n}-interval`;const pn={passive:!1,capture:!0},mn="touchmove mousemove",$n="touchend touchcancel mouseup";const vn=["Left","Right","Up","Down"];const bn=`${n}-lazy`,yn=`${bn}-srcset`,wn=`[${bn}], [${yn}]`;const _n=[" ","Enter","Spacebar"];var kn=Object.freeze({__proto__:null,Options:function(t,e,i){const o=Ct(l);let s,c,r;function a(t){t&&removeEventListener("resize",o)}function l(){const n=(e=t=>t[1].matches,p(c).filter(e)[0]||[]);var e;n[0]!==r&&function(n){const e=i.breakpoints[n]||s;e.destroy?(t.options=s,t.destroy("completely"===e.destroy)):(t.state.is(5)&&(a(!0),t.mount()),t.options=e)}(r=n[0])}return{setup:function(){try{E(i,JSON.parse(D(t.root,n)))}catch(t){W(!1,t.message)}s=E({},i);const{breakpoints:e}=i;if(e){const t="min"===i.mediaQuery;c=Object.keys(e).sort(((n,e)=>t?+e-+n:+n-+e)).map((n=>[n,matchMedia(`(${t?"min":"max"}-width:${n}px)`)])),l()}},mount:function(){c&&addEventListener("resize",o)},destroy:a}},Direction:At,Elements:function(n,e,o){const{on:s}=kt(n),{root:c}=n,r={},a=[];let l,u,d,f;function g(){!function(){u=k(c,`.${Lt}`),d=j(c,`.${zt}`),f=k(d,`.${Dt}`),W(d&&f,"A track/list element is missing."),h(a,_(f,`.${Bt}:not(.${Tt})`));const t=b(`.${qt}`),n=b(`.${It}`);C(r,{root:c,slider:u,track:d,list:f,slides:a,arrows:n,autoplay:t,prev:j(n,`.${jt}`),next:j(n,`.${Ft}`),bar:j(b(`.${Ot}`),`.${Wt}`),play:j(t,`.${Xt}`),pause:j(t,`.${Ht}`)})}(),function(){const n=c.id||it(t);c.id=n,d.id=d.id||`${n}-track`,f.id=f.id||`${n}-list`}(),v(c,l=y())}function p(){[c,d,f].forEach((t=>{S(t,"style")})),i(a),R(c,l)}function m(){p(),g()}function $(){R(c,l),v(c,l=y())}function b(t){return k(c,t)||k(u,t)}function y(){return[`${Pt}--${o.type}`,`${Pt}--${o.direction}`,o.drag&&`${Pt}--draggable`,o.isNavigation&&`${Pt}--nav`,Yt]}return C(r,{setup:g,mount:function(){s(ht,m,8),s(gt,$)},destroy:p})},Slides:function(t,n,e){const{on:o,emit:s,bind:r}=kt(t),{slides:a,list:h}=n.Elements,g=[];function p(){a.forEach(((t,n)=>{_(t,n,-1)}))}function m(){x((t=>{t.destroy()})),i(g)}function $(){m(),p()}function _(n,e,i){const o=dn(t,e,i,n);o.mount(),g.push(o)}function k(t){return t?C((t=>!t.isClone)):g}function x(t,n){k(n).forEach(t)}function C(t){return g.filter("function"==typeof t?t:n=>c(t)?w(n.slide,t):f(u(t),n.index))}return{mount:function(){p(),o(ht,$),o([ot,ht],(()=>{g.sort(((t,n)=>t.index-n.index))}))},destroy:m,update:function(){x((t=>{t.update()}))},register:_,get:k,getIn:function(t){const{Controller:i}=n,o=i.toIndex(t),s=i.hasFocus()?1:e.perPage;return C((t=>K(t.index,o,o+s-1)))},getAt:function(t){return C(t)[0]},add:function(t,n){d(t,(t=>{if(c(t)&&(t=I(t)),l(t)){const i=a[n];i?y(t,i):b(h,t),v(t,e.classes.slide),function(t,n){const e=F(t,"img");let{length:i}=e;i?e.forEach((t=>{r(t,"load error",(()=>{--i||n()}))})):n()}(t,s.bind(null,pt))}})),s(ht)},remove:function(t){N(C(t).map((t=>t.slide))),s(ht)},forEach:x,filter:C,style:function(t,n,e){x((i=>{i.style(t,n,e)}))},getLength:function(t){return t?a.length:g.length},isEnough:function(){return g.length>e.perPage}}},Layout:function(t,n,e){const{on:i,bind:s,emit:c}=kt(t),{Slides:r}=n,{resolve:a}=n.Direction,{root:l,track:u,list:d}=n.Elements,{getAt:f}=r;let h,g;function p(){g=null,h=e.direction===Et,L(l,"maxWidth",O(e.width)),L(u,a("paddingLeft"),$(!1)),L(u,a("paddingRight"),$(!0)),m()}function m(){const t=T(l);g&&g.width===t.width&&g.height===t.height||(L(u,"height",function(){let t="";h&&(t=v(),W(t,"height or heightRatio is missing."),t=`calc(${t} - ${$(!1)} - ${$(!0)})`);return t}()),r.style(a("marginRight"),O(e.gap)),r.style("width",(e.autoWidth?"":O(e.fixedWidth)||(h?"":b()))||null),r.style("height",O(e.fixedHeight)||(h?e.autoHeight?"":b():v())||null,!0),g=t,c(mt))}function $(t){const{padding:n}=e,i=a(t?"right":"left");return n&&O(n[i]||(o(n)?0:n))||"0px"}function v(){return O(e.height||T(d).width*e.heightRatio)}function b(){const t=O(e.gap);return`calc((100%${t&&` + ${t}`})/${e.perPage||1}${t&&` - ${t}`})`}function y(t,n){const e=f(t);if(e){const t=T(e.slide)[a("right")],i=T(d)[a("left")];return J(t-i)+(n?0:w())}return 0}function w(){const t=f(0);return t&&parseFloat(L(t.slide,a("marginRight")))||0}return{mount:function(){p(),s(window,"resize load",Ct(c.bind(this,pt))),i([gt,ht],p),i(pt,m)},listSize:function(){return T(d)[a("width")]},slideSize:function(t,n){const e=f(t||0);return e?T(e.slide)[a("width")]+(n?0:w()):0},sliderSize:function(){return y(t.length-1,!0)-y(-1,!0)},totalSize:y,getPadding:function(t){return parseFloat(L(u,a("padding"+(t?"Right":"Left"))))||0}}},Clones:function(t,n,e){const{on:o,emit:s}=kt(t),{Elements:r,Slides:a}=n,{resolve:l}=n.Direction,u=[];let d;function f(){(d=$())&&(!function(n){const i=a.get().slice(),{length:o}=i;if(o){for(;i.length<n;)h(i,i);h(i.slice(-n),i.slice(0,n)).forEach(((s,c)=>{const l=c<n,d=function(n,i){const o=n.cloneNode(!0);return v(o,e.classes.clone),o.id=`${t.root.id}-clone${nt(i+1)}`,o}(s.slide,c);l?y(d,i[0].slide):b(r.list,d),h(u,d),a.register(d,c-n+(l?0:o),s.index)}))}}(d),s(pt))}function g(){N(u),i(u)}function p(){g(),f()}function m(){d<$()&&s(ht)}function $(){let{clones:n}=e;if(t.is(ln)){if(!n){const i=function(t,n){if(c(n)){const e=P("div",{style:`width: ${n}; position: absolute;`},t);n=T(e).width,N(e)}return n}(r.list,e[l("fixedWidth")]);n=(i&&Z(T(r.track)[l("width")]/i)||e[l("autoWidth")]&&t.length||e.perPage)*(e.drag?(e.flickMaxPages||1)+1:2)}}else n=0;return n}return{mount:function(){f(),o(ht,p),o([gt,pt],m)},destroy:g}},Move:function(t,n,e){const{on:i,emit:o}=kt(t),{slideSize:s,getPadding:c,totalSize:a,listSize:l,sliderSize:u}=n.Layout,{resolve:d,orient:f}=n.Direction,{list:h,track:g}=n.Elements;let p;function m(){k()||(n.Scroll.cancel(),$(t.index),o($t))}function $(t){v(y(t,!0))}function v(n,e){if(!t.is(un)){const i=e?n:function(n){if(t.is(ln)){const t=f(n-w()),e=x(!1,n)&&t<0,i=x(!0,n)&&t>0;(e||i)&&(n=b(n,i))}return n}(n);h.style.transform=`translate${d("X")}(${i}px)`,n!==i&&o(at)}}function b(t,n){const e=t-_(n),i=u();return t-=f(i*(Z(J(e)/i)||1))*(n?1:-1)}function y(n,i){const o=f(a(n-1)-function(t){const{focus:n}=e;return"center"===n?(l()-s(t,!0))/2:+n*s(t)||0}(n));return i?function(n){e.trimSpace&&t.is(an)&&(n=Q(n,0,f(u()-l())));return n}(o):o}function w(){const t=d("left");return T(h)[t]-T(g)[t]+f(c(!1))}function _(t){return y(t?n.Controller.getEnd():0,!!e.trimSpace)}function k(){return t.state.is(4)&&e.waitForTransition}function x(t,n){n=r(n)?w():n;const e=!0!==t&&f(n)<f(_(!1)),i=!1!==t&&f(n)>f(_(!0));return e||i}return{mount:function(){p=n.Transition,i([ot,mt,gt,ht],m)},destroy:function(){S(h,"style")},move:function(i,s,c,r){if(!k()){const{set:a}=t.state,l=w();i!==s&&(p.cancel(),v(b(l,i>s),!0)),a(4),o(ct,s,c,i),p.start(s,(()=>{a(3),o(rt,s,c,i),"move"===e.trimSpace&&i!==c&&l===w()?n.Controller.go(i>c?">":"<",!1,r):r&&r()}))}},jump:$,translate:v,shift:b,cancel:function(){v(w()),p.cancel()},toIndex:function(t){const e=n.Slides.get();let i=0,o=1/0;for(let n=0;n<e.length;n++){const s=e[n].index,c=J(y(s,!0)-t);if(!(c<=o))break;o=c,i=s}return i},toPosition:y,getPosition:w,getLimit:_,isBusy:k,exceededLimit:x}},Controller:function(t,n,e){const{on:i}=kt(t),{Move:o}=n,{getPosition:s,getLimit:a}=o,{isEnough:l,getLength:u}=n.Slides,d=t.is(ln),f=t.is(an);let h,g,p,m=e.start||0,$=m;function v(){h=u(!0),g=e.perMove,p=e.perPage,m=Q(m,0,h-1)}function b(t,e,i,s,c){const r=e?t:A(t);n.Scroll.scroll(e||i?o.toPosition(r,!0):t,s,(()=>{P(o.toIndex(o.getPosition())),c&&c()}))}function y(t){return _(!1,t)}function w(t){return _(!0,t)}function _(t,n){const e=g||(L()?1:p),i=k(m+e*(t?-1:1),m);return-1!==i||!f||(o=s(),c=a(!t),r=1,J(o-c)<r)?n?i:C(i):t?0:x();var o,c,r}function k(t,n,i){if(l()){const o=x();t<0||t>o?t=K(0,t,n,!0)||K(o,n,t,!0)?E(S(t)):d?g||L()?t:t<0?-(h%p||p):h:e.rewind?t<0?o:0:-1:i||t===n||(t=g?t:E(S(n)+(t<n?-1:1)))}else t=-1;return t}function x(){let t=h-p;return(L()||d&&g)&&(t=h-1),G(t,0)}function C(t){return d?l()?t%h+(t<0?h:0):-1:t}function E(t){return Q(L()?t:p*t,0,x())}function S(t){return L()||(t=K(t,h-p,h-1)?h-1:t,t=U(t/p)),t}function A(t){const n=o.toIndex(t);return f?Q(n,0,x()):n}function P(t){t!==m&&($=m,m=t)}function L(){return!r(e.focus)||e.isNavigation}return{mount:function(){v(),i([gt,ht],v,9)},go:function(t,n,i){const s=function(t){let n=m;if(c(t)){const[,e,i]=t.match(/([+\-<>])(\d+)?/)||[];"+"===e||"-"===e?n=k(m+ +`${e}${+i||1}`,m,!0):">"===e?n=i?E(+i):y(!0):"<"===e&&(n=w(!0))}else n=d?t:Q(t,0,x());return n}(t);if(e.useScroll)b(s,!0,!0,e.speed,i);else{const t=C(s);t>-1&&!o.isBusy()&&(n||t!==m)&&(P(t),o.move(s,t,$,i))}},scroll:b,getNext:y,getPrev:w,getAdjacent:_,getEnd:x,setIndex:P,getIndex:function(t){return t?$:m},toIndex:E,toPage:S,toDest:A,hasFocus:L}},Arrows:function(t,n,e){const{on:i,bind:o,emit:s}=kt(t),{classes:c,i18n:r}=e,{Elements:a,Controller:l}=n;let u,d=a.arrows,f=a.prev,h=a.next;const g={};function p(){if(e.arrows&&(f&&h||(d=P("div",c.arrows),f=m(!0),h=m(!1),u=!0,b(d,[f,h]),y(d,k("slider"===e.arrows&&a.slider||t.root)))),f&&h)if(g.prev)z(d,!1===e.arrows?"none":"");else{const{id:t}=a.track;A(f,tn,t),A(h,tn,t),g.prev=f,g.next=h,function(){const{go:t}=l;i([ot,rt,gt,ht,bt],$),o(h,"click",(()=>{t(">",!0)})),o(f,"click",(()=>{t("<",!0)}))}(),s("arrows:mounted",f,h)}}function m(t){return I(`<button class="${c.arrow} ${t?c.prev:c.next}" type="button"><svg xmlns="${fn}" viewBox="0 0 40 40" width="40" height="40"><path d="${e.arrowPath||hn}" />`)}function $(){const n=t.index,e=l.getPrev(),i=l.getNext(),o=e>-1&&n<e?r.last:r.prev,c=i>-1&&n>i?r.first:r.next;f.disabled=e<0,h.disabled=i<0,A(f,en,o),A(h,en,c),s("arrows:updated",f,h,e,i)}return{arrows:g,mount:function(){p(),i(gt,p)},destroy:function(){u?N(d):(S(f,rn),S(h,rn))}}},Autoplay:function(t,n,e){const{on:i,bind:o,emit:s}=kt(t),c=xt(e.interval,t.go.bind(t,">"),(function(t){const{bar:n}=a;n&&L(n,"width",100*t+"%"),s("autoplay:playing",t)})),{isPaused:r}=c,{Elements:a}=n;let l,u,d;function f(t){const n=t?"pause":"play",i=a[n];i&&(A(i,tn,a.track.id),A(i,en,e.i18n[n]),o(i,"click",t?g:h))}function h(){r()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),u=l=d=!1,s("autoplay:play"))}function g(t=!0){r()||(c.pause(),s("autoplay:pause")),d=t}function p(){d||(l||u?g(!1):h())}function m(){const i=n.Slides.getAt(t.index);c.set(i&&+D(i.slide,gn)||e.interval)}return{mount:function(){const{autoplay:t}=e;t&&(f(!0),f(!1),function(){const{root:t}=a;e.pauseOnHover&&o(t,"mouseenter mouseleave",(t=>{l="mouseenter"===t.type,p()}));e.pauseOnFocus&&o(t,"focusin focusout",(t=>{u="focusin"===t.type,p()}));i([ct,vt,ht],c.rewind),i(ct,m)}(),"pause"!==t&&h())},destroy:c.cancel,play:h,pause:g,isPaused:r}},Cover:function(t,n,e){const{on:i}=kt(t);function o(t){n.Slides.forEach((n=>{const e=k(n.container||n.slide,"img");e&&e.src&&s(t,e,n)}))}function s(t,n,e){e.style("background",t?`center/cover no-repeat url("${n.src}")`:"",!0),z(n,t?"none":"")}return{mount:function(){e.cover&&(i(_t,((t,n)=>{s(!0,t,n)})),i([ot,gt,ht],o.bind(null,!0)))},destroy:function(){o(!1)}}},Scroll:function(t,n,e){const{on:i,emit:o}=kt(t),{Move:s}=n,{getPosition:c,getLimit:r,exceededLimit:a}=s;let l,u;function d(n,i,g,p){const m=c();let $=1;var v;i=i||(v=J(n-m),G(v/1.5,800)),u=g,h(),l=xt(i,f,(i=>{const o=c(),l=(m+(n-m)*function(t){const{easingFunc:n}=e;return n?n(t):1-Math.pow(1-t,4)}(i)-c())*$;var u;s.translate(o+l),t.is(an)&&!p&&a()&&($*=.6,J(l)<10&&(u=a(!1),d(r(!u),600,null,!0)))}),1),o(vt),l.start()}function f(){const n=c(),e=s.toIndex(n);K(e,0,t.length-1)||s.translate(s.shift(n,e>0),!0),u&&u(),o(bt)}function h(){l&&l.cancel()}function g(){l&&!l.isPaused()&&(h(),f())}return{mount:function(){i(ct,h),i([gt,ht],g)},destroy:h,scroll:d,cancel:g}},Drag:function(t,n,e){const{on:i,emit:s,bind:c,unbind:r}=kt(t),{Move:a,Scroll:l,Controller:u}=n,{track:d}=n.Elements,{resolve:f,orient:h}=n.Direction,{getPosition:g,exceededLimit:p}=a;let m,$,v,b,y,_,k,x,C,E=!1;function S(){const{drag:t}=e;j(!t),y="free"===t}function A(t){if(!x){const{noDrag:n}=e,i=I(t);!(!n||!w(t.target,n))||!i&&t.button||(a.isBusy()?M(t,!0):(C=i?d:window,v=null,b=null,k=!1,c(C,mn,P,pn),c(C,$n,L,pn),a.cancel(),l.cancel(),z(t)))}}function P(n){if(b||s("drag"),b=n,n.cancelable){const i=T(n)-T($);if(_){a.translate(m+function(n){return n/(E&&t.is(an)?5:1)}(i));const e=N(n)-N($)>200,o=E!==(E=p());(e||o)&&z(n),s("dragging"),k=!0,M(n)}else{let{dragMinThreshold:t}=e;t=o(t)?t:{mouse:0,touch:+t||10},_=J(i)>(I(n)?t.touch:t.mouse),B()&&M(n)}}}function L(i){r(C,mn,P),r(C,$n,L);const{index:o}=t;if(b){if(_||i.cancelable&&B()){const s=function(n){if(t.is(ln)||!E){const t=$===b&&v||$,e=T(b)-T(t),i=N(n)-N(t),o=N(n)-N(b)<200;if(i&&o)return e/i}return 0}(i),c=function(t){return g()+V(t)*Y(J(t)*(e.flickPower||600),y?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(s);y?u.scroll(c):t.is(un)?u.go(o+h(V(s))):u.go(u.toDest(c),!0),M(i)}s("dragged")}else y||g()===a.toPosition(o)||u.go(o,!0);_=!1}function z(t){v=$,$=t,m=g()}function D(t){!x&&k&&M(t,!0)}function B(){return J(T(b)-T($))>J(T(b,!0)-T($,!0))}function T(t,n){return(I(t)?t.touches[0]:t)[`page${f(n?"Y":"X")}`]}function N(t){return t.timeStamp}function I(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function j(t){x=t}return{mount:function(){c(d,mn,X,pn),c(d,$n,X,pn),c(d,"touchstart mousedown",A,pn),c(d,"click",D,{capture:!0}),c(d,"dragstart",M),i([ot,gt],S)},disable:j,isDragging:function(){return _}}},Keyboard:function(t,n,e){const{on:i,bind:o,unbind:s}=kt(t),{root:c}=n.Elements,{resolve:r}=n.Direction;let a,u;function d(){const{keyboard:t="global"}=e;t&&("focused"===t?(a=c,A(c,sn,0)):a=window,o(a,"keydown",m))}function h(){s(a,"keydown"),l(a)&&S(a,sn)}function g(){u=!0,q((()=>{u=!1}))}function p(){h(),d()}function m(n){if(!u){const{key:e}=n,i=f(vn,e)?`Arrow${e}`:e;i===r("ArrowLeft")?t.go("<"):i===r("ArrowRight")&&t.go(">")}}return{mount:function(){d(),i(gt,p),i(ct,g)},destroy:h}},LazyLoad:function(t,n,e){const{on:i,off:o,bind:s,emit:c}=kt(t),r="sequential"===e.lazyLoad;let a=[],l=0;function u(){f(),d()}function d(){n.Slides.forEach((t=>{F(t.slide,wn).forEach((n=>{const i=D(n,bn),o=D(n,yn);if(i!==n.src||o!==n.srcset){const s=e.classes.spinner,c=n.parentElement,r=k(c,`.${s}`)||P("span",s,c);A(r,Vt,"presentation"),a.push({_img:n,_Slide:t,src:i,srcset:o,_spinner:r}),!n.src&&z(n,"none")}}))})),r&&p()}function f(){l=0,a=[]}function h(){a=a.filter((n=>{const i=e.perPage*((e.preloadPages||1)+1)-1;return!n._Slide.isWithin(t.index,i)||g(n)})),a.length||o(rt)}function g(t){const{_img:n}=t;v(t._Slide.slide,Jt),s(n,"load error",(n=>{!function(t,n){const{_Slide:e}=t;R(e.slide,Jt),n||(N(t._spinner),z(t._img,""),c(_t,t._img,e),c(pt));r&&p()}(t,"error"===n.type)})),["src","srcset"].forEach((e=>{t[e]&&(A(n,e,t[e]),S(n,"src"===e?bn:yn))}))}function p(){l<a.length&&g(a[l++])}return{mount:function(){e.lazyLoad&&(d(),i(ht,u),r||i([ot,ht,rt,bt],h))},destroy:f}},Pagination:function(t,n,e){const{on:o,emit:s,bind:c,unbind:r}=kt(t),{Slides:a,Elements:l,Controller:u}=n,{hasFocus:d,getIndex:f}=u,h=[];let g;function p(){m(),e.pagination&&a.isEnough()&&(!function(){const{length:n}=t,{classes:i,i18n:o,perPage:s}=e,r="slider"===e.pagination&&l.slider||l.root,u=d()?n:Z(n/s);g=P("ul",i.pagination,r);for(let t=0;t<u;t++){const n=P("li",null,g),e=P("button",{class:i.page,type:"button"},n),r=a.getIn(t).map((t=>t.slide.id)),l=!d()&&s>1?o.pageX:o.slideX;c(e,"click",$.bind(null,t)),A(e,tn,r.join(" ")),A(e,en,tt(l,t+1)),h.push({li:n,button:e,page:t})}}(),s("pagination:mounted",{list:g,items:h},b(t.index)),y())}function m(){g&&(N(g),h.forEach((t=>{r(t.button,"click")})),i(h),g=null)}function $(t){u.go(`>${t}`,!0,(()=>{const n=a.getAt(u.toIndex(t));var e;n&&((e=n.slide).setActive&&e.setActive()||e.focus({preventScroll:!0}))}))}function b(t){return h[u.toPage(t)]}function y(){const t=b(f(!0)),n=b(f());t&&(R(t.button,Yt),S(t.button,nn)),n&&(v(n.button,Yt),A(n.button,nn,!0)),s("pagination:updated",{list:g,items:h},t,n)}return{items:h,mount:function(){p(),o([gt,ht],p),o([ct,bt],y)},destroy:m,getAt:b,update:y}},Sync:function(t,n,e){const{list:o}=n.Elements,s=[];function c(){t.splides.forEach((n=>{var e;!n.isParent&&(e=n.splide,[t,e].forEach((n=>{const i=kt(n),o=n===t?e:t;i.on(ct,((t,n,e)=>{o.go(o.is(ln)?e:t)})),s.push(i)})))})),e.isNavigation&&function(){const n=kt(t),{on:e}=n;e(lt,l),e(ft,u),e([ot,gt],a),A(o,Vt,"menu"),s.push(n),n.emit(wt,t.splides)}()}function r(){S(o,rn),s.forEach((t=>{t.destroy()})),i(s)}function a(){A(o,cn,e.direction!==Et?"horizontal":null)}function l(n){t.go(n.index)}function u(t,n){f(_n,n.key)&&(l(t),M(n))}return{mount:c,destroy:r,remount:function(){r(),c()}}},Wheel:function(t,n,e){const{bind:i}=kt(t);function o(i){if(i.cancelable){const{deltaY:o}=i;if(o){const s=o<0;t.go(s?"<":">"),function(i){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(i)}(s)&&M(i)}}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",o,pn)}}}});const xn={type:"slide",speed:400,waitForTransition:!0,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:Qt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function Cn(t,n,e){const{on:i}=kt(t);return{mount:function(){i([ot,ht],(()=>{q((()=>{n.Slides.style("transition",`opacity ${e.speed}ms ${e.easing}`)}))}))},start:function(t,e){const{track:i}=n.Elements;L(i,"height",O(T(i).height)),q((()=>{e(),L(i,"height","")}))},cancel:X}}function En(t,n,e){const{bind:i}=kt(t),{Move:o,Controller:s}=n,{list:c}=n.Elements;let r;function a(){l("")}function l(t){L(c,"transition",t)}return{mount:function(){i(c,"transitionend",(t=>{t.target===c&&r&&(a(),r())}))},start:function(n,i){const c=o.toPosition(n,!0),a=o.getPosition(),u=function(n){const{rewindSpeed:i}=e;if(t.is(an)&&i){const t=s.getIndex(!0),e=s.getEnd();if(0===t&&n>=e||t>=e&&0===n)return i}return e.speed}(n);J(c-a)>=1&&u>=1?(l(`transform ${u}ms ${e.easing}`),o.translate(c,!0),r=i):(o.jump(n),i())},cancel:a}}const Sn=class{constructor(t,n){this.event=function(){let t={};function n(n,i){e(n,((n,e)=>{const o=t[n];t[n]=o&&o.filter((t=>t._key?t._key!==i:i||t._namespace!==e))}))}function e(t,n){u(t).join(" ").split(" ").forEach((t=>{const e=t.split(".");n(e[0],e[1])}))}return{on:function(n,i,o,s=10){e(n,((n,e)=>{t[n]=t[n]||[],h(t[n],{_event:n,_callback:i,_namespace:e,_priority:s,_key:o}).sort(((t,n)=>t._priority-n._priority))}))},off:n,offBy:function(e){x(t,((t,i)=>{n(i,e)}))},emit:function(n){(t[n]||[]).forEach((t=>{t._callback.apply(t,p(arguments,1))}))},destroy:function(){t={}}}}(),this.Components={},this.state=function(t){let n=t;return{set:function(t){n=t},is:function(t){return f(u(t),n)}}}(1),this.splides=[],this._options={},this._Extensions={};const e=c(t)?j(document,t):t;W(e,`${e} is invalid.`),this.root=e,E(xn,Sn.defaults),E(E(this._options,xn),n||{})}mount(t,n){const{state:e,Components:i}=this;W(e.is([1,5]),"Already mounted!"),e.set(1),this._Components=i,this._Transition=n||this._Transition||(this.is(un)?Cn:En),this._Extensions=t||this._Extensions;return x(C({},kn,this._Extensions,{Transition:this._Transition}),((t,n)=>{const e=t(this,i,this._options);i[n]=e,e.setup&&e.setup()})),x(i,(t=>{t.mount&&t.mount()})),this.emit(ot),v(this.root,"is-initialized"),e.set(3),this.emit(st),this}sync(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._Components.Sync.remount(),t.Components.Sync.remount()),this}go(t){return this._Components.Controller.go(t),this}on(t,n){return this.event.on(t,n,null,20),this}off(t){return this.event.off(t),this}emit(t){return this.event.emit(t,...p(arguments,1)),this}add(t,n){return this._Components.Slides.add(t,n),this}remove(t){return this._Components.Slides.remove(t),this}is(t){return this._options.type===t}refresh(){return this.emit(ht),this}destroy(t=!0){const{event:n,state:e}=this;return e.is(1)?n.on(st,this.destroy.bind(this,t),this):(x(this._Components,(n=>{n.destroy&&n.destroy(t)}),!0),n.emit(yt),n.destroy(),t&&i(this.splides),e.set(5)),this}get options(){return this._options}set options(t){const{_options:n}=this;E(n,t),this.state.is(1)||this.emit(gt,n)}get length(){return this._Components.Slides.getLength(!0)}get index(){return this._Components.Controller.getIndex()}};let An=Sn;An.defaults={},An.STATES=e;var Pn,Ln=(t=>(t.Cozy="cozy",t.Japandi="japandi",t.Modern="modern",t.Fusion="fusion",t.NeoClassic="neoclassic",t))(Ln||{});(Pn=Ln||(Ln={})).fromString=function(t){return"cozy"===t?"cozy":"japandi"===t?"japandi":"neoclassic"===t?"neoclassic":"modern"===t?"modern":"fusion"===t?"fusion":"cozy"},Pn.fromNumber=function(t){return 0===t?"cozy":1===t?"japandi":2===t?"fusion":3===t?"modern":"neoclassic"},$((function(){const t=$(window).width();$(".choiceactive.card").toggleClass("choiceActiveBorder"),$("#laminat").prop("checked",!0);const n={arrows:!1,pagination:!1,speed:550,flickPower:400,breakpoints:{480:{pagination:!0,speed:650}}},e=new An(".slider-container.splide",n);if(e.mount(),$("input").each((function(){$(this).attr("name",$(this).data("name"))})),$(".slider-wrapper.splide").length){$(".fact-link").on("click",(function(){$(this).is(".active")||($(".fact-container.active").removeClass("active"),$(".fact-container").eq($(this).index()).addClass("active"),$(".fact-link.active").removeClass("active"),$(this).addClass("active"))})),$(".tab-new").on("click",(function(){if($(this).is(".active"))return;let t=$(this).index();$(".tab-new.active").removeClass("active"),$(this).addClass("active"),$(".slider-image-new").removeClass("active"),$(".slider-image-new").each((function(){$(this).index()==t&&$(this).addClass("active")}));const n=Ln.fromNumber(t);$(".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn").toggle(!1),$(`.calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide.${n}, .specification-${n}.color-1`).toggle(!0),$(".calculator-slide.splide__slide .calculator-slide").eq(t).toggle(!0),$(".calculator-tab.w--current").removeClass("w--current"),$(".calculator-tab").eq(t).addClass("w--current"),$(".color-tab.active, .slide-nav.active").removeClass("active"),$(".div-block-14 .color-tab").each((function(){0==$(this).index()&&$(this).addClass("active")})),e.refresh()}));const i=new An(".slider-wrapper.splide",n);i.mount(),i.on("move",(()=>setTimeout((()=>{$(".splide__list").css("height",$(".splide__slide.is-active .active img").css("height"))}),t>480?550:750))),$(".splide__list").css("height",$(".splide__slide.is-active .active img").css("height")),$(".slick-btn-prev, .slick-btn-next").on("click",(function(){let t=i.index,n="",e="";switch($(".slick-btn-prev, .slick-btn-next").removeClass("disabled"),0==$(this).index()?(i.go("<"),t---1==0&&$(this).addClass("disabled")):(i.go(">"),1+t++==4&&$(this).addClass("disabled")),t){case 0:n="",e="Дивитись спальню";break;case 1:n="Дивитись вітальню",e="Дивитись кухню";break;case 2:n="Дивитись спальню",e="Дивитись душ";break;case 3:n="Дивитись кухню",e="Дивитись ванну";break;case 4:n="Дивитись душ",e="";break;default:return}$(".slick-prev-text").html(n),$(".slick-next-text").html(e)}))}$(".calculator-tab").on("click",(function(){const t=$(this).index(),n=Ln.fromNumber(t);$(".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn").toggle(!1),$(`.calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide.${n}, .specification-${n}.color-1`).toggle(!0),$(".calculator-slide.splide__slide .calculator-slide").eq(t).toggle(!0),$(".calculator-tab.w--current").removeClass("w--current"),$(`.calculator-tab:eq(${t})`).addClass("w--current"),$(".color-tab.active, .slide-nav.active").removeClass("active"),$(".tab-new").eq(t).trigger("click"),$(".div-block-14 .color-tab").each((function(){0==$(this).index()&&$(this).addClass("active")})),e.refresh()})),$(".increment-field .increment").on("click",(function(){$(this).siblings(".increment-input").length<=0&&$(this).siblings(".increment-input").val(0)})),$("#wf-form-consult").on("submit",(t=>{if($("#agreementCheckbox").is(":checked")?$(".warning.agreementcheckbox").toggle(!1):$(".warning.agreementcheckbox").toggle(!0),$("#phone").val()?$(".warning.inputs.phone").toggle(!1):$(".warning.inputs.phone").toggle(!0),$("#name").val()?$(".warning.inputs.name").toggle(!1):$(".warning.inputs.name").toggle(!0),$(".warning").is(":visible"))return t.preventDefault(),!1;{t.preventDefault();let n=$("#submitBtn").html();$("#submitBtn").html("Зачекайте...");const e=new FormData($("#wf-form-consult").get(0));fetch("https://script.google.com/macros/s/AKfycbxaZQTrmT0wZsVWErYh9k8yxgTqUn1v9NfBTXyZCv01dFmRsp-4/exec",{method:"POST",body:e}).then((()=>{$("#submitBtn").html(n)})).catch((t=>console.error("Error!",t.message))).finally((()=>{window.location.href.includes("/ru")?window.location.assign("/ru/kdyakuiemo"):window.location.assign("/kdyakuiemo")}))}})),$(".choice").on("click",(function(t){if(!$("#appliancesBool").is(":checked"))return t.preventDefault(),$(".choiceActive").toggleClass("choiceActive"),void $(".choiceActiveBorder").toggleClass("choiceActiveBorder");$(this).hasClass("choiceActive")||($(".choiceActive").removeClass("choiceActive"),$(".choiceActiveBorder").removeClass("choiceActiveBorder"),$(this).addClass("choiceActive"),$(this).parent().addClass("choiceActiveBorder"),$("#node").is(":checked")&&$("#appliances").prop("checked","checked"))})),$("#node").on("change",(function(){$("#node").is(":checked")&&$(".choiceActive").length&&($(".choiceActive").toggleClass("choiceActive"),$(".choiceActiveBorder").toggleClass("choiceActiveBorder"))})),$("#appliancesBool").on("change",(function(){$(this).is(":checked")&&!$(".choiceActiveBorder").length&&($(".choice").first().toggleClass("choiceActive"),$(".choice").first().parent().toggleClass("choiceActiveBorder"))})),$(".hover-text").on("click",(function(){let t=$(this);t.siblings(".hover-modal").css("display","flex"),0==parseInt(t.siblings(".hover-modal").css("opacity"))?(function(t){const n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}(t.siblings(".hover-modal").get(0))||$([document.documentElement,document.body]).animate({scrollTop:t.siblings(".hover-modal").offset().top-96},450),t.siblings(".hover-modal").animate({bottom:42,opacity:1},200,"swing")):t.siblings(".hover-modal").animate({bottom:12,opacity:0},200,(function(){t.siblings(".hover-modal").toggle(!1)}))})),$(".submit-container .button").on("click",(function(t){t.preventDefault(),window.open($('.calculator-btn:not([style*="display: none"]) a').data("href"),"_blank")})),$(".closing-btn").on("click",(function(){let t=$(this);t.parent(".hover-modal").animate({bottom:12,opacity:0},200,(function(){t.parent(".hover-modal").toggle(!1)}))})),t<=480&&$(".tab-new").eq(1).trigger("click"),t>=992&&($(".preview-image, .blackbg-text").on({mouseenter:()=>$(".video-cursor").css("opacity",1),mouseleave:()=>$(".video-cursor").css("opacity",0)}),$(".project-link-image").on({mouseenter:()=>$(".project-dot").css("opacity",1),mouseleave:()=>$(".project-dot").css("opacity",0)}),$(".arrow-right").on({mouseenter:()=>$(".small-hover.right").css("opacity",1),mouseleave:()=>$(".small-hover.right").css("opacity",0)}),$(".arrow-left").on({mouseenter:()=>$(".small-hover.left").css("opacity",1),mouseleave:()=>$(".small-hover.left").css("opacity",0)}),$(".color-tab").on("click",(function(){let t=$(this).index(),n=$(".calculator-tab.w--current").index();const e=Ln.fromNumber(n);$(this).not(".active")&&($(".color-tab.active").removeClass("active"),$(".div-block-14 .color-tab").each((function(){$(this).index()==t&&$(this).addClass("active")})),$(".color-var, .wrap-border.calculator-btn").toggle(!1),$(`.calculator-slide .color-${t+1}, .wrap-border.calculator-btn.specification-${e}.color-${t+1}`).toggle(!0))})),$(".calculator-slider-option").on("click",(function(){$(".calculator-slider-option.active").removeClass("active"),$(this).addClass("active"),e.go(parseInt($(this).data("slider-index")))})),$(".calculator-arrow").on("click",(function(){$(this).is(".arrow-right")?e.go(">"):e.go("<"),$(".calculator-slider-option.active").removeClass("active"),$(`.calculator-slider-option:eq(${e.index})`).addClass("active")})),$("form input").on("keydown",(t=>{"Enter"==t.key&&t.preventDefault()}))),t<=767&&($(".star").on("mouseleave",(function(){$(this).removeClass("hidden"),$(this).siblings(".image-price").removeClass("active")})),$(".image-price").on("click",(function(){$(this).is(".active")&&($(this).siblings(".star").removeClass("hidden"),$(this).removeClass("active"))})),$(".star").on("click",(function(){$(this).is(".hidden")?($(this).removeClass("hidden"),$(this).siblings(".image-price").removeClass("active")):($(this).addClass("hidden"),$(this).siblings(".image-price").removeClass("active"))})))}))})();