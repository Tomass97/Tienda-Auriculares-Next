import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title>TMS Audio - {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  )
}

