import React from "react";
import BlogTitle from "../components/BlogTitle";
import ArticleTitle from "../components/ArticleTitle";
import Date from "../components/Date";
import Tag from "../components/Tag";
import ArticleDetail from "../components/ArticleDetail";
import Paginate from "../components/Paginate";
import Footer from "../components/Footer";
import axios from "axios";
import PageTitle from "../components/PageTitle";
import Link from "next/link";
import styled from "styled-components";

export const LayoutStyles = styled.div`
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

  .paginate {
    text-align: center;
  }
`;

/**
 * 記事一覧のレイアウト
 */
const Layout = ({ name, articles, offsetValue, tagSlug }) => {
  return (
    <div>
      <LayoutStyles>
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
          <Paginate
            limit={articles.limit}
            total={articles.totalCount}
            name={name}
            offsetValue={offsetValue}
            tagSlug={tagSlug}
          />
        </div>
      </LayoutStyles>
      <Footer />
    </div>
  );
};

export default Layout;
