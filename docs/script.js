!function(){var t={757:function(t,n,e){t.exports=e(666)},666:function(t){var n=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var o=n&&n.prototype instanceof b?n:b,i=Object.create(o.prototype),a=new F(r||[]);return i._invoke=function(t,n,e){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===m)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=d;var u=f(t,n,e);if("normal"===u.type){if(r=e.done?h:p,u.arg===m)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=h,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",d="executing",h="completed",m={};function b(){}function y(){}function g(){}var v={};u(v,i,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(j([])));w&&w!==e&&r.call(w,i)&&(v=w);var k=g.prototype=b.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function L(t,n){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function _(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function Z(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return y.prototype=g,u(k,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new L(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=j,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),m},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),m}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},326:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,{Z:function(){return r}})},861:function(t,n,e){"use strict";function r(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var a=t.apply(n,e);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(n,{Z:function(){return o}})},671:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,{Z:function(){return r}})},144:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}e.d(n,{Z:function(){return o}})},120:function(t,n,e){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}e.d(n,{Z:function(){return r}})},136:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(611);function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&(0,r.Z)(t,n)}},215:function(t,n,e){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e.d(n,{Z:function(){return i}});var o=e(326);function i(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(t)}},611:function(t,n,e){"use strict";function r(t,n){return r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},r(t,n)}e.d(n,{Z:function(){return r}})},407:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(120),o=e(611);function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,n,e){return a=i()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&(0,o.Z)(i,e.prototype),i},a.apply(null,arguments)}function c(t){var n="function"==typeof Map?new Map:void 0;return c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,i)}function i(){return a(t,arguments,(0,r.Z)(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),(0,o.Z)(i,t)},c(t)}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";var t=e(861),n=e(671),r=e(144),o=e(136),i=e(215),a=e(120),c=e(407),u=e(757),s=e.n(u),f=function(){var n=(0,t.Z)(s().mark((function t(n){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(t){return n.apply(this,arguments)}}(),l=function(t){var n=[];return t.forEach((function(t){"es"===t.language.name&&n.push(t)})),n},p=function(){var n=(0,t.Z)(s().mark((function t(n){var e,r,o,i,a,c,u,p,d,h,m,b,y;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+n);case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.next=8,f(r.species.url);case 8:o=t.sent,i=o.egg_groups.map((function(t){return t.url})),a=[],c=0;case 12:if(!(c<i.length)){t.next=21;break}return t.next=15,f(i[c]);case 15:u=t.sent,u=l(u.names)[0],a.push(u.name);case 18:c++,t.next=12;break;case 21:p=(p=l(o.flavor_text_entries).map((function(t){return t.flavor_text}))).filter((function(t,n){return p.indexOf(t)===n})),d=r.types.map((function(t){return t.type.url})),h=[],m=0;case 26:if(!(m<d.length)){t.next=36;break}return t.next=29,f(d[m]);case 29:b=t.sent,d[m]=b,b=l(b.names)[0],h.push(b.name);case 33:m++,t.next=26;break;case 36:return y={name:l(o.names)[0].name,img:r.sprites.other.home.front_default,specie:a,text:p,type:h},t.abrupt("return",y);case 38:case"end":return t.stop()}}),t)})));return function(t){return n.apply(this,arguments)}}();const d=p;var h=function(t){var n,e,r,o=t.name,i=t.img,a=t.specie,c=t.text,u=t.type,s=((n=(n=u)[0]).includes("Planta")?(e="background-image: linear-gradient(to right top, #1a9174, #10a37e, #03b687, #00c88f, #00db96);",r="#00ba80"):n.includes("Fuego")?(e="background-image: linear-gradient(to left bottom, #febe01, #ffae00, #ff9e05, #ff8e10, #fe7e1a);",r="#F08F00"):n.includes("Agua")?(e="background-image: linear-gradient(to left bottom, #05dbf2, #00c2eb, #00aae0, #0090d2, #0477bf);",r="#05AFF2"):n.includes("Bicho")?(e="background-image: linear-gradient(to left bottom, #b4d98f, #a7d07a, #9bc665, #8ebd4e, #82b336, #7daf2a, #77aa1b, #72a603, #72a603, #72a603, #72a603, #72a603);",r="#72A603"):n.includes("Veneno")?(e="background-image: linear-gradient(to left bottom, #db4dff, #bc43da, #9d39b7, #803095, #642674);",r="#CC00FF"):n.includes("Volador")?(e="background: linear-gradient(to right top, #2a8c82, #2e958b, #329f94, #37a89d, #3bb2a6, #44bbaf, #4cc3b7, #54ccc0, #62d5ca, #6fdfd4, #7be8de, #88f2e8);",r="#41BFB3"):n.includes("Eléctrico")?(e="background-image: linear-gradient(to left bottom, #fffa45, #f9df36, #f1c62a, #e6ac23, #d9941e);",r="#FCCC28"):n.includes("Tierra")?(e="background-image: linear-gradient(to left bottom, #ffbfa6, #de9f86, #be7f67, #9f6149, #80442d);",r="#CC9985"):n.includes("Hada")?(e="background-image: linear-gradient(to left bottom, #ffc2fe, #ffaafb, #ff91f7, #ff74f2, #ff51ec);",r="#FF6AF0"):n.includes("Lucha")?(e="background-image: linear-gradient(to left bottom, #4b8ca6, #418099, #37748c, #2c687f, #225c73);",r="#4B8CA6"):n.includes("Psíquico")?(e="background-image: linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486);",r="#089ab8"):n.includes("Roca")?(e="background-image: linear-gradient(to left bottom, #c2c2c2, #b2b2b2, #a1a1a1, #929292, #828282);",r="#C2C2C2"):n.includes("Siniestro")?(e="background-image: linear-gradient(to left bottom, #a6a6a6, #9c9c9c, #929292, #898989, #7f7f7f, #747474, #696969, #5f5f5f, #505050, #414141, #333333, #262626);",r="#A6A6A6"):n.includes("Fantasma")?(e="background-image: linear-gradient(to left bottom, #0d7373, #096a6d, #076267, #075960, #085159);",r="#198479"):n.includes("Acero")?(e="background-image: linear-gradient(to left bottom, #c2c2c2, #b2b2b2, #a1a1a1, #929292, #828282);",r="#C2C2C2"):n.includes("Hielo")?(e="background-image: linear-gradient(to left bottom, #05dbf2, #00c2eb, #00aae0, #0090d2, #0477bf);",r="#05AFF2"):n.includes("Dragón")?(e="background-image: linear-gradient(to right top, #c4eef2, #a3d3d8, #82b8be, #619ea4, #3f858c);",r="#3F858C"):n.includes("Normal")&&(e="background-color: #F2E0D0;",r="#F2D9BB"),{gradient:e,container:r}),f="\n  <style>\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 62.5%;\n  }\n  :host {\n    width: 100%;\n    height: fit-content;\n    display: block;\n    ".concat(s.gradient,"\n    border-radius: 20px;\n    max-width: 500px;\n    padding: 20px !important;\n  }\n  h3 {\n    text-align: center;\n    font-family: 'Be Vietnam Pro', Arial, sans-serif;\n    font-size: 2.5rem;\n    color: #034159;\n    text-transform: uppercase;\n  }\n  img {\n    width: 80%;\n    display: block;\n    margin: 0 auto;\n    filter: drop-shadow(-1px 1px 2px #000000);\n    -webkit-filter: drop-shadow(-1px 1px 2px #000000);\n    -moz-filter: drop-shadow(-1px 1px 2px #000000);\n  }\n  .principal-container {\n    width: 100%;\n    background-color: ").concat(s.container,";\n    height: fit-content;\n    -webkit-box-shadow: -2px 2px 5px -1px rgba(0,0,0,0.4); \n    box-shadow: -2px 2px 5px -1px rgba(0,0,0,0.4);\n    padding: 10px 6px;\n    border-radius: 10px;\n  }\n  .principal-container P {\n    color: #034159;\n    font-size: 1.9rem;\n    font-family: Fredoka, Arial, sans-serif;\n    font-weight: normal;\n  }\n  .principal-container .carac {\n    font-family: 'Be Vietnam Pro', Arial, sans-serif;\n    font-size: 1.8rem;\n    font-weight: normal;\n  }\n  .principal-container .descrip {\n    font-family: 'Be Vietnam Pro', Arial, sans-serif;\n    font-size: 1.8rem;\n    font-weight: normal;\n  }\n  .carac {\n    font-weight: bold;\n    text-align: start;\n    text-transform: uppercase;\n    margin-bottom: 10px;\n  }\n  .carac-container {\n    width: 100%;\n    height: fit-content;\n    margin-bottom: 10px;\n    padding-left: 10px;\n  }\n  .descrip {\n    font-weight: bold;\n    text-align: start;\n    text-transform: uppercase;\n    margin: 0;\n  }\n  #description-text {\n    width: 100%;\n    padding: 10px;\n    text-decoration: underline;\n    cursor: pointer;\n    font-family: Fredoka;\n    font-weight: 500;\n  }\n\n  @media (min-width: 768px) {\n    #description-text:hover {\n      color: white;\n    }\n  }\n</style>\n  ");return"\n  ".concat(f,"\n  <h3>").concat(o,'</h3>\n  <img src="').concat(i,'" alt="').concat(o,'">\n  <div class="principal-container">\n    <p class="carac">caracteristicas:</p>\n    <div class="carac-container">\n      <p>Tipo: ').concat(u.join(" "),"</p>\n      <p>Especie: ").concat(a.join(" "),'</p>\n    </div>\n    <p class="descrip">descripcion:</p>\n    <p id="description-text">').concat(c,"</p>\n  </div>\n  ")};var m=function(e){(0,o.Z)(p,e);var c,u,f,l=(u=p,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,a.Z)(u);if(f){var e=(0,a.Z)(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return(0,i.Z)(this,t)});function p(){var t;return(0,n.Z)(this,p),(t=l.call(this)).attachShadow({mode:"open"}),t.pokemonNumber=t.getAttribute("pokemon-number"),t}return(0,r.Z)(p,[{key:"render",value:(c=(0,t.Z)(s().mark((function t(){var n,e,r,o,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(this.pokemonNumber);case 2:n=t.sent,(e=document.createElement("template")).innerHTML=h({name:n.name,img:n.img,specie:n.specie,type:n.type,text:n.text[0]}),e=e.content.cloneNode(!0),this.shadowRoot.appendChild(e),r=this.shadowRoot.querySelector("#description-text"),o=1,i=n.text.length,r.addEventListener("click",(function(){o<i?(r.textContent=n.text[o],o+=1):(r.textContent=n.text[0],o=1)}));case 11:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"connectedCallback",value:function(){this.render()}}]),p}((0,c.Z)(HTMLElement));window.customElements.define("pokemon-card",m)}(),function(){"use strict";var t=e(671),n=e(144),r=e(326),o=e(136),i=e(215),a=e(120);var c=function(e){(0,o.Z)(f,e);var c,u,s=(c=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,a.Z)(c);if(u){var e=(0,a.Z)(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return(0,i.Z)(this,t)});function f(){var n,e,o,i;return(0,t.Z)(this,f),n=s.call(this),i=function(t){0===window.scrollY?(n.style.transform="translateY(80px)",n.style.opacity="0"):(n.style.transform="translateY(0px)",n.style.opacity="1")},(o="scrollEvent")in(e=(0,r.Z)(n))?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i,n.attachShadow({mode:"open"}),n.attr={color:n.getAttribute("flerian-color-button"),size:n.getAttribute("flerian-size-button")},n}return(0,n.Z)(f,[{key:"styles",value:function(){var t=this.attr.color;t=null===t||2!==t.split(" ").length?["#FF0075","#12CAD6"]:t.split(" ");var n=this.attr.size;n=null===n||2!==n.split(" ").length?["50px","50px"]:n.split(" ");var e=[parseFloat(n[0]),parseFloat(n[1])];return"\n    <style>\n      :host {\n        width: ".concat(n[0],";\n        height: ").concat(n[1],";\n        border-radius: 10px;\n        background-color: ").concat(t[1],";\n        display: block;\n        position: fixed;\n        bottom: 15px;\n        right: 15px;\n        box-shadow: -2px 2px 5px -1px rgb(0 0 0 / 50%);\n        z-index: 1000;\n\n        transform: translateY(80px);\n        transition-property: transform, opacity;\n        transition-duration: 0.5s;\n        transition-timing-function: ease-in-out;\n        opacity: 0;\n      }\n      .container {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      span {\n        display: block;\n        width: 0;\n        height: 0;\n        border-radius: ").concat(.24*e[0],"px;\n        border-bottom: ").concat(.6*e[1],"px solid ").concat(t[0],";\n        border-left: ").concat(.3*e[0],"px solid transparent;\n        border-right: ").concat(.3*e[0],"px solid transparent;\n      }\n      </style>\n    ")}},{key:"template",value:function(){var t="\n      ".concat(this.styles(),'\n      <div class="container">\n        <span></span>\n      </div>\n    '),n=document.createElement("template");return n.innerHTML=t,n}},{key:"scrollPage",value:function(t){window.scroll({top:0,behavior:"smooth"})}},{key:"componentExe",value:function(){document.addEventListener("scroll",this.scrollEvent),this.addEventListener("click",this.scrollPage)}},{key:"connectedCallback",value:function(){var t=this.template();this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.componentExe()}},{key:"disconnectedCallback",value:function(){document.removeEventListener("scroll",this.scrollEvent),this.removeEventListener("click",this.scrollPage)}}]),f}((0,e(407).Z)(HTMLElement));window.customElements.define("flerian-slide-button",c)}(),function(){"use strict";var t=e(861),n=e(757),r=e.n(n),o=function(){var n=(0,t.Z)(r().mark((function t(n){var e,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return e=t.sent,t.next=5,e.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(r().mark((function t(){var n,e,i,a,c;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector(".home-pokemon-list").innerHTML='\n<div class="home-pokemon-list__container">\n  <pokemon-card pokemon-number="1"></pokemon-card>\n  <pokemon-card pokemon-number="2"></pokemon-card>\n  <pokemon-card pokemon-number="3"></pokemon-card>\n  <pokemon-card pokemon-number="4"></pokemon-card>\n  <pokemon-card pokemon-number="5"></pokemon-card>\n  <pokemon-card pokemon-number="6"></pokemon-card>\n  <pokemon-card pokemon-number="7"></pokemon-card>\n  <pokemon-card pokemon-number="8"></pokemon-card>\n  <pokemon-card pokemon-number="9"></pokemon-card>\n</div>\n\n<button class="home-pokemon-list__button">Ver más</button>\n  ',t.next=5,o("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");case 5:n=(n=t.sent).count,e=document.querySelector(".home-pokemon-list__button"),i=document.querySelector(".home-pokemon-list__container"),a=8,c=10,e.addEventListener("click",(function(){for(var t="",r=0;r<9;r++){if(a===n){e.remove();break}898===c&&(c=10001),t+='<pokemon-card pokemon-number="'.concat(c,'"></pokemon-card>'),c+=1,a+=1}var o=document.createElement("template");o.innerHTML=t,i.appendChild(o.content.cloneNode(!0))}));case 13:case"end":return t.stop()}}),t)})));return function(){return n.apply(this,arguments)}}();i()}()}();