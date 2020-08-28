import React from "react";
import Layout from "../../../../components/Layout";
import { fetchTagApi } from "../../../../utils/fetchTagApi";
import { fetchIndexApi } from "../../../../utils/fetchIndexApi";

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

Page.getInitialProps = async ({ query }) => {
  const tagQuery = await fetchTagApi(query);

  const tagSlug = tagQuery.tagSlug;
  const tagId = tagQuery.tagId;

  const pageNumber = query.page;

  //pageNumberを元にoffsetValueを計算する
  const offsetValue = (pageNumber - 1) * 10;

  const queryTagIdAndOffset = `?filters=tags[contains]${tagId}&&offset=${offsetValue}`;

  const articles = await fetchIndexApi(queryTagIdAndOffset);

  return { articles, offsetValue, tagSlug };
};

export default Page;
