import{s as B,r as T,j as R,u as S,k as U,c as s,b as t,f as h,g as _,e as $,w as C,v as D,d as p,n as w,F as b,l as E,t as m,o as a,h as k,a as M,m as O}from"./index-98V8uIEJ.js";import{u as F,a as r}from"./axios-CIokbBi8.js";const I="/vue-homework-week4/nono.png",P={id:"todoListPage",class:"bg-half"},j={class:"todo_sm"},q={class:"conatiner todoListPage vhContainer"},G={class:"todoList_Content"},H={class:"inputBox"},J=t("i",{class:"fa fa-plus"},null,-1),K=[J],Q={key:0},W=t("h1",{style:{"text-align":"center",margin:"60px auto 20px"}},"目前尚無待辦事項",-1),X=t("img",{src:I,alt:"目前尚無待辦事項",style:{width:"60%",margin:"auto",display:"block"}},null,-1),Y=[W,X],Z={key:1,class:"todoList_list"},tt={class:"todoList_tab"},et={class:"todoList_items"},ot={class:"todoList_item"},st={key:0},at={class:"todoList_label"},nt=["onUpdate:modelValue","onClick"],lt=["onClick"],it=t("i",{class:"fa fa-times"},null,-1),rt=[it],ct={class:"todoList_statistics"},dt={key:0},ut={key:1},c="https://todolist-api.hexschool.io",mt={__name:"TodolistView",setup(ht){const V=F(),{nameStore:L}=B(V),l=T([]),d=T(""),g=R(()=>l.value.reduce((e,i)=>e=i.status?e:e+1,0)),f=S(),n=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*todoToken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");(async()=>{if(n)try{const e=await r.get(`${c}/users/checkout`,{headers:{Authorization:n}});v(),L.value=e.data.nickname}catch{alert("驗證失敗"),f.push("/login")}else alert("token勒 ???"),f.push("/login")})();const z=async()=>{try{await r.post(`${c}/users/sign_out`,{},{headers:{Authorization:n}}),f.push("/login")}catch(e){alert(e.response.data.message)}},v=async()=>{try{const{data:e}=await r.get(`${c}/todos/`,{headers:{Authorization:n}});l.value=e.data}catch{alert("取得失敗")}},A=async()=>{if(d.value)try{await r.post(`${c}/todos/`,{content:d.value},{headers:{Authorization:n}}),d.value="",v()}catch{alert("新增失敗")}else alert("想一想待辦內容吧！")},x=async e=>{try{await r.delete(`${c}/todos/${e}`,{headers:{Authorization:n}}),v()}catch{alert("移除失敗")}},N=async e=>{try{await r.patch(`${c}/todos/${e}/toggle`,{},{headers:{Authorization:n}}),v()}catch{alert("切換狀態失敗")}};return(e,i)=>{const u=U("RouterLink");return a(),s("div",P,[t("nav",null,[t("h1",null,[h(u,{to:"/todolist"},{default:_(()=>[k("ONLINE TODO LIST")]),_:1})]),t("ul",null,[t("li",j,[h(u,{to:"/todolist"},{default:_(()=>[t("span",null,m(M(L))+"的代辦",1)]),_:1})]),t("li",null,[t("a",{href:"#",onClick:$(z,["prevent"])},"登出")])])]),t("div",q,[t("div",G,[t("div",H,[C(t("input",{type:"text",placeholder:"請輸入待辦事項","onUpdate:modelValue":i[0]||(i[0]=o=>d.value=o)},null,512),[[D,d.value]]),t("a",{href:"#",onClick:$(A,["prevent"])},K)]),l.value.length?p("",!0):(a(),s("div",Q,Y)),l.value.length?(a(),s("div",Z,[t("ul",tt,[t("li",null,[h(u,{to:"/todolist/all",class:w(e.$route.params.status=="all"||!e.$route.params.status?"active":"")},{default:_(()=>[k("全部")]),_:1},8,["class"])]),t("li",null,[h(u,{to:"/todolist/todo",class:w(e.$route.params.status=="todo"?"active":"")},{default:_(()=>[k("待完成")]),_:1},8,["class"])]),t("li",null,[h(u,{to:"/todolist/done",class:w(e.$route.params.status=="done"?"active":"")},{default:_(()=>[k("已完成")]),_:1},8,["class"])])]),t("div",et,[t("ul",ot,[(a(!0),s(b,null,E(l.value,o=>(a(),s(b,{key:o.id},[!["todo","done"].includes(e.$route.params.status)||e.$route.params.status=="todo"&&!o.status||e.$route.params.status=="done"&&o.status?(a(),s("li",st,[t("label",at,[C(t("input",{class:"todoList_input",type:"checkbox","onUpdate:modelValue":y=>o.status=y,onClick:y=>N(o.id)},null,8,nt),[[O,o.status]]),t("span",null,m(o.content),1)]),t("a",{href:"#",onClick:$(y=>x(o.id),["prevent"])},rt,8,lt)])):p("",!0)],64))),128))]),t("div",ct,[e.$route.params.status!="done"?(a(),s("p",dt,m(g.value?`${g.value} 個待完成項目`:"目前尚無待辦事項"),1)):p("",!0),e.$route.params.status=="done"?(a(),s("p",ut,m(l.value.length-g.value)+" 個已完成項目 ",1)):p("",!0)])])])):p("",!0)])])])}}};export{mt as default};
