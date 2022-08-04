import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html
        className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
        lang="en"
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
          />
          <Script
            src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4o9fetbdwh"
            strategy="beforeInteractive"
          />
        </Head>
        <body className="flex h-full flex-col">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
