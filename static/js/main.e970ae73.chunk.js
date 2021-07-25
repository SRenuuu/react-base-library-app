(this["webpackJsonplibrary-app"]=this["webpackJsonplibrary-app"]||[]).push([[0],{50:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(13),l=c.n(s),r=(c(50),c(51),c(21)),o=c(6),i=c(75),j=c(76),b=c(40),d=c(45),u=c(1),h=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(i.a,{fluid:!0,children:Object(u.jsx)(j.a,{className:"footer-section px-3 px-md-5 py-4",children:Object(u.jsxs)(b.a,{children:[Object(u.jsxs)("div",{className:"content-1 mt-1 mb-3",children:[Object(u.jsx)(d.a,{}),Object(u.jsx)("p",{className:"mt-2",children:"Built with React"})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"content-2 text-secondary mt-4 mb-2",children:[Object(u.jsxs)("p",{className:"mb-1",children:["Developed by ",Object(u.jsx)("em",{children:"Sandul Renuja"})]}),Object(u.jsx)("p",{className:"small",children:"React Base Industrial Training"})]})]})})})})},m=c(79),x=c(81),O=c(28),p=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(m.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",className:"header-section font-weight-bold my-1",children:[Object(u.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(m.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(x.a,{className:"m-auto text-center",children:[Object(u.jsx)(O.LinkContainer,{to:"/home",children:Object(u.jsx)(x.a.Link,{className:"mx-5",children:"Home"})}),Object(u.jsx)(O.LinkContainer,{to:"/about",children:Object(u.jsx)(x.a.Link,{className:"mx-5",children:"About"})}),Object(u.jsx)(O.LinkContainer,{to:"/contact",children:Object(u.jsx)(x.a.Link,{className:"mx-5",children:"Contact"})})]})})]})})},f=c(8),g=c(24),k=function(e){var t=e.author,c=e.num,a=e.onAuthorUpdateClick,n=e.onAuthorRemoveClick;return Object(u.jsx)("li",{className:"py-2",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(b.a,{xs:8,md:9,children:Object(u.jsxs)("label",{className:"my-1",children:[c,". ",t.name]})}),Object(u.jsxs)(b.a,{xs:4,md:3,className:"icons text-right pr-0 pr-sm-2 pr-md-3",children:[Object(u.jsx)("i",{className:"feather-edit text-warning pr-4 pr-lg-3",onClick:function(){return a(c-1)}}),Object(u.jsx)("i",{className:"feather-trash-2 text-danger pr-3 pr-lg-3",onClick:function(){return Object(g.confirmAlert)({title:"Confirm action",message:"Delete the selected author?",buttons:[{label:"Yes",onClick:function(){return n(c-1)}},{label:"No",onClick:function(){}}]})}})]})]})})},N=function(e){var t=e.authors,c=e.onUpdateClick,a=e.onRemoveClick;return Object(u.jsx)(j.a,{className:"author-list pt-2",children:Object(u.jsxs)(b.a,{xs:12,children:[0===t.length&&Object(u.jsx)("label",{className:"empty-list font-italic",children:"No authors listed here"}),Object(u.jsx)("ul",{className:"px-0 ml-0 pt-lg-1 list-unstyled",children:function(){if(0!==t.length)return t.map((function(e,t){return Object(u.jsx)(k,{author:e,num:t+1,onAuthorUpdateClick:c,onAuthorRemoveClick:a},t)}))}()})]})})},v=function(e){var t=e.onAddClick;return Object(u.jsx)(j.a,{className:"add-author mt-2",children:Object(u.jsxs)(b.a,{onClick:t,children:[Object(u.jsx)("i",{className:"feather-plus mr-2"}),Object(u.jsx)("label",{children:"Add Author"})]})})},C=c(18),y=c(80),A=c(77),w=c(11),S=function(e){var t=e.authorToUpdate,c=e.onAuthorAdd,n=e.onAuthorUpdate,s=e.onFormClose,l=Object(a.useState)(null),r=Object(f.a)(l,2),o=r[0],i=r[1];Object(a.useEffect)((function(){t&&i(t.name)}),[t]);return Object(u.jsx)(j.a,{className:"author-form mt-5 mb-4",children:Object(u.jsxs)(b.a,{xs:12,sm:10,md:8,lg:12,xl:9,children:[Object(u.jsx)(j.a,{children:Object(u.jsxs)(b.a,{xs:12,lg:11,className:"form-title align-middle mb-1 pr-0",children:[Object(u.jsxs)("label",{children:[null===t?"Create":"Update"," Author"]}),Object(u.jsx)("i",{className:"feather-x-circle float-right mt-2",onClick:s})]})}),Object(u.jsx)(j.a,{children:Object(u.jsx)(b.a,{xs:12,lg:11,className:"pt-4 pl-lg-4 pl-xl-5 ml-lg-2",children:Object(u.jsx)(y.a,{onSubmit:function(e){if(e.preventDefault(),o&&""!==o){if(null!=t){var a=Object(C.a)(Object(C.a)({},t),{},{name:o});return n(a),void i("")}c({name:o}),i(null)}else w.b.error("Authorn name field cannot be empty")},children:Object(u.jsxs)(y.a.Group,{controlId:"formAuthorName",children:[Object(u.jsx)(y.a.Label,{children:"Name of Author"}),Object(u.jsx)(y.a.Control,{type:"text",placeholder:"",className:"mb-2",value:o||"",required:!0,onChange:function(e){return t=e.target.value,void i(t);var t}}),Object(u.jsx)(A.a,{className:"form-button mt-4 float-right py-1",type:"submit",children:null===t?"Create":"Update"})]})})})})]})})},B=function(){return Object(u.jsx)("h2",{className:"author-header mt-1 mt-lg-0 mb-3 mb-md-4 pb-2 pb-md-2 pb-lg-3",children:"Authors"})},U=function(e){var t=e.authors,c=e.setAuthors,n=Object(a.useState)(!1),s=Object(f.a)(n,2),l=s[0],r=s[1],o=Object(a.useState)(null),i=Object(f.a)(o,2),d=i[0],h=i[1],m=Object(a.useState)(null),x=Object(f.a)(m,2),O=x[0],p=x[1],g=function(){r(!1),p(null),h(null)};return Object(u.jsx)(j.a,{className:"author-section px-0 px-md-2 px-lg-3",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(B,{}),Object(u.jsx)(N,{authors:t,onUpdateClick:function(e){p(e),h(t[e]),r(!0)},onRemoveClick:function(e){g();var a=t.slice();a.splice(e,1),c(a),w.b.warning("Author deleted")}}),Object(u.jsx)(v,{onAddClick:function(){p(null),h(null),r(!0)}}),l&&Object(u.jsx)(S,{onFormClose:g,onAuthorAdd:function(e){var a=t.slice();a.push(e),c(a),w.b.success("Author added")},onAuthorUpdate:function(e){if(null!==O){var a=t.slice();a.splice(O,1,e),c(a),g(),w.b.info("Author updated")}},authorToUpdate:d})]})})},L=function(e){var t=e.book,c=e.num,a=e.onBookUpdateClick,n=e.onBookRemoveClick;return Object(u.jsx)("li",{className:"py-2",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(b.a,{xs:8,md:9,children:Object(u.jsxs)("label",{className:"my-1",children:[c,". ",t.title]})}),Object(u.jsxs)(b.a,{xs:4,md:3,className:"icons text-right pr-0 pr-sm-2 pr-md-3",children:[Object(u.jsx)("i",{className:"feather-edit text-warning pr-4 pr-lg-3",onClick:function(){return a(c-1)}}),Object(u.jsx)("i",{className:"feather-trash-2 text-danger pr-3 pr-lg-3",onClick:function(){return Object(g.confirmAlert)({title:"Confirm action",message:"Delete the selected book?",buttons:[{label:"Yes",onClick:function(){return n(c-1)}},{label:"No",onClick:function(){}}]})}})]})]})})},R=function(e){var t=e.books,c=e.onUpdateClick,a=e.onRemoveClick;return Object(u.jsx)(j.a,{className:"book-list pt-2",children:Object(u.jsxs)(b.a,{xs:12,children:[0===t.length&&Object(u.jsx)("label",{className:"empty-list font-italic",children:"No books listed here"}),Object(u.jsx)("ul",{className:"px-0 ml-0 pt-lg-1 list-unstyled",children:function(){if(0!==t.length)return t.map((function(e,t){return Object(u.jsx)(L,{book:e,num:t+1,onBookUpdateClick:c,onBookRemoveClick:a},t)}))}()})]})})},F=function(e){var t=e.onAddClick;return Object(u.jsx)(j.a,{className:"add-book mt-2",children:Object(u.jsxs)(b.a,{onClick:t,children:[Object(u.jsx)("i",{className:"feather-plus mr-2"}),Object(u.jsx)("label",{children:"Add Book"})]})})},T=c(44),I=c(43),E=function(e){var t=e.bookToUpdate,c=e.authors,n=e.onBookUpdate,s=e.onBookAdd,l=e.onFormClose,r=Object(a.useState)(null),o=Object(f.a)(r,2),i=o[0],d=o[1],h=Object(a.useState)(null),m=Object(f.a)(h,2),x=m[0],O=m[1],p=Object(a.useState)(null),g=Object(f.a)(p,2),k=g[0],N=g[1],v=Object(a.useState)(null),S=Object(f.a)(v,2),B=S[0],U=S[1],L=Object(a.useState)([]),R=Object(f.a)(L,2),F=R[0],E=R[1];Object(a.useEffect)((function(){var e=c?c.map((function(e,t){return{value:t+"",label:e.name}})):[];E(e)}),[c]),Object(a.useEffect)((function(){if(t&&(d(t.title),O(t.price),N(t.author),t.author)){var e={value:"0",label:t.author.name};U(e)}}),[t]);var G=function(){d(null),O(""),N(null),U(null)};return Object(u.jsx)(j.a,{className:"book-form my-5",children:Object(u.jsxs)(b.a,{xs:12,sm:10,md:8,lg:12,xl:9,children:[Object(u.jsx)(j.a,{children:Object(u.jsxs)(b.a,{xs:12,lg:11,className:"form-title align-middle mb-1 pr-0",children:[Object(u.jsxs)("label",{children:[null===t?"Create":"Update"," Book"]}),Object(u.jsx)("i",{className:"feather-x-circle float-right mt-2",onClick:l})]})}),Object(u.jsx)(j.a,{children:Object(u.jsx)(b.a,{xs:12,lg:11,className:"pt-4 pl-lg-4 pl-xl-5 ml-lg-2",children:Object(u.jsxs)(y.a,{onSubmit:function(e){if(e.preventDefault(),i&&x){if(null!=t){var c=Object(C.a)(Object(C.a)({},t),{},{title:i,price:x,author:k});return n(c),void G()}s({title:i,price:x,author:k}),G()}else w.b.error("Book title and price fields cannot be empty")},children:[Object(u.jsxs)(y.a.Group,{controlId:"formBookTitle",children:[Object(u.jsx)(y.a.Label,{children:"Title of the Book"}),Object(u.jsx)(y.a.Control,{type:"text",placeholder:"",className:"mb-2",value:i||"",required:!0,onChange:function(e){return t=e.target.value,void d(t);var t}})]}),Object(u.jsxs)(y.a.Group,{controlId:"formBookPrice",children:[Object(u.jsx)(y.a.Label,{children:"Price"}),Object(u.jsx)(I.a,{thousandSeparator:!0,prefix:"$",className:"mb-2 form-control",placeholder:"",value:x,required:!0,onChange:function(e){return t=e.target.value,void O(t);var t}})]}),Object(u.jsxs)(y.a.Group,{controlId:"formBookAuthor",children:[Object(u.jsx)(y.a.Label,{children:"Author"}),Object(u.jsx)(T.a,{theme:function(e){return Object(C.a)(Object(C.a)({},e),{},{borderRadius:0})},isClearable:!0,className:"mb-2 form-select",placeholder:"Select author",name:"Author",value:B,options:F,onChange:function(e){if(U(e),e){var t=parseInt(e.value),a=c?c[t]:null;N(a)}else N(null)}}),Object(u.jsx)(A.a,{type:"submit",className:"form-button mt-4 float-right py-1",children:null===t?"Create":"Update"})]})]})})})]})})},G=function(){return Object(u.jsx)("h2",{className:"book-header mt-1 mt-lg-0 mb-3 mb-lg-4 pb-2 pb-md-2 pb-lg-3",children:"Books"})},D=function(e){var t=e.authors,c=Object(a.useState)([]),n=Object(f.a)(c,2),s=n[0],l=n[1],r=Object(a.useState)(!1),o=Object(f.a)(r,2),i=o[0],d=o[1],h=Object(a.useState)(null),m=Object(f.a)(h,2),x=m[0],O=m[1],p=Object(a.useState)(null),g=Object(f.a)(p,2),k=g[0],N=g[1],v=function(){d(!1),N(null),O(null)};return Object(u.jsx)(j.a,{className:"book-section px-0 px-md-2 px-lg-3",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(G,{}),Object(u.jsx)(R,{books:s,onUpdateClick:function(e){N(e),O(s[e]),d(!0)},onRemoveClick:function(e){v();var t=s.slice();t.splice(e,1),l(t),w.b.warning("Book deleted")}}),Object(u.jsx)(F,{onAddClick:function(){N(null),O(null),d(!0)}}),i&&Object(u.jsx)(E,{onFormClose:v,onBookAdd:function(e){var t=s.slice();t.push(e),l(t),w.b.success("Book added")},onBookUpdate:function(e){if(null!==k){var t=s.slice();t.splice(k,1,e),l(t),v(),w.b.info("Book updated")}},bookToUpdate:x,authors:t})]})})},q=(c(70),c(71),function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),c=t[0],n=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(w.a,{hideProgressBar:!0})})}),Object(u.jsxs)(j.a,{className:"mb-5 mx-2 mt-3 mt-md-2",children:[Object(u.jsx)(b.a,{md:12,lg:6,className:"px-lg-4 pl-lg-5 px-md-2 px-sm-0 my-2 my-lg-0 order-lg-2",children:Object(u.jsx)(U,{authors:c,setAuthors:n})}),Object(u.jsx)(b.a,{md:12,lg:6,className:"px-lg-4 pr-lg-5 px-md-2 px-sm-0 my-2 my-lg-0",children:Object(u.jsx)(D,{authors:c})})]})]})}),P=c(78),_=c.p+"static/media/library-photo.48f3ad6e.webp",M=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{className:"welcome-section header",children:Object(u.jsx)(b.a,{children:Object(u.jsx)("h1",{className:"header text-center mb-3 mt-4",children:"My Library"})})}),Object(u.jsxs)(j.a,{className:"welcome-section content",children:[Object(u.jsx)(b.a,{xs:12,className:"p-0",children:Object(u.jsx)(P.a,{src:_,alt:"Photograph of Library"})}),Object(u.jsxs)(b.a,{xs:12,className:"p-3 pb-2 px-4 px-md-5 text-end photo-credits text-right",children:["Photo by ",Object(u.jsx)("a",{href:"https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Anna Hunko"})," on ",Object(u.jsx)("a",{href:"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]})},H=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.a,{fluid:!0,children:[Object(u.jsx)(M,{}),Object(u.jsx)(q,{})]})})},J=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(j.a,{className:"welcome-section header",children:Object(u.jsx)(b.a,{children:Object(u.jsx)("h1",{className:"header text-center mb-3 mt-4",children:"About"})})}),Object(u.jsx)(j.a,{className:"mb-5 mt-4 pb-5 about-page mx-1",children:Object(u.jsxs)(b.a,{children:[Object(u.jsxs)("p",{children:["This is the first ever project developed at React Base Industrial Training. This app is built purely with ",Object(u.jsx)("em",{children:"React"})," using ",Object(u.jsx)("em",{children:"TypeScript"}),". All good software development strategies and coding practices were followed when developing this wep app. Currently only the frontend is functional. Everything is based on ",Object(u.jsx)("a",{href:"https://reactjs.org/docs/thinking-in-react.html",rel:"noreferrer",target:"_blank",children:"Thinking in React"}),". Various modern technologies and dependencies such as React functional components, useState and useEffect hooks, react-bootstrap, react-toastify, react-number-formatter, react-confirm-alert etc. have been utilized."]}),Object(u.jsx)("p",{children:"It can be used to manage books and authors in a library. The app is very light weight and offers a simple, minimal UI. It is also fully responsive on any device. It allows you to:"}),Object(u.jsxs)("p",{className:"mb-0 mb-xl-4",children:[Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Add books"}),Object(u.jsx)("li",{children:"Edit books"}),Object(u.jsx)("li",{children:"Delete books"})]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Add authors"}),Object(u.jsx)("li",{children:"Edit authors"}),Object(u.jsx)("li",{children:"Delete authors"})]})]})]})})]})})},Y=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(j.a,{className:"welcome-section header",children:Object(u.jsx)(b.a,{children:Object(u.jsx)("h1",{className:"header text-center mb-3 mt-4",children:"Contact"})})}),Object(u.jsx)(j.a,{className:"mb-5 mt-4 pb-4 contact-page mx-1",children:Object(u.jsx)(b.a,{children:Object(u.jsxs)(y.a,{children:[Object(u.jsxs)(y.a.Row,{className:"my-2",children:[Object(u.jsxs)(y.a.Group,{as:b.a,controlId:"formFName",className:"mr-1",children:[Object(u.jsx)(y.a.Label,{children:"First Name"}),Object(u.jsx)(y.a.Control,{type:"text",placeholder:"Enter first name",required:!0})]}),Object(u.jsxs)(y.a.Group,{as:b.a,controlId:"formLName",className:"ml-1",children:[Object(u.jsx)(y.a.Label,{children:"Last Name"}),Object(u.jsx)(y.a.Control,{type:"text",placeholder:"Enter last name",required:!0})]})]}),Object(u.jsx)(y.a.Row,{className:"my-2",children:Object(u.jsxs)(y.a.Group,{as:b.a,controlId:"formEmail",children:[Object(u.jsx)(y.a.Label,{children:"Email"}),Object(u.jsx)(y.a.Control,{type:"email",placeholder:"Enter email",required:!0})]})}),Object(u.jsx)(y.a.Row,{className:"my-2",children:Object(u.jsxs)(y.a.Group,{as:b.a,controlId:"formSubject",children:[Object(u.jsx)(y.a.Label,{children:"Subject"}),Object(u.jsx)(y.a.Control,{type:"text",placeholder:"Enter subject",required:!0})]})}),Object(u.jsx)(y.a.Row,{className:"my-2",children:Object(u.jsxs)(y.a.Group,{as:b.a,className:"mb-3",controlId:"formTextArea",children:[Object(u.jsx)(y.a.Label,{children:"Message"}),Object(u.jsx)(y.a.Control,{as:"textarea",rows:4})]})}),Object(u.jsx)(A.a,{className:"form-button mt-3 float-left my-2",type:"submit",children:"Submit"})]})})})]})})},z=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.BrowserRouter,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)(o.g,{children:[Object(u.jsx)(o.d,{exact:!0,path:"/home",component:H}),Object(u.jsx)(o.d,{path:"/about",component:J}),Object(u.jsx)(o.d,{path:"/contact",component:Y}),Object(u.jsx)(o.d,{path:"/",component:H})]}),Object(u.jsx)(h,{})]})})},V=(c(72),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(z,{})})}),$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root")),$()}},[[73,1,2]]]);
//# sourceMappingURL=main.e970ae73.chunk.js.map