import React, { useState, useEffect } from "react";
import ArticleTitle from "../../components/ArticleTitle";
import Date from "../../components/Date";
import Tag from "../../components/Tag";
import ArticleDetail from "../../components/ArticleDetail";
import axios from "axios";
import styled from "styled-components";
import BlogTitle from "../../components/BlogTitle";

export const DetailStyles = styled.div`
  width: 600px;
  margin: 0 auto;

  .title {
    text-align: center;
    margin: 50px;
  }
`;

const Detail = (props) => {
  const [articles, setArticles] = useState([]);
  //filtersで絞り込む。equalsで値が完全一致しているコンテンツを取得。
  const url = `https://weblog.microcms.io/api/v1/index?filters=slug[equals]${props.query.slug}`;

  useEffect(() => {
    const fetchData = async () => {
      //APIからaxiosでデータを取得
      const result = await axios(url, {
        headers: {
          "X-API-KEY": process.env.X_API_KEY,
        },
      });
      //取得したデータをarticleにセットする
      setArticles(result.data);
    };
    fetchData();
    //第二引数に空配列を渡すことで、最初の描画の時だけ処理が走るようにする
  }, []);

  return (
    <DetailStyles>
      <div className="title">
        <BlogTitle />
      </div>
      {/* articles.contents配列がtrueの時（値がある時）だけmapの処理を実行する */}
      {articles.contents &&
        articles.contents.map((article) => {
          return (
            // 子コンポーネントにユニークなkeyを渡すことで不要な描画を避ける
            <div key={article.id}>
              <ArticleTitle title={article.title} slug={article.slug} />
              <ArticleDetail content={article.content} />
              <Date date={article.date} />
              <Tag tag={article.tag} />
            </div>
          );
        })}
    </DetailStyles>
  );
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Detail.getInitialProps = ({ query }) => {
  return { query };
};

export default Detail;
