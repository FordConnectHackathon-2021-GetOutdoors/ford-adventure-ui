import Head from "next/head";

export default function CustomHead({ pageProps }: any) {
  return (
    <Head>
      {/* // Favicon */}
      <link rel="shortcut icon" href="favicon.ico" />
      {/* // Support responsive mobile sizes */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      {/* // Support React Dev Tools */}
      <script
        dangerouslySetInnerHTML={{
          __html: ` var DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__; if (typeof DEV_TOOLS === "object") DEV_TOOLS.inject = function () {}; `,
        }}
      />
      {/* // Create a CSS variable to store the current pixel height of the window */}
      <script
        dangerouslySetInnerHTML={{
          __html: ` var doc = document.documentElement; function calcVh() { doc.style.setProperty("--100vh", window.innerHeight + "px"); } window.addEventListener("resize", calcVh); calcVh(); `,
        }}
      />
    </Head>
  );
}
