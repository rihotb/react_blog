import React from "react";
import BlogTitle from "../components/BlogTitle";
import ArticleTitle from "../components/ArticleTitle";
import Date from "../components/Date";
import Tag from "../components/Tag";
import ArticleDetail from "../components/ArticleDetail";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <BlogTitle />
      <ArticleTitle />
      <Date />
      <Tag />
      <ArticleDetail />
      <Pagination />
      <Footer />
    </div>
  );
};

export default HomePage;
