import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
import 'ts-invariant';
import 'graphql';
import '@wry/caches';
import 'zen-observable-ts';
import 'optimism';
import '@vue/apollo-option';
import 'perfect-debounce';
import '@wry/equality';
import '@wry/trie';

const GetPostBySlug = gql`
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
`;
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = `blog/${route.params.slug}`;
    const postQuery = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GetPostBySlug, {
      "slug": slug
    })), __temp = await __temp, __restore(), __temp);
    const post = postQuery.data.value.Post;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>${ssrInterpolate(unref(post).title)}</h1><div class="my-10"><img${ssrRenderAttr("src", unref(post).cover.url)}></div><!--[-->`);
      ssrRenderList(unref(post).content, (contentType) => {
        _push(`<div>`);
        if (contentType.__typename === "Assets") {
          _push(`<div>`);
          if (contentType.items.length) {
            _push(`<img${ssrRenderAttr("src", contentType.items[0]?.url)}>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (contentType.__typename === "Text") {
          _push(`<div>${contentType.body ?? ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-_vbzua08.mjs.map
