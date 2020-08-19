import React, { useState, useEffect } from "react";
import ArticleTitle from "../../components/ArticleTitle";
import Date from "../../components/Date";
import Tag from "../../components/Tag";
import ArticleDetail from "../../components/ArticleDetail";
import axios from "axios";
import styled from "styled-components";
import BlogTitle from "../../components/BlogTitle";
import Footer from "../../components/Footer";
import Link from "next/link";

export const TagsStyles = styled.div`
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
    font-size: 30px;
  }

  /* 3行以上ある場合は省略して語尾を…にする */
  .articleContent {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .tag {
    display: inline-block;
    margin-right: 10px;
  }
`;

const Tags = (props) => {
  const [articles, setArticles] = useState([]);
  const url = `https://weblog.microcms.io/api/v1/index?filters=tags[contains]${props.query.tag}`;

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
      <TagsStyles>
        <div className="title">
          <BlogTitle />
        </div>
        <div>
          {articles.contents &&
            articles.contents.map((article) => {
              return (
                <div key={article.id} className="article">
                  <div className="articleTitle">
                    <Link
                      href={{ pathname: `/detail/[slug]` }}
                      as={`/detail/${article.slug}`}
                    >
                      <a>
                        <ArticleTitle
                          title={article.title}
                          slug={article.slug}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="articleContent">
                    <ArticleDetail content={article.content} pageName="tag" />
                  </div>
                  <Date date={article.date} />
                  {article.tags &&
                    article.tags.map((tag) => {
                      return (
                        <div key={tag.id} className="tag">
                          <Tag tagName={tag.tagName} tagId={tag.id} />
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </TagsStyles>
      <Footer />
    </div>
  );
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Tags.getInitialProps = ({ query }) => {
  return { query };
};

export default Tags;
