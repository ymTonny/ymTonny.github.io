(function(t){function n(n){for(var i,s,o=n[0],c=n[1],u=n[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(n);while(f.length)f.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,o=1;o<e.length;o++){var c=e[o];0!==a[c]&&(i=!1)}i&&(r.splice(n--,1),t=s(s.s=e[0]))}return t}var i={},a={app:0},r=[];function s(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)s.d(e,i,function(n){return t[n]}.bind(null,i));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0b39":function(t,n,e){"use strict";var i=e("2279"),a=e.n(i);a.a},1490:function(t,n){(function(){for(var t=0,n=["ms","moz","webkit","o"],e=0;e<n.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[n[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[e]+"CancelAnimationFrame"]||window[n[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var e=(new Date).getTime(),i=Math.max(0,16-(e-t)),a=window.setTimeout((function(){n(e+i)}),i);return t=e+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})})()},"1fd4":function(t,n,e){t.exports="https://i.loli.net/2020/05/20/SrWt7NGmvE8d4Yk.jpg"},2279:function(t,n,e){},2913:function(t,n,e){"use strict";var i=e("5df9"),a=e.n(i);a.a},"2b70":function(t,n,e){},"322c":function(t,n,e){t.exports="https://i.loli.net/2020/05/20/lvufGVr2FgACHB6.png"},"4a20":function(t){t.exports=JSON.parse('{"a":"elvinn-1aa07a"}')},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wedding"},[e("Editor")],1)},r=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"editor",staticClass:"wedding-editor"},[t._m(0),e("p",{staticClass:"code"},[t._v("Last login: "),e("span",[t._v(t._s(t.startDate))])]),e("pre",[t._v("    "),e("code",{domProps:{innerHTML:t._s(t.highlightedCode)}}),t._v("\n  ")]),!t.canStart&&!t.hasClosed||t.canOpen?t._e():e("div",{staticClass:"editor-open",on:{click:function(n){t.canOpen=!0}}},[e("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[e("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}}),e("line",{attrs:{x1:"9",y1:"3",x2:"9",y2:"21"}})])]),e("Executions",{attrs:{canExecute:t.canExecute},on:{onUpdating:t.scrollToBottom,onFinish:function(n){t.canOpen=!0}}}),e("invitation",{attrs:{canOpen:t.canOpen},on:{onClose:function(n){t.canOpen=!1,t.hasClosed=!0},sendBarrage:t.onAfterSending}}),e("Barrage",{attrs:{wish:t.wish,canStart:t.canStart}})],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"editor-header"},[e("a",{attrs:{href:"javascript:;"}}),e("a",{staticClass:"minimum",attrs:{href:"javascript:;"}}),e("a",{staticClass:"maximum",attrs:{href:"javascript:;"}})])}],c=e("c197"),u=e.n(c),l=(e("fa97"),e("1490"),function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),e=moment(t),i=moment(n),a=moment.duration(i.diff(e));return Math.floor(a.as("d"))+"天"}),d="🐷",f="🐱",p={MEET:new Date("2018-9-20"),CONFESSION:new Date("2018-10-25"),CONFESSION_YES:new Date("2018-11-09")},h={code:"\n// 今天心情好\n// 我给你表演写代码\n// 我要开始写啦\nconst { ".concat(d,", ").concat(f," } = 🇨🇳;\n(").concat(d,", ").concat(f,").相遇('").concat(moment(p.MEET).format("LL"),"');\n(").concat(d,", ").concat(f,").表白('").concat(moment(p.CONFESSION).format("LL"),"');\n(").concat(d,", ").concat(f,").在一起('").concat(moment(p.CONFESSION_YES).format("LL"),"');\n\n").concat(d,".say('WoW，已经").concat(l(p.CONFESSION_YES),"了！');\n....\n\n// 希望不远的将来\n").concat(d,".say('嫁给我吧!❤️');\n").concat(f,".response('Yes, I do！');\n\n(").concat(d,", ").concat(f,").结婚('xxxx年xx月xx日')\n(").concat(d,", ").concat(f,").发请帖('yyyy年yy月yy日');\n\n// 好了我写完了\n// 我要开始运行啦"),executions:[{name:"初始化",time:"",duration:0,visible:!1},{name:"解压中",time:"",duration:0,visible:!1},{name:"组装中",time:"",duration:0,visible:!1},{name:"打包中",time:"",duration:0,visible:!1},{name:"微笑🙂",time:"",duration:0,visible:!1},{name:"大笑😄",time:"",duration:0,visible:!1},{name:"编译中...",time:"",visible:!1}],barrages:["66666666","愿你美梦成真","你的邀请函真是美","人美心更美","你是最棒的","哇哇哇","还差女朋友吗","今晚翻你牌","看朕给你打下的江山","你写代码老快了","你的代码真是棒","😗 😙 😚 😋 ","只要代码写得好，单身永远跑不了"]},m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"executions"},[t._l(t.executions,(function(n,i){return e("p",{directives:[{name:"show",rawName:"v-show",value:n.visible,expression:"execution.visible"}],key:i,staticClass:"code"},[e("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),e("span",{staticClass:"time"},[t._v(t._s(n.time))]),t._v("]\n    "),e("span",{staticClass:"task"},[t._v(t._s(n.name))]),void 0!==n.duration?e("span",{staticClass:"duration"},[t._v(t._s(n.duration)+" ms")]):t._e()])})),e("p",{directives:[{name:"show",rawName:"v-show",value:t.isProcessed,expression:"isProcessed"}],staticClass:"code"},[e("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    "+t._s(t.progressBarText)+"\n    "),e("span",{staticClass:"percentage"},[t._v(t._s(t.percentage)+"%")])]),e("p",{directives:[{name:"show",rawName:"v-show",value:t.endExecution.visible,expression:"endExecution.visible"}],staticClass:"code"},[e("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),e("span",{staticClass:"time"},[t._v(t._s(t.endExecution.time))]),t._v("]\n    "),e("span",{staticClass:"task"},[t._v(t._s(t.endExecution.name))])])],2)},v=[],g=(e("ac6a"),e("ac4d"),e("8a81"),e("5df3"),e("1c4c"),e("7f7f"),e("6b54"),e("a481"),e("96cf"),e("1da1"));e("28a5");function b(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=w(t))){var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a,r=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function w(t,n){if(t){if("string"===typeof t)return x(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?x(t,n):void 0}}function x(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}var y={name:"Executions",props:["canExecute"],data:function(){return{executions:h.executions,isProcessed:!1,isFinished:!1,progressBarText:"--------------------------",endExecution:{name:"打开中...",time:"",visible:!1}}},computed:{percentage:function(){var t=this.progressBarText.split("").filter((function(t){return"#"===t})).length,n=this.progressBarText.length;return Math.floor(100*t/n)}},watch:{canExecute:function(t){!0===t&&this.runExecutions()}},updated:function(){this.$emit("onUpdating")},methods:{runExecutions:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var n,e,i,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=b(this.executions),t.prev=1,n.s();case 3:if((e=n.n()).done){t.next=9;break}return i=e.value,t.next=7,this.progressivelyRun(i);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),n.e(t.t0);case 14:return t.prev=14,n.f(),t.finish(14);case 17:return t.next=19,this.successProcessing(1e3);case 19:return t.next=21,this.progressivelyRun(this.endExecution).then((function(){setTimeout((function(){a.isFinished=!0,a.$emit("onFinish")}),500)}));case 21:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));function n(){return t.apply(this,arguments)}return n}(),progressivelyRun:function(t,n){return new Promise((function(e){var i=new Date,a=n||50*Math.random()+250,r=function(){t.time=i.toLocaleTimeString(),t.duration=void 0!==t.duration?a.toFixed(2):void 0,t.visible=!0,e()};setTimeout(r,a)}))},successProcessing:function(t){var n=this;return new Promise((function(e){var i,a=null,r=0;n.isProcessed=!0;var s=function s(o){var c;null===a&&(a=o),c=o-a,r%3===0&&(n.progressBarText=n.progressBarText.replace("-","#")),r++,c<t?i=requestAnimationFrame(s):(e(),n.progressBarText=n.progressBarText.replace(/-/g,"#"),cancelAnimationFrame(i))};i=requestAnimationFrame(s)}))}}},_=y,C=(e("6af3"),e("2877")),O=Object(C["a"])(_,m,v,!1,null,null,null),S=O.exports,E=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"wedding-invitation",class:{"invitation-bounce":t.canOpen}},[i("div",{staticClass:"invitation-container",class:{"invitation-down":t.isOpening}},[i("div",{staticClass:"invitation-cover"},[i("div",{staticClass:"cover-content",class:{"invitation-up":t.isOpening}},[i("div",{staticClass:"content-inside"},[i("img",{staticClass:"content-inside-photo",attrs:{src:e("1fd4")}}),i("p",[t._v("我们在一起 "+t._s(t.year)+"啦！")]),t._m(0),i("div",{staticClass:"content-inside-bless"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.wish,expression:"wish"}],ref:"wishInput",attrs:{placeholder:"写下你的祝福"},domProps:{value:t.wish},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.sendBarrage(n)},focus:function(n){t.isFocused=!0},blur:function(n){t.isFocused=!1,t.hasEntered=!1},input:function(n){n.target.composing||(t.wish=n.target.value)}}}),!t.wish&&t.isFocused&&t.hasEntered?i("p",[t._v("请输入祝福哦")]):t._e(),i("div",[i("button",{on:{click:t.sendBarrage}},[t._v("发送祝福弹幕")]),i("button",{on:{click:t.closeInvitation}},[t._v("关闭")])])])])]),i("div",{staticClass:"cover-inside-left",class:{opening:t.isOpening}}),i("div",{staticClass:"cover-inside-right",class:{opening:t.isOpening}}),i("img",{staticClass:"cover-inside-seal",class:{"invitation-flight":t.isOpening},attrs:{src:e("322c")},on:{click:t.openInvitation}})])])])},T=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("b",[t._v("小兰 🐱 & 🐷 小铭")])])}],k={props:["canOpen"],data:function(){return{isOpening:!1,wish:"",isFocused:!1,hasEntered:!1,year:moment("2018-11-09").toNow(!0)}},methods:{openInvitation:function(){this.isOpening=!0},closeInvitation:function(){var t=this;this.isOpening=!1,setTimeout((function(){t.$emit("onClose")}),660)},sendBarrage:function(){var t=this;this.$nextTick((function(){t.hasEntered=!0,t.wish&&(t.isOpening=!1,t.$refs.wishInput.blur(),setTimeout((function(){t.$emit("sendBarrage",t.wish)}),660))}))}}},F=k,B=(e("bddb"),Object(C["a"])(F,E,T,!1,null,null,null)),A=B.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"barrage",staticClass:"wedding-barrage",style:{opacity:t.canStart?1:0}},[e("div",{domProps:{innerHTML:t._s(t.codeInStyleTag)}}),e("p",{ref:"barrageFirst",staticClass:"code barrage-0",style:{transform:"translate("+t.initialOffset+"px)",top:"10px"}},[e("span",{staticClass:"mine"},[t._v(t._s(t.wish))]),t._l(t.filterBarrage(t.barrages,0),(function(n,i){return e("span",{key:i},[t._v(t._s(n))])}))],2),e("p",{ref:"barrageSecond",staticClass:"code barrage-1",style:{transform:"translate("+t.initialOffset+"px)",top:"40px"}},t._l(t.filterBarrage(t.barrages,1),(function(n,i){return e("span",{key:i},[t._v(t._s(n))])})),0),e("p",{ref:"barrageThird",staticClass:"code barrage-2",style:{transform:"translate("+t.initialOffset+"px)",top:"70px"}},t._l(t.filterBarrage(t.barrages,2),(function(n,i){return e("span",{key:i},[t._v(t._s(n))])})),0),e("p",{ref:"barrageFourth",staticClass:"code barrage-3",style:{transform:"translate("+t.initialOffset+"px)",top:"100px"}},t._l(t.filterBarrage(t.barrages,3),(function(n,i){return e("span",{key:i},[t._v(t._s(n))])})),0),e("div",{staticClass:"barrage-space"})])},$=[],I=e("2909"),P=e("4a20"),N={props:["wish","canStart"],data:function(){return{barrages:h.barrages,animationStyle:"",initialOffset:0,app:null}},computed:{codeInStyleTag:function(){return"<style>".concat(this.animationStyle,"</style>")}},watch:{canStart:function(t){!0===t&&this.barrageAnimationStart()},wish:function(){this.setBarrage()}},mounted:function(){this.checkTcbLoaded()},methods:{barrageAnimationStart:function(){var t=this,n=this.getWidth(this.$refs.barrage),e=[this.getWidth(this.$refs.barrageFirst),this.getWidth(this.$refs.barrageSecond),this.getWidth(this.$refs.barrageThird),this.getWidth(this.$refs.barrageFourth)];this.initialOffset=n+15,e.map((function(e,i){t.animationStyle+="\n          .barrage-".concat(i,"{\n            animation: barrage-").concat(i," ").concat(e/40,"s linear infinite;\n            -webkit-animation: barrage-").concat(i," ").concat(e/40,"s linear infinite;\n          }\n          @keyframes barrage-").concat(i," {\n            from {\n              transform:translate3d(").concat(n+15,"px,0,0);\n              -webkit-transform:translate3d(").concat(n+15,"px,0,0);\n            }\n            to {\n              transform:translate3d(-").concat(e+15,"px,0,0);\n              -webkit-transform:translate3d(-").concat(e+15,"px,0,0);\n            }\n          }")}))},getWidth:function(t){return window.getComputedStyle(t,null).width.replace("px","")-0},filterBarrage:function(t,n){if(t)return t.filter((function(t,e){if(e%4===n)return t}))},checkTcbLoaded:function(){var t=this;if("undefined"!==typeof tcb)return this.app=tcb.init({env:P["a"]}),void this.app.auth().signInAnonymously().then((function(){t.fetchBarrage()}));setTimeout(this.checkTcbLoaded,1e3)},fetchBarrage:function(){var t=this;this.app.callFunction({name:"getBarrage"}).then((function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.result;i=void 0===i?{}:i;var a=i.code,r=i.result,s=void 0===r?[]:r;a||(n=t.barrages).unshift.apply(n,Object(I["a"])(s))}))},setBarrage:function(){this.app&&this.barrageCollection&&this.wish&&this.app.callFunction({name:"addBarrage",barrage:this.wish})}}},M=N,L=(e("2913"),Object(C["a"])(M,j,$,!1,null,null,null)),q=L.exports,D={name:"Editor",components:{Executions:S,Invitation:A,Barrage:q},data:function(){return{startDate:"",code:h.code,currentCode:"",isCursorVisible:1,canExecute:!1,canOpen:!1,wish:"",hasClosed:!1,canStart:!1}},created:function(){this.startDate=(new Date).toDateString(),this.progressivelyTyping()},updated:function(){this.scrollToBottom()},computed:{highlightedCode:function(){var t=u.a.highlight(this.currentCode,u.a.languages.javascript),n="".concat(t,'<span style="opacity:').concat(this.isCursorVisible,'"> ▍</span>');return n}},methods:{scrollToBottom:function(){this.$refs.editor.scrollTop=1e5},progressivelyTyping:function(){var t=this;return new Promise((function(n){var e,i=0,a=0,r=function r(){var s=Math.round(6*Math.random());i%2===0&&s%3===0&&(t.currentCode=t.code.substring(0,a),a+=2),i%24===0&&(t.isCursorVisible=0===t.isCursorVisible?1:0),i++,a<=t.code.length?e=requestAnimationFrame(r):(n(),t.canExecute=!0,cancelAnimationFrame(e))};e=requestAnimationFrame(r)}))},onAfterSending:function(t){var n=this;this.wish=t,this.canOpen=!1,setTimeout((function(){n.canStart=!0}),800)}}},W=D,R=(e("8164"),Object(C["a"])(W,s,o,!1,null,null,null)),V=R.exports,Y={props:[],components:{Editor:V},name:"Wedding"},J=Y,U=(e("0b39"),Object(C["a"])(J,a,r,!1,null,null,null)),z=U.exports;new i["a"]({el:"#app",render:function(t){return t(z)}})},"5df9":function(t,n,e){},"6af3":function(t,n,e){"use strict";var i=e("2b70"),a=e.n(i);a.a},8164:function(t,n,e){"use strict";var i=e("b1f4"),a=e.n(i);a.a},b1f4:function(t,n,e){},bddb:function(t,n,e){"use strict";var i=e("d0b9"),a=e.n(i);a.a},d0b9:function(t,n,e){}});
//# sourceMappingURL=app.0f727705.js.map