import Router from "next/router";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import "../styles/globals.css";
import MainProvider from "../components/MainProvider";

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
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default App;
