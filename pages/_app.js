import App from "next/app";
import Router from "next/router";
import "../styles/globals.css";
import * as gtag from "../lib/gtag";

//URLが変更されたらpageview関数が実行される
Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default App;
