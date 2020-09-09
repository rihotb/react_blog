import styled from "styled-components";
import Link from "next/link";

export const ArticleTitleStyles = styled.div`
  h1 {
    font-weight: 300;
  }
  margin-bottom: 30px;
`;

export const ArticleTitleStylesForIndex = styled.span`
  font-size: 30px;
  margin-bottom: 10px;
  :hover {
    color: ${(props) => props.theme.colors.shadeBlue};
  }
`;

const ArticleTitle = ({ title, slug, pageName }) => {
  if (pageName === "index" || pageName === "tag") {
    return (
      <ArticleTitleStylesForIndex>
        <Link href={{ pathname: `/detail/[slug]` }} as={`/detail/${slug}`}>
          <a>{title}</a>
        </Link>
      </ArticleTitleStylesForIndex>
    );
  }

  if (pageName === "detail") {
    return (
      <ArticleTitleStyles>
        <h1>{title}</h1>
      </ArticleTitleStyles>
    );
  }
};

export default ArticleTitle;
