(function(t){function e(e){for(var a,n,l=e[0],r=e[1],c=e[2],d=0,g=[];d<l.length;d++)n=l[d],o[n]&&g.push(o[n][0]),o[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(g.length)g.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,l=1;l<s.length;l++){var r=s[l];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={1:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([6,0]),s()})({"/TED":function(t,e,s){"use strict";var a=s("mDRP"),o=s.n(a);o.a},6:function(t,e,s){t.exports=s("Vtdi")},EDI0:function(t,e,s){},FiL0:function(t,e,s){},OcmG:function(t,e,s){"use strict";var a=s("ySbL"),o=s.n(a);o.a},"T/QS":function(t,e,s){"use strict";var a=s("FiL0"),o=s.n(a);o.a},Vtdi:function(t,e,s){"use strict";s.r(e);var a=s("Kw5r"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}}),s("router-view")],1)},i=[],n=(s("ZL7j"),s("KHd+")),l={},r=Object(n["a"])(l,o,i,!1,null,null,null),c=r.exports,u=s("jE9Z"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",staticStyle:{"margin-top":"50px"}},[t._m(0),s("br"),s("br"),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._m(1),s("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n                Login first if you have an account\n              ")]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("form",[s("p",{staticStyle:{color:"red"}},[t._v(t._s(t.errorLog))]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.emailLog,expression:"emailLog"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.emailLog},on:{input:function(e){e.target.composing||(t.emailLog=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordLog,expression:"passwordLog"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.passwordLog},on:{input:function(e){e.target.composing||(t.passwordLog=e.target.value)}}})]),s("p",{staticStyle:{"text-align":"justify"}},[s("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("Login")])])])])]),s("br"),s("p",[t._v("--Or you can log in with your social media--")]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("button",{staticClass:"btn btn-info",on:{click:function(e){t.loginfb()}}},[t._v("Login with Facebook")]),s("br"),s("br"),s("button",{staticClass:"btn-github",staticStyle:{cursor:"pointer"},attrs:{id:"github-button"},on:{click:t.loginGithub}},[s("i",{staticClass:"fa fa-github"}),t._v(" Sign in with Github\n                    ")]),s("g-signin-button",{attrs:{params:t.googleSignInParams},on:{success:t.onSignInSuccess,error:t.onSignInError}},[t._v("\n                      Sign in with Google\n                    ")])],1)])])])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n                Register first if you don't have an account\n              ")]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("form",[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.nameReg,expression:"nameReg"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter your full name"},domProps:{value:t.nameReg},on:{input:function(e){e.target.composing||(t.nameReg=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("p",{staticStyle:{color:"red"}},[t._v(t._s(t.error.mail))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.emailReg,expression:"emailReg"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail2","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.emailReg},on:{input:function(e){e.target.composing||(t.emailReg=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("p",{staticStyle:{color:"red"}},[t._v(t._s(t.error.pass))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordReg,expression:"passwordReg"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword2",placeholder:"Password"},domProps:{value:t.passwordReg},on:{input:function(e){e.target.composing||(t.passwordReg=e.target.value)}}})]),s("p",{staticStyle:{"text-align":"justify"}},[s("button",{staticClass:"btn btn-primary",on:{click:t.register}},[t._v("Register")])])])])])])])])])])])])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"text-align":"center"}},[s("h1",{staticStyle:{"font-family":"'Shrikhand', cursive"}},[t._v("welcome to hacktiv-overflow app")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[t._v("Login")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[t._v("Register")])])])}],m=s("L2JU"),p={name:"home",data:function(){return{nameReg:"",emailReg:"",passwordReg:"",emailLog:"",passwordLog:"",googleSignInParams:{client_id:"169887872962-c4gse03311mkdv5n2g3qdst6o0gikjp0.apps.googleusercontent.com"}}},created:function(){let t=localStorage.getItem("oflow-token");t&&this.$router.push({path:"/question"}),function(t,e,s){var a,o=t.getElementsByTagName(e)[0];t.getElementById(s)||(a=t.createElement(e),a.id=s,a.src="//connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(a,o))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:"272709716803429",cookie:!0,xfbml:!0,version:"v2.8"})}},computed:{...Object(m["b"])(["errorLog","error","statLog"])},components:{},watch:{statLog(){1==this.statLog&&this.$router.push({path:"/question"})}},methods:{register(){let t={name:this.nameReg,email:this.emailReg,password:this.passwordReg};this.$store.dispatch("signup",t)},onSignInSuccess(t){const e=t.getBasicProfile();console.log("ID: "+e.getId()),console.log("Name: "+e.getName()),console.log("Image URL: "+e.getImageUrl()),console.log("Email: "+e.getEmail());let s={name:e.getName(),email:e.getEmail(),password:e.getId()+e.getName()};this.$store.dispatch("fbnGoogSignin",s)},onSignInError(t){console.log("OH NOES",t)},steamSignIn(){this.$store.dispatch("signinSteam")},login(){console.log("loggin bosss");let t={email:this.emailLog,password:this.passwordLog};this.$store.dispatch("signin",t).then(()=>{this.$router.push({path:"/question"})})},onSignIn(t){var e=t.getBasicProfile();console.log("ID: "+e.getId()),console.log("Name: "+e.getName()),console.log("Image URL: "+e.getImageUrl()),console.log("Email: "+e.getEmail())},loginfb(){window.FB.login(t=>{console.log("statusChangeCallback"),console.log(t),"connected"===t.status?this.testAPI(this.$store.dispatch):alert("please login")})},loginGithub(){this.$store.dispatch("signinGithub").then(()=>{this.$router.push({path:"/question"})})},testAPI(t){console.log("Welcome!  Fetching your information.... "),FB.api("/me",{fields:["name","email","picture"]},function(e){let s=e.id;this.nameReg=e.name,this.emailReg=`${s}@facebook.com`,this.passwordReg=`${s}@facebook.com`,console.log(e);let a={name:this.nameReg,email:this.emailReg,password:this.passwordReg};t("fbnGoogSignin",a)})}}},h=p,v=(s("T/QS"),Object(n["a"])(h,d,g,!1,null,"39b7d406",null)),f=v.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticStyle:{"text-align":"center","margin-top":"20px","font-family":"'Slabo 27px', serif"}},[t._v("Welcome to Hacktiv Overflow")]),s("h2",{staticStyle:{"text-align":"center","font-family":"'Slabo 27px', serif"}},[t._v(t._s(t.user))]),s("Timeline")],1)},w=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar navbar-light bg-dark",staticStyle:{"margin-bottom":"20px"}},[s("form",{staticClass:"form-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),s("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:t.search}},[t._v("Search")]),s("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",staticStyle:{"margin-left":"10px"},attrs:{type:"submit"},on:{click:t.logout}},[t._v("Logout")])])]),s("h1",{staticStyle:{"text-align":"center","margin-top":"20px","font-family":"'Slabo 27px', serif"}},[t._v("Create new question")]),s("div",{staticClass:"modal-body"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"container"},[s("wysiwyg",{model:{value:t.question,callback:function(e){t.question=e},expression:"question"}}),s("br"),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addQuestion}},[t._v("submit")])],1),s("br"),t.loadStat?t._e():s("div",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"https://loading.io/spinners/hourglass/lg.sandglass-time-loading-gif.gif",alt:""}}),s("h1",[t._v("Please Wait")])]),t._l(t.questions,function(e,a){return t.loadStat?s("div",{key:a,staticClass:"card",staticStyle:{width:"auto","margin-bottom":"20px"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",{staticStyle:{"text-align":"center","margin-top":"auto"}},[t._v("vote: "+t._s(e.vote))]),s("h2",{staticStyle:{"text-align":"center"}},[t._v("Answer: "+t._s(e.answers.length))])]),s("div",{staticClass:"col"},[s("div",{staticClass:"column has-text-centered"},[s("router-link",{attrs:{to:{name:"answer",params:{id:e._id}}}},[s("h4",{staticStyle:{"text-align":"center","margin-top":"auto"}},[t._v(t._s(e.title))])]),s("router-view")],1),s("h5",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("posted by: "+t._s(e.userId.name))]),s("h5",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("user id: "+t._s(e.userId._id))])])])]):t._e()})],2)},S=[],_={name:"Timeline",data:function(){return{query:"",title:"",question:"",user:window.localStorage["oflow-name"]}},computed:{...Object(m["b"])(["questions","loadStat"])},created(){},methods:{search(){let t=this.query;this.$store.dispatch("search",t)},logout(){localStorage.removeItem("oflow-token"),localStorage.removeItem("oflow-name"),localStorage.removeItem("oflow-id"),this.$store.commit("setStatLog",!1)},addQuestion(){let t={username:window.localStorage["oflow-name"],title:this.title,question:this.question},e={token:window.localStorage["oflow-token"]},s={body:t,headers:e};this.$store.dispatch("upload",s)}}},x=_,C=(s("/TED"),Object(n["a"])(x,y,S,!1,null,null,null)),k=C.exports,I={name:"Blog",components:{Timeline:k},computed:{...Object(m["b"])(["statLog"])},data:function(){return{user:window.localStorage["oflow-name"]}},methods:{logout(){localStorage.removeItem("blog-token"),localStorage.removeItem("blog-name"),localStorage.removeItem("blog-id"),this.$store.commit("setStatLog",!1)}},watch:{statLog(){0==this.statLog&&this.$router.push({path:"/"})}},created(){let t=localStorage.getItem("oflow-token");t||this.$router.push({path:"/"}),this.$store.dispatch("getAllQuestion")}},L=I,q=(s("Xqkc"),Object(n["a"])(L,b,w,!1,null,null,null)),$=q.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loadStat?t._e():s("div",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"https://loading.io/spinners/hourglass/lg.sandglass-time-loading-gif.gif",alt:""}}),s("h1",[t._v("Please Wait")])]),t.loadStat?s("div",{staticClass:"container",staticStyle:{"margin-top":"100px"}},[s("div",{staticClass:"container"},[s("button",{staticClass:"btn btn-info btn-lg",attrs:{type:"button"},on:{click:t.backpage}},[t._v("back to question")])]),s("br"),s("br"),s("div",[s("div",{staticClass:"d-flex flex-row",staticStyle:{"background-color":"white"}},[s("div",{staticClass:"p-2"},[s("button",{staticClass:"btn btn-secondary",staticStyle:{"text-align":"center"},attrs:{type:"button"},on:{click:t.voteup}},[t._v("vote up")]),s("br"),s("br"),s("h3",{staticStyle:{"text-align":"center"}},[t._v("vote: "+t._s(t.singQues.vote))]),s("br"),s("button",{staticClass:"btn btn-secondary",staticStyle:{"text-align":"center"},attrs:{type:"button"},on:{click:t.votedown}},[t._v("vote down")])]),s("div",{staticClass:"p-2"},[s("h2",{staticClass:"card-title"},[t._v(t._s(t.singQues.title))]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("posted by: "+t._s(t.singQues.userId.name))]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("user id: "+t._s(t.singQues.userId._id))]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("posted at: "+t._s(t._f("moment")(t.singQues.createdAt,"MMMM Do YYYY, h:mm:ss")))]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("last update: "+t._s(t._f("moment")(t.singQues.updatedAt,"MMMM Do YYYY, h:mm:ss")))]),s("div",{staticStyle:{"text-align":"justify"},domProps:{innerHTML:t._s(t.singQues.question)}}),t.idUser==this.singQues.userId._id?s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteQues}},[t._v("Delete Question")]):t._e()])]),s("div",{staticClass:"container"},[s("h1",[t._v("Answer")]),s("wysiwyg",{model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),s("br"),s("button",{staticClass:"btn btn-info btn-sm",attrs:{type:"button"},on:{click:t.postAnswer}},[t._v("post answer")]),s("br"),s("br"),s("br"),t._l(t.singQues.answers,function(e,a){return t.loadStat?s("div",{key:a,staticClass:"card",staticStyle:{width:"auto","margin-bottom":"20px"}},[s("div",{staticClass:"d-flex flex-row"},[s("div",{staticClass:"p-2"},[s("button",{staticClass:"btn btn-secondary",staticStyle:{"text-align":"center"},attrs:{type:"button"}},[t._v("vote up")]),s("br"),s("br"),s("h3",{staticStyle:{"text-align":"center"}},[t._v("vote: "+t._s(e.vote))]),s("br"),s("button",{staticClass:"btn btn-secondary",staticStyle:{"text-align":"center"},attrs:{type:"button"}},[t._v("vote down")])]),s("div",{staticClass:"p-2"},[s("h5",{staticClass:"card-title"},[t._v(t._s(e.user))]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("last update: "+t._s(t._f("moment")(e.posted,"MMMM Do YYYY, h:mm:ss")))]),s("div",{staticStyle:{"text-align":"justify"},domProps:{innerHTML:t._s(e.answer)}})])])]):t._e()})],2)])]):t._e()])},E=[],O=s("GUC0"),R=s.n(O),P={name:"Detail",data:function(){return{idUser:localStorage.getItem("blog-id"),answer:""}},computed:{...Object(m["b"])(["singQues","loadStat"])},created(){let t=localStorage.getItem("oflow-token");t||this.$router.push({path:"/"}),this.$store.dispatch("makeStatLoad",!1),this.$store.dispatch("getOneQuestion",this.$route.params.id)},methods:{backpage(){this.$router.push({path:"/question"})},deleteQues(){var t=confirm("delete Question!");1==t&&this.godeleteQues()},godeleteQues(){let t=this.$route.params.id,e={token:window.localStorage["oflow-token"]},s={id:t,headers:e};this.$store.dispatch("deleteQuestion",s),this.$router.push({path:"/question"})},voteup(){let t=this.singQues.vote+1;this.vote(t)},votedown(){let t=this.singQues.vote-1;this.vote(t)},vote(t){let e=window.localStorage["oflow-id"];if(e==this.singQues.userId._id)R()("you are not allowed to vote your own post");else{let e=this.$route.params.id,s={vote:t},a={token:window.localStorage["blog-token"]},o={id:e,body:s,headers:a};console.log("payload",o),this.$store.dispatch("updateVote",o)}},postAnswer(){this.$route.params.id;let t={user:window.localStorage["blog-name"],answer:this.answer},e={token:window.localStorage["blog-token"]},s=this.$route.params.id,a={id:s,body:t,headers:e};this.$store.dispatch("uploadAnswer",a)}}},j=P,M=(s("OcmG"),Object(n["a"])(j,Q,E,!1,null,null,null)),N=M.exports;a["a"].use(u["a"]);var A=new u["a"]({routes:[{path:"/",name:"home",component:f},{path:"/question",name:"question",component:$},{path:"/answer/:id",name:"answer",component:N}]});a["a"].use(m["a"]);var T=new m["a"].Store({state:{errorLog:"",error:"",questions:"",user:"",singQues:"",messagewarn:"",statLog:"",titlesing:"default",contentsing:"default",loadStat:!1},mutations:{setLoadStat(t,e){t.loadStat=e},setError(t,e){t.error=e},setStatLog(t,e){t.statLog=e},setWarn(t,e){t.messagewarn=e},setErrorLog(t,e){console.log("commit",e),t.errorLog=e},setQuestions(t,e){t.questions=e,t.loadStat=!0},setOneQuestion(t,e){t.singQues=e,t.titlesing=e.title,t.contentsing=e.content,t.loadStat=!0},setStatSing(t,e){t.titlesing=e},pushData(t,e){void 0==t.questions&&(t.questions=[]),console.log(t.questions,e),t.questions.push(e)}},actions:{signup:function(t,e){console.log(e),axios.post("http://35.240.160.136/users/signup",e).then(t=>{console.log("success",t),R()("successfuly registered")}).catch(function(e){console.log(e.response.data.message);let s=e.response.data.message;t.commit("setError",s)})},signin:function(t,e){axios.post("http://35.240.160.136/users/signin",e).then(e=>{console.log("success",e.data);let s=e.data.token,a=e.data.dataUser.name,o=e.data.dataUser._id;localStorage.setItem("oflow-id",o),localStorage.setItem("oflow-name",a),localStorage.setItem("oflow-token",s),t.commit("setStatLog",!0)}).catch(function(e){console.log(e.response.data.message);let s=e.response.data.message;t.commit("setErrorLog",s)})},fbnGoogSignin:function(t,e){axios.post("http://35.240.160.136/users/signinFB",e).then(e=>{console.log("success",e.data);let s=e.data.token,a=e.data.dataUser.name,o=e.data.dataUser._id;localStorage.setItem("oflow-id",o),localStorage.setItem("oflow-name",a),localStorage.setItem("oflow-token",s),t.commit("setStatLog",!0)}).catch(function(t){console.log(t)})},signinSteam:function(t,e){axios({method:"get",url:"http://35.240.160.136/users/steam/authenticate"}).then(t=>{window.open(t.data,"myWindow","width=500, height=700")}).catch(t=>{console.log(t)})},signinGithub:function(t,e){OAuth.initialize("M4L8E9dVTfx5qS1IWslOYc0gx_c"),OAuth.popup("github").then(e=>{e.me().then(e=>{const s={name:e.alias,email:e.email,password:e.id+e.alias};console.log(s),axios.post("http://35.240.160.136/users/signinFB",s).then(e=>{console.log("success",e.data);let s=e.data.token,a=e.data.dataUser.name,o=e.data.dataUser._id;localStorage.setItem("oflow-id",o),localStorage.setItem("oflow-name",a),localStorage.setItem("oflow-token",s),t.commit("setStatLog",!0)}).catch(function(t){console.log(t)})})})},upload:function(t,e){let s=e.headers;axios.post("http://localhost:3000/questions",e.body,{headers:s}).then(e=>{axios.get("http://localhost:3000/questions/home").then(e=>{console.log("success",e.data),t.commit("setQuestions",e.data.data)}),R()("successfuly created new article")}).catch(function(t){console.log(t)})},deleteQuestion:function(t,e){axios.delete(`http://localhost:3000/questions/${e.id}`,{headers:e.headers}).then(e=>{axios.get("http://localhost:3000/questions/home").then(e=>{R()("successfuly deleted question"),t.commit("setQuestions",e.data.data)})}).catch(t=>{})},getAllQuestion:function(t,e){axios.get("http://localhost:3000/questions/home").then(e=>{console.log("success",e.data),t.commit("setQuestions",e.data.data)}).catch(function(t){console.log(t)})},updateQuestion:function(t,e){console.log(e),axios.put(`http://localhost:3000/questions/${e.id}`,e.body,{headers:e.headers}).then(e=>{console.log("success",e.data),t.commit("setStatSing","default"),R()("successfuly updated article")}).catch(function(t){console.log(t)})},search:function(t,e){axios.get(`http://localhost:3000/questions/search?title=${e}`).then(e=>{console.log("success",e.data),t.commit("setQuestions",e.data.data)}).catch(function(t){console.log(t)})},getOneQuestion(t,e){axios.get(`http://localhost:3000/questions/view/${e}`).then(e=>{console.log("success",e.data),t.commit("setOneQuestion",e.data.data)}).catch(function(t){console.log(t)})},updateVote(t,e){axios.put(`http://localhost:3000/questions/vote/${e.id}`,e.body,{headers:e.headers}).then(s=>{axios.get(`http://localhost:3000/questions/view/${e.id}`).then(e=>{console.log("success",e.data),R()("successfuly add answer"),t.commit("setOneQuestion",e.data.data)})}).catch(function(t){console.log(t)})},makeStatLoad(t,e){console.log("kok ga mau mampir"),t.commit("setLoadStat",e)},uploadAnswer:function(t,e){let s=e.headers;console.log("pay load",e.body),axios.put(`http://localhost:3000/questions/add-answer/${e.id}`,e.body,{headers:s}).then(s=>{axios.get(`http://localhost:3000/questions/view/${e.id}`).then(e=>{console.log("success",e.data),R()("successfuly add answer"),t.commit("setOneQuestion",e.data.data)})}).catch(function(t){console.log(t)})}}}),U=s("T3bF"),D=s.n(U),B=s("w7MN"),Y=s.n(B);a["a"].use(Y.a,{}),a["a"].use(D.a),a["a"].use(s("Lq01")),a["a"].config.productionTip=!1,new a["a"]({router:A,store:T,render:t=>t(c)}).$mount("#app")},Xqkc:function(t,e,s){"use strict";var a=s("iBFJ"),o=s.n(a);o.a},ZL7j:function(t,e,s){"use strict";var a=s("EDI0"),o=s.n(a);o.a},iBFJ:function(t,e,s){},mDRP:function(t,e,s){},ySbL:function(t,e,s){}});
//# sourceMappingURL=app.62683ab3.js.map