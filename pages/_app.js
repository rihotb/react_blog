import Router from "next/router";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (path) => {
      gtag.pageview(path);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      //10ms後にbodyのクラス名を空白にする。クラス名（no-js）が付与されているときは表示させない。
      window.setTimeout(() => {
        document.body.className = document.body.className.replace(
          /\bno-js\b/,
          ""
        );
      }, 10);
    });
  }, []);

  return (
    <>
      <Head>
        {/* viewportでアクセスしているデバイスの横幅を取得し、それぞれのデバイスに対応したCSSをレンダリングする */}
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width,initial-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
