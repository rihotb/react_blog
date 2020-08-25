import React from "react";
import Layout from "../../components/Layout";

const Tags = (props) => {
  const queryTagId = `?filters=tags[contains]${props.query.tag}`;

  return <Layout title="nantra blog" query={queryTagId} />;
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Tags.getInitialProps = ({ query }) => {
  return { query };
};

export default Tags;
