(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{19:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(5),c=n.n(l),s=n(18),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=f(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!u(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(s.b)(t,null,null,o.location):t,l=o.createHref(i);return a.a.createElement("a",p({},r,{onClick:this.handleClick,href:l,ref:n}))},t}(a.a.Component);m.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=m},81:function(e,t,n){},83:function(e,t,n){e.exports=n.p+"static/media/404.ec3cd0bc.png"},84:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABDBJREFUaIHtll1sFFUUx//n9GPb7qa43W6R2BR5kQT0QR5M1JimleKyNLFqWwwP0CUYkj6q1EZJqhLToGJCYmJI6C6gRErrQ1voB9pgTUyIiVZNCEJMChjEOl1s6bLbbnfv8aG2KWXLzkxnazTze50z9/z+c+7cXMDGxsbGxuY/DP0bTf3B8FNCqpYIZQKME2RwdNrb+f1emjG61ooG8B2+4uBVRUEAO6CUAKyBsQqAQyl1SRS9MLDHe9nImpwZ1XspD43kUaG7C8AOiPo4K6nW9O4uXq0mbq2CYA+YS4llsOb4hMfIuisygfLQSJ5TnF1g3gJIc2+D9+DiGl9Ie5aJvoLIR70B72t61874BBbKi8gbqeQBoD/gHRTgayVSa2T9jAZYLN8X8L5/v3oS+YmZy8rPS7beHhkLUNt+Pd9Jzm4wb4FIUzp5ABBQCQSRoQpK6O2jO6kRatuv50djeV0AVwGyrzfg/TDdO762371CqAYwZKSX5RPwHb7iuEu+Ib189ZEbBcy5HayUC0KtRvpZPgEqdLcCVAWRJj1fvvrIjQLlcPQAKBfQ630Bz7eG+pk2TcG2k+NumUncFIWBvt3Fz6erXyBfqecnT4WlW0gl4k8DcFCWBNPVWiEPWL2FhIsAQCkarTstuZGIdgpEF7OzsoM9O90jc2UL5f85oT4w29LSCQipawBAUI911FMcTAki2j+TmPnFf1xrBBbJz55QpuVne1nEthPhR/+IFV0ucYSvEjDJ09Obzux9KOprG9tApI4S85NC9LLi5DeU5F8Z0qLnhEqHJQH8Ia1ZiTRlO/IekfjUZiH+HFAXFKGxf1fJcNWJm84slTPMovKdTu/Dk9G/NvY3FP1sRe9lbyF/SGsGUSsRfTcZD0fOBkpOKUijUtjEwj/4g38OfLlzzR2GHAJxaSx26wmr5IFlBpiTF5GBKCI1Q4F1UwDQ3+D9RChnPYC3hWmi7rTkAnIJAEQl11rgPY/pU2gp+TkGAu6rAN6Zrz8WfhAQgHnMvO69mAqQTj4VIslXhDgay09eMNNzKQxvIX9I22dU3h/S3iPizQw5NFS/OmJONTWGAviPaRUQOQilzumV3xrSDoDoTVHovrO2+F3zqqkxOAF6SwHjOZSzXa88Ee0XhW6Xy1Nn5J6vF90BWlqElVLPMNDTFXCPp6ufkwfQ43J56jrqKb4s0yXQHeDiht8czJwLorSnyLy84IyzwFObKXnAQIDO7WUxBYwqocfvV3eXvNPzUiblAYP/AEHamVGxNahVpnq+0vKzTgaoPnm7ODE99SOYCwn0alRufzYUWDfl+3SslJJygEANApx1FXheXAl5wMRl7rmj2vosli/AvFEpFSdgkpg9ACCQNldBceNKyQMmb6Pl5yU7/1q4hgWVAjxAkBHF0tm/q2TYakEbGxsbG5v/NX8DAo/yQindL74AAAAASUVORK5CYII="},87:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var r=n(12),a=n(13),o=n(16),i=n(14),l=n(15),c=n(0),s=n.n(c),p=(n(81),n(19)),f=n(83),u=n.n(f),m=n(84),A=n.n(m),y=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).call(this,e))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"pageView"},s.a.createElement("div",{className:"pageRow",style:{alignContent:"center",textAlign:"center"}},s.a.createElement("div",{style:{border:"2px solid #dfdfdf",borderRadius:"12px",display:"flex"}},s.a.createElement("img",{src:u.a}),s.a.createElement("div",{style:{margin:"15px"}},s.a.createElement("div",{style:{fontSize:"40px",fontWeight:"1000",color:"#707070"}},"Hey..Don't worry!!You Just Managed to Mistype The Address.."),s.a.createElement("div",{style:{fontSize:"39px",fontWeight:"800",color:"#e59400",marginTop:"10px"}},"Did you mean any of these..?"),s.a.createElement("div",{style:{marginTop:"5vh",marginLeft:"10vw",cursor:"pointer"}},s.a.createElement("div",{style:{display:"flex"}},s.a.createElement(p.a,{to:"/home",className:"reflinks"},s.a.createElement("div",{style:{fontSize:"40px",color:"#0099cc"},className:"reflinks"},s.a.createElement("img",{src:A.a,style:{height:"24px"}}),"Home")),s.a.createElement(p.a,{to:"/books",className:"reflinks"},s.a.createElement("div",{style:{fontSize:"40px",color:"#0099cc",marginLeft:"2vw"},className:"reflinks"},s.a.createElement("img",{src:A.a,style:{height:"24px"}}),"Books"))),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement(p.a,{to:"/return",className:"reflinks"},s.a.createElement("div",{style:{fontSize:"40px",color:"#0099cc"},className:"reflinks"},s.a.createElement("img",{src:A.a,style:{height:"24px"}}),"Return")),s.a.createElement(p.a,{to:"/students",className:"reflinks"},s.a.createElement("div",{style:{fontSize:"40px",color:"#0099cc",marginLeft:"1vw"},className:"reflinks"},s.a.createElement("img",{src:A.a,style:{height:"24px"}})," Students"))),s.a.createElement(p.a,{to:"/login",className:"reflinks log"},s.a.createElement("div",{style:{fontSize:"37px",marginLeft:"0px !important"},className:"reflinks"},s.a.createElement("img",{src:A.a,style:{height:"24px"}}),"Login")))))))}}]),t}(s.a.Component)}}]);
//# sourceMappingURL=11.bc2ada48.chunk.js.map