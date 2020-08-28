import React from "react";
import Layout from "../../components/Layout";

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
  //pageのgetInitialPropsでpageを受け取る
  const pageNumber = query.page;

  //pageを元に計算してoffsetValueを計算する
  const offsetValue = (pageNumber - 1) * 10;

  //offsetValueを使って記事一覧APIを呼び出す
  const res = await fetch(
    `https://weblog.microcms.io/api/v1/index?offset=${offsetValue}`,
    {
      headers: {
        "X-API-KEY": process.env.X_API_KEY,
      },
    }
  );

  const articles = await res.json();

  return { articles, offsetValue };
};

export default Page;
