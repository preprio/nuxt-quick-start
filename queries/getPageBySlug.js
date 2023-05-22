// // ./queries/getPageBySlug.js

export const GetPageBySlug = gql`
   query ($slug: String, $segment: String!) {
    Page(slug: $slug) {
      _id
      title
      _slug
      stack (personalize_for_segments: [$segment]) {
        __typename
        ... on PageHeader  {
          heading
          cta_url
          cta_label
          image {
            url(width: 1600)
          }
          _id
          text
		_context {
            kind
            group_id
            segments
            countries
          }
        }
        ... on ImageAndText {
          image {
            url(width: 800)
          }
          text
          title
          image_position
          _id
        }
      }
    }
  }
`;

// ./queries/getPageBySlug.js

// export const GetPageBySlug = gql`
//   query ($slug: String) {
//     Page(slug: $slug) {
//       _id
//       title
//       _slug
//       stack {
//         __typename
//         ... on PageHeader  {
//           heading
//           cta_url
//           cta_label
//           image {
//             url(width: 1600)
//           }
//           _id
//           text
//         }
//         ... on ImageAndText {
//           image {
//             url(width: 800)
//           }
//           text
//           title
//           image_position
//           _id
//         }
//       }
//     }
//   }
// `;
