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
      <div className="px-4">
        <div
          id="lemon-square-ugc"
          website_id="4be7c2f-1116-414e-8f33-a072d143d5d1"
          grid="true"
          data="[]"
          design_mode="false"
          locale=""
          current_tags=""
        ></div>
        <Script
          async
          src="https://new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.js"
        />
        <link
          rel="stylesheet"
          href="https://new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.css"
        />
      </div>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
