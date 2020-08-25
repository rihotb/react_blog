import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { MainContext } from "../../components/MainProvider";

const Tags = (props) => {
  const { offsetValue } = useContext(MainContext);
  const queryOffset = `offset=${offsetValue}`;
  let queryTagIdAndOffset;

  if (offsetValue === 0) {
    //1ページ目の時
    queryTagIdAndOffset = `?filters=tags[contains]${props.query.tag}`;
  } else {
    //2ページ目以降の時
    queryTagIdAndOffset = `?filters=tags[contains]${props.query.tag}&&${queryOffset}`;
  }

  return <Layout title="nantra blog" query={queryTagIdAndOffset} />;
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Tags.getInitialProps = ({ query }) => {
  return { query };
};

export default Tags;
