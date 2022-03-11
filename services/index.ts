import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
          postsConnection {
            edges {
              node {
                excerpt
                slug
                title
                featuredImage {
                  url
                }
                categories {
                  name
                  slug
                }
                author {
                  bio
                  name
                  id
                  createdAt
                  photo {
                    url
                  }
                }
                createdAt
              }
            }
          }
        }
    `

    const results = await request(graphqlAPI!, query);

    return results.postsConnection.edges.map((edge) => ({...edge.node}));
}
