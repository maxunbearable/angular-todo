import './polyfills.server.mjs';
import{a as I,b as M}from"./chunk-WA2Q5LWJ.mjs";import{$ as s,G as m,H as _,Ha as T,J as C,L as x,P as k,R as v,S as g,V as d,W as l,Y as b,_ as h,ba as u,ca as w,ea as j,f as y,k as c,l as D,p,q as f,u as E}from"./chunk-YZZGGGHJ.mjs";import"./chunk-4S3XQSMN.mjs";function S(e,t){let i=!t?.manualCleanup;i&&!t?.injector&&E(S);let o=i?t?.injector?.get(x)??c(x):null,n;t?.requireSync?n=_({kind:0}):n=_({kind:1,value:t?.initialValue});let a=e.subscribe({next:r=>n.set({kind:1,value:r}),error:r=>{if(t?.rejectErrors)throw r;n.set({kind:2,error:r})}});return o?.onDestroy(a.unsubscribe.bind(a)),m(()=>{let r=n();switch(r.kind){case 1:return r.value;case 2:throw r.error;case 0:throw new y(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}function V(e,t){if(e&1){let i=b();d(0,"app-todo-form",1),h("todoEdited",function(n){p(i);let a=s();return f(a.todoService.editTodo(n))}),l()}if(e&2){let i=s();k("todo",i.todo())}}function F(e,t){if(e&1){let i=b();d(0,"div",3)(1,"div")(2,"h2"),u(3),l(),d(4,"p"),u(5),l()(),d(6,"button",4),h("click",function(){p(i);let n=s(2);return f(n.isEditing=!0)}),u(7,"Edit"),l()()}e&2&&(C(3),w(t.title),C(2),w(t.description))}function R(e,t){e&1&&(d(0,"p"),u(1,"Could not find todo..."),l())}function q(e,t){if(e&1&&v(0,F,8,2,"div",2)(1,R,2,0),e&2){let i=s(),o;g(0,(o=i.todo())?0:1,o)}}var Q=(()=>{let t=class t{constructor(){this.route=c(T),this.todoService=c(M),this.isEditing=!1,this.paramMap=S(this.route.paramMap),this.todo=m(()=>this.todoService.todos().find(o=>o.id===this.paramMap()?.get("id")))}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=D({type:t,selectors:[["app-detail"]],standalone:!0,features:[j],decls:2,vars:1,consts:[[3,"todo"],[3,"todo","todoEdited"],["class","border rounded p-5 d-flex align-items-center"],[1,"border","rounded","p-5","d-flex","align-items-center"],[1,"m-3",3,"click"]],template:function(n,a){n&1&&v(0,V,1,1,"app-todo-form",0)(1,q,2,1),n&2&&g(0,a.isEditing?0:1)},dependencies:[I],encapsulation:2});let e=t;return e})();export{Q as default};