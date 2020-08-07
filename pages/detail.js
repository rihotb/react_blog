import React, { useState, useEffect } from "react";
import ArticleTitle from "../components/ArticleTitle";
import Date from "../components/Date";
import Tag from "../components/Tag";
import ArticleDetail from "../components/ArticleDetail";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import BlogTitle from "../components/BlogTitle";

export const DetailStyles = styled.div`
  width: 600px;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 45px;
    margin: 50px;
  }
`;

const Detail = () => {
  const router = useRouter();
  const [article, setArticle] = useState([]);
  //useRouterのqueryに渡したクエリが格納される
  const url = `https://weblog.microcms.io/api/v1/index/${router.query.id}`;

  useEffect(() => {
    const fetchData = async () => {
      //APIからaxiosでデータを取得
      const result = await axios(url, {
        headers: {
          "X-API-KEY": "3f8af667-8897-42d2-b314-1ac2ff31dc5b",
        },
      });
      //取得したデータをarticleにセットする
      setArticle(result.data);
    };
    fetchData();
    //第二引数に空配列を渡すことで、最初の描画の時だけ処理が走るようにする
  }, []);

  return (
    <DetailStyles>
      <div className="title">
        <BlogTitle />
      </div>
      <ArticleTitle title={article.title} slug={article.slug} id={article.id} />
      <ArticleDetail content={article.content} />
      <Date date={article.date} />
      <Tag tag={article.tag} />
    </DetailStyles>
  );
};

export default Detail;
