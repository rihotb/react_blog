import styled from "styled-components";
import ArticleTitle from "./ArticleTitle";
import ArticleDetail from "./ArticleDetail";
import Date from "./Date";
import Tag from "./Tag";

export const ArticleListStyles = styled.div`
  margin-bottom: 40px;
`;

export const ArticleList = ({ article, name }) => {
  //記事詳細画面
  if (name === "detail") {
    return (
      <ArticleListStyles>
        <ArticleTitle title={article.title} slug={article.slug} name={name} />
        <Date date={article.date} name={name} />
        <ArticleDetail
          content={article.content}
          name={name}
          toc={article.toc}
        />
      </ArticleListStyles>
    );
  }

  //記事一覧画面
  if (name === "index" || name === "tag") {
    return (
      <ArticleListStyles>
        <ArticleTitle title={article.title} slug={article.slug} name={name} />
        <ArticleDetail
          content={article.content}
          name={name}
          toc={article.toc}
        />
        <Date date={article.date} />
        {article.tags &&
          article.tags.map((tag) => {
            return (
              <Tag tagName={tag.tagName} tagSlug={tag.slug} key={tag.id} />
            );
          })}
      </ArticleListStyles>
    );
  }
};

export default ArticleList;
