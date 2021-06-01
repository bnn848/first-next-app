import Link from 'next/link'
import Layout from '../components/layout'
import { getPosts } from '../lib/posts'

export const getStaticProps = async() => {
  return {
    props: {
      posts: getPosts()
    }
  }
}

export default function Home({ posts }) {
  return (
    <Layout pageTitle="Home">
      <h1>Hello Next.js!</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      
      <ul>
        {/* {posts.map(({ title }) => { */}
        {posts.map(post => {
          return (
            <li key={post.id}>
            <Link href="/posts/first-post">
            {/* <Link href={post.id}> */}
              <a>{post.title}</a>
            </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
