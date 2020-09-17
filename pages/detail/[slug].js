import React from "react";
import styled from "styled-components";
import { fetchIndexApi } from "../../utils/fetchIndexApi";
import Layout from "../../components/Layout";

export const DetailStyles = styled.div`
  margin: 0 auto;

  @media (min-width: 671px) {
    width: 600px;
  }

  @media (max-width: 670px) {
    padding: 10px;
  }
`;

/**
 * 記事詳細ページ
 * @param props
 */
const Detail = (props) => {
  const title = props.articles.contents[0].title + " | nantara blog";
  const url = "https://nantara-blog.tokyo/detail/" + props.query.slug;

  return (
    <Layout
      name="detail"
      articles={props.articles}
      title={title}
      url={url}
      allArticles={props.allArticles}
      articleSlug={props.query.slug}
    />
  );
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Detail.getInitialProps = async ({ query }) => {
  const querySlug = `?filters=slug[equals]${query.slug}`;

  const articles = await fetchIndexApi(querySlug);
  const allArticles = await fetchIndexApi();

  return { articles, query, allArticles };
};

export default Detail;
