(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{25:function(e,t,n){e.exports=n(50)},31:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),o=n.n(l),i=(n(31),n(12)),c=n(13),u=n(16),d=n(14),m=n(15),s=n(7),h=n(4),p=n.n(h),f=n(127),E=n(131),b=n(132),g=(n(36),n(17)),v=(n(47),p()({loader:function(){return n.e(3).then(n.bind(null,123))},loading:function(){return r.a.createElement("div",null," ")}})),w=p()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,130))},loading:function(){return r.a.createElement("div",null," ")}}),k=p()({loader:function(){return n.e(5).then(n.bind(null,120))},loading:function(){return r.a.createElement("div",null," ")}}),y=p()({loader:function(){return n.e(6).then(n.bind(null,121))},loading:function(){return r.a.createElement("div",null," ")}}),O=p()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,129))},loading:function(){return r.a.createElement("div",null," ")}}),j=p()({loader:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,126))},loading:function(){return r.a.createElement("div",null," ")}}),S=p()({loader:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,125))},loading:function(){return r.a.createElement("div",null," ")}}),x=p()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,124))},loading:function(){return r.a.createElement("div",null," ")}}),A=p()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,128))},loading:function(){return r.a.createElement("div",null," ")}}),P=p()({loader:function(){return n.e(12).then(n.bind(null,122))},loading:function(){return r.a.createElement("div",null," ")}}),U=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={isAuthenticated:!1},e.handleUpdate=e.handleUpdate.bind(Object(s.a)(Object(s.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleUpdate",value:function(e){this.setState({isAuthenticated:e},function(){localStorage.setItem("dFauth",JSON.stringify({isAuthenticated:e}))})}},{key:"componentDidMount",value:function(){if(localStorage.getItem("dFauth")){var e=localStorage.getItem("dFauth"),t=JSON.parse(e);this.setState({isAuthenticated:t.isAuthenticated})}}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{history:window.history,basename:"/iiittlibrary"},this.state.isAuthenticated?r.a.createElement("div",null,r.a.createElement(y,{updateRoutes:this.handleUpdate}),r.a.createElement(k,null),r.a.createElement(E.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:w}),r.a.createElement(b.a,{path:"/home",component:w}),r.a.createElement(b.a,{path:"/books",component:O}),r.a.createElement(b.a,{exact:!0,path:"/book",component:O}),r.a.createElement(b.a,{path:"/return",component:x}),r.a.createElement(b.a,{path:"/students",component:A}),r.a.createElement(b.a,{path:"/book/*",component:j}),r.a.createElement(b.a,{path:"/student/*",component:S}),r.a.createElement(b.a,{exact:!0,path:"*",component:P})),r.a.createElement(g.ToastContainer,{className:"toast-container",toastClassName:"darkToast",progressClassName:"progressbar"})):r.a.createElement(E.a,null,r.a.createElement(b.a,{path:"/login",render:function(){return r.a.createElement(v,{updateRoutes:e.handleUpdate})}}),r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(v,{updateRoutes:e.handleUpdate})}}),r.a.createElement(b.a,{exact:!0,path:"*",component:P})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,14,13]]]);
//# sourceMappingURL=main.a662820b.chunk.js.map