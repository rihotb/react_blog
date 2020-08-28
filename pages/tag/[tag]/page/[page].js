import React from "react";
import Layout from "../../../../components/Layout";
import { fetchTagApi } from "../../../../utils/fetchTagApi";

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
  const tagQuery = await fetchTagApi(query);

  const tagSlug = tagQuery.tagSlug;
  const tagId = tagQuery.tagId;

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
