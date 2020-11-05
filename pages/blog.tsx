import React, { ComponentType } from "https://esm.sh/react";
import { Head, Import } from "https://deno.land/x/aleph/mod.ts";

export default function Blog(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta property="og:title" content="Biblio Connoisseur Blog" />
      </Head>
      {/* set up blog sidebar links to older blog posts */}
      <Page {...pageProps} />
    </>
  );
}