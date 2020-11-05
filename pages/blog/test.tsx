import { useDeno } from "https://deno.land/x/aleph/mod.ts";
import React, { useState } from "https://esm.sh/react";
import { Head, Import } from "https://deno.land/x/aleph/mod.ts";

export default function Test() {
  const [count, setCount] = useState(0);
  const version = useDeno(() => {
    return Deno.version;
  });

  return (
    <>
      <Import from="../../style/index.less" />
      <article>
        <h2>Test Article</h2>
        <p>
          This is a test of the article tag
        </p>
      </article>
    </>
  );
}