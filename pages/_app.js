import Router from "next/router";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import "../styles/globals.css";
import MainProvider from "../components/MainProvider";
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

  return (
    <>
      <Head>
        {/* viewportでアクセスしているデバイスの横幅を取得し、それぞれのデバイスに対応したCSSをレンダリングする */}
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width,initial-scale=1.0"
        />
      </Head>
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </>
  );
};

export default App;
