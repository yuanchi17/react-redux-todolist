(this["webpackJsonpreact-redux-todolist"]=this["webpackJsonpreact-redux-todolist"]||[]).push([[0],{14:function(t,e){e.DoneItem=function(t){return{type:"TODOLIST_DONE",payload:{id:t}}},e.DelItem=function(t){return{type:"TODOLIST_DEL",payload:{id:t}}},e.AddItem=function(t){return{type:"TODOLIST_ADD",payload:{title:t}}}},35:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var n=c(15),a=c(3),o=c(8),s=c(0),i=c(18),r=c.n(i),d=c(26),l=c(16),j=c(10),m=c(9),b=c.n(m),u={todoItems:[{id:1,title:"\u4ee3\u8fa6\u4e8b\u9805 1"}],doneItems:[{id:2,title:"\u5df2\u5b8c\u6210\u6e05\u55ae"}]},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TODOLIST_DONE":var c=e.payload.id;return Object(j.a)(Object(j.a)({},t),{},{todoItems:t.todoItems.filter((function(t,e){return e!==c})),doneItems:[].concat(Object(l.a)(t.doneItems),[t.todoItems[c]])});case"TODOLIST_DEL":var n=e.payload.id;return Object(j.a)(Object(j.a)({},t),{},{todoItems:t.todoItems.filter((function(t,e){return e!==n}))});case"TODOLIST_ADD":var a=e.payload.title,o=b.a.get(b.a.maxBy([].concat(Object(l.a)(t.todoItems),Object(l.a)(t.doneItems)),"id"),"id",0);return Object(j.a)(Object(j.a)({},t),{},{todoItems:[].concat(Object(l.a)(t.todoItems),[{id:o+1,title:a}])});default:return t}},p=Object(d.a)(O),x=(c(35),c(25)),h=c(14),f=c(1),I=function(){var t=Object(o.b)(),e=Object(s.useState)(""),c=Object(x.a)(e,2),n=c[0],a=c[1];return Object(f.jsxs)("div",{className:"input-group px-3",children:[Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"\u8acb\u8f38\u5165\u4ee3\u8fa6\u4e8b\u9805",onChange:function(t){a(t.target.value)}}),Object(f.jsx)("div",{className:"input-group-prepend",children:Object(f.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-add",onClick:function(){return t(Object(h.AddItem)(n))},children:"\u65b0\u589e"})})]})},y=function(){var t=b.a.get(Object(o.c)((function(t){return t})),"doneItems",[]);return Object(f.jsx)("div",{id:"todoList",children:Object(f.jsx)("ul",{className:"mt-2 px-0",children:t.map((function(t,e){return Object(f.jsx)("li",{className:"list-li d-flex mx-3 mb-2 p-2",children:Object(f.jsx)("p",{className:"my-auto",children:t.title})},t.id)}))})})},v=function(){var t=Object(o.b)(),e=b.a.get(Object(o.c)((function(t){return t})),"todoItems",[]);return Object(f.jsx)("div",{id:"todoList",children:Object(f.jsx)("ul",{className:"mt-2 px-0",children:e.map((function(e,c){return Object(f.jsxs)("li",{className:"list-li d-flex mx-3 mb-2 p-2",children:[Object(f.jsx)("p",{className:"my-auto",children:e.title}),Object(f.jsxs)("div",{className:"my-auto ml-auto",children:[Object(f.jsx)("i",{type:"button",className:"fa fa-check-circle text-success my-auto mx-1",onClick:function(){return t(Object(h.DoneItem)(c))}}),Object(f.jsx)("i",{type:"button",className:"fa fa-trash text-danger my-auto mx-1",onClick:function(){return t(Object(h.DelItem)(c))}})]})]},e.id)}))})})},N=document.getElementById("root");r.a.render(Object(f.jsx)(o.a,{store:p,children:Object(f.jsx)(n.a,{children:Object(f.jsx)(a.c,{children:Object(f.jsx)(a.a,{path:"/",component:function(){return Object(f.jsxs)("div",{className:"App container mt-3",children:[Object(f.jsx)("h2",{children:"Todo List"}),Object(f.jsx)(I,{}),Object(f.jsxs)("div",{className:"view-list my-2",children:[Object(f.jsx)(n.b,{className:"btn btn-primary btn-sm mx-1",to:"/todo",children:"\u672a\u5b8c\u6210"}),Object(f.jsx)(n.b,{className:"btn btn-primary btn-sm mx-1",to:"/done",children:"\u5df2\u5b8c\u6210"})]}),Object(f.jsxs)(a.c,{children:[Object(f.jsx)(a.a,{component:v,path:"/todo"}),Object(f.jsx)(a.a,{component:y,path:"/done"})]})]})}})})})}),N)}},[[38,1,2]]]);
//# sourceMappingURL=main.644c95a3.chunk.js.map