import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({children, pageTitle}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My blog | {pageTitle}</title>
      </Head>
      <Link href="/">
        <a><h1>My Blog</h1></a>
      </Link>
      {children}
    </div>
  )
}