import React from "react";
import Layout from "../../components/Layout";
import { fetchTagApi } from "../../utils/fetchTagApi";

/**
 * タグページの1ページ目
 * @param  props
 */
const Tag = (props) => {
  return (
    <Layout name="tag" articles={props.articles} tagSlug={props.tagSlug} />
  );
};

Tag.getInitialProps = async ({ query }) => {
  const tagQuery = await fetchTagApi(query);

  const tagSlug = tagQuery.tagSlug;
  const tagId = tagQuery.tagId;

  // TagIdを使ってarticleを記事一覧APIから取得
  const res = await fetch(
    `https://weblog.microcms.io/api/v1/index?filters=tags[contains]${tagId}`,
    {
      headers: {
        "X-API-KEY": process.env.X_API_KEY,
      },
    }
  );

  const articles = await res.json();

  return { articles, tagSlug };
};

export default Tag;
