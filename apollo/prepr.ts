// ./apollo/prepr.ts 

import { defineApolloClient } from "@nuxtjs/apollo";

export default defineApolloClient({
  httpEndpoint: "https://graphql.prepr.io/graphql",
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenName: "apollo:prepr.token",
  tokenStorage: "cookie",
  authType: "Bearer",
  authHeader: "Authorization",
  httpLinkOptions: {
    headers: {
      Authorization: `Bearer ${process.env.PREPR_ACCESS_TOKEN || 'ac_8a73ce93e85c18ccec497b81cf8a6458a8cee50c50fbbda897bb9cee07e1eba0'}`,
    },
  },
});
