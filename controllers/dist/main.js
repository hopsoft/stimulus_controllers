import{Controller as t}from"stimulus";function e(t,e,n,i,r,o,s){try{var a=t[o](s),l=a.value}catch(t){return void n(t)}a.done?e(l):Promise.resolve(l).then(i,r)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=s(t);if(e){var r=s(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return l(this,n)}}function c(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var f=function(e){o(s,t);var i=u(s);function s(){return n(this,s),i.apply(this,arguments)}return r(s,[{key:"connect",value:function(){var t=this;this.show=this._show.bind(this),this.hide=this._hide.bind(this),this.showEventNames.forEach((function(e){document.addEventListener(e,t.show)})),this.hideEventNames.forEach((function(e){return document.addEventListener(e,t.hide)}))}},{key:"disconnect",value:function(){var t=this;this.showEventNames.forEach((function(e){return document.removeEventListener(e,t.show)})),this.hideEventNames.forEach((function(e){return document.removeEventListener(e,t.hide)}))}},{key:"_show",value:function(){this.element.hidden=!1}},{key:"_hide",value:function(){this.element.hidden=!0}},{key:"showEventNames",get:function(){return this.data.get("showEvent").split(" ")}},{key:"hideEventNames",get:function(){return this.data.get("hideEvent").split(" ")}}]),s}(),d=function(e){o(s,t);var i=u(s);function s(){return n(this,s),i.apply(this,arguments)}return r(s,[{key:"connect",value:function(){if(this.autosuggestController=this.element.autosuggestController,this.containerController=this.element.containerController,this.element.controller=this,this.element.setAttribute("class",this.cssClass),this.element.classList.add(this.identifier),this.element.href="#",this.text.length){var t=document.createElement("span");t.setAttribute("class",this.textCssClass),t.classList.add("text"),t.innerText=this.text,this.element.appendChild(t)}if(this.value.length){var e=document.createElement("span");e.setAttribute("class",this.valueCssClass),e.classList.add("value"),e.innerText=this.value,this.element.appendChild(e)}}},{key:"value",get:function(){return this.optionElement.value.trim()}},{key:"text",get:function(){return this.optionElement.innerText.trim()}},{key:"normalizedValue",get:function(){return"".concat(this.text," ").concat(this.value).toLowerCase()}},{key:"optionElement",get:function(){return this.element.optionElement}},{key:"cssClass",get:function(){return this.element.autosuggestController.data.get("optionClass")}},{key:"activeCssClass",get:function(){return this.element.autosuggestController.data.get("optionActiveClass")}},{key:"textCssClass",get:function(){return this.autosuggestController.data.get("optionTextClass")}},{key:"valueCssClass",get:function(){return this.autosuggestController.data.get("optionValueClass")}}]),s}(),g=function(e){o(s,t);var i=u(s);function s(){return n(this,s),i.apply(this,arguments)}return r(s,[{key:"connect",value:function(){var t=this;this.activeIndex=-1,this.element.controller=this,this.element.setAttribute("class",this.cssClass),this.element.classList.add(this.identifier),this.element.style.position="absolute",this.element.style.minHeight="100px",this.element.style.overflowY="scroll",this.element.style.overflowX="hidden",this.element.hidden=!0,this.datalistElement.querySelectorAll("option").forEach((function(e){var n=document.createElement("a");n.autosuggestController=t.autosuggestController,n.containerController=t,n.optionElement=e,n.setAttribute("data-controller","hopsoft-autosuggest-anchor"),t.element.appendChild(n)}),this)}},{key:"show",value:function(){var t=this.autosuggestController.layout;this.element.style.minWidth="".concat(t.width,"px"),this.element.style.left="".concat(t.left,"px"),this.element.style.top="".concat(t.top+t.height,"px"),this.element.hidden=!1}},{key:"hide",value:function(){this.element.hidden=!0}},{key:"filter",value:function(t){t=t.toLowerCase().trim(),this.activeIndex=-1,this.anchorElements.forEach((function(e){e.controller.normalizedValue.includes(t)?e.style.removeProperty("display"):e.style.display="none"}))}},{key:"find",value:function(t){return this.anchorElements.find((function(e){return e.controller.value===t}))}},{key:"highlight",value:function(){this.anchorElements.forEach((function(t){return t.classList.remove(t.controller.activeCssClass)})),this.activeAnchorElement.classList.add(this.activeAnchorElement.controller.activeCssClass),this.activeAnchorElement.scrollIntoView({behavior:"smooth",block:"end",inline:"end"})}},{key:"highlightNext",value:function(){this.activeIndex++,this.activeIndex>this.visibleAnchorElements.length-1&&(this.activeIndex=0),this.highlight()}},{key:"highlightPrevious",value:function(){this.activeIndex--,this.activeIndex<0&&(this.activeIndex=this.visibleAnchorElements.length-1),this.highlight()}},{key:"reset",value:function(){this.anchorElements.forEach((function(t){return t.style.removeProperty("display")}))}},{key:"anchorElements",get:function(){return Array.from(this.element.querySelectorAll("a"))}},{key:"visibleAnchorElements",get:function(){return this.anchorElements.filter((function(t){return"none"!==t.style.display}))}},{key:"activeAnchorElement",get:function(){return this.visibleAnchorElements[this.activeIndex]}},{key:"autosuggestController",get:function(){return this.element.autosuggestController}},{key:"datalistElement",get:function(){return this.autosuggestController.datalistElement}},{key:"cssClass",get:function(){return this.autosuggestController.data.get("containerClass")}}]),s}(),m=function(e){o(s,t);var i=u(s);function s(){return n(this,s),i.apply(this,arguments)}return r(s,[{key:"connect",value:function(){document.dispatchEvent(new CustomEvent("hopsoft:autosuggest:connect",{detail:{controller:this}})),this.element.controller=this,this.element.setAttribute("data-action",this.actions.join(" ")),this.datalistElement=this.element.list,this.element.removeAttribute("list"),this.containerElement=document.createElement("div"),this.containerElement.autosuggestController=this,this.containerElement.setAttribute("data-controller","hopsoft-autosuggest-container"),document.body.appendChild(this.containerElement)}},{key:"focus",value:function(){this.containerElement.controller.reset(),this.containerElement.controller.show()}},{key:"blur",value:function(t){var e=this;setTimeout((function(){return e.containerElement.controller.hide()}),25)}},{key:"keydown",value:function(t){switch(t.key){case"Escape":this.blur();break;case"ArrowDown":this.containerElement.controller.highlightNext();break;case"ArrowUp":this.containerElement.controller.highlightPrevious();break;case"Enter":t.preventDefault(),this.element.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,code:"Tab",key:"Tab",keyIdentifier:"Tab",keyCode:9,which:9}));break;case"Tab":var e=this.containerElement.controller.activeAnchorElement;if(e){var n=this.values;n.pop(),this.values=[].concat(c(n),[e.controller.value])}break;case"Backspace":""===this.value?(this.value="",this.containerElement.controller.reset()):this.containerElement.controller.find(this.lastValue)&&(t.preventDefault(),this.values=this.values.slice(0,-1))}}},{key:"input",value:function(t){this.focus(),this.value.length&&this.containerElement.controller.filter(this.values.pop())}},{key:"click",value:function(t){var e=t.target.closest('[data-controller="hopsoft-autosuggest-anchor"]');e&&(this.values=[].concat(c(this.values),[e.controller.value]))}},{key:"value",get:function(){return this.element.value.trim()},set:function(t){return this.element.value=t.trim()}},{key:"values",get:function(){return this.element.value.split(",").map((function(t){return t.trim()}))},set:function(t){if(this.element.multiple)return this.value=t.map((function(t){return t.trim()})).filter((function(t){return t.length})).join(",");this.value=t.pop()}},{key:"lastValue",get:function(){return this.values.pop()}},{key:"actions",get:function(){var t=new Set((this.element.dataset.action||"").split(" "));return t.add("blur->".concat(this.identifier,"#blur")),t.add("focus->".concat(this.identifier,"#focus")),t.add("input->".concat(this.identifier,"#input")),t.add("keydown->".concat(this.identifier,"#keydown")),t.add("click@document->".concat(this.identifier,"#click")),Array.from(t).filter((function(t){return t.length}))}},{key:"layout",get:function(){return this.element.getBoundingClientRect()}}]),s}();function v(t,e,n){if(!t.controllers.find((function(t){return t.identifier===e})))return t.register(e,n)}document.addEventListener("hopsoft:autosuggest:connect",(function(t){var e=t.detail.controller.application;v(e,"hopsoft-autosuggest-anchor",d),v(e,"hopsoft-autosuggest-container",g)}));var p,y,b,k=function(e){o(s,t);var i=u(s);function s(){return n(this,s),i.apply(this,arguments)}return r(s,[{key:"copy",value:function(t){t.preventDefault(),this.value=this.sourceTarget.value||this.sourceTarget.innerHTML,this.value.length&&(this.disable&&this._toggleDisabled(),this._doCopy())}},{key:"showCopied",value:function(){var t=this;if(this.hasTriggerTarget){var e=this.triggerTarget.innerHTML;if(this.content===e||0===this.duration)return void(this.disable&&this._toggleDisabled());this.triggerTarget.innerHTML=this.content,setTimeout((function(){t.triggerTarget.innerHTML=e,t.disable&&t._toggleDisabled()}),this.duration)}}},{key:"_doCopy",value:function(){var t,e="hidden"===this.sourceTarget.type;e&&(this.sourceTarget.type="text"),this.sourceTarget.value?this.sourceTarget.select():((t=document.createRange()).selectNode(this.sourceTarget),window.getSelection().empty(),window.getSelection().addRange(t)),document.execCommand("copy"),e&&(this.sourceTarget.type="hidden"),this.showCopied(),this.element.dispatchEvent(new CustomEvent("copy:copied",{bubbles:!0,cancelable:!1,detail:{value:this.sourceTarget.value,message:this.content}})),this.sourceTarget.value?(this.sourceTarget.value="",this.sourceTarget.value=this.value,this.sourceTarget.focus()):window.getSelection().removeAllRanges()}},{key:"_toggleDisabled",value:function(){this.hasTriggerTarget&&this.triggerTarget.toggleAttribute("disabled",!this.triggerTarget.disabled)}},{key:"content",get:function(){return this.data.get("content")||"Copied..."}},{key:"duration",get:function(){return Number(this.data.get("duration")||2e3)}},{key:"disable",get:function(){return this.data.has("disable")}}]),s}();b=["source","trigger"],(y="targets")in(p=k)?Object.defineProperty(p,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[y]=b;var E=function(i){o(c,t);var s,a,l=u(c);function c(){return n(this,c),l.apply(this,arguments)}return r(c,[{key:"dismiss",value:(s=regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();try{this.data.has("url")&&fetch(this.url,{method:this.method,credentials:"same-origin",body:this.body})}catch(t){}finally{this.element.classList.add(this.invisibleClass),setTimeout((function(){n.element.remove()}),this.duration)}case 2:case"end":return t.stop()}}),t,this)})),a=function(){var t=this,n=arguments;return new Promise((function(i,r){var o=s.apply(t,n);function a(t){e(o,i,r,a,l,"next",t)}function l(t){e(o,i,r,a,l,"throw",t)}a(void 0)}))},function(t){return a.apply(this,arguments)})},{key:"duration",get:function(){return this.data.get("duration")||200}},{key:"invisibleClass",get:function(){return this.data.get("invisibleClass")||"hidden"}},{key:"url",get:function(){return this.data.get("url")}},{key:"method",get:function(){return this.data.get("method")||"PUT"}},{key:"body",get:function(){return this.data.get("body")||""}}]),c}(),C={},w=document.implementation.createHTMLDocument("@hopsoft/prefetch-turbolinks-controller");function T(t){!function(t,e){var n=new XMLHttpRequest;n.open("GET",t),n.setRequestHeader("VND.PREFETCH","true"),n.setRequestHeader("Accept","text/html"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status&&e(n.responseText)},n.send()}(t,(function(e){w.open(),w.write(e),w.close();var n=Turbolinks.Snapshot.fromHTMLElement(w.documentElement);Turbolinks.controller.cache.put(t,n)}))}var x=function(e){o(s,t);var i=u(s);function s(){return n(this,s),i.apply(this,arguments)}return r(s,[{key:"prefetch",value:function(){var t=this;this.prefetched||this.prefetching||(C[this.url]=setTimeout(function(){return T(t.url)}.bind(this),this.hoverTime))}},{key:"cleanup",value:function(){clearTimeout(C[this.url]),C[this.url]=null}},{key:"url",get:function(){return this.element.getAttribute("href")}},{key:"prefetching",get:function(){return!!C[this.url]}},{key:"prefetched",get:function(){return location.href===this.url||Turbolinks.controller.cache.has(this.url)}},{key:"hoverTime",get:function(){return Number(this.data.get("hoverTime")||400)}}]),s}();export{f as ActivityController,m as AutosuggestController,k as CopyController,E as DismissibleController,x as PrefetchTurbolinksController};
