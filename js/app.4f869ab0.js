(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1f83f91f"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/menu-order-vuetify/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f70":function(t,e,n){},"39f9":function(t,e,n){},"3b0c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavBar"),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{color:"orange darken-2",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return n("v-btn",{key:e,staticClass:"my-2",attrs:{color:"white",text:"",rounded:""}},[t._v(t._s(e))])})),n("v-col",{staticClass:"orange darken-3 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("SingCafe")])])],2)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"orange darken-2",dark:""}},[n("v-toolbar-title",[t._v("SingHey")]),n("v-spacer"),n("router-link",{attrs:{to:{name:"hey-menu-route"}}},[n("v-btn",{attrs:{text:"",rounded:""}},[t._v("HeyMenu")])],1),n("router-link",{attrs:{to:{name:"menu-route"}}},[n("v-btn",{attrs:{text:"",rounded:""}},[t._v("Menu")])],1),n("router-link",{attrs:{to:{name:"order-route"}}},[n("v-btn",{attrs:{text:"",rounded:""}},[t._v("Order")])],1)],1)},s=[],c={name:"NavBar"},l=c,u=(n("88cd"),n("2877")),d=n("6544"),f=n.n(d),m=n("40dc"),v=n("8336"),p=n("2fa4"),h=n("2a7f"),b=Object(u["a"])(l,i,s,!1,null,"0909b6da",null),_=b.exports;f()(b,{VAppBar:m["a"],VBtn:v["a"],VSpacer:p["a"],VToolbarTitle:h["a"]});var y={name:"App",components:{NavBar:_},data:function(){return{links:["Home","About","Contact Us"]}}},C=y,g=(n("873d"),n("7496")),x=n("62ad"),k=n("a75b"),V=n("553a"),O=n("0fd9"),j=Object(u["a"])(C,a,o,!1,null,"9b76b4da",null),w=j.exports;f()(j,{VApp:g["a"],VBtn:v["a"],VCol:x["a"],VContent:k["a"],VFooter:V["a"],VRow:O["a"]});n("d3b7");var S=n("8c4f"),P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("This is SingHey homepage")]),n("p",[t._v("Todo list")]),n("ul",{staticClass:"todolist"},[n("li",[t._v("Menu, not really need 'EventShow' view")]),n("li",[t._v("Form to submit order, save in local json as fake db")]),n("li",[t._v("Put above system to Google Cloud")]),n("li",[t._v("To enable SASS in this project")]),n("li",[t._v("*CSS adjustment, materialize maybe")])])])}],A={name:"Home",components:{}},I=A,T=(n("c125"),Object(u["a"])(I,P,E,!1,null,"236e0b0d",null)),$=T.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("h1",[t._v("Menu Page")]),n("v-expansion-panels",t._l(t.dishes,(function(e){return n("v-expansion-panel",{key:e.id,staticClass:"dish-container",class:{selected:e.id==t.selectedId},on:{click:function(n){return t.updateSelected(e.id)}}},[n("v-expansion-panel-header",[t._v(t._s(e.title))]),n("v-expansion-panel-content",[t._v(" Price: "+t._s(e.price)+" "),n("br"),t._v(" Size: "+t._s(e.size)+" "),n("br"),t._v(" Category: "+t._s(e.category)+" ")])],1)})),1),n("div",{staticClass:"btn-container"},[n("v-btn",{staticClass:"primary mt-5",on:{click:t.addToCart}},[t._v("Add")]),n("v-spacer"),n("v-btn",{staticClass:"red lighten-1 mt-5 clear-btn",on:{click:t.clearCart}},[t._v("Clear")])],1),n("CartInfo"),n("router-link",{attrs:{to:{name:"order-route"}}},[n("v-btn",{staticClass:"primary mt-5"},[t._v("Ordered dishes")])],1)],1)],1)],1)],1)},F=[],M=(n("7db0"),n("b85c")),D=n("5530"),R=n("2f62"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mt-5",attrs:{outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4"},[t._v("Your orders")]),n("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(t.cart.length)+" dishes in total.")]),n("v-list-item-subtitle",[t._v("Price: $"+t._s(t.totalPrice))])],1)],1)],1)],1)},B=[],H={computed:Object(D["a"])(Object(D["a"])({},Object(R["b"])(["cart","dishes"])),{},{totalPrice:function(){var t,e=0,n=Object(M["a"])(this.cart);try{for(n.s();!(t=n.n()).done;){var r=t.value;e+=10*r.price}}catch(a){n.e(a)}finally{n.f()}return e/10}})},N=H,z=n("b0af"),Y=n("da13"),U=n("5d23"),J=Object(u["a"])(N,q,B,!1,null,"6a538a32",null),G=J.exports;f()(J,{VCard:z["a"],VListItem:Y["a"],VListItemContent:U["a"],VListItemSubtitle:U["b"],VListItemTitle:U["c"]});var K={name:"Menu",components:{CartInfo:G},data:function(){return{selectedId:0}},methods:{addToCart:function(){var t=this;0!==this.selectedId&&this.cart.push(this.dishes.find((function(e){return e.id==t.selectedId})))},updateSelected:function(t){this.selectedId=t},clearCart:function(){this.$store.dispatch("clearCartAction")}},computed:Object(D["a"])(Object(D["a"])({},Object(R["b"])(["cart","dishes"])),{},{totalPrice:function(){var t,e=0,n=Object(M["a"])(this.cart);try{for(n.s();!(t=n.n()).done;){var r=t.value;e+=10*r.price}}catch(a){n.e(a)}finally{n.f()}return e/10}})},W=K,X=(n("930e"),n("a523")),Q=n("cd55"),Z=n("49e2"),tt=n("c865"),et=n("0393"),nt=Object(u["a"])(W,L,F,!1,null,"7c3b0e2f",null),rt=nt.exports;f()(nt,{VBtn:v["a"],VCol:x["a"],VContainer:X["a"],VContent:k["a"],VExpansionPanel:Q["a"],VExpansionPanelContent:Z["a"],VExpansionPanelHeader:tt["a"],VExpansionPanels:et["a"],VSpacer:p["a"]});var at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order"},[n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("h1",[t._v("Your order")]),t._l(t.cart,(function(e,r){return n("v-card",{key:r,staticClass:"mb-2 order-card"},[n("div",{staticClass:"order-card-title"},[t._v(t._s(e.title))]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.removeFromCart(r)}}},[t._v("Remove")])],1)}))],2),n("CartInfo"),n("DeliveryInfoForm")],1)],1)],1)},ot=[],it=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-form",[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6",sm:"6",md:"4"}},[n("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Date for pickup/delivery",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",a,!1),r))]}}])},[n("v-date-picker",{on:{input:function(e){t.menu2=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),n("v-col",{attrs:{cols:"6",sm:"6"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Time",readonly:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},"v-text-field",a,!1),r))]}}])},[n("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(e){return t.$refs.menu.save(t.time)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{counter:20,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{counter:8,label:"Phone No.",required:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{counter:100,label:"Special Request"},model:{value:t.reqeustInfo,callback:function(e){t.reqeustInfo=e},expression:"reqeustInfo"}})],1),t.errors.length?n("v-col",{attrs:{cols:"12",md:"4"}},t._l(t.errors,(function(e,r){return n("v-alert",{key:r,attrs:{type:"warning"}},[t._v(t._s(e))])})),1):t._e(),t.successInfo?n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-alert",{attrs:{type:"success"}},[t._v(t._s(t.successInfo))])],1):t._e(),t.submitErrorAlert?n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-alert",{attrs:{type:"error"}},[t._v(t._s(t.submitErrorAlert))])],1):t._e(),n("v-btn",{attrs:{color:"primary"},on:{click:t.sendEmail}},[t._v("Place Order")])],1)],1)],1)],1)}),st=[],ct=(n("d81d"),n("b0c0"),n("0f91")),lt=n.n(ct),ut={name:"DeliveryInfoForm",data:function(){return{phone:"",name:"",errors:[],successInfo:"",submitErrorAlert:"",date:null,time:null,reqeustInfo:""}},methods:{submitDelieveryForm:function(){var t={name:this.name,phone:this.phone};this.$store.dispatch("postOrderAction",{formObj:t})},successSubmittedFunc:function(){this.successInfo="Order Submitted!",this.$store.state.cart=[],this.name="",this.phone="",this.date=null,this.time=null,this.reqeustInfo=""},sendEmail:function(){var t=this;if(this.errors=[],this.successInfo="",0==this.$store.state.cart.length)this.errors.push("Seemed your order is empty #_#");else if(null==this.date||null==this.time)this.errors.push("Please pick date and time");else if(""==this.name||8!==this.phone.length)""==this.name&&this.errors.push("Please fill in your name"),8!==this.phone.length&&this.errors.push("Please fill in correct contact number");else{var e={name:[this.name,this.phone],number:this.phone,dishes:this.$store.state.cart.map((function(t){return t.title})),timestamp:[this.date,this.time],requestInfo:[this.reqeustInfo]};lt.a.send("default_service","singhey01",e,"user_rparbFDX8fAYatj1PKEoO").then((function(e){console.log("SUCCESS!",e.status,e.text),200==e.status&&t.successSubmittedFunc()}),(function(e){console.log("FAILED...",e),t.submitErrorAlert=e}))}},notsendEmail:function(){console.log(this.date,this.time)}}},dt=ut,ft=n("0798"),mt=n("2e4b"),vt=n("4bd4"),pt=n("e449"),ht=n("8654"),bt=n("c964"),_t=Object(u["a"])(dt,it,st,!1,null,"3155d68a",null),yt=_t.exports;f()(_t,{VAlert:ft["a"],VBtn:v["a"],VCol:x["a"],VContainer:X["a"],VDatePicker:mt["a"],VForm:vt["a"],VMenu:pt["a"],VRow:O["a"],VTextField:ht["a"],VTimePicker:bt["a"]});var Ct={name:"Order",components:{CartInfo:G,DeliveryInfoForm:yt},computed:Object(D["a"])({},Object(R["b"])(["cart"])),methods:{removeFromCart:function(t){this.$store.state.cart.splice(t,1)}}},gt=Ct,xt=(n("68a4"),Object(u["a"])(gt,at,ot,!1,null,"1b29eae6",null)),kt=xt.exports;f()(xt,{VBtn:v["a"],VCard:z["a"],VCol:x["a"],VContainer:X["a"],VContent:k["a"]});var Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hey-menu"},[n("br"),t._l(t.dishes,(function(e,r){return n("v-card",{key:r,staticClass:"mx-auto",attrs:{"max-width":"344"}},[n("v-img",{attrs:{src:e.image,height:"200px"}}),n("v-card-title",[t._v(t._s(e.title))]),n("v-card-subtitle",[t._v("Price: "+t._s(e.price))]),n("v-card-actions",[n("v-btn",{attrs:{color:"orange darken-2",text:""},on:{click:function(n){return t.addDishToCart(e)}}},[t._v("Add")])],1)],1)}))],2)},Ot=[],jt={name:"HeyMenu",data:function(){return{show:!1}},computed:Object(D["a"])({},Object(R["b"])(["dishes","cart"])),methods:{addDishToCart:function(t){this.cart.push(t)}}},wt=jt,St=(n("b5b1"),n("99d9")),Pt=n("adda"),Et=Object(u["a"])(wt,Vt,Ot,!1,null,"83cf04a4",null),At=Et.exports;f()(Et,{VBtn:v["a"],VCard:z["a"],VCardActions:St["a"],VCardSubtitle:St["b"],VCardTitle:St["c"],VImg:Pt["a"]}),r["a"].use(S["a"]);var It=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/menu",name:"menu-route",component:rt},{path:"/order",name:"order-route",component:kt},{path:"/heymenu",name:"hey-menu-route",component:At}],Tt=new S["a"]({routes:It}),$t=Tt,Lt=n("bc3a"),Ft=n.n(Lt),Mt=Ft.a.create({baseURL:"http://localhost:3000",withCredentials:!1,headers:{Accept:{Accept:"application/json","Content-Type":"application/json"}}}),Dt={postOrder:function(t){return Mt.post("/orders",t)}};r["a"].use(R["a"]);var Rt=new R["a"].Store({state:{cart:[],dishes:[{id:1,title:"盐焗鸡腿饭",price:6.8,size:1,location:"Lau Pa Sat","english-title":"Salted Baked Chicken Rice",owner:"Chef Mao",category:"Rice set",image:"https://i.ibb.co/c8VnbwT/food1.jpg"},{id:5,title:"盐焗鸡腿干捞面",price:6.8,size:1,location:"Lau Pa Sat","english-title":"Salted Baked Chicken dry noodle",owner:"Chef Mao",category:"Noodle set",image:"https://i.ibb.co/tHgCfxV/food2.jpg"},{id:6,title:"鲜茄洋葱牛肉/猪扒",price:15.8,size:"2~3",location:"Lau Pa Sat","english-title":"Tomato and onion beef/pork",owner:"Chef Mao",category:"Cusine (no rice)",image:"https://i.ibb.co/WgYqCyN/food3.jpg"}]},mutations:{CLEAR_CART:function(t){t.cart=[]},PLACE_HOLDER:function(){}},actions:{clearCartAction:function(t){var e=t.commit;e("CLEAR_CART")},postOrderAction:function(t,e){var n=t.commit,r=t.state,a=e.formObj,o={table:a,order:r.cart.map((function(t){return{id:t.id,title:t.title}}))};console.log("post orderObj",o),Dt.postOrder(o).then((function(){return n("PLACE_HOLDER")})).catch((function(t){console.log("There is error for postOrderAction"),console.log(t.response)}))}},modules:{}}),qt=n("f309");r["a"].use(qt["a"]);var Bt=new qt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:$t,store:Rt,vuetify:Bt,render:function(t){return t(w)}}).$mount("#app")},"68a4":function(t,e,n){"use strict";var r=n("777e"),a=n.n(r);a.a},"777e":function(t,e,n){},"873d":function(t,e,n){"use strict";var r=n("3b0c"),a=n.n(r);a.a},"88cd":function(t,e,n){"use strict";var r=n("39f9"),a=n.n(r);a.a},"930e":function(t,e,n){"use strict";var r=n("a514"),a=n.n(r);a.a},a514:function(t,e,n){},b5b1:function(t,e,n){"use strict";var r=n("1f70"),a=n.n(r);a.a},c125:function(t,e,n){"use strict";var r=n("fdb6"),a=n.n(r);a.a},fdb6:function(t,e,n){}});
//# sourceMappingURL=app.4f869ab0.js.map