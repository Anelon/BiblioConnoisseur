import React, { ComponentType } from "https://esm.sh/react";
import { Head } from "https://deno.land/x/aleph/mod.ts";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <Head>
        <title>BiblioConnoisseur</title>
        <meta property="og:type" content="website" />
        {/* Essential META Tags */}
        <meta property="og:title" content="Biblio Connoisseur" />
        <meta
          property="og:description"
          content="Book reviews and tag based recommendations."
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