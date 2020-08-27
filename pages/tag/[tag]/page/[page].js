import React, { useContext, useEffect } from "react";
import Layout from "../../../../components/Layout";
import { MainContext } from "../../../../components/MainProvider";
import axios from "axios";

/**
 * タグページの2ページ目以降
 * @param  props - タグのslugとpageが入っている
 */
const Page = (props) => {
  const { tag, setTag, offsetValue } = useContext(MainContext);
  //slugを検索条件にして、選択したタグの情報を取得する
  const url = `https://weblog.microcms.io/api/v1/tags?filters=slug[equals]${props.query.tag}`;
  let selectedTagId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //APIからaxiosでデータを取得
        const result = await axios(url, {
          headers: {
            "X-API-KEY": process.env.X_API_KEY,
          },
        });
        setTag(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    //最初の描画の時に処理が走る
  }, []);

  //slugを元に取得したタグ情報の中からタグidを取得する
  if (tag.contents) {
    selectedTagId = tag.contents[0].id;
  }

  const queryOffset = `offset=${offsetValue}`;

  //tagページの2ページ目以降のクエリ
  const queryTagIdAndOffset = `?filters=tags[contains]${selectedTagId}&&${queryOffset}`;

  return <Layout title="nantra blog" query={queryTagIdAndOffset} name="tag" />;
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Page.getInitialProps = ({ query }) => {
  return { query };
};

export default Page;
