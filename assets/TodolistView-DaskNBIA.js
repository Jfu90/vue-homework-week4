import{s as R,r as w,j as S,u as U,k as x,c as n,b as s,f as u,g as h,e as g,w as C,v as D,n as y,F as V,l as E,t as v,d as L,o as l,h as m,a as M,m as O}from"./index-DS-_Q8wg.js";import{u as F,a as i}from"./axios-Bp1xZRG7.js";const I={id:"todoListPage",class:"bg-half"},P={class:"todo_sm"},j={class:"conatiner todoListPage vhContainer"},q={class:"todoList_Content"},G={class:"inputBox"},H=s("i",{class:"fa fa-plus"},null,-1),J=[H],K={class:"todoList_list"},Q={class:"todoList_tab"},W={class:"todoList_items"},X={class:"todoList_item"},Y={key:0},Z={class:"todoList_label"},tt=["onUpdate:modelValue","onClick"],st=["onClick"],ot=s("i",{class:"fa fa-times"},null,-1),et=[ot],at={class:"todoList_statistics"},nt={key:0},lt={key:1},r="https://todolist-api.hexschool.io",ut={__name:"TodolistView",setup(it){const b=F(),{nameStore:T}=R(b),_=w([]),c=w(""),k=S(()=>_.value.reduce((t,a)=>t=a.status?t:t+1,0)),f=U(),e=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*todoToken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");(async()=>{if(e)try{const t=await i.get(`${r}/users/checkout`,{headers:{Authorization:e}});p(),T.value=t.data.nickname}catch{alert("驗證失敗"),f.push("/login")}else alert("token勒 ???"),f.push("/login")})();const z=async()=>{try{await i.post(`${r}/users/sign_out`,{},{headers:{Authorization:e}}),f.push("/login")}catch(t){alert(t.response.data.message)}},p=async()=>{try{const{data:t}=await i.get(`${r}/todos/`,{headers:{Authorization:e}});_.value=t.data}catch{alert("取得失敗")}},A=async()=>{if(c.value)try{await i.post(`${r}/todos/`,{content:c.value},{headers:{Authorization:e}}),c.value="",p()}catch{alert("新增失敗")}else alert("想一想待辦內容吧！")},N=async t=>{try{await i.delete(`${r}/todos/${t}`,{headers:{Authorization:e}}),p()}catch{alert("移除失敗")}},B=async t=>{try{await i.patch(`${r}/todos/${t}/toggle`,{},{headers:{Authorization:e}}),p()}catch{alert("切換狀態失敗")}};return(t,a)=>{const d=x("RouterLink");return l(),n("div",I,[s("nav",null,[s("h1",null,[u(d,{to:"/todolist"},{default:h(()=>[m("ONLINE TODO LIST")]),_:1})]),s("ul",null,[s("li",P,[u(d,{to:"/todolist"},{default:h(()=>[s("span",null,v(M(T))+"的代辦",1)]),_:1})]),s("li",null,[s("a",{href:"#",onClick:g(z,["prevent"])},"登出")])])]),s("div",j,[s("div",q,[s("div",G,[C(s("input",{type:"text",placeholder:"請輸入待辦事項","onUpdate:modelValue":a[0]||(a[0]=o=>c.value=o)},null,512),[[D,c.value]]),s("a",{href:"#",onClick:g(A,["prevent"])},J)]),s("div",K,[s("ul",Q,[s("li",null,[u(d,{to:"/todolist/all",class:y(t.$route.params.status=="all"||!t.$route.params.status?"active":"")},{default:h(()=>[m("全部")]),_:1},8,["class"])]),s("li",null,[u(d,{to:"/todolist/todo",class:y(t.$route.params.status=="todo"?"active":"")},{default:h(()=>[m("待完成")]),_:1},8,["class"])]),s("li",null,[u(d,{to:"/todolist/done",class:y(t.$route.params.status=="done"?"active":"")},{default:h(()=>[m("已完成")]),_:1},8,["class"])])]),s("div",W,[s("ul",X,[(l(!0),n(V,null,E(_.value,o=>(l(),n(V,{key:o.id},[!["todo","done"].includes(t.$route.params.status)||t.$route.params.status=="todo"&&!o.status||t.$route.params.status=="done"&&o.status?(l(),n("li",Y,[s("label",Z,[C(s("input",{class:"todoList_input",type:"checkbox","onUpdate:modelValue":$=>o.status=$,onClick:$=>B(o.id)},null,8,tt),[[O,o.status]]),s("span",null,v(o.content),1)]),s("a",{href:"#",onClick:g($=>N(o.id),["prevent"])},et,8,st)])):L("",!0)],64))),128))]),s("div",at,[t.$route.params.status!="done"?(l(),n("p",nt,v(k.value?`${k.value} 個待完成項目`:"目前尚無待辦事項"),1)):L("",!0),t.$route.params.status=="done"?(l(),n("p",lt,v(_.value.length-k.value)+" 個已完成項目 ",1)):L("",!0)])])])])])])}}};export{ut as default};
