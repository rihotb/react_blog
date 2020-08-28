import React from "react";
import Layout from "../../components/Layout";
import { fetchIndexApi } from "../../utils/fetchIndexApi";

/**
 * 記事一覧ページの2ページ目以降
 */
const Page = (query) => {
  return (
    <Layout
      name="page"
      articles={query.articles}
      offsetValue={query.offsetValue}
    />
  );
};

Page.getInitialProps = async ({ query }) => {
  const pageNumber = query.page;

  //pageを元にoffsetValueを計算する
  const offsetValue = (pageNumber - 1) * 10;

  const queryOffset = `?offset=${offsetValue}`;

  const articles = await fetchIndexApi(queryOffset);

  return { articles, offsetValue };
};

export default Page;
