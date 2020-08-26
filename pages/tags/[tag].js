import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import { MainContext } from "../../components/MainProvider";
import axios from "axios";

const Tags = (props) => {
  const { tags, setTags } = useContext(MainContext);
  //slugを検索条件にして、タグの情報を取得する
  const url = `https://weblog.microcms.io/api/v1/tags?filters=slug[equals]${props.query.tag}`;
  let filteredTagId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //APIからaxiosでデータを取得
        const result = await axios(url, {
          headers: {
            "X-API-KEY": process.env.X_API_KEY,
          },
        });
        setTags(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    //最初の描画の時に処理が走る
  }, []);

  //slugを元に取得したタグ情報の中からタグidを取得する
  if (tags.contents) {
    filteredTagId = tags.contents[0].id;
  }

  //タグページの1ページ目のクエリ
  const queryTagIdAndOffset = `?filters=tags[contains]${filteredTagId}`;

  return <Layout title="nantra blog" query={queryTagIdAndOffset} name="tag" />;
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Tags.getInitialProps = ({ query }) => {
  return { query };
};

export default Tags;
