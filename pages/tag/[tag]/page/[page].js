import React, { useContext, useState, useEffect } from "react";
import Layout from "../../../../components/Layout";
import { MainContext } from "../../../../components/MainProvider";
import axios from "axios";
import BlogTitle from "../../../../components/BlogTitle";
import ArticleTitle from "../../../../components/ArticleTitle";
import Date from "../../../../components/Date";
import Tag from "../../../../components/Tag";
import ArticleDetail from "../../../../components/ArticleDetail";
import Footer from "../../../../components/Footer";
import TagPaginate from "../../../../components/TagPaginate";
import PageTitle from "../../../../components/PageTitle";
import Link from "next/link";
import styled from "styled-components";

// export const LayoutStyles = styled.div`
//   width: 600px;
//   margin: 0 auto;

//   .title {
//     text-align: center;
//     margin: 50px;
//   }

//   .article {
//     margin-bottom: 50px;
//   }

//   .article > * {
//     margin-bottom: 10px;
//   }

//   .articleTitle {
//     font-size: 30px;
//   }

//   /* 3行以上ある場合は省略して語尾を…にする */
//   .articleContent {
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     -webkit-line-clamp: 2;
//     overflow: hidden;
//   }

//   .tag {
//     display: inline-block;
//     margin-right: 10px;
//   }

//   .paginate {
//     text-align: center;
//   }
// `;

const Page = (props) => {
  const [tags, setTags] = useState([]);
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

  const { tagOffsetValue } = useContext(MainContext);
  const queryOffset = `offset=${tagOffsetValue}`;

  //tagページの2ページ目以降のクエリ
  const queryTagIdAndOffset = `?filters=tags[contains]${filteredTagId}&&${queryOffset}`;

  // return <Layout title="nantra blog" query={queryTagIdAndOffset} />;

  const [articles, setArticles] = useState([]);
  const articleUrl = `https://weblog.microcms.io/api/v1/index${queryTagIdAndOffset}`;

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        //APIからaxiosでデータを取得
        const result = await axios(articleUrl, {
          headers: {
            "X-API-KEY": process.env.X_API_KEY,
          },
        });
        //コンポーネントがマウントされたときのみ、取得したデータをarticlesにセットする
        if (mounted) {
          setArticles(result.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    return () => (mounted = false);
    //最初の描画とクエリが変更された時に処理が走る
  }, [queryTagIdAndOffset]);

  return (
    <div>
      {/* <LayoutStyles> */}
      <PageTitle title="nantara blog" />
      <div className="title">
        <BlogTitle />
      </div>
      {articles.contents &&
        articles.contents.map((article) => {
          return (
            <div key={article.id} className="article">
              <Link
                href={{ pathname: `/detail/[slug]` }}
                as={`/detail/${article.slug}`}
              >
                <a>
                  <div className="articleTitle">
                    <ArticleTitle title={article.title} />
                  </div>
                </a>
              </Link>
              <div className="articleContent">
                <ArticleDetail content={article.content} pageName="index" />
              </div>
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
      <div className="paginate">
        <TagPaginate limit={articles.limit} total={articles.totalCount} />
      </div>
      {/* </LayoutStyles> */}
      <Footer />
    </div>
  );
};

//クエリパラメータを取得するためにgetInitialPropsを使う
Page.getInitialProps = ({ query }) => {
  return { query };
};

export default Page;
