import styled from "styled-components";
import Link from "next/link";

export const PageNavStyles = styled.div``;

//前後記事のナビゲーション
const PageNav = ({ allArticles, articleSlug }) => {
  //全ての記事のslugとtitleを取得する
  const slugsAndTitles =
    allArticles.contents &&
    allArticles.contents.map((article) => {
      return { slug: article.slug, title: article.title };
    });

  //現在のslugに合致する記事のインデックスを取得する
  const i = slugsAndTitles.findIndex((elem) => elem.slug === articleSlug);

  //前後の記事のslugとtitleを取得する
  const next = slugsAndTitles[i - 1];
  const prev = slugsAndTitles[i + 1];

  return (
    <PageNavStyles>
      {prev ? (
        <Link href={"/detail/" + prev.slug}>
          <a>
            <span>前の記事</span>
            <span>{prev.title}</span>
          </a>
        </Link>
      ) : (
        ""
      )}
      {next ? (
        <Link href={"/detail/" + next.slug}>
          <a>
            <span>次の記事</span>
            <span>{next.title}</span>
          </a>
        </Link>
      ) : (
        ""
      )}
    </PageNavStyles>
  );
};

export default PageNav;
