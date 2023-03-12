import Head from "next/head";

type Props = {
  preset: "home" | "wordol" | "cookbook";
  title?: string;
};

export default function Helmet(props: Props) {
  const { preset, title } = props;

  const renderHelmet = () => {
    if (preset === "home") {
      return (
        <Head>
          <title>andreirawan.dev</title>

          <meta name="title" content="andreirawan.dev" key="title" />
          <meta
            name="description"
            content="Welcome to Andre's web portfolio site."
            key="description"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://andreirawan2.netlify.app/" />
          <meta property="og:title" content="Hello!" />
          <meta
            property="og:description"
            content="Welcome to Andre's web portfolio site."
          />
          <meta
            name="image"
            property="og:image"
            content="https://i.imgur.com/2rqVQtl.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://andreirawan2.netlify.app/"
          />
          <meta property="twitter:title" content="Hello!" />
          <meta
            property="twitter:description"
            content="Welcome to Andre's web portfolio site."
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/2rqVQtl.png"
          />
        </Head>
      );
    } else if (preset === "cookbook") {
      return (
        <Head>
          <title>{title ?? "Cookbook"}</title>
          <meta name="title" content={title ?? "Cookbook"} key="title" />
          <meta
            name="description"
            content="Cookbook is a free website to browse recipes."
            key="description"
          />
        </Head>
      );
    } else if (preset === "wordol") {
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
    } else {
      return (
        <Head>
          <title>andreirawan.dev</title>
        </Head>
      );
    }
  };

  return renderHelmet();
}
