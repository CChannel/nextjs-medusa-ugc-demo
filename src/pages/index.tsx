/* eslint-disable react/no-unknown-property */
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
      {/* <div className="px-4">
        <div
          website_id="c9f7ea8e-0cdb-4796-bad7-594597bfd0c2"
          ugc_set_id="1"
          id="lemon-square-ugc"
          header="Instagramで話題"
          subheader="わたしも使っています"
          grid="true"
          locale="{}"
          current_tags=""
          design_mode="false"
          large_x="6"
          large_y="1"
          mid_x="3"
          mid_y="2"
          small_x="2"
          small_y="3"
        ></div>
        <script src="//new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.js"></script>
  <link rel="stylesheet" href="//new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.css">
  <script async="" defer="" data-website-id="c9f7ea8e-0cdb-4796-bad7-594597bfd0c2" src="https://analytics.lemon.cchan.tv/lemonsquare.js"></script>
      </div> */}
      <div className="px-4">
        <div
          // @ts-ignore
          website_id="fae80df9-e7db-4e12-b2ec-a6ac34059f05"
          ugc_set_id="5"
          id="lemon-square-ugc"
          header="Instagramで話題"
          subheader="わたしも使っています"
          grid="true"
          locale="{}"
          current_tags=""
          design_mode="false"
          large_x="6"
          large_y="1"
          mid_x="3"
          mid_y="2"
          small_x="2"
          small_y="3"
        ></div>
        <Script
          async
          src="https://new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.js"
        />
        <link
          rel="stylesheet"
          href="https://new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.css"
        />
        <script
          async
          defer
          data-website-id="c9f7ea8e-0cdb-4796-bad7-594597bfd0c2"
          src="https://analytics.alpha-lemon.cchan.tv/lemonsquare.js"
        />
      </div>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
