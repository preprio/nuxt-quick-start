import{e as c,c as e,a as n,t as d,f as u,F as i,r as m,g,h,o as s,i as l}from"./I0dJgNFK.js";import{g as y}from"./BPQ0zOUw.js";const p=y`
    query ($slug: String) {
        Post (slug: $slug) {
            _id
            title
            cover {
                url(width: 300, height: 250)
            }
            content {
                __typename
                ... on Text {
                    _id
                    body
                    text
                }
                ... on Assets {
                    items {
                        _id
                        url(width: 300, height: 250)
                    }
                }
            }
        }
    }
`,v={class:"my-10"},f=["src"],k={key:0},x=["src"],w=["innerHTML"],$={__name:"[slug]",async setup(A){let r,a;const _=`blog/${g().params.slug}`,o=([r,a]=c(()=>h(p,{slug:_})),r=await r,a(),r).data.value.Post;return(L,P)=>(s(),e(i,null,[n("h1",null,d(u(o).title),1),n("div",v,[n("img",{src:u(o).cover.url},null,8,f)]),(s(!0),e(i,null,m(u(o).content,t=>(s(),e("div",{key:t._id},[t.__typename==="Assets"?(s(),e("div",k,[t.items.length?(s(),e("img",{key:0,src:t.items[0]?.url},null,8,x)):l("",!0)])):l("",!0),t.__typename==="Text"?(s(),e("div",{key:1,innerHTML:t.body},null,8,w)):l("",!0)]))),128))],64))}};export{$ as default};
