(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:n("a5c2"),id:"foto"}}),r("div",[r("button",{on:{click:e.read_image}},[e._v("Baca Gambar")]),r("input",{attrs:{type:"file",accept:"image/*;capture=camera",id:"input"},on:{change:e.update}})]),r("div",[r("h1",[e._v("Hasil Pembacaan:")]),e.loading?r("div",[e._v("Loading "+e._s(Math.floor(100*e.progress))+"%")]):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{id:"hasil"}})])])},o=[],i=(n("96cf"),n("1da1")),u=n("c9bf"),c={name:"App",data:function(){return{loading:!1,progress:0}},methods:{update:function(){var e=document.getElementById("input");if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){document.getElementById("foto").setAttribute("src",e.target.result)},t.readAsDataURL(e.files[0])}},read_image:function(){var e=this;if(this.loading)return alert("Pembacaan dalam proses.");this.loading=!0;var t=document.getElementById("foto"),n=Object(u["createWorker"])({logger:function(t){e.progress=t.progress}});Object(i["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.load();case 2:return r.next=4,n.loadLanguage("ind");case 4:return r.next=6,n.initialize("ind");case 6:return r.next=8,n.recognize(t);case 8:return a=r.sent,o=a.data.text,document.getElementById("hasil").innerHTML=o,r.next=13,n.terminate();case 13:e.loading=!1;case 14:case"end":return r.stop()}}),r)})))()}}},s=c,l=(n("034f"),n("2877")),d=Object(l["a"])(s,a,o,!1,null,null,null),f=d.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){},a5c2:function(e,t,n){e.exports=n.p+"img/Test.1faf9285.jpg"}});
//# sourceMappingURL=app.c388d851.js.map