import styled from "styled-components";
import BlogTitle from "../components/BlogTitle";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tag from "../components/Tag";
import PageTitle from "../components/PageTitle";

export const TaglistStyles = styled.div`
  text-align: center;

  .title {
    text-align: center;
    margin: 50px;
  }

  .taglist {
    margin-bottom: 10px;
    font-size: 25px;
  }

  .tag {
    display: inline-block;
    margin-right: 10px;
  }
`;

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
      <PageTitle title="タグ一覧" />
      <div className="title">
        <BlogTitle />
      </div>
      <div className="taglist">タグ一覧</div>
      {tags.contents &&
        tags.contents.map((tag) => {
          return (
            <div key={tag.id} className="tag">
              <Tag tagName={tag.tagName} tagId={tag.id} />
            </div>
          );
        })}
    </TaglistStyles>
  );
};

export default Taglist;
