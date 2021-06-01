import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

/*
グローバルCSSを利用する場合は、このページにimportする必要がある
*/
