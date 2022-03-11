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

  return results.postsConnection.edges.map((edge) => ({ ...edge.node }));
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const results = await request(graphqlAPI!, query);

  return results.posts;
}

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(where: {slug_not: $slug, AND: {categories_some: {slug_in $categories}}}, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlAPI!, query);

  return result.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name,
        slug
      }
    }
  `

  const results = await request(graphqlAPI!, query);

  return results.categories;
}
