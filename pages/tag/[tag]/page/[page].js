import React from "react";
import Layout from "../../../../components/Layout";

/**
 * タグページの2ページ目以降
 * @param  props
 */
const Page = (props) => {
  return (
    <Layout
      name="tag"
      articles={props.articles}
      offsetValue={props.offsetValue}
      tagSlug={props.tagSlug}
    />
  );
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Page.getInitialProps = async ({ query }) => {
  //tagのgetInitialPropsでtagSlugを受け取る
  const tagSlug = query.tag;

  //tagSlugを使ってタグAPIからタグ情報を取得
  const tagRes = await fetch(
    `https://weblog.microcms.io/api/v1/tags?filters=slug[equals]${tagSlug}`,
    {
      headers: {
        "X-API-KEY": process.env.X_API_KEY,
      },
    }
  );

  const tag = await tagRes.json();

  //tagIdを取得
  const tagId = tag.contents[0].id;

  //クエリからpageNumberを取得
  const pageNumber = query.page;

  //pageNumberを元に計算してoffsetValueを計算する
  const offsetValue = (pageNumber - 1) * 10;

  // TagIdとoffsetValueを使ってarticleを記事一覧APIから取得
  const res = await fetch(
    `https://weblog.microcms.io/api/v1/index?filters=tags[contains]${tagId}&&offset=${offsetValue}`,
    {
      headers: {
        "X-API-KEY": process.env.X_API_KEY,
      },
    }
  );

  const articles = await res.json();

  return { articles, offsetValue, tagSlug };
};

export default Page;
