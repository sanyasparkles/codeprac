var D=Object.defineProperty;var G=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>(G(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function g(){}function B(e){return e()}function j(){return Object.create(null)}function w(e){e.forEach(B)}function M(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function K(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function b(){return O(" ")}function Q(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function W(e){return Array.from(e.childNodes)}function X(e,t){t=""+t,e.data!==t&&(e.data=t)}let N;function $(e){N=e}const m=[],I=[];let _=[];const V=[],Y=Promise.resolve();let S=!1;function Z(){S||(S=!0,Y.then(T))}function C(e){_.push(e)}const E=new Set;let h=0;function T(){if(h!==0)return;const e=N;do{try{for(;h<m.length;){const t=m[h];h++,$(t),ee(t.$$)}}catch(t){throw m.length=0,h=0,t}for($(null),m.length=0,h=0;I.length;)I.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];E.has(n)||(E.add(n),n())}_.length=0}while(m.length);for(;V.length;)V.pop()();S=!1,E.clear(),$(e)}function ee(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}function te(e){const t=[],n=[];_.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),_=t}const v=new Set;let ne;function F(e,t){e&&e.i&&(v.delete(e),e.i(t))}function re(e,t,n,r){if(e&&e.o){if(v.has(e))return;v.add(e),ne.c.push(()=>{v.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function oe(e){e&&e.c()}function H(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),C(()=>{const i=e.$$.on_mount.map(B).filter(M);e.$$.on_destroy?e.$$.on_destroy.push(...i):w(i),e.$$.on_mount=[]}),o.forEach(C)}function R(e,t){const n=e.$$;n.fragment!==null&&(te(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(m.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,r,o,i,c=null,f=[-1]){const a=N;$(e);const s=e.$$={fragment:null,ctx:[],props:i,update:g,not_equal:o,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:j(),dirty:f,skip_bound:!1,root:t.target||a.$$.root};c&&c(s.root);let d=!1;if(s.ctx=n?n(e,t.props||{},(u,y,...A)=>{const P=A.length?A[0]:y;return s.ctx&&o(s.ctx[u],s.ctx[u]=P)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](P),d&&ie(e,u)),y}):[],s.update(),d=!0,w(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const u=W(t.target);s.fragment&&s.fragment.l(u),u.forEach(L)}else s.fragment&&s.fragment.c();t.intro&&F(e.$$.fragment),H(e,t.target,t.anchor),T()}$(a)}class z{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){R(this,1),this.$destroy=g}$on(t,n){if(!M(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);function ue(e){let t,n,r,o,i;return{c(){t=p("button"),n=O("count is "),r=O(e[0])},m(c,f){K(c,t,f),l(t,n),l(t,r),o||(i=Q(t,"click",e[1]),o=!0)},p(c,[f]){f&1&&X(r,c[0])},i:g,o:g,d(c){c&&L(t),o=!1,i()}}}function ce(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class fe extends z{constructor(t){super(),U(this,t,ce,ue,q,{})}}function le(e){let t,n,r,o,i,c,f,a,s,d;return i=new fe({}),{c(){t=p("main"),n=p("h1"),n.textContent="Vite + Svelte",r=b(),o=p("div"),oe(i.$$.fragment),c=b(),f=p("p"),f.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',a=b(),s=p("p"),s.textContent="Click on the Vite and Svelte logos to learn more",k(o,"class","card"),k(s,"class","read-the-docs svelte-11cv5lq")},m(u,y){K(u,t,y),l(t,n),l(t,r),l(t,o),H(i,o,null),l(t,c),l(t,f),l(t,a),l(t,s),d=!0},p:g,i(u){d||(F(i.$$.fragment,u),d=!0)},o(u){re(i.$$.fragment,u),d=!1},d(u){u&&L(t),R(i)}}}class ae extends z{constructor(t){super(),U(this,t,null,le,q,{})}}new ae({target:document.getElementById("app")});
