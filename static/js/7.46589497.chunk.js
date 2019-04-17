(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{129:function(e,t,a){"use strict";a.r(t);var n=a(12),o=a(13),l=a(16),s=a(14),i=a(15),c=a(0),r=a.n(c),h=a(55),d=(a(58),a(59)),u=a(17),m=a(52),p=a(56);function b(){var e=Object(h.a)(["\n    display:inline;\n    margin-top: 0 auto;\n    border-color: red;\n\n"]);return b=function(){return e},e}var E=Object(m.css)(b()),v=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).searchstudent=function(t){var a=t.target.value;e.setState({search:a},function(){fetch("https://stark-hamlet-65683.herokuapp.com/students/".concat(a),{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t&&t.length>0&&e.setState({found:!0,name:t[0].name,roll:t[0].roll,branch:t[0].branch,year:t[0].year,phone:t[0].phone,id:t[0].id,issued:t[0].issued})})})},e.issue=function(){var a=e.state,n=a.bookid,o=a.id,l=a.roll,s=a.bookname,i=a.name,c=a.author,r=a.publisher,h=a.edition,d=a.isbn;fetch("https://stark-hamlet-65683.herokuapp.com/bookissue",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({bookid:n,studentid:o,roll:l,bookname:s,studentname:i,author:c,publisher:r,edition:h,isbn:d})}).then(function(e){return e.json()}).then(function(a){t.hideModal(),e.props.fetchBooks(),u.toast.info(a,{position:u.toast.POSITION.BOTTOM_RIGHT,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3,draggable:!0,hideProgressBar:!1})})},e.state={search:"",name:"",roll:"",branch:"",year:"",phone:"",issued:"",id:"",found:!1,bookid:"",loading:!0},e}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,a=this,n="20vw";if(this.props.books&&this.props.books.length>0){r.a.createElement("div",{style:{marginLeft:"20px"}},"-");e=this.props.books.map(function(e){r.a.createElement("div",{style:{marginLeft:"20px"}},"-");return r.a.createElement("tr",{key:e.id,className:"tableRow",style:{fontSize:"0.9em"}},r.a.createElement("td",{className:"",title:"Click to know more about this book",style:{width:"20vw"}},r.a.createElement(d.a,{to:"/book/"+e.id,draggable:"false",className:""},e.name)),r.a.createElement("td",{className:""},e.isbn&&e.isbn||"-"),r.a.createElement("td",{className:""},e.author&&e.author||"-"),r.a.createElement("td",{className:""},e.edition&&e.edition||"-"),r.a.createElement("td",{className:""},e.publisher&&e.publisher||"-"),r.a.createElement("td",{className:"copies"},e.availablecopies&&e.availablecopies||"-"),r.a.createElement("td",{className:""},e.stackno&&e.stackno||"-"),r.a.createElement("td",{className:""},e.availablecopies?r.a.createElement("a",{style:{marginLeft:"4px"},onClick:function(){a.setState({bookid:e.id,bookname:e.name,author:e.author,publisher:e.publisher,edition:e.edition,isbn:e.isbn},t.showModal())}},"Issue"):r.a.createElement("a",{style:{cursor:"not-allowed",opacity:"0.6",marginLeft:"4px"}},"Issue")))})}else e=r.a.createElement("tr",{key:"nodata"},r.a.createElement("td",{className:"noData",colSpan:"6"},r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(p.ScaleLoader,{css:E,sizeUnit:"px",color:"#0099cc",size:60,height:35,width:8,radius:2,loading:this.state.loading}))));return r.a.createElement("div",{className:"pageRow",id:"booksBlock"},r.a.createElement("div",{className:"thisBlock"},r.a.createElement("div",{className:"blockBody"},r.a.createElement("div",{className:"thisTable"},r.a.createElement("div",{className:"tbl-header"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"",style:{width:"20vw"}},"Name"),r.a.createElement("th",{className:""},"ISBN"),r.a.createElement("th",{className:""},"Author"),r.a.createElement("th",{className:""},"Edition"),r.a.createElement("th",{className:""},"Publisher"),r.a.createElement("th",{className:""},"Avl.Copies"),r.a.createElement("th",{className:""},"Stack"),r.a.createElement("th",{className:" "},"Action"))))),r.a.createElement("div",{className:"tbl-content"},r.a.createElement("table",null,r.a.createElement("tbody",null,e)))))),r.a.createElement("dialog",{id:"issueBook",className:"dialogBox",onClick:t.hideModal,style:{width:"50vw"}},r.a.createElement("div",{className:"dialogTitle",onClick:t.preventHide},"Issue Book",r.a.createElement("button",{onClick:t.hideModal},"X")),this.state.found&&this.state.search?r.a.createElement("div",{className:"dialogBody",onClick:t.preventHide},r.a.createElement("div",{style:{width:n}},r.a.createElement("label",null,"Search Student"),r.a.createElement("input",{onChange:this.searchstudent,name:"search",placeholder:"Search by Roll or Name",value:this.state.search})),r.a.createElement("div",{style:{width:n}},r.a.createElement("label",null,"Name"),r.a.createElement("input",{name:"search",placeholder:"Name",value:this.state.name})),r.a.createElement("div",{style:{width:n}},r.a.createElement("label",null,"Roll"),r.a.createElement("input",{name:"Roll",placeholder:"Roll",value:this.state.roll})),r.a.createElement("div",{style:{width:n}},r.a.createElement("label",null,"Year"),r.a.createElement("input",{name:"Year",placeholder:"Year",value:this.state.year})),r.a.createElement("div",{style:{width:n}},r.a.createElement("label",null,"Phone"),r.a.createElement("input",{name:"Phone",placeholder:"Phone",value:this.state.phone})),r.a.createElement("div",{style:{width:n}},r.a.createElement("label",null,"Issued Books"),r.a.createElement("input",{name:"issued",placeholder:"None",value:this.state.issued})),r.a.createElement("div",{style:{width:n}},r.a.createElement("label",null,"Recommended To Return By :"),r.a.createElement("input",{name:"recommend",placeholder:"None",value:new Date((new Date).getTime()+12096e5).toDateString()}))):r.a.createElement("div",{className:"dialogBody",onClick:t.preventHide},r.a.createElement("div",{style:{width:n}},r.a.createElement("label",null,"Search Student"),r.a.createElement("input",{onChange:this.searchstudent,name:"search",placeholder:"Search by Roll or Name",value:this.state.search}))),r.a.createElement("div",{className:"dialogFooter",onClick:t.preventHide},r.a.createElement("button",{onClick:this.issue,disabled:!this.state.found||!this.state.search||this.state.issued>=3},"Issue"),r.a.createElement("button",{onClick:t.hideModal},"Cancel"))))}}],[{key:"showModal",value:function(){document.getElementById("issueBook").showModal()}},{key:"hideModal",value:function(){document.getElementById("issueBook").close()}},{key:"preventHide",value:function(e){e.stopPropagation()}}]),t}(r.a.Component),k=(a(63),function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).updateInfo=function(t){var a=t.target.name,n=t.target.value;"bookname"===a?e.setState({bookname:n}):"author"===a?e.setState({author:n}):"isbn"===a?e.setState({isbn:n}):"publisher"===a?e.setState({publisher:n}):"copyrightyear"===a?e.setState({copyrightyear:n}):"edition"===a?e.setState({edition:n}):"printyear"===a?e.setState({printyear:n}):"stackno"===a?e.setState({stackno:n}):"volume"===a?e.setState({volume:n}):"accessionno"===a?e.setState({accessionno:n}):"pages"===a?e.setState({pages:n}):"totalcopies"===a?e.setState({totalcopies:n}):"availablecopies"===a?e.setState({availablecopies:n}):"type"===a?e.setState({type:n}):"price"===a?e.setState({price:n}):"additionals"===a?e.setState({additionals:n}):"search"===a&&(e.setState({searchDevice:n}),e.props.searchbook(n))},e.add=function(a){var n=e.state,o=n.bookname,l=n.isbn,s=n.author,i=n.publisher,c=n.copyrightyear,r=n.edition,h=n.printyear,d=n.stackno,u=n.volume,m=n.accessionno,p=n.pages,b=n.totalcopies,E=n.type,v=n.price,k=n.additionals;e.props.addBook(o,l,s,i,c,r,h,d,u,m,p,b,b,E,v,k),t.hideModal(),e.props.fetchBooks(),e.setState({bookname:"",isbn:"",author:"",publisher:"",copyrightyear:"",edition:"",printyear:"",stackno:"",volume:"",accessionno:"",pages:"",totalcopies:"",availablecopies:"",type:"",price:"",additionals:""})},e.state={bookList:[],search:""},e}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="20vw";return r.a.createElement("div",{className:"pageRow filters"},r.a.createElement("div",{className:"thisBlock"},r.a.createElement("div",{className:"blockTitle"},r.a.createElement("t",{style:{marginLeft:"10px"}},"Book List"),r.a.createElement("button",{className:"addBtn",onClick:t.showModal},"Add"),r.a.createElement("label",{className:"addBtnIcon",onClick:t.showModal},"+"),r.a.createElement("input",{type:"text",className:"searchInput",style:{width:"300px",cursor:"text"},placeholder:"Search by Name,ISBN,Author,Publisher",value:this.state.searchDevice,autoComplete:"off",name:"search",onChange:this.updateInfo}),r.a.createElement("dialog",{id:"addBook",className:"dialogBox",onClick:t.hideModal,style:{width:"70vw"}},r.a.createElement("div",{className:"dialogTitle",onClick:t.preventHide},"Add New Book",r.a.createElement("button",{onClick:t.hideModal},"X")),r.a.createElement("div",{className:"dialogBody",onClick:t.preventHide},r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Name*"),r.a.createElement("input",{onChange:this.updateInfo,name:"bookname",value:this.state.bookname})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"ISBN"),r.a.createElement("input",{onChange:this.updateInfo,name:"isbn",value:this.state.isbn})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Author*"),r.a.createElement("input",{onChange:this.updateInfo,name:"author",value:this.state.author})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Publisher"),r.a.createElement("input",{onChange:this.updateInfo,name:"publisher",value:this.state.publisher})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Copyright Year"),r.a.createElement("input",{onChange:this.updateInfo,name:"copyrightyear",value:this.state.copyrightyear})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Edition"),r.a.createElement("input",{onChange:this.updateInfo,name:"edition",value:this.state.edition})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Print Year"),r.a.createElement("input",{onChange:this.updateInfo,name:"printyear",value:this.state.printyear})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Stack No."),r.a.createElement("input",{onChange:this.updateInfo,name:"stackno",value:this.state.stackno})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Volume"),r.a.createElement("input",{onChange:this.updateInfo,name:"volume",value:this.state.volume})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Accession Number"),r.a.createElement("input",{onChange:this.updateInfo,name:"accessionno",value:this.state.accessionno})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Pages"),r.a.createElement("input",{onChange:this.updateInfo,name:"pages",value:this.state.pages})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Total Copies*"),r.a.createElement("input",{onChange:this.updateInfo,name:"totalcopies",value:this.state.totalcopies})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Type"),r.a.createElement("input",{onChange:this.updateInfo,name:"type",value:this.state.type})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Price"),r.a.createElement("input",{onChange:this.updateInfo,name:"price",value:this.state.price})),r.a.createElement("div",{style:{width:e}},r.a.createElement("label",null,"Additionals"),r.a.createElement("input",{onChange:this.updateInfo,name:"additionals",value:this.state.additionals}))),r.a.createElement("div",{className:"dialogFooter",onClick:t.preventHide},r.a.createElement("button",{onClick:this.add,disabled:!this.state.bookname||!this.state.author||!this.state.totalcopies},"Add"),r.a.createElement("button",{onClick:t.hideModal},"Cancel"))))))}}],[{key:"showModal",value:function(){document.getElementById("addBook").showModal()}},{key:"hideModal",value:function(){document.getElementById("addBook").close()}},{key:"preventHide",value:function(e){e.stopPropagation()}}]),t}(r.a.Component));a.d(t,"default",function(){return y});var y=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).searchbook=function(t){fetch("https://stark-hamlet-65683.herokuapp.com/book/".concat(t),{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t&&e.setState({bookList:t})})},e.fetchBooks=function(){fetch("https://stark-hamlet-65683.herokuapp.com/book",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t&&(e.setState({bookList:t}),e.state.tip&&u.toast.info("Tip: Click on the Book Name to view its Details and Transaction History",{position:u.toast.POSITION.BOTTOM_RIGHT,closeOnClick:!0,pauseOnHover:!0,autoClose:5e3,draggable:!0,hideProgressBar:!1}),e.setState({tip:!1}))})},e.addBook=function(t,a,n,o,l,s,i,c,r,h,d,m,p,b,E,v){fetch("https://stark-hamlet-65683.herokuapp.com/book/add",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,isbn:a,author:n,publisher:o,copyrightyear:l,edition:s,printyear:i,stackno:c,volume:r,accessionno:h,pages:d,totalcopies:m,availablecopies:p,type:b,price:E,additionals:v})}).then(function(e){return e.json()}).then(function(t){u.toast.info(t,{position:u.toast.POSITION.BOTTOM_RIGHT,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3,draggable:!0,hideProgressBar:!1}),e.fetchBooks()})},e.state={tip:!0,bookList:[],searchKeyword:""},e}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchBooks()}},{key:"render",value:function(){return r.a.createElement("div",{className:"pageView"},r.a.createElement(k,{searchbook:this.searchbook,addBook:this.addBook,fetchBooks:this.fetchBooks}),r.a.createElement(v,{fetchBooks:this.fetchBooks,books:this.state.bookList}),r.a.createElement("div",{className:"footer"},"Made with \u2665 by Fahad Israr"))}}]),t}(r.a.Component)},63:function(e,t,a){}}]);
//# sourceMappingURL=7.46589497.chunk.js.map