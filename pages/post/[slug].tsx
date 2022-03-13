import React from 'react'
import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from '../../components'
import { getPostDetails, getPosts } from '../../services'

export async function getStaticProps({ params }) {
  const post = await getPostDetails(params.slug)

  return { props: { post } }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

const PostDetails = ({ post }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="cols-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="cols-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
