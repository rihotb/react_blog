import React, { useState, useEffect } from "react";
import BlogTitle from "../components/BlogTitle";
import ArticleTitle from "../components/ArticleTitle";
import Date from "../components/Date";
import Tag from "../components/Tag";
import ArticleDetail from "../components/ArticleDetail";
import Paginate from "../components/Paginate";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import axios from "axios";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const url = "https://weblog.microcms.io/api/v1/index";

  useEffect(() => {
    const fetchData = async () => {
      //APIからaxiosでデータを取得
      const result = await axios(url, {
        headers: {
          "X-API-KEY": process.env.X_API_KEY,
        },
      });
      //取得したデータをarticlesにセットする
      setArticles(result.data);
    };
    fetchData();
    //第二引数に空配列を渡すことで、最初の描画の時だけ処理が走るようにする
  }, []);

  return (
    <div>
      <div className={styles.title}>
        <BlogTitle />
      </div>
      <div className={styles.main}>
        {articles.contents &&
          articles.contents.map((article) => {
            return (
              <div key={article.id} className={styles.article}>
                <ArticleTitle
                  title={article.title}
                  slug={article.slug}
                  id={article.id}
                />
                <ArticleDetail content={article.content} />
                <Date date={article.date} />
                <Tag tag={article.tag} />
              </div>
            );
          })}
      </div>
      <div className={styles.paginate}>
        <Paginate />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
