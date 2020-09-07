import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
import { ServerStyleSheet } from "styled-components";

//_document.jsは全てのページで共通のHTMLを書くコンポーネント。ここでGAのscriptタグを埋め込む。
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* hightlight.jsのテーマを設定する */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atom-one-light.min.css"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <style>
            {`
              .no-js {display:none;}
            `}
          </style>
        </Head>
        <body className={`no-js`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
