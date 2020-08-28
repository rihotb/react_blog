import React from "react";
import Layout from "../components/Layout";

/**
 * 記事一覧ページ
 */
const HomePage = (props) => {
  return <Layout name="index" articles={props.articles} />;
};

HomePage.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://weblog.microcms.io/api/v1/index`, {
    headers: {
      "X-API-KEY": process.env.X_API_KEY,
    },
  });

  const articles = await res.json();
  return { articles };
};

export default HomePage;
