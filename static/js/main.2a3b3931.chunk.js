(this.webpackJsonpreflow=this.webpackJsonpreflow||[]).push([[0],{14:function(e,n,t){e.exports=t(27)},19:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(5),c=t.n(a),i=(t(19),t(3)),l=t(11),s=t(9);var u=function(){var e,n=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).map((function(e){return r.a.createElement("div",{key:e.heading,className:"note"},r.a.createElement("h1",null,e.heading),e.body)}));return r.a.createElement("div",{className:"App"},r.a.createElement("button",{className:"flush",onClick:function(){return n({type:"FLUSH_NOTES"})}},r.a.createElement(s.a,{icon:l.b})),r.a.createElement("div",{className:"new"},r.a.createElement("input",{type:"text",name:"note",placeholder:"Type in to remember",value:e,onChange:function(n){return e=n.target.value}}),r.a.createElement("button",{onClick:function(){return n({type:"ADD_NOTE",note:function(e){if(void 0!==e)return{heading:e.replace(/(([^\s]+\s\s*){4})(.*)/,"$1\u2026"),body:e}}(e)})}},r.a.createElement(s.a,{icon:l.a}))),r.a.createElement("div",{className:"note-container"},r.a.createElement("h1",{className:"empty"},"Add a note :)"),t))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=t(2),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_NOTE":return void 0===n.note?e:e.concat([n.note]);case"FLUSH_NOTES":return[];default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SIGN_IN":return!0;default:return e}},w=Object(h.b)({notes:v,login:g});console.log("Icons made by https://www.flaticon.com/authors/pixel-perfect");var m=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(n){return}}(),p=Object(h.c)(w,m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());p.subscribe((function(){!function(e){try{var n=JSON.stringify(e);localStorage.setItem("state",n)}catch(t){}}({notes:p.getState().notes})})),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:p},r.a.createElement(u,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reflow",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/reflow","/service-worker.js");d?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.2a3b3931.chunk.js.map