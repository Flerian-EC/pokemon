!function(){var t={757:function(t,e,n){t.exports=n(666)},666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new F(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return C()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",d="executing",h="completed",g={};function m(){}function y(){}function b(){}var v={};u(v,i,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(P([])));w&&w!==n&&r.call(w,i)&&(v=w);var k=b.prototype=m.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return y.prototype=b,u(k,"constructor",b),u(b,"constructor",y),y.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,n){return f=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i},f.apply(null,arguments)}function s(t){var e="function"==typeof Map?new Map:void 0;return s=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return f(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)},s(t)}var l=n(757),p=n.n(l),d=function(){var t=e(p().mark((function t(e){var n,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=[];return t.forEach((function(t){"es"===t.language.name&&e.push(t)})),e},g=function(){var t=e(p().mark((function t(e){var n,r,o,i,a,c,u,f,s,l,g,m,y;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+e);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.next=8,d(r.species.url);case 8:o=t.sent,i=o.egg_groups.map((function(t){return t.url})),a=[],c=0;case 12:if(!(c<i.length)){t.next=21;break}return t.next=15,d(i[c]);case 15:u=t.sent,u=h(u.names)[0],a.push(u.name);case 18:c++,t.next=12;break;case 21:f=(f=h(o.flavor_text_entries).map((function(t){return t.flavor_text}))).filter((function(t,e){return f.indexOf(t)===e})),s=r.types.map((function(t){return t.type.url})),l=[],g=0;case 26:if(!(g<s.length)){t.next=36;break}return t.next=29,d(s[g]);case 29:m=t.sent,s[g]=m,m=h(m.names)[0],l.push(m.name);case 33:g++,t.next=26;break;case 36:return y={name:h(o.names)[0].name,img:r.sprites.other.home.front_default,specie:a,text:f,type:l},t.abrupt("return",y);case 38:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();const m=g;var y=function(t){var e,n,r,o=t.name,i=t.img,a=t.specie,c=t.text,u=t.type,f=((e=(e=u)[0]).includes("Planta")?(n="background-image: linear-gradient(to right top, #1a9174, #10a37e, #03b687, #00c88f, #00db96);",r="#00ba80"):e.includes("Fuego")?(n="background-image: linear-gradient(to left bottom, #febe01, #ffae00, #ff9e05, #ff8e10, #fe7e1a);",r="#F08F00"):e.includes("Agua")?(n="background-image: linear-gradient(to left bottom, #05dbf2, #00c2eb, #00aae0, #0090d2, #0477bf);",r="#05AFF2"):e.includes("Bicho")?(n="background-image: linear-gradient(to left bottom, #b4d98f, #a7d07a, #9bc665, #8ebd4e, #82b336, #7daf2a, #77aa1b, #72a603, #72a603, #72a603, #72a603, #72a603);",r="#72A603"):e.includes("Veneno")?(n="background-image: linear-gradient(to left bottom, #db4dff, #bc43da, #9d39b7, #803095, #642674);",r="#CC00FF"):e.includes("Volador")?(n="background: linear-gradient(to right top, #2a8c82, #2e958b, #329f94, #37a89d, #3bb2a6, #44bbaf, #4cc3b7, #54ccc0, #62d5ca, #6fdfd4, #7be8de, #88f2e8);",r="#41BFB3"):e.includes("Eléctrico")?(n="background-image: linear-gradient(to left bottom, #fffa45, #f9df36, #f1c62a, #e6ac23, #d9941e);",r="#FCCC28"):e.includes("Tierra")?(n="background-image: linear-gradient(to left bottom, #ffbfa6, #de9f86, #be7f67, #9f6149, #80442d);",r="#CC9985"):e.includes("Hada")?(n="background-image: linear-gradient(to left bottom, #ffc2fe, #ffaafb, #ff91f7, #ff74f2, #ff51ec);",r="#FF6AF0"):e.includes("Lucha")?(n="background-image: linear-gradient(to left bottom, #4b8ca6, #418099, #37748c, #2c687f, #225c73);",r="#4B8CA6"):e.includes("Psíquico")?(n="background-image: linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486);",r="#089ab8"):e.includes("Roca")?(n="background-image: linear-gradient(to left bottom, #c2c2c2, #b2b2b2, #a1a1a1, #929292, #828282);",r="#C2C2C2"):e.includes("Siniestro")?(n="background-image: linear-gradient(to left bottom, #a6a6a6, #9c9c9c, #929292, #898989, #7f7f7f, #747474, #696969, #5f5f5f, #505050, #414141, #333333, #262626);",r="#A6A6A6"):e.includes("Fantasma")?(n="background-image: linear-gradient(to left bottom, #0d7373, #096a6d, #076267, #075960, #085159);",r="#198479"):e.includes("Acero")?(n="background-image: linear-gradient(to left bottom, #c2c2c2, #b2b2b2, #a1a1a1, #929292, #828282);",r="#C2C2C2"):e.includes("Hielo")?(n="background-image: linear-gradient(to left bottom, #05dbf2, #00c2eb, #00aae0, #0090d2, #0477bf);",r="#05AFF2"):e.includes("Dragón")?(n="background-image: linear-gradient(to right top, #c4eef2, #a3d3d8, #82b8be, #619ea4, #3f858c);",r="#3F858C"):e.includes("Normal")&&(n="background-color: #F2E0D0;",r="#F2D9BB"),{gradient:n,container:r}),s="\n  <style>\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 62.5%;\n  }\n  :host {\n    width: 100%;\n    height: fit-content;\n    display: block;\n    ".concat(f.gradient,"\n    border-radius: 20px;\n    max-width: 500px;\n    padding: 20px !important;\n  }\n  h3 {\n    text-align: center;\n    font-family: 'Be Vietnam Pro', Arial, sans-serif;\n    font-size: 2.5rem;\n    color: #034159;\n    text-transform: uppercase;\n  }\n  img {\n    width: 80%;\n    display: block;\n    margin: 0 auto;\n    filter: drop-shadow(-1px 1px 2px #000000);\n    -webkit-filter: drop-shadow(-1px 1px 2px #000000);\n    -moz-filter: drop-shadow(-1px 1px 2px #000000);\n  }\n  .principal-container {\n    width: 100%;\n    background-color: ").concat(f.container,";\n    height: fit-content;\n    -webkit-box-shadow: -2px 2px 5px -1px rgba(0,0,0,0.4); \n    box-shadow: -2px 2px 5px -1px rgba(0,0,0,0.4);\n    padding: 10px 6px;\n    border-radius: 10px;\n  }\n  .principal-container P {\n    color: #034159;\n    font-size: 1.9rem;\n    font-family: Fredoka, Arial, sans-serif;\n    font-weight: normal;\n  }\n  .principal-container .carac {\n    font-family: 'Be Vietnam Pro', Arial, sans-serif;\n    font-size: 1.8rem;\n    font-weight: normal;\n  }\n  .principal-container .descrip {\n    font-family: 'Be Vietnam Pro', Arial, sans-serif;\n    font-size: 1.8rem;\n    font-weight: normal;\n  }\n  .carac {\n    font-weight: bold;\n    text-align: start;\n    text-transform: uppercase;\n    margin-bottom: 10px;\n  }\n  .carac-container {\n    width: 100%;\n    height: fit-content;\n    margin-bottom: 10px;\n    padding-left: 10px;\n  }\n  .descrip {\n    font-weight: bold;\n    text-align: start;\n    text-transform: uppercase;\n    margin: 0;\n  }\n  #description-text {\n    width: 100%;\n    padding: 10px;\n    text-decoration: underline;\n    cursor: pointer;\n    font-family: Fredoka;\n    font-weight: 500;\n  }\n</style>\n  ");return"\n  ".concat(s,"\n  <h3>").concat(o,'</h3>\n  <img src="').concat(i,'" alt="').concat(o,'">\n  <div class="principal-container">\n    <p class="carac">caracteristicas:</p>\n    <div class="carac-container">\n      <p>Tipo: ').concat(u.join(" "),"</p>\n      <p>Especie: ").concat(a.join(" "),'</p>\n    </div>\n    <p class="descrip">descripcion:</p>\n    <p id="description-text">').concat(c,"</p>\n  </div>\n  ")};var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(d,t);var n,i,u,f,s,l=(f=d,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(f);if(s){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function d(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),(t=l.call(this)).attachShadow({mode:"open"}),t.pokemonNumber=t.getAttribute("pokemon-number"),t}return n=d,i=[{key:"render",value:(u=e(p().mark((function t(){var e,n,r,o,i;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(this.pokemonNumber);case 2:e=t.sent,(n=document.createElement("template")).innerHTML=y({name:e.name,img:e.img,specie:e.specie,type:e.type,text:e.text[0]}),n=n.content.cloneNode(!0),this.shadowRoot.appendChild(n),r=this.shadowRoot.querySelector("#description-text"),o=1,i=e.text.length,r.addEventListener("click",(function(){o<i?(r.textContent=e.text[o],o+=1):(r.textContent=e.text[0],o=1)}));case 11:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"connectedCallback",value:function(){this.render()}}],i&&r(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),d}(s(HTMLElement));window.customElements.define("pokemon-card",b)}()}();