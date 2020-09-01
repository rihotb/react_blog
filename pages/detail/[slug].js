import React, { useState, useEffect } from "react";
import ArticleTitle from "../../components/ArticleTitle";
import Date from "../../components/Date";
import Tag from "../../components/Tag";
import ArticleDetail from "../../components/ArticleDetail";
import axios from "axios";
import styled from "styled-components";
import BlogTitle from "../../components/BlogTitle";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

export const DetailStyles = styled.div`
  width: 600px;
  margin: 0 auto;

  .title {
    text-align: center;
    margin: 50px;
  }

  .article {
    margin-bottom: 50px;
  }

  .article > * {
    margin-bottom: 10px;
  }

  .articleTitle {
    font-size: 35px;
    margin-bottom: 30px;
  }

  .tag {
    display: inline-block;
    margin-right: 10px;
  }
`;

/**
 * 記事詳細ページ
 * @param props - 記事一覧のslugが入っている
 */
const Detail = (props) => {
  const [articles, setArticles] = useState([]);
  //filtersで絞り込む。equalsで値が完全一致しているコンテンツを取得。
  const url = `https://weblog.microcms.io/api/v1/index?filters=slug[equals]${props.query.slug}`;

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
        setArticles(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    //第二引数に空配列を渡すことで、最初の描画の時だけ処理が走るようにする
  }, []);

  return (
    <div>
      <DetailStyles>
        <div className="title">
          <BlogTitle />
        </div>
        {/* articles.contents配列がtrueの時（値がある時）だけmapの処理を実行する */}
        {articles.contents &&
          articles.contents.map((article) => {
            return (
              // 子コンポーネントにユニークなkeyを渡すことで不要な描画を避ける
              <div key={article.id} className="article">
                <div className="articleTitle">
                  <PageTitle title={article.title} />
                  <ArticleTitle title={article.title} slug={article.slug} />
                </div>
                <ArticleDetail content={article.content} pageName="detail" />
                <Date date={article.date} />
                {article.tags &&
                  article.tags.map((tag) => {
                    return (
                      <div key={tag.id} className="tag">
                        <Tag tagName={tag.tagName} tagSlug={tag.slug} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </DetailStyles>
      <Footer />
    </div>
  );
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Detail.getInitialProps = ({ query }) => {
  return { query };
};

export default Detail;
