import { MEDUSA_BACKEND_URL } from "@lib/config"
import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    const uri = MEDUSA_BACKEND_URL
    const { hostname } = new URL(uri)

    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href={`//${hostname}`} crossOrigin="true" />
          <link rel="dns-prefetch" href={`//${hostname}`} />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            data-website-id="fae80df9-e7db-4e12-b2ec-a6ac34059f05"
            src="https://analytics.alpha-lemon.cchan.tv/lemonsquare.js"
          ></script>
          {/* <link
            href="https://new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.css"
            rel="stylesheet"
          />
          <script
            async
            src="https://new-lemon-square-public.s3.ap-northeast-1.amazonaws.com/ugc-embed-scripts/assets/index.js"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
