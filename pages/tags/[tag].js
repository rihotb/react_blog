import React from "react";
import Layout from "../../components/Layout";

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
