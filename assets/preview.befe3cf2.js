var w=Object.defineProperty;var r=(n,t)=>w(n,"name",{value:t,configurable:!0});import{w as d,d as E}from"./iframe.44f012d1.js";var y=d.LOGLEVEL,p=d.console,e={trace:1,debug:2,info:3,warn:4,error:5,silent:10},O=y,l=e[O]||e.info,f={trace:r(function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return l<=e.trace&&p.trace.apply(p,[t].concat(a))},"trace"),debug:r(function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return l<=e.debug&&p.debug.apply(p,[t].concat(a))},"debug"),info:r(function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return l<=e.info&&p.info.apply(p,[t].concat(a))},"info"),warn:r(function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return l<=e.warn&&p.warn.apply(p,[t].concat(a))},"warn"),error:r(function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return l<=e.error&&p.error.apply(p,[t].concat(a))},"error"),log:r(function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return l<e.silent&&p.log.apply(p,[t].concat(a))},"log")},S=d.window,A=r(function(t,i){return t.length===i.length&&t.every(function(a,o){return a===i[o]})},"areDepsEqual"),g=r(function(){return new Error("Storybook preview hooks can only be called inside decorators and story functions.")},"invalidHooksError");function L(){return S.STORYBOOK_HOOKS_CONTEXT||null}r(L,"getHooksContextOrNull");function c(){var n=L();if(n==null)throw g();return n}r(c,"getHooksContextOrThrow");function H(n,t,i){var a=c();if(a.currentPhase==="MOUNT"){i!=null&&!Array.isArray(i)&&f.warn("".concat(n," received a final argument that is not an array (instead, received ").concat(i,"). When specified, the final argument must be an array."));var o={name:n,deps:i};return a.currentHooks.push(o),t(o),o}if(a.currentPhase==="UPDATE"){var u=a.getNextHook();if(u==null)throw new Error("Rendered more hooks than during the previous render.");return u.name!==n&&f.warn("Storybook has detected a change in the order of Hooks".concat(a.currentDecoratorName?" called by ".concat(a.currentDecoratorName):"",". This will lead to bugs and errors if not fixed.")),i!=null&&u.deps==null&&f.warn("".concat(n," received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.")),i!=null&&u.deps!=null&&i.length!==u.deps.length&&f.warn("The final argument passed to ".concat(n,` changed size between renders. The order and size of this array must remain constant.
Previous: `).concat(u.deps,`
Incoming: `).concat(i)),(i==null||u.deps==null||!A(i,u.deps))&&(t(u),u.deps=i),u}throw g()}r(H,"useHook");function v(n,t,i){var a=H(n,function(u){u.memoizedState=t()},i),o=a.memoizedState;return o}r(v,"useMemoLike");function T(n,t){return v("useMemo",n,t)}r(T,"useMemo");function M(n,t){var i=c(),a=v("useEffect",function(){return{create:n}},t);i.currentEffects.includes(a)||i.currentEffects.push(a)}r(M,"useEffect");var x=r(function(t){var i=Array.isArray(t)?t:[t];i.forEach(P)},"clearStyles"),P=r(function(t){var i=d.document.getElementById(t);i&&i.parentElement&&i.parentElement.removeChild(i)},"clearStyle"),z=r(function(t,i){var a=d.document.getElementById(t);if(a)a.innerHTML!==i&&(a.innerHTML=i);else{var o=d.document.createElement("style");o.setAttribute("id",t),o.innerHTML=i,d.document.head.appendChild(o)}},"addOutlineStyles"),h="outline",b;function N(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}r(N,"_taggedTemplateLiteral");function C(n){return E(b||(b=N([`
    `,` body {
      outline: 1px solid #2980b9 !important;
    }

    `,` article {
      outline: 1px solid #3498db !important;
    }

    `,` nav {
      outline: 1px solid #0088c3 !important;
    }

    `,` aside {
      outline: 1px solid #33a0ce !important;
    }

    `,` section {
      outline: 1px solid #66b8da !important;
    }

    `,` header {
      outline: 1px solid #99cfe7 !important;
    }

    `,` footer {
      outline: 1px solid #cce7f3 !important;
    }

    `,` h1 {
      outline: 1px solid #162544 !important;
    }

    `,` h2 {
      outline: 1px solid #314e6e !important;
    }

    `,` h3 {
      outline: 1px solid #3e5e85 !important;
    }

    `,` h4 {
      outline: 1px solid #449baf !important;
    }

    `,` h5 {
      outline: 1px solid #c7d1cb !important;
    }

    `,` h6 {
      outline: 1px solid #4371d0 !important;
    }

    `,` main {
      outline: 1px solid #2f4f90 !important;
    }

    `,` address {
      outline: 1px solid #1a2c51 !important;
    }

    `,` div {
      outline: 1px solid #036cdb !important;
    }

    `,` p {
      outline: 1px solid #ac050b !important;
    }

    `,` hr {
      outline: 1px solid #ff063f !important;
    }

    `,` pre {
      outline: 1px solid #850440 !important;
    }

    `,` blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    `,` ol {
      outline: 1px solid #ff050c !important;
    }

    `,` ul {
      outline: 1px solid #d90416 !important;
    }

    `,` li {
      outline: 1px solid #d90416 !important;
    }

    `,` dl {
      outline: 1px solid #fd3427 !important;
    }

    `,` dt {
      outline: 1px solid #ff0043 !important;
    }

    `,` dd {
      outline: 1px solid #e80174 !important;
    }

    `,` figure {
      outline: 1px solid #ff00bb !important;
    }

    `,` figcaption {
      outline: 1px solid #bf0032 !important;
    }

    `,` table {
      outline: 1px solid #00cc99 !important;
    }

    `,` caption {
      outline: 1px solid #37ffc4 !important;
    }

    `,` thead {
      outline: 1px solid #98daca !important;
    }

    `,` tbody {
      outline: 1px solid #64a7a0 !important;
    }

    `,` tfoot {
      outline: 1px solid #22746b !important;
    }

    `,` tr {
      outline: 1px solid #86c0b2 !important;
    }

    `,` th {
      outline: 1px solid #a1e7d6 !important;
    }

    `,` td {
      outline: 1px solid #3f5a54 !important;
    }

    `,` col {
      outline: 1px solid #6c9a8f !important;
    }

    `,` colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    `,` button {
      outline: 1px solid #da8301 !important;
    }

    `,` datalist {
      outline: 1px solid #c06000 !important;
    }

    `,` fieldset {
      outline: 1px solid #d95100 !important;
    }

    `,` form {
      outline: 1px solid #d23600 !important;
    }

    `,` input {
      outline: 1px solid #fca600 !important;
    }

    `,` keygen {
      outline: 1px solid #b31e00 !important;
    }

    `,` label {
      outline: 1px solid #ee8900 !important;
    }

    `,` legend {
      outline: 1px solid #de6d00 !important;
    }

    `,` meter {
      outline: 1px solid #e8630c !important;
    }

    `,` optgroup {
      outline: 1px solid #b33600 !important;
    }

    `,` option {
      outline: 1px solid #ff8a00 !important;
    }

    `,` output {
      outline: 1px solid #ff9619 !important;
    }

    `,` progress {
      outline: 1px solid #e57c00 !important;
    }

    `,` select {
      outline: 1px solid #e26e0f !important;
    }

    `,` textarea {
      outline: 1px solid #cc5400 !important;
    }

    `,` details {
      outline: 1px solid #33848f !important;
    }

    `,` summary {
      outline: 1px solid #60a1a6 !important;
    }

    `,` command {
      outline: 1px solid #438da1 !important;
    }

    `,` menu {
      outline: 1px solid #449da6 !important;
    }

    `,` del {
      outline: 1px solid #bf0000 !important;
    }

    `,` ins {
      outline: 1px solid #400000 !important;
    }

    `,` img {
      outline: 1px solid #22746b !important;
    }

    `,` iframe {
      outline: 1px solid #64a7a0 !important;
    }

    `,` embed {
      outline: 1px solid #98daca !important;
    }

    `,` object {
      outline: 1px solid #00cc99 !important;
    }

    `,` param {
      outline: 1px solid #37ffc4 !important;
    }

    `,` video {
      outline: 1px solid #6ee866 !important;
    }

    `,` audio {
      outline: 1px solid #027353 !important;
    }

    `,` source {
      outline: 1px solid #012426 !important;
    }

    `,` canvas {
      outline: 1px solid #a2f570 !important;
    }

    `,` track {
      outline: 1px solid #59a600 !important;
    }

    `,` map {
      outline: 1px solid #7be500 !important;
    }

    `,` area {
      outline: 1px solid #305900 !important;
    }

    `,` a {
      outline: 1px solid #ff62ab !important;
    }

    `,` em {
      outline: 1px solid #800b41 !important;
    }

    `,` strong {
      outline: 1px solid #ff1583 !important;
    }

    `,` i {
      outline: 1px solid #803156 !important;
    }

    `,` b {
      outline: 1px solid #cc1169 !important;
    }

    `,` u {
      outline: 1px solid #ff0430 !important;
    }

    `,` s {
      outline: 1px solid #f805e3 !important;
    }

    `,` small {
      outline: 1px solid #d107b2 !important;
    }

    `,` abbr {
      outline: 1px solid #4a0263 !important;
    }

    `,` q {
      outline: 1px solid #240018 !important;
    }

    `,` cite {
      outline: 1px solid #64003c !important;
    }

    `,` dfn {
      outline: 1px solid #b4005a !important;
    }

    `,` sub {
      outline: 1px solid #dba0c8 !important;
    }

    `,` sup {
      outline: 1px solid #cc0256 !important;
    }

    `,` time {
      outline: 1px solid #d6606d !important;
    }

    `,` code {
      outline: 1px solid #e04251 !important;
    }

    `,` kbd {
      outline: 1px solid #5e001f !important;
    }

    `,` samp {
      outline: 1px solid #9c0033 !important;
    }

    `,` var {
      outline: 1px solid #d90047 !important;
    }

    `,` mark {
      outline: 1px solid #ff0053 !important;
    }

    `,` bdi {
      outline: 1px solid #bf3668 !important;
    }

    `,` bdo {
      outline: 1px solid #6f1400 !important;
    }

    `,` ruby {
      outline: 1px solid #ff7b93 !important;
    }

    `,` rt {
      outline: 1px solid #ff2f54 !important;
    }

    `,` rp {
      outline: 1px solid #803e49 !important;
    }

    `,` span {
      outline: 1px solid #cc2643 !important;
    }

    `,` br {
      outline: 1px solid #db687d !important;
    }

    `,` wbr {
      outline: 1px solid #db175b !important;
    }`])),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)}r(C,"outlineCSS");var D=r(function(t,i){var a=i.globals,o=a[h]===!0,u=i.viewMode==="docs",s=T(function(){var m=u?"#anchor--".concat(i.id," .docs-story"):".sb-show-main";return C(m)},[i]);return M(function(){var m=u?"addon-outline-docs-".concat(i.id):"addon-outline";return o?z(m,s):x(m),function(){x(m)}},[o,s,i]),t()},"withOutline");function I(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}r(I,"_defineProperty");var B=[D],K=I({},h,!1);export{B as decorators,K as globals};
//# sourceMappingURL=preview.befe3cf2.js.map
