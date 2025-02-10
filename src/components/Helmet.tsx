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
          <title>Hello!</title>

          <meta
            name="title"
            content="Andre Irawan | Frontend Engineer"
            key="title"
          />
          <meta
            name="description"
            content="Portfolio of Andre Irawan, Frontend Engineer at Traveloka."
            key="description"
          />

          <meta
            name="keywords"
            content="Frontend Engineer, React, TypeScript, Traveloka, Andre Irawan Dev, Andre Irawan, andreirawan dev, web developer"
          />
          <meta name="author" content="Andre Irawan" />

          {/*
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
         */}
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          {/* 
            Notice the use of %PUBLIC_URL% in the tags above.
            It will be replaced with the URL of the `public` folder during the build.
            Only files inside the `public` folder can be referenced from the HTML.

            Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
            work correctly both with client-side routing and a non-root public URL.
            Learn how to configure a non-root public URL by running `npm run build`.
          */}

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://andreirawan.dev/" />
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
          <meta property="twitter:url" content="https://andreirawan.dev/" />
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

          <meta
            name="keywords"
            content="Andre Irawan Dev Cookbook, Cookbook, Andre Irawan Cookbook, andreirawan dev cookbook"
          />
          <meta name="author" content="Andre Irawan" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://andreirawan.dev/cookbook" />
          <meta property="og:title" content="Cookbook" />
          <meta
            property="og:description"
            content="Cookbook is a free website to browse recipes."
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://andreirawan.dev/cookbook"
          />
          <meta property="twitter:title" content="Cookbook" />
          <meta
            property="twitter:description"
            content="Cookbook is a free website to browse recipes."
          />

          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/cookbook/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/cookbook/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/cookbook/favicon-16x16.png"
          />
          <link rel="manifest" href="/cookbook/manifest.json" />
          <link
            rel="mask-icon"
            href="/cookbook/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
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

          <meta
            name="keywords"
            content="Andre Irawan Dev Wordol, Wordol, wordol, Andre Irawan Wordol, andreirawan dev wordol"
          />
          <meta name="author" content="Andre Irawan" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://andreirawan.dev/wordol" />
          <meta property="og:title" content="Wordol" />
          <meta
            property="og:description"
            content="Wordol is an unlimited Wordle-like game."
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://andreirawan.dev/wordol"
          />
          <meta property="twitter:title" content="Wordol" />
          <meta
            property="twitter:description"
            content="Wordol is an unlimited Wordle-like game."
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/wordol/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/wordol/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/wordol/favicon-16x16.png"
          />
          <link rel="manifest" href="/wordol/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/wordol/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#ffffff" />
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
