(this["webpackJsonpassign_mentor-frontend"]=this["webpackJsonpassign_mentor-frontend"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(19),r=n.n(a),l=(n(25),n(26),n(3)),o=n.n(l),i=n(7),j=n(6),b=n(2),u=n(4),d=n.n(u),m=n(0),h=s.a.createContext(),O=function(e){var t=e.children,n=Object(c.useState)([]),s=Object(b.a)(n,2),a=s[0],r=s[1],l=Object(c.useState)([]),i=Object(b.a)(l,2),u=i[0],O=i[1],x=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://zen-assign-mentors.herokuapp.com/Mentors").then((function(e){return O(e.data)})).then((function(){return console.log(u)}));case 2:return e.next=4,d.a.get("https://zen-assign-mentors.herokuapp.com/Students").then((function(e){return r(e.data)})).then((function(){return console.log(a)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return x(),function(){m.Fragment}}),[]),Object(m.jsxs)(m.Fragment,{children:[console.log(u,a),Object(m.jsx)(h.Provider,{value:[u,O,a,r],children:t})]})};var x=function(){var e=Object(c.useContext)(h),t=Object(b.a)(e,2),n=t[0],s=t[1];console.log(n);var a=Object(c.useState)(""),r=Object(b.a)(a,2),l=r[0],u=r[1],O=Object(c.useState)(""),x=Object(b.a)(O,2),p=x[0],f=x[1],v=Object(c.useState)(""),g=Object(b.a)(v,2),N=g[0],S=g[1],y=function(){var e=Object(j.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d.a.post("https://zen-assign-mentors.herokuapp.com/Mentors",{name:l,email:p,course:N});case 3:c=e.sent,s([].concat(Object(i.a)(n),[c.data])),u(""),f(""),S("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:y,children:[Object(m.jsx)("h4",{className:"text-info",children:"Mentor Form"}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsxs)("label",{htmlFor:"name",className:"form-label",children:["Mentor Name",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"name",value:l,onChange:function(e){u(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsxs)("label",{htmlFor:"email",className:"form-label",children:["Email",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsx)("input",{type:"email",className:"form-control",id:"email",value:p,onChange:function(e){f(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsxs)("label",{htmlFor:"course",className:"form-label",children:["Course",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"course",value:N,onChange:function(e){S(e.target.value)}})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Submit"})]})};var p=function(){var e=Object(c.useContext)(h),t=Object(b.a)(e,4),n=t[0],s=(t[1],t[2]),a=t[3],r=Object(c.useState)(""),l=Object(b.a)(r,2),u=l[0],O=l[1],x=Object(c.useState)(""),p=Object(b.a)(x,2),f=p[0],v=p[1],g=Object(c.useState)(""),N=Object(b.a)(g,2),S=N[0],y=N[1],C=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("AssignesMentor",S),console.log(u,f,S),e.next=5,d.a.post("https://zen-assign-mentors.herokuapp.com/Students",{name:u,batch:f,mentor:S});case 5:n=e.sent,console.log(n.data),a([].concat(Object(i.a)(s),[n.data])),O(""),v(""),y("");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(n),Object(m.jsxs)("form",{onSubmit:C,children:[Object(m.jsx)("h4",{className:"text-info",children:"Student Form"}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsxs)("label",{htmlFor:"name",className:"form-label",children:["Student Name",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"name",value:u,onChange:function(e){O(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsxs)("label",{htmlFor:"batch",className:"form-label",children:["Batch",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"batch",value:f,onChange:function(e){v(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"course",className:"form-label",children:"Mentor"}),Object(m.jsxs)("select",{class:"form-control","aria-label":"Default select example",value:S,onChange:function(e){y(e.target.value)},children:[Object(m.jsx)("option",{value:""}),n.map((function(e){return Object(m.jsx)("option",{value:e._id,children:e.name})}))]})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Submit"})]})};var f=function(){var e=Object(c.useContext)(h),t=Object(b.a)(e,4),n=t[0],s=(t[1],t[2]),a=t[3],r=Object(c.useState)(""),l=Object(b.a)(r,2),i=l[0],u=l[1],O=Object(c.useState)(""),x=Object(b.a)(O,2),p=x[0],f=x[1],v=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d.a.patch("https://zen-assign-mentors.herokuapp.com/Students/assign-mentor/".concat(i),{mentor:p});case 3:return n=e.sent,console.log(n),e.next=7,d.a.get("https://zen-assign-mentors.herokuapp.com/Students");case 7:c=e.sent,a(c.data),u(""),f("");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:v,children:[Object(m.jsx)("h4",{className:"text-info",children:"Change Mentor"}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsxs)("label",{htmlFor:"course",className:"form-label",children:["Student",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsxs)("select",{class:"form-control","aria-label":"Default select example",value:i,onChange:function(e){u(e.target.value)},children:[Object(m.jsx)("option",{value:""}),s.map((function(e){return Object(m.jsx)("option",{value:e._id,children:e.name})}))]})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsxs)("label",{htmlFor:"course",className:"form-label",children:["Mentor",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsxs)("select",{class:"form-control","aria-label":"Default select example",value:p,onChange:function(e){f(e.target.value)},children:[Object(m.jsx)("option",{value:""}),n.map((function(e){return Object(m.jsx)("option",{value:e._id,children:e.name})}))]})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Submit"})]})})};var v=function(){var e=Object(c.useContext)(h),t=Object(b.a)(e,2),n=t[0];return t[1],Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"text-info",children:"Mentor List"}),Object(m.jsxs)("table",{className:"table table-striped table-hover",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Name"}),Object(m.jsx)("th",{scope:"col",children:"Email"}),Object(m.jsx)("th",{scope:"col",children:"Course"})]})}),Object(m.jsx)("tbody",{children:n.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.course})]},e._id)}))})]})]})};var g=function(){var e=Object(c.useContext)(h),t=Object(b.a)(e,4),n=t[0],s=(t[1],t[2]);return t[3],Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"text-info",children:"Students List"}),Object(m.jsxs)("table",{className:"table table-striped table-hover",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Name"}),Object(m.jsx)("th",{scope:"col",children:"Batch"}),Object(m.jsx)("th",{scope:"col",children:"Mentor"})]})}),Object(m.jsx)("tbody",{children:s.map((function(e){var t=n.filter((function(t){return t._id===e.mentor}));return console.log(t),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.batch}),Object(m.jsx)("td",{children:t[0]?t[0].name:""})]},e._id)}))})]})]})},N=n(20),S=n.n(N);var y=function(){var e=Object(c.useContext)(h),t=Object(b.a)(e,4),n=t[0],s=(t[1],t[2]),a=t[3],r=Object(c.useState)(""),l=Object(b.a)(r,2),u=l[0],O=l[1],x=Object(c.useState)([]),p=Object(b.a)(x,2),f=p[0],v=p[1],g=[];Object(c.useEffect)((function(){s.map((function(e){return g=[].concat(Object(i.a)(g),[{name:e.name,value:e._id}])})),v(g)}),[s]);var N=[],y=[],C=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=y.length?y:N,c=n.map((function(e){return e.value})),e.next=5,d.a.patch("https://zen-assign-mentors.herokuapp.com/Students/assign-mentor-students",{mentor:u,stud_list:c});case 5:return e.next=7,d.a.get("https://zen-assign-mentors.herokuapp.com/Students");case 7:s=e.sent,a(s.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:C,children:[Object(m.jsx)("h4",{className:"text-info",children:"Assign Students to Mentor"}),Object(m.jsxs)("div",{className:"mb-3 mt-3",children:[Object(m.jsxs)("label",{htmlFor:"mentor",className:"form-label",children:["Mentor",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsxs)("select",{class:"form-control","aria-label":"Default select example",value:u,onChange:function(e){O(e.target.value)},children:[Object(m.jsx)("option",{value:""}),n.map((function(e){return Object(m.jsx)("option",{value:e._id,children:e.name})}))]})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsxs)("label",{htmlFor:"students",className:"form-label",children:["Students",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsx)("div",{class:"chat-container",children:Object(m.jsx)(S.a,{options:f,displayValue:"name",onSelect:function(e){N=e},onRemove:function(e){y=e},style:{searchBox:{background:"white"}}})})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Submit"})]})})};var C=function(){var e=Object(c.useContext)(h),t=Object(b.a)(e,2),n=t[0];t[1],console.log(n);var s=Object(c.useState)(""),a=Object(b.a)(s,2),r=a[0],l=a[1],i=Object(c.useState)([]),u=Object(b.a)(i,2),O=u[0],x=u[1],p=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d.a.get("https://zen-assign-mentors.herokuapp.com/Students/mentor-students/".concat(r));case 3:n=e.sent,console.log(n),x(n.data),l("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{className:"text-info",children:"Students List based on Mentor Selection"}),Object(m.jsxs)("form",{onSubmit:p,children:[Object(m.jsxs)("div",{className:"mb-3 mt-3",children:[Object(m.jsxs)("label",{htmlFor:"mentor",className:"form-label",children:["Mentor",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(m.jsxs)("select",{class:"form-control","aria-label":"Default select example",value:r,onChange:function(e){l(e.target.value)},children:[Object(m.jsx)("option",{value:""}),n.map((function(e){return Object(m.jsx)("option",{value:e._id,children:e.name})}))]})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Show"})]}),O.length?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("table",{className:"table table-striped table-hover",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Name"}),Object(m.jsx)("th",{scope:"col",children:"Batch"})]})}),Object(m.jsx)("tbody",{children:O.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.batch})]},e._id)}))})]})}):""]})};var F=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{style:{textAlign:"center",color:"seagreen",marginBottom:"2rem"},children:"Zen Mentors"}),Object(m.jsx)(O,{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-5 col-sm-12",children:[Object(m.jsx)(x,{}),Object(m.jsx)(p,{}),Object(m.jsx)(f,{}),Object(m.jsx)(y,{}),Object(m.jsx)(C,{})]}),Object(m.jsxs)("div",{className:"col-md-7 col-sm-12",children:[Object(m.jsx)(v,{}),Object(m.jsx)(g,{})]})]})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),k()}},[[48,1,2]]]);
//# sourceMappingURL=main.6f3a9ae1.chunk.js.map