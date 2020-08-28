import React from "react";
import Layout from "../components/Layout";
import { fetchIndexApi } from "../utils/fetchIndexApi";

/**
 * 記事一覧ページ
 */
const HomePage = (props) => {
  return <Layout name="index" articles={props.articles} />;
};

HomePage.getInitialProps = async () => {
  const articles = await fetchIndexApi();
  return { articles };
};

export default HomePage;
