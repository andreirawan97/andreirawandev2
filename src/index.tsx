import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="keywords"
        content="Andre Irawan Dev, Andre Irawan, andreirawan dev, web developer"
      />
      <meta name="author" content="Andre Irawan" />
      <meta name="description" content="Welcome to my Web Portfolio!" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      {/* <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    --> */}
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      {/* <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    --> */}

      {/* <!-- Primary Meta Tags --> */}
      <title>Hello!</title>
      <meta name="title" content="Hello!" />
      <meta
        name="description"
        content="Welcome to Andre's web portfolio site."
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

      {/* <!-- Twitter --> */}
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

      {/* <!-- Font --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
