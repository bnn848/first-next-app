import Layout from '../../components/layout'
import { getIds, getPostById } from '../../lib/posts'

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      post: getPostById(params.id)
    }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: getIds(),
    fallback: false
  }
}

export default function Post({ post }) {
  return (
    <Layout pageTitle={post.title}>
      <h2>{post.title}</h2>
      <h2>{post.content}</h2>
      {/* <h2>{post.date}</h2> */}
    </Layout>
  )
}