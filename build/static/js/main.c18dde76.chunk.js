(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,a,t){var n=t(368),r=t(369);function l(e,a){return n(e)?"":"@import 'node_modules/wi-framework/components/bootstrap/".concat(a,"';")}function s(e,a){return n(e)?"":"@import 'node_modules/wi-framework/components/".concat(a,"';")}e.exports=function(e){return r(e,!0)+function(e){return"all"===e.components?"@import 'node_modules/wi-framework/components/all';":s(e.select2,"select2")+s(e.datepicker,"datepicker")+s(e.card,"card")+s(e.headerSection,"header-section")+s(e.panel,"panel")+l(e.navbar,"navbar")+l(e.carousel,"carousel")+l(e.alert,"alert")+l(e.badge,"badge")+l(e.breadcrumb,"breadcrumb")+l(e.buttonGroup,"button-group")+l(e.buttons,"buttons")+l(e.card,"card")+l(e.code,"code")+l(e.customForms,"custom-forms")+l(e.forms,"forms")+l(e.dropdown,"dropdown")+l(e.inputGroup,"input-group")+l(e.jumbotron,"jumbotron")+l(e.listGroup,"list-group")+l(e.media,"media")+l(e.modal,"modal")+l(e.nav,"nav")+l(e.pagination,"pagination")+l(e.popover,"popover")+l(e.progress,"progress")+l(e.tables,"tables")+l(e.tooltip,"tooltip")}(e)}},136:function(e,a,t){e.exports=t(542)},368:function(e,a){e.exports=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.length}},369:function(e,a){e.exports=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="",n="";return e.primary&&(t+="$primary: ".concat(e.primary,";")),e.secondary&&(t+="$secondary: ".concat(e.secondary,";")),!1===e.enable_default_root&&(t+="$enable-default-root: ".concat(e.enable_default_root,";")),!1===e.enable_inverse&&(t+="$enable-inverse: ".concat(e.enable_inverse,";")),!1===e.enable_contrast&&(t+="$enable-contrast: ".concat(e.enable_contrast,";")),!1===e.enable_trans&&(t+="$enable-trans: ".concat(e.enable_trans,";")),!1===e.enable_gray&&(t+="$enable-gray: ".concat(e.enable_gray,";")),e.enable_darken&&(t+="$enable-darken: ".concat(e.enable_darken,";")),e.enable_lighten&&(t+="$enable-lighten: ".concat(e.enable_lighten,";")),(e.text||e.headers||e.links)&&(n+=",(",e.text&&(n+="'text': ".concat(e.text,",")),e.headers&&(n+="'headers': ".concat(e.headers,",")),e.links&&(n+="'links': ".concat(e.links,",")),n+=")"),e.name||(e.name="dark"),e.background&&e.name&&(a||(t+="@import 'node_modules/wi-framework/variables/index';",t+="@import 'node_modules/wi-framework/colors/index';"),a&&(t+="@import 'node_modules/wi-framework/index';"),t+="@include create-background('".concat(e.name,"', ").concat(e.background).concat(n,");")),t}},542:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),s=t.n(l),c=t(78),o=t(127),m=t(56),i=t(128),p=t(57),u=t(11),d=t(12),b=t(14),h=t(13),E=t(15),v=t(7),g=t(55),f=t(10),N=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(b.a)(this,Object(h.a)(a).call(this,e))).toggle=function(){t.setState(function(e){return{isOpen:!e.isOpen}})},t.state={isOpen:!1},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f.Navbar,{light:!0,expand:"sm"},r.a.createElement(g.a,{to:"/"},r.a.createElement(f.NavbarBrand,null,r.a.createElement("img",{src:"images/logo.png",alt:"webinjaz io"}),r.a.createElement("span",{className:"current"},this.props.current&&this.props.current," ",r.a.createElement("small",null,this.props.version&&this.props.version)))),r.a.createElement(f.NavbarToggler,{onClick:function(){return e.toggle()}}),r.a.createElement(f.Collapse,{id:"NC",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(f.NavbarNav,{right:!0},r.a.createElement(f.NavItem,null,r.a.createElement(f.NavLink,{to:"/build"},"Build Tool")),r.a.createElement(f.NavItem,null,r.a.createElement("a",{className:"nav-link",href:"https://webinjaz.gitbook.io/framework/guide/api"},"API")),r.a.createElement(f.NavItem,null,r.a.createElement("a",{className:"nav-link",href:"https://webinjaz.gitbook.io/framework/guide"},"Guide")),r.a.createElement(f.NavItem,null,r.a.createElement("a",{className:"nav-link",href:"https://webinjaz.gitbook.io/framework"},"Docs")))))}}]),a}(r.a.Component),y=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},"Designing & Programming by ",r.a.createElement("img",{src:"/images/logo.png",alt:"web injaz"})," ",r.a.createElement("a",{href:"http://webinjaz.com"},"Web Injaz")))},k=[{svgAttr:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 463.21 453.99"},pathAttr:{d:"M206.26,19.65c20.74-7,114.57-35,188,22,67.27,52.2,94.57,158,58,202-44.27,53.26-151.85-20.48-220,41-55.33,49.92-19.09,129.77-75,163-41.13,24.45-109.64,9.92-138-30-10.73-15.09-21.75-42.32-1.9-118.8C41,207.62,78.7,62.5,206.26,19.65Z",transform:"translate(-5.86 -6.12)"}},{svgAttr:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 461.4 378.94"},pathAttr:{d:"M22.26,112.65c-41,70.33-2.37,164.36,40,216,8.75,10.67,39.78,46.49,95,69,76.9,31.36,229.48,48.63,287-51,49.59-85.89,4.12-216.4-63-244-63.78-26.22-138.35,44.06-191,3-26.26-20.48-19.9-47.46-46-58C107.62,32.86,48.69,67.3,22.26,112.65Z",transform:"translate(-4.31 -43.67)"}},{svgAttr:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 452.67 418.18"},pathAttr:{d:"M43.08,99.38c55.33-72.45,164.64-77.87,237.34-53C409,90.43,502.73,256.54,444.65,361.09c-53.08,95.55-222.18,120.21-328.46,44.5C21.15,337.88-25.19,188.8,43.08,99.38Z",transform:"translate(-10.07 -32.47)"}},{svgAttr:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 441.39 429.93"},pathAttr:{d:"M10.26,222.65c-21,45.07,59.45,142.44,155,186,22,10,139.73,63.7,217,8,101-72.82,79.17-294-30-370-47.5-33.07-125.86-48.65-163-16-35.91,31.57-4.9,83.27-44,130C100.59,214,27.67,185.34,10.26,222.65Z",transform:"translate(-6.38 -12.13)"}}],w=function(e){var a=k[e.shape];return r.a.createElement("svg",Object.assign({},e.attr,a.svgAttr),r.a.createElement("path",a.pathAttr))},j=function(){return r.a.createElement("section",{className:"intro-section"},r.a.createElement(w,{attr:{className:"sh-0"},shape:0}),r.a.createElement(w,{attr:{className:"sh-1"},shape:1}),r.a.createElement(w,{attr:{className:"sh-2"},shape:2}),r.a.createElement(w,{attr:{className:"sh-3"},shape:3}),r.a.createElement(w,{attr:{className:"sh-4"},shape:0}),r.a.createElement(w,{attr:{className:"sh-5"},shape:1}),r.a.createElement(w,{attr:{className:"sh-6"},shape:2}),r.a.createElement(w,{attr:{className:"sh-7"},shape:3}),r.a.createElement(w,{attr:{className:"sh-8"},shape:0}),r.a.createElement(w,{attr:{className:"sh-9"},shape:1}),r.a.createElement(w,{attr:{className:"sh-10"},shape:2}),r.a.createElement(w,{attr:{className:"sh-11"},shape:3}),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Web Injaz"),r.a.createElement("p",null,"Css framework to simplify the ",r.a.createElement("strong",null,"Coloring")," and ",r.a.createElement("strong",null,"Styling")))))},x=t(33),O=t.n(x),S=function(){return r.a.createElement("section",{className:"docs-section"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Get Started"),r.a.createElement("div",{className:"install"},r.a.createElement("h4",null,"Install"),r.a.createElement("p",null,"in your project style folder, open the command line and run"),r.a.createElement(O.a,{className:"css"},"npm install wi-framework --save")),r.a.createElement("div",{className:"import"},r.a.createElement("h4",null,"Import"),r.a.createElement("p",null,"Create Sass file if you don't have one and import the framework"),r.a.createElement(O.a,{className:"css"},"@import '../../node_modules/wi-framework/index';")),r.a.createElement("h4",{className:"text-center"},r.a.createElement("a",{href:"https://webinjaz.gitbook.io/framework/"},"Documentation"))))},C=function(){return r.a.createElement("section",{className:"about-section"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Why Web Injaz framework ?"),r.a.createElement("p",null,"As all programmers know, the designing process is the most annoying and time consuming process ",r.a.createElement("strong",null,"Web Injaz")," framework offer two main featuers:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Shapes:"),"  Built-in styles for the components that you want to use."),r.a.createElement("li",null,r.a.createElement("strong",null,"Backgrounds:"),"  Css classes that make you create a website with your own set of colors by just changing the class name.")),r.a.createElement("p",null,"And it is pure Css")))},F=t(6),_=t(32),I=t.n(_),A="REQ_CSS";var L="RES_CSS";var q="RES_ERROR";function B(e){return{type:q,error:e}}function R(e){return function(a){return a({type:A,params:e}),I.a.get("https://webinjaz.herokuapp.com/api/demo",{params:e}).then(function(t){var n,r;200===t.status?a((n=e,r=t.data,{type:L,params:n,result:r})):a(B(new Error(t.request.statusText)))},function(e){a(B(e))})}}var M="REQ_SHAPES";var z="RES_SHAPES";var P="RES_SHAPES_ERROR";function V(){return function(e){e({type:M}),I.a.get("https://webinjaz.herokuapp.com/api/shapes",{params:["navbar","carousel","card"]}).then(function(a){var t;e((t=a.data,{type:z,payload:t}))},function(a){e(function(e){return{type:P,error:e}}(a))})}}var D="REQ_COMPILE",H="RES_COMPILE",T="RES_COMPILE_ERROR";function $(e){return{type:T,error:e}}function W(e){return function(a){return a(function(e){return{type:D,variables:e}}(e)),I.a.get("https://webinjaz.herokuapp.com/api/compile",{params:e}).then(function(e){var t;200===e.status&&209!==e.data.status?a((t=e.data,{type:H,css:t})):a($(e.data.message))},function(e){e&&a($(e))})}}var G=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(b.a)(this,Object(h.a)(a).call(this,e))).shapesStructureList=function(e){return{navbar:r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light sh-navbar-"+e},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Link")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action"),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled",href:"/"},"Disabled"))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))),carousel:r.a.createElement("div",{id:e,className:"carousel slide sh-carousel-"+e,"data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#"+e,"data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#"+e,"data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#"+e,"data-slide-to":"2"})),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100",src:"/images/slide1.webp",alt:"Free vector art via https://Vecteezy.com"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement("h5",null,e),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam nostrum, distinctio fuga, facilis similique natus illum fugiat dolore assumenda harum. Eligendi dolorum consequatur eveniet sed blanditiis sit aspernatur fugiat."))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:"/images/slide2.webp",alt:"Free vector art via https://Vecteezy.com"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement("h5",null,e),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam nostrum, distinctio fuga, facilis similique natus illum fugiat dolore assumenda harum. Eligendi dolorum consequatur eveniet sed blanditiis sit aspernatur fugiat."))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:"/images/slide3.webp",alt:"Free vector art via https://Vecteezy.com"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement("h5",null,e),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam nostrum, distinctio fuga, facilis similique natus illum fugiat dolore assumenda harum. Eligendi dolorum consequatur eveniet sed blanditiis sit aspernatur fugiat.")))),r.a.createElement("a",{className:"carousel-control-prev",href:"#"+e,role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#"+e,role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))}},t.componentsList=function(){return t.props.shapesList},t.toggleTab=function(e){t.state.activeItem!==e&&t.setState({activeItem:e,activeShape:"default"})},t.toggleTabShape=function(e){t.state.activeShape!==e&&t.setState(function(a){return Object(F.a)({},a,{activeShape:e})})},t.state={activeItem:"navbar",activeShape:"default"},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"componentWillMount",value:function(){this.props.getShapesList()}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"shaper-section"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Pick a Shape"),r.a.createElement("div",{className:"classic-tabs"},r.a.createElement("div",{className:"nav nav-tabs nav-fill"},this.componentsList().map(function(a,t){return r.a.createElement("div",{className:"nav-item",key:t},r.a.createElement("span",{className:"nav-link ".concat(e.state.activeItem===a.name&&"active"),onClick:function(){e.toggleTab(a.name)}},a.name))})),r.a.createElement("div",{className:"tab-content"},this.componentsList().map(function(a,t){return r.a.createElement("div",{key:t,id:a.name,className:"tab-pane fade ".concat(e.state.activeItem===a.name&&"show active"),role:"tabpanel","aria-labelledby":"".concat(a.name,"-tab")},r.a.createElement("div",{className:"nav nav-tabs nav-fill"},a.shapes.map(function(a,t){return r.a.createElement("div",{className:"nav-item",key:t},r.a.createElement("span",{className:"nav-link ".concat(e.state.activeShape===a.name&&"active"),onClick:function(){e.toggleTabShape(a.name)}},a.name))})),r.a.createElement("div",{className:"tab-content"},a.shapes.map(function(t,n){return r.a.createElement("div",{key:n,id:t.name,className:"tab-pane fade ".concat(e.state.activeShape===t.name&&"show active"),role:"tabpanel","aria-labelledby":"".concat(t.name,"-tab")},e.shapesStructureList(e.state.activeShape)[a.name])})))}))),r.a.createElement("h6",null,"And alot more")))}}]),a}(n.Component),Z=Object(v.connect)(function(e){return{shapesList:e.shapes.shapesList}},function(e){return{getShapesList:function(){return e(V())}}})(G),Q=t(60),J=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(b.a)(this,Object(h.a)(a).call(this,e))).validate=function(){var e=t.formElem.current.querySelectorAll("input");return!1===t.formElem.current.checkValidity()?(e.forEach(function(e){var a=e.parentNode.querySelector(".invalid-feedback");a&&"button"!==e.nodeName.toLowerCase()&&(e.validity.valid?a.textContent="":a.textContent=e.validationMessage)}),!1):(e.forEach(function(e){var a=e.parentNode.querySelector(".invalid-feedback");a&&"button"!==e.nodeName.toLowerCase()&&(a.textContent="")}),!0)},t.submitHandler=function(e){e.preventDefault(),t.validate()&&t.props.submite(),t.setState({isValidated:!0})},t.formElem=r.a.createRef(),t.state={isValidated:!1},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=Object(F.a)({},this.props);delete e.submite;var a=[];return e.className&&(a=[e.className],delete e.className),this.state.isValidated&&(a+=" was-validated"),r.a.createElement("form",Object.assign({ref:this.formElem,onSubmit:this.submitHandler},e,{className:a,noValidate:!0}),this.props.children)}}]),a}(n.Component),K=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(b.a)(this,Object(h.a)(a).call(this))).handleSubmit=function(){e.props.onFormSubmit(e.state.variables)},e.handleChange=function(a){var t=a.target.name||a.target.value,n=a.target.name.value||a.target.value;e.setState(function(e){return Object(F.a)({},e,{variables:Object(F.a)({},e.variables,Object(Q.a)({},t,n.toString()))})})},e.handleInputChange=function(a){e.setState(function(e){return Object(F.a)({},e,{variables:Object(F.a)({},e.variables,{value:a.target.value})})})},e.state={variables:{primary:"#eeeeee",background:"#343a40"}},e}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"create-background"},r.a.createElement(f.MDBContainer,null,r.a.createElement("h3",null,"Create Background"),r.a.createElement("small",{className:"text-error text-danger"},this.props.error&&this.props.error.message),r.a.createElement(f.MDBRow,null,r.a.createElement(f.MDBCol,{md:"12"},r.a.createElement(J,{className:"needs-validation",submite:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"primary"},"Primary color"),r.a.createElement("input",{name:"primary",type:"color",className:"form-control required",id:"primary",placeholder:"Primary color",value:this.state.variables.primary,onChange:this.handleChange,required:!0}),r.a.createElement("small",{id:"emailHelp",className:"form-text invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"colorValue"},"Background color"),r.a.createElement("input",{name:"background",type:"color",className:"form-control required",id:"colorValue",placeholder:"Background color",value:this.state.variables.background,onChange:this.handleChange,required:!0}),r.a.createElement("small",{id:"emailHelp",className:"form-text invalid-feedback"})),r.a.createElement("button",{type:"submit"},"Submit"))))))}}]),a}(n.Component),U=Object(v.connect)(function(e){return{error:e.demo.error}},function(e){return{onFormSubmit:function(a){return e(R(a))}}})(K),X=t(61);function Y(){var e=Object(p.a)(["",""]);return Y=function(){return e},e}var ee=function(e){function a(){return Object(u.a)(this,a),Object(b.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=X.a.div(Y(),this.props.demo?this.props.demo.css:"");return r.a.createElement(e,null,r.a.createElement("div",{className:"App bg-dark"},r.a.createElement(N,{current:"Web injaz",version:"v2.2.10"}),r.a.createElement(j,null),r.a.createElement(C,null),r.a.createElement(U,null),r.a.createElement(Z,null),r.a.createElement(S,null),r.a.createElement(y,null)))}}]),a}(n.Component),ae=Object(v.connect)(function(e){return{demo:e.demo.result}})(ee),te=t(133),ne=t.n(te),re=t(2),le=function(e){var a=e.input,t=e.label,n=e.type,l=e.meta,s=l.touched,c=l.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a.name},t),r.a.createElement("input",Object.assign({},a,{className:"form-control",type:n,placeholder:t})),s&&c&&r.a.createElement("span",{className:"help-block"},c))},se=function(e){var a=e.input,t=e.label,n=e.type,l=e.meta,s=l.touched,c=l.error;return r.a.createElement("div",{className:"custom-control custom-".concat(n)},r.a.createElement("input",Object.assign({className:"custom-control-input"},a,{type:n,placeholder:t})),r.a.createElement("label",{className:"custom-control-label",htmlFor:a.name},t),s&&c&&r.a.createElement("span",{className:"help-block"},c))},ce=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(b.a)(this,Object(h.a)(a).call(this,e))).toggleBgMore=function(){t.setState(function(e){return{showMore:!e.showMore}})},t.state={showMore:!1},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.handleSubmit,n=a.pristine,l=a.reset,s=a.submitting;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"form-section"},r.a.createElement("h4",null,"Add main colors"),r.a.createElement("div",{className:"mini-section"},r.a.createElement(re.Field,{name:"primary",type:"color",component:le,label:"Primary Color"}),r.a.createElement(re.Field,{name:"secondary",type:"color",component:le,label:"Secondary Color"}))),r.a.createElement("div",{className:"form-section"},r.a.createElement("h4",null,"Create background"),r.a.createElement("div",{className:"mini-section"},r.a.createElement(re.Field,{name:"name",type:"text",component:le,label:"Background Name"}),r.a.createElement(re.Field,{name:"background",type:"color",component:le,label:"Background Color"}),r.a.createElement("div",{className:"btn btn-primary show-more-btn",onClick:function(){return e.toggleBgMore()}},"More options"),r.a.createElement("div",{className:"show-more mini-section ".concat(this.state.showMore?"":"hidden")},r.a.createElement(re.Field,{name:"text",type:"color",component:le,label:"Background Text"}),r.a.createElement(re.Field,{name:"headers",type:"color",component:le,label:"Headers Color"}),r.a.createElement(re.Field,{name:"links",type:"color",component:le,label:"Links Color"})))),r.a.createElement("div",{className:"form-section"},r.a.createElement("h4",null,"Control variables"),r.a.createElement("div",{className:"mini-section"},r.a.createElement(re.Field,{name:"enable_default_root",type:"checkbox",component:se,label:"Enable default root"}),r.a.createElement(re.Field,{name:"enable_inverse",type:"checkbox",component:se,label:"Enable inverse"}),r.a.createElement(re.Field,{name:"enable_contrast",type:"checkbox",component:se,label:"Enable contrast"}),r.a.createElement(re.Field,{name:"enable_trans",type:"checkbox",component:se,label:"Enable trans"}),r.a.createElement(re.Field,{name:"enable_gray",type:"checkbox",component:se,label:"Enable gray"}),r.a.createElement(re.Field,{name:"enable_darken",type:"checkbox",component:se,label:"Enable darken"}),r.a.createElement(re.Field,{name:"enable_lighten",type:"checkbox",component:se,label:"Enable lighten"}))),r.a.createElement("div",{className:"form-section"},r.a.createElement("h4",null,"Import components"),r.a.createElement("div",{className:"mini-section"},r.a.createElement(re.Field,{name:"components",value:"all",type:"radio",component:se,label:"All components"}),r.a.createElement(re.Field,{name:"components",defaultChecked:!0,value:"specific",type:"radio",component:se,label:"Choose components"}),r.a.createElement("div",{className:"other-components ".concat(this.props.form&&this.props.form.values&&"specific"!==this.props.form.values.components?"hidden":"")},r.a.createElement(re.Field,{name:"select2",type:"checkbox",component:se,label:"select2"}),r.a.createElement(re.Field,{name:"datepicker",type:"checkbox",component:se,label:"datepicker"}),r.a.createElement(re.Field,{name:"headerSection",type:"checkbox",component:se,label:"header-section"}),r.a.createElement(re.Field,{name:"panel",type:"checkbox",component:se,label:"panel"}),r.a.createElement(re.Field,{name:"navbar",type:"checkbox",component:se,label:"navbar"}),r.a.createElement(re.Field,{name:"carousel",type:"checkbox",component:se,label:"carousel"}),r.a.createElement(re.Field,{name:"alert",type:"checkbox",component:se,label:"alert"}),r.a.createElement(re.Field,{name:"badge",type:"checkbox",component:se,label:"badge"}),r.a.createElement(re.Field,{name:"breadcrumb",type:"checkbox",component:se,label:"breadcrumb"}),r.a.createElement(re.Field,{name:"buttonGroup",type:"checkbox",component:se,label:"button-group"}),r.a.createElement(re.Field,{name:"buttons",type:"checkbox",component:se,label:"buttons"}),r.a.createElement(re.Field,{name:"card",type:"checkbox",component:se,label:"card"}),r.a.createElement(re.Field,{name:"code",type:"checkbox",component:se,label:"code"}),r.a.createElement(re.Field,{name:"customForms",type:"checkbox",component:se,label:"custom-forms"}),r.a.createElement(re.Field,{name:"forms",type:"checkbox",component:se,label:"forms"}),r.a.createElement(re.Field,{name:"dropdown",type:"checkbox",component:se,label:"dropdown"}),r.a.createElement(re.Field,{name:"inputGroup",type:"checkbox",component:se,label:"input-group"}),r.a.createElement(re.Field,{name:"jumbotron",type:"checkbox",component:se,label:"jumbotron"}),r.a.createElement(re.Field,{name:"listGroup",type:"checkbox",component:se,label:"list-group"}),r.a.createElement(re.Field,{name:"media",type:"checkbox",component:se,label:"media"}),r.a.createElement(re.Field,{name:"modal",type:"checkbox",component:se,label:"modal"}),r.a.createElement(re.Field,{name:"nav",type:"checkbox",component:se,label:"nav"}),r.a.createElement(re.Field,{name:"pagination",type:"checkbox",component:se,label:"pagination"}),r.a.createElement(re.Field,{name:"popover",type:"checkbox",component:se,label:"popover"}),r.a.createElement(re.Field,{name:"progress",type:"checkbox",component:se,label:"progress"}),r.a.createElement(re.Field,{name:"tables",type:"checkbox",component:se,label:"tables"}),r.a.createElement(re.Field,{name:"tooltip",type:"checkbox",component:se,label:"tooltip"})))),r.a.createElement("div",{className:"form-section"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:n||s},"Submit"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",disabled:n||s,onClick:l},"Clear Values")))}}]),a}(n.Component),oe=Object(re.reduxForm)({form:"buildForm",validate:function(){},initialValues:{primary:"#a3dbfa",secondary:"#bf99ea",name:"dark",background:"#343a40",enable_default_root:!0,enable_inverse:!0,enable_contrast:!0,enable_trans:!0,enable_gray:!0,enable_darken:!1,enable_lighten:!1}})(Object(v.connect)(function(e){return{form:e.form.buildForm}})(ce));function me(){var e=Object(p.a)(["",""]);return me=function(){return e},e}var ie=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(b.a)(this,Object(h.a)(a).call(this,e))).submitHandler=function(e){t.props.sendVariables(e),t.setState({sass:ne()(e)})},t.state={sass:""},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props.css?this.props.css:"",a=e.slice(e.indexOf(".bg-"),e.length),t=a.slice(0,a.indexOf("}")+1),n=X.a.div(me(),t);return r.a.createElement("div",{className:"bg-dark"},r.a.createElement(N,{current:"Build Tool",version:"v0.0.1"}),r.a.createElement("section",{className:"build-tool-section"},r.a.createElement("div",{className:"build-colors"},r.a.createElement(oe,{onSubmit:this.submitHandler})),r.a.createElement("div",{className:"build-result ".concat(this.state.sass||this.props.css?"":"hidden")},r.a.createElement("div",{className:"form-section"},r.a.createElement("h4",null,"Results"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("span",{className:"lang"},"Sass"),r.a.createElement(O.a,{className:"css "},this.state.sass&&this.state.sass.replace(/;/g,";\n"))),r.a.createElement("div",{className:"col-md-6 col-sm-12"},this.props.error&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("blockquote",{className:"blockquote"},"Something went wrong: ",this.props.error||this.props.error.statusText))),r.a.createElement("span",{className:"lang"},"Css"),r.a.createElement(O.a,{className:"css ".concat(this.props.css?"":"hidden")},this.props.css&&this.props.css))))),r.a.createElement(n,{className:"build-demo ".concat(this.props.variables?"":"hidden")},r.a.createElement("div",{className:"bg-".concat(this.props.variables?this.props.variables.name:"")},r.a.createElement("div",{className:"form-section"},r.a.createElement("h4",null,'Preview "',r.a.createElement("strong",null,this.props.variables&&this.props.variables.name),'"'),r.a.createElement("div",{className:"main-colors"},r.a.createElement("span",{className:"primary"},"primary"),r.a.createElement("span",{className:"secondary"},"secondary"),r.a.createElement("span",{className:"background"},"background")),this.props.variables&&this.props.variables.enable_inverse&&r.a.createElement("div",{className:"main-colors"},r.a.createElement("span",{className:"light-inverse"},"light-inverse"),r.a.createElement("span",{className:"dark-inverse"},"dark-inverse")),this.props.variables&&this.props.variables.enable_contrast&&r.a.createElement("div",{className:"main-colors"},r.a.createElement("span",{className:"contrast"},"contrast"),r.a.createElement("span",{className:"contrast-10"},"contrast-10"),r.a.createElement("span",{className:"contrast-20"},"contrast-20"),r.a.createElement("span",{className:"contrast-30"},"contrast-30"),r.a.createElement("span",{className:"contrast-40"},"contrast-40"),r.a.createElement("span",{className:"contrast-50"},"contrast-50"),r.a.createElement("span",{className:"contrast-60"},"contrast-60"),r.a.createElement("span",{className:"contrast-70"},"contrast-70"),r.a.createElement("span",{className:"contrast-80"},"contrast-80"),r.a.createElement("span",{className:"contrast-90"},"contrast-90")),this.props.variables&&this.props.variables.enable_trans&&r.a.createElement("div",{className:"main-colors"},r.a.createElement("span",{className:"trans-10"},"trans-10"),r.a.createElement("span",{className:"trans-20"},"trans-20"),r.a.createElement("span",{className:"trans-30"},"trans-30"),r.a.createElement("span",{className:"trans-40"},"trans-40"),r.a.createElement("span",{className:"trans-50"},"trans-50"),r.a.createElement("span",{className:"trans-60"},"trans-60"),r.a.createElement("span",{className:"trans-70"},"trans-70"),r.a.createElement("span",{className:"trans-80"},"trans-80"),r.a.createElement("span",{className:"trans-90"},"trans-90")),this.props.variables&&this.props.variables.enable_gray&&r.a.createElement("div",{className:"main-colors"},r.a.createElement("span",{className:"gray-10"},"gray-10"),r.a.createElement("span",{className:"gray-20"},"gray-20"),r.a.createElement("span",{className:"gray-30"},"gray-30"),r.a.createElement("span",{className:"gray-40"},"gray-40"),r.a.createElement("span",{className:"gray-50"},"gray-50"),r.a.createElement("span",{className:"gray-60"},"gray-60"),r.a.createElement("span",{className:"gray-70"},"gray-70"),r.a.createElement("span",{className:"gray-80"},"gray-80"),r.a.createElement("span",{className:"gray-90"},"gray-90")),this.props.variables&&this.props.variables.enable_darken&&r.a.createElement("div",{className:"main-colors"},r.a.createElement("span",{className:"darken-10"},"darken-10"),r.a.createElement("span",{className:"darken-20"},"darken-20"),r.a.createElement("span",{className:"darken-30"},"darken-30"),r.a.createElement("span",{className:"darken-40"},"darken-40"),r.a.createElement("span",{className:"darken-50"},"darken-50"),r.a.createElement("span",{className:"darken-60"},"darken-60"),r.a.createElement("span",{className:"darken-70"},"darken-70"),r.a.createElement("span",{className:"darken-80"},"darken-80"),r.a.createElement("span",{className:"darken-90"},"darken-90")),this.props.variables&&this.props.variables.enable_lighten&&r.a.createElement("div",{className:"main-colors"},r.a.createElement("span",{className:"lighten-10"},"lighten-10"),r.a.createElement("span",{className:"lighten-20"},"lighten-20"),r.a.createElement("span",{className:"lighten-30"},"lighten-30"),r.a.createElement("span",{className:"lighten-40"},"lighten-40"),r.a.createElement("span",{className:"lighten-50"},"lighten-50"),r.a.createElement("span",{className:"lighten-60"},"lighten-60"),r.a.createElement("span",{className:"lighten-70"},"lighten-70"),r.a.createElement("span",{className:"lighten-80"},"lighten-80"),r.a.createElement("span",{className:"lighten-90"},"lighten-90")))))),r.a.createElement(y,null))}}]),a}(n.Component),pe=Object(v.connect)(function(e){return{error:e.compile.error,css:e.compile.css,variables:e.compile.variables}},function(e){return{sendVariables:function(a){return e(W(a))}}})(ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=t(19),de=t(134),be={},he={shapesList:[]},Ee={},ve=Object(ue.combineReducers)({demo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:return Object(F.a)({},e,{variables:a.params});case L:return Object(F.a)({},e,{variables:a.params,result:a.result});case q:return Object(F.a)({},e,{error:a.error});default:return e}},shapes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case M:return Object(F.a)({},e);case z:return Object(F.a)({},e,{shapesList:a.payload});case P:return Object(F.a)({},e,{error:a.error});default:return e}},compile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case D:return Object(F.a)({},e,{variables:a.variables});case H:return Object(F.a)({},e,{css:a.css});case T:return Object(F.a)({},e,{error:a.error});default:return e}},form:re.reducer}),ge=Object(ue.createStore)(ve,Object(ue.applyMiddleware)(de.a));s.a.render(r.a.createElement(v.Provider,{store:ge},r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:ae}),r.a.createElement(m.a,{exact:!0,path:"/build",component:pe}),r.a.createElement(m.a,{exact:!0,path:"/*",render:function(){return r.a.createElement(i.a,{to:"/"})}})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[136,2,1]]]);
//# sourceMappingURL=main.c18dde76.chunk.js.map