import{_ as u}from"./DSqQJsgv.js";import{g as c}from"./BPQ0zOUw.js";import{e as d,c as s,a as r,F as m,r as p,f as x,h as f,o as a,b as y,w as g,d as h,t as k}from"./I0dJgNFK.js";const w=c`
    query {
        Posts {
            items {
                _id
                _slug
                title
            }
        }
    }
`,B=["data"],A={__name:"index",async setup(N){let t,n;const{data:l}=([t,n]=d(()=>f(w)),t=await t,n(),t),_=l.value.Posts.items;return(P,o)=>{const i=u;return a(),s("div",null,[o[0]||(o[0]=r("h1",null,"My blog site",-1)),r("ul",null,[(a(!0),s(m,null,p(x(_),(e,V)=>(a(),s("li",{data:e,key:e._id},[y(i,{to:`/${e._slug}`},{default:g(()=>[h(k(e.title),1)]),_:2},1032,["to"])],8,B))),128))])])}}};export{A as default};
