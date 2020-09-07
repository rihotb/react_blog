import styled from "styled-components";
import ArticleTitle from "./ArticleTitle";
import ArticleDetail from "./ArticleDetail";
import Date from "./Date";
import Tag from "./Tag";

export const ArticleListStyles = styled.div`
  margin-bottom: 40px;
`;

export const ArticleList = ({ article, name }) => {
  return (
    <ArticleListStyles>
      <ArticleTitle title={article.title} slug={article.slug} pageName={name} />
      <ArticleDetail content={article.content} pageName={name} />
      <Date date={article.date} />
      {article.tags &&
        article.tags.map((tag) => {
          return <Tag tagName={tag.tagName} tagSlug={tag.slug} key={tag.id} />;
        })}
    </ArticleListStyles>
  );
};

export default ArticleList;
