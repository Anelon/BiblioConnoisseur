import React, { ComponentType } from "https://esm.sh/react";
import { Head, Import } from "https://deno.land/x/aleph/mod.ts";

export default function Blog(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <Head>
        <title>Blog</title>
        {/* Essential META Tags */}
        <meta property="og:title" content="Biblio Connoisseur Blog" />
        <meta
          property="og:description"
          content="Offering tour packages for individuals or groups."
        />
        {/* needs thumbnail
        <meta
          property="og:image"
          content="http://euro-travel-example.com/thumbnail.jpg"
        />
        */}
        <meta
          property="og:url"
          content="http://www.biblioconnoisseur.com"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/*  Non-Essential, But Recommended */}
        <meta property="og:site_name" content="Biblio Connoisseur" />
        <meta name="twitter:image:alt" content="Alt text for image" />

        {/*  Non-Essential, But Required for Analytics */}
        <meta name="twitter:site" content="@bibliophilekass" />
      </Head>
      <Page {...pageProps} />
    </>
  );
}