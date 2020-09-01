import Document, { Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

//_document.jsは全てのページで共通のHTMLを書くコンポーネント。ここでGAのscriptタグを埋め込む。
export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* viewportでアクセスしているデバイスの横幅を取得し、それぞれのデバイスに対応したCSSをレンダリングする */}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width,initial-scale=1.0"
          />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
