import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tag from "../components/article-list/Tag";
import Header from "../components/Header";

export const TaglistStyles = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 100;
  }
`;

/**
 * タグ一覧ページ
 */
const Taglist = () => {
  const [tags, setTags] = useState([]);
  const url = `https://weblog.microcms.io/api/v1/tags`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //APIからaxiosでデータを取得
        const result = await axios(url, {
          headers: {
            "X-API-KEY": process.env.X_API_KEY,
          },
        });
        //取得したデータをarticleにセットする
        setTags(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    //第二引数に空配列を渡すことで、最初の描画の時だけ処理が走るようにする
  }, []);

  return (
    <TaglistStyles>
      <Header title={`タグ一覧`} />
      <h1>タグ一覧</h1>
      {tags.contents &&
        tags.contents.map((tag) => {
          return <Tag tagName={tag.tagName} tagSlug={tag.slug} key={tag.id} />;
        })}
    </TaglistStyles>
  );
};

export default Taglist;
