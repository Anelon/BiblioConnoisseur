import React, { ComponentType } from "https://esm.sh/react";
import { Head } from "https://deno.land/x/aleph/mod.ts";

export default function Blog(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Page {...pageProps} />
    </>
  );
}