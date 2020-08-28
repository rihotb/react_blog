import React from "react";
import Layout from "../../components/Layout";
import { fetchTagApi } from "../../utils/fetchTagApi";
import { fetchIndexApi } from "../../utils/fetchIndexApi";

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

  const queryTagId = `?filters=tags[contains]${tagId}`;

  const articles = await fetchIndexApi(queryTagId);

  return { articles, tagSlug };
};

export default Tag;
