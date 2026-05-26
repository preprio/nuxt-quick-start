import { _ as __nuxt_component_0 } from './nuxt-link-CxAxh0no.mjs';
import { withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { gql } from 'graphql-tag';
import { a as useAsyncQuery } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import 'ts-invariant';
import 'graphql';
import '@wry/caches';
import 'zen-observable-ts';
import 'optimism';
import '@vue/apollo-option';
import 'perfect-debounce';
import '@wry/equality';
import '@wry/trie';

const GetPosts = gql`
    query {
        Posts {
            items {
                _id
                _slug
                title
            }
        }
    }
`;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GetPosts)), __temp = await __temp, __restore(), __temp);
    const posts = data.value.Posts.items;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>My blog site</h1><ul><!--[-->`);
      ssrRenderList(unref(posts), (post, index) => {
        _push(`<li${ssrRenderAttr("data", post)}>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/${post._slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(post.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DT2GSf-Y.mjs.map
