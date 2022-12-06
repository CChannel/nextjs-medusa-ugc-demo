import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import Script from "next/script"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <FeaturedProducts />
      {/* <>
        <div
          id="lemon-square-ugc"
          website_id="4be7c2f-1116-414e-8f33-a072d143d5d1"
          grid="true"
          data="[]"
          design_mode="false"
          locale=""
          current_tags=""
          suppressHydrationWarning
        ></div>
        <Script src="https://new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.js" />
      </> */}

      {/* <script async src="//www.instagram.com/embed.js"></script> */}
      {/* <div
        id="lemon-square-ugc"
        website_id="foo"
        grid="true"
        data="[]"
        design_mode="true"
        locale=""
        current_tags=""
        suppressHydrationWarning
      ></div>
      <script
        async
        src="//new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.js"
      ></script>
      <link
        rel="stylesheet"
        href="//new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.css"
      /> */}
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
