!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,(function(){return(()=>{"use strict";var e={433:e=>{e.exports=e=>{e.on("enter-full-screen",(()=>{e.webContents.send("window-fullscreen",!0)})),e.on("leave-full-screen",(()=>{e.webContents.send("window-fullscreen",!1)})),e.on("focus",(()=>{e.webContents.send("window-focus",!0)})),e.on("blur",(()=>{e.webContents.send("window-focus",!1)}))}},989:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};const i=o(t(569)),r=o(t(433));e.exports={setupTitlebar:i.default,attachTitlebarToWindow:r.default}},569:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,u)}c((o=o.apply(e,n||[])).next())}))};function i(e,n){for(const t of n.items)if(t.submenu){const n=i(e,t.submenu);if(n)return n}else if(t.commandId===e)return t}e.exports=()=>{if("browser"!==process.type)return;const{BrowserWindow:e,Menu:n,ipcMain:r}=t(298);r.handle("request-application-menu",(()=>o(void 0,void 0,void 0,(function*(){return JSON.parse(JSON.stringify(n.getApplicationMenu(),((e,n)=>"commandsMap"!==e&&"menu"!==e?n:void 0)))})))),r.on("window-event",((n,t)=>{const o=e.fromWebContents(n.sender);switch(t){case"window-minimize":o.minimize();break;case"window-maximize":o.isMaximized()?o.unmaximize():o.maximize();break;case"window-close":o.close();break;case"window-is-maximized":n.returnValue=o.isMaximized()}})),r.on("menu-event",((t,o)=>{const r=i(o,n.getApplicationMenu());null==r||r.click(void 0,e.fromWebContents(t.sender),t.sender)}))}},298:e=>{e.exports=require("electron")}},n={};return function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}(989)})()}));