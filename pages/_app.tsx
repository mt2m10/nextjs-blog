import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/holiday.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/css/prism.css" rel="stylesheet" />
      </Head>
      <DefaultSeo
        defaultTitle="mahlog"
        canonical={process.env.NEXT_PUBLIC_SITE_URL}
        description="日々の出来事やプログラミング関連について書きます。"
        twitter={{
          handle: process.env.NEXT_PUBLIC_SITE_TITLE,
          site: process.env.NEXT_PUBLIC_SITE_TITLE,
          cardType: "summary",
        }}
        openGraph={{
          type: "website",
          title: process.env.NEXT_PUBLIC_SITE_TITLE,
          description: "日々の出来事やプログラミング関連について書きます。",
          site_name: process.env.NEXT_PUBLIC_SITE_TITLE,
          url: process.env.NEXT_PUBLIC_SITE_URL,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
