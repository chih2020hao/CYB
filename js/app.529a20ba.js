(function(t){function e(e){for(var a,o,c=e[0],i=e[1],u=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},o={app:0},n={app:0},s=[];function c(t){return i.p+"js/"+({about:"about",backstage:"backstage",concert:"concert",connection:"connection",tickets:"tickets",userCenter:"userCenter"}[t]||t)+"."+{about:"88b43f15",backstage:"2c7a7090",concert:"9f2390d6",connection:"ffb5fc16",tickets:"f01c61e6",userCenter:"4e49c1ca"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={about:1,backstage:1,concert:1,connection:1,tickets:1,userCenter:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var a="css/"+({about:"about",backstage:"backstage",concert:"concert",connection:"connection",tickets:"tickets",userCenter:"userCenter"}[t]||t)+"."+{about:"1532d51d",backstage:"d580d669",concert:"543fd9d3",connection:"011c7902",tickets:"1786ee2e",userCenter:"0437b6c7"}[t]+".css",n=i.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===n))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[t],f.parentNode.removeChild(f),r(s)},f.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[t]=0})));var a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,r[1](d)}n[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var a=r("2b0e"),o=r("5f5b");r("ab8b"),r("2dd8");a["default"].use(o["a"]);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{staticClass:"fixed-top bg-black",attrs:{toggleable:"lg",type:"dark"}},[r("b-navbar-brand",{attrs:{to:"/"}},[r("img",{staticClass:"ml-1",attrs:{src:"./icon.png",width:"90",height:"40"}})]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/"}},[t._v("首頁")]),r("b-nav-item",{attrs:{to:"/about"}},[t._v("關於我們")]),r("b-nav-item",{attrs:{to:"/concert"}},[t._v("表演資訊")]),r("b-nav-item",{attrs:{to:"/messagebord"}},[t._v("留言板")]),"root"!==t.user.gender&&t.user.id.length>0?r("b-nav-item",{attrs:{to:"/userCenter"}},[t._v("會員中心")]):t._e(),"root"===t.user.gender?r("b-nav-item",{attrs:{to:"/backstage"}},[t._v("後台")]):t._e()],1),r("b-navbar-nav",{staticClass:"ml-auto"},[0===t.user.id.length?r("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.signUp",modifiers:{signUp:!0}}]},[t._v("註冊")]):t._e(),0===t.user.id.length?r("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.logIn",modifiers:{logIn:!0}}]},[t._v("登入")]):t._e(),t.user.id.length>0?r("b-nav-item",{on:{click:t.logout}},[t._v("登出")]):t._e()],1),r("b-modal",{attrs:{id:"signUp"},scopedSlots:t._u([{key:"modal-header",fn:function(e){var a=e.close;return[r("h3",[t._v("註冊")]),r("b-button",{attrs:{variant:"light"},on:{click:function(t){return a()}}},[r("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)]}},{key:"default",fn:function(e){e.hide;return[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},resset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-userName",label:"姓名:","label-for":"userName"}},[r("b-form-input",{attrs:{id:"userName",type:"text",placeholder:"請輸入姓名",required:""},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1),r("b-form-group",{attrs:{id:"input-group-gender",label:"性別:","label-for":"gender"}},[r("b-form-radio-group",{attrs:{id:"gender",required:""},model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}},[r("b-form-radio",{attrs:{value:"male",checked:""}},[t._v("男")]),r("b-form-radio",{attrs:{value:"female"}},[t._v("女")])],1)],1),r("b-form-group",{attrs:{id:"input-group-userName",label:"帳號:","label-for":"account",state:t.accountState,"invalid-feedback":"帳號必須為 6-16 個字"}},[r("b-form-input",{attrs:{id:"account",type:"text",placeholder:"請輸入帳號",required:"",state:t.accountState},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),r("b-form-group",{attrs:{id:"input-group-password",label:"密碼:","label-for":"password",state:t.passwordState,"invalid-feedback":"密碼必須為 6-16 個字"}},[r("b-form-input",{attrs:{id:"password",type:"password",placeholder:"請輸入密碼",required:"",state:t.passwordState},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-form-group",{attrs:{id:"input-group-passwordCheck",label:"確認密碼:","label-for":"passwordCheck",state:t.passwordCheckState,"invalid-feedback":"密碼不相符"}},[r("b-form-input",{attrs:{id:"passwordCheck",type:"password",placeholder:"請再次輸入密碼","required:state":"passwordCheckState"},model:{value:t.form.passwordCheck,callback:function(e){t.$set(t.form,"passwordCheck",e)},expression:"form.passwordCheck"}})],1),r("b-button",{staticClass:"mr-1",attrs:{type:"submit",variant:"primary"}},[t._v("送出")]),r("b-button",{attrs:{type:"reset"}},[t._v("重填")])],1)]}},{key:"modal-footer",fn:function(e){e.ok,e.cancel,e.hide;return[r("h6",{staticClass:"mr-auto"},[t._v("Signup with:")])]}}])}),r("b-modal",{attrs:{id:"logIn"},scopedSlots:t._u([{key:"modal-header",fn:function(e){var a=e.close;return[r("h3",[t._v("登入")]),r("b-button",{attrs:{variant:"light"},on:{click:function(t){return a()}}},[r("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)]}},{key:"default",fn:function(e){e.hide;return[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.login(e)},resset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-userName",label:"帳號:","label-for":"account",state:t.accountState,"invalid-feedback":"帳號必須為 6-16 個字"}},[r("b-form-input",{attrs:{id:"account",type:"text",placeholder:"請輸入帳號",required:"",state:t.accountState},model:{value:t.logInForm.account,callback:function(e){t.$set(t.logInForm,"account",e)},expression:"logInForm.account"}})],1),r("b-form-group",{attrs:{id:"input-group-password",label:"密碼:","label-for":"password",state:t.passwordState,"invalid-feedback":"密碼必須為 6-16 個字"}},[r("b-form-input",{attrs:{id:"password",type:"password",placeholder:"請輸入密碼",required:"",state:t.passwordState},model:{value:t.logInForm.password,callback:function(e){t.$set(t.logInForm,"password",e)},expression:"logInForm.password"}})],1),r("b-button",{staticClass:"mr-1",attrs:{type:"submit",variant:"primary"}},[t._v("送出")]),r("b-button",{attrs:{type:"reset"}},[t._v("重填")])],1)]}},{key:"modal-footer",fn:function(e){e.ok,e.cancel,e.hide;return[r("h6",{staticClass:"mr-auto"},[t._v("Login with:")])]}}])})],1)],1),r("router-view")],1)},s=[],c={name:"App",data:function(){return{form:{userName:"",gender:"",account:"",password:"",passwordCheck:""},logInForm:{account:"",password:""}}},computed:{user:function(){return this.$store.state.user},accountState:function(){var t=this.form.account||this.logInForm.account;return 0===t.length?null:t.length>=6&&t.length<=16||"root"===t},passwordState:function(){var t=this.form.password||this.logInForm.password;return 0===t.length?null:t.length>=6&&t.length<=16},passwordCheckState:function(){return 0===this.form.passwordCheck.length?null:this.form.passwordCheck===this.form.password}},methods:{onSubmit:function(){var t=this;if(this.accountState&&this.passwordState&&this.passwordCheckState){var e={account:this.form.account,password:this.form.password,userName:this.form.userName,gender:this.form.gender};this.axios.post("https://cyb-backstage.herokuapp.com/users/",e).then((function(e){e.data.success?(t.$swal({icon:"success",title:"註冊成功",text:"歡迎加入琴音部會員"}),t.form.userName="",t.form.gender="",t.form.account="",t.form.password="",t.form.passwordCheck="",location.reload()):t.$swal({icon:"error",title:"發生錯誤",text:e.data.message})})).catch((function(e){t.$swal({icon:"error",title:"發生錯誤",text:e.response.data.message})}))}},onReset:function(){void 0===this.form.userName?(this.form.account="",this.form.password=""):(this.form.userName="",this.form.gender="",this.form.account="",this.form.password="",this.form.passwordCheck="")},login:function(){var t=this;this.accountState&&this.passwordState&&this.axios.post("https://cyb-backstage.herokuapp.com/users/login",this.logInForm).then((function(e){e.data.success?(t.$store.commit("login",e.data.result[0]),t.$swal({icon:"success",title:"登入成功"}),location.reload()):t.$swal({icon:"error",title:"發生錯誤",text:e.data.message})})).catch((function(e){t.$swal({icon:"error",title:"發生錯誤",text:e.response.data.message})}))},logout:function(){var t=this;this.axios.delete("https://cyb-backstage.herokuapp.com/users/logout").then((function(e){e.data.success?(alert("登出成功"),t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/")):t.$swal({icon:"error",title:"錯誤",text:e.data.message})})).catch((function(e){t.$swal({icon:"error",title:"錯誤",text:e.response.data.message})}))},heartbeat:function(){var t=this;this.axios.get("https://cyb-backstage.herokuapp.com/users/heartbeat").then((function(e){t.user.id.length>0&&(e.data||(alert("登入時效已過"),t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/")))})).catch((function(){t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/")}))}},mounted:function(){var t=this;this.heartbeat(),setInterval((function(){t.heartbeat()}),5e3)}},i=c,u=(r("034f"),r("2877")),l=Object(u["a"])(i,n,s,!1,null,null,null),d=l.exports,f=(r("d3b7"),r("8c4f")),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6",attrs:{id:"home"}},[r("b-container",{staticClass:"pt-2"},[r("b-row",[r("b-col",{staticClass:"mx-auto",attrs:{cols:"12"}},[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"600","img-height":"300"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.file.images,(function(t){return r("b-carousel-slide",{staticClass:"img-fluid",attrs:{caption:t.title,"img-src":t.src}})})),1)],1)],1),r("b-row",{staticClass:"mt-3 my-2"},[r("h2",{staticClass:"col-12 text-white h2 my-5"},[t._v("表演影片")]),t._l(t.file.films,(function(e){return r("b-col",{key:e._id,staticClass:"my-5",attrs:{cols:"12",lg:"4"}},[r("b-card",{staticClass:"p-0"},[r("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:e.film,allowfullscreen:""}}),r("b-card-text",{staticClass:"mt-2"},[t._v(t._s(e.title))])],1)],1)}))],2)],1)],1)},p=[],b=(r("d81d"),{data:function(){return{slide:0,sliding:null,file:{films:{},images:{0:{_id:"5ff7b1c99f8fdc055c3388c3",src:"https://venturebeat.com/wp-content/uploads/2014/10/loading_desktop_by_brianmccumber-d41z4h6.gif?w=1200&strip=all",title:""}}}}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},mounted:function(){var t=this;this.axios.get("https://cyb-backstage.herokuapp.com/home/getFile").then((function(e){if(e.data.success){var r=[],a=[];e.data.result.map((function(e){void 0===e.file?(a.push(e),t.file.films=a):(r.push(e),t.file.images=r,t.file.images.map((function(t){t.src="https://cyb-backstage.herokuapp.com/home/img/"+t.file})))}))}}))}}),h=b,g=(r("cccb"),Object(u["a"])(h,m,p,!1,null,null,null)),v=g.exports;a["default"].use(f["a"]);var w=[{path:"/",name:"Home",component:v,meta:{title:"琴音部（台湾の軽音部）"}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))},meta:{title:"琴音部 | 關於我們"}},{path:"/concert",name:"Concert",component:function(){return r.e("concert").then(r.bind(null,"f630"))},meta:{title:"琴音部 | 表演資訊"}},{path:"/tickets",name:"Tickets",component:function(){return r.e("tickets").then(r.bind(null,"d464"))},meta:{title:"琴音部 | 訂票"}},{path:"/messagebord",name:"MessageBord",component:function(){return r.e("connection").then(r.bind(null,"a86f"))},meta:{title:"琴音部 | 留言板"}},{path:"/userCenter",name:"UserCenter",component:function(){return r.e("userCenter").then(r.bind(null,"6494"))},meta:{title:"琴音部 | 會員中心"}},{path:"/backstage",name:"BackStage",component:function(){return r.e("backstage").then(r.bind(null,"1f41"))},meta:{title:"琴音部 | 後台"}}],k=new f["a"]({routes:w});k.afterEach((function(t,e){var r=t.meta.title;document.title=r}));var y=k,C=(r("b0c0"),r("2f62")),_=r("0e44");a["default"].use(C["a"]);var S=new C["a"].Store({state:{user:{name:"",gender:"",id:""},concertId:""},mutations:{logout:function(t){t.user.name="",t.user.gender="",t.user.id=""},login:function(t,e){t.user.name=e.userName,t.user.gender=e.gender,t.user.id=e._id},bookTicket:function(t,e){t.concertId=e}},actions:{},modules:{},plugins:[Object(_["a"])()]}),x=r("bc3a"),$=r.n(x),N=r("2106"),I=r.n(N),O=r("5886"),j=(r("4413"),r("657c")),E=(r("2bd9"),r("71a5")),F=r.n(E),P=r("ecee"),T=r("ad3d"),q=r("b702"),A=r("c074"),L=r("f2d1");$.a.defaults.withCredentials=!0,a["default"].config.productionTip=!1,P["c"].add(q["b"],A["a"],L["a"],A["b"],q["c"],A["c"],L["b"],q["a"]),a["default"].component("font-awesome-icon",T["a"]),a["default"].use(I.a,$.a),a["default"].use(O["default"]),a["default"].use(F.a),a["default"].component("ImgInputer",j["a"]),new a["default"]({router:y,store:S,render:function(t){return t(d)}}).$mount("#app")},"5ced":function(t,e,r){},"85ec":function(t,e,r){},cccb:function(t,e,r){"use strict";r("5ced")}});
//# sourceMappingURL=app.529a20ba.js.map