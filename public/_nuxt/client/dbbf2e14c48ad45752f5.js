(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{369:function(e,t,o){},370:function(e,t,o){},372:function(e,t,o){"use strict";var n=o(369);o.n(n).a},373:function(e,t,o){"use strict";var n=o(370);o.n(n).a},375:function(e,t,o){"use strict";o.r(t);var n={name:"Login",middleware:function(e){var t=e.store,o=e.redirect;if(t.getters.auth)return o("/")},layout:"empty",data:function(){return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur"}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){this.$store.dispatch("app/setAuth",this.loginForm.username).then(this.$router.push("/"))}}},r=(o(372),o(373),o(2)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("Admin Login")])]),e._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("i",{staticClass:"icon el-icon-user"}),e._v(" "),o("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"email",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("i",{staticClass:"icon el-icon-lock"}),e._v(" "),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("i",{staticClass:"icon",class:"password"===e.passwordType?"el-icon-turn-off":"el-icon-open"})])],1),e._v(" "),o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"success"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")])],1)],1)}),[],!1,null,"af664d66",null);t.default=component.exports}}]);