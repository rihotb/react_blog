import React from "react";
import Paginate from "../components/Paginate";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ArticleList from "./article-list/ArticleList";
import styled from "styled-components";
import SNS from "../components/SNS";

export const LayoutStyles = styled.div`
  margin: 0 auto;

  @media (min-width: 671px) {
    width: 700px;
  }

  @media (max-width: 670px) {
    padding: 10px;
  }
`;

const Layout = ({ name, articles, offsetValue, tagSlug, title, url }) => {
  //記事詳細画面のレイアウト
  if (name === "detail") {
    return (
      <div>
        <LayoutStyles>
          <Header title={title} url={url} />
          {articles.contents &&
            articles.contents.map((article) => {
              return (
                <ArticleList article={article} key={article.id} name={name} />
              );
            })}
          <SNS title={title} url={url} />
        </LayoutStyles>
        <Footer />
      </div>
    );
  }

  //記事一覧画面のレイアウト
  if (name === "index" || name === "tag") {
    return (
      <div>
        <LayoutStyles>
          <Header title={title} />
          {articles.contents &&
            articles.contents.map((article) => {
              return (
                <ArticleList article={article} key={article.id} name={name} />
              );
            })}
          <Paginate
            limit={articles.limit}
            total={articles.totalCount}
            name={name}
            offsetValue={offsetValue}
            tagSlug={tagSlug}
          />
        </LayoutStyles>
        <Footer />
      </div>
    );
  }
};

export default Layout;
