import Head from "next/head";

export default function WordolHeader() {
  return (
    <Head>
      <title>Wordol</title>
      <meta name="title" content="Wordol" key="title" />
      <meta
        name="description"
        content="Wordol is an unlimited Wordle-like game."
        key="description"
      />
    </Head>
  );
}
