import styled from "styled-components";
import Link from "next/link";

export const PageNavStyles = styled.div`
  a {
    border-bottom: 1px #ddd solid;
    display: block;
    padding: 10px 30px;
    color: #0044cc;
  }

  a :hover {
    background-color: #f6f6f6;
  }

  a :first-child {
    border-top: 1px #ddd solid;
  }

  div {
    font-size: 0.825rem;
    color: #000;
    margin-bottom: 10px;
  }

  @media (min-width: 600px) {
    display: flex;
    margin: 30px 0;

    a {
      flex: 1;
    }

    a,
    a:first-child {
      border: none;
    }

    .next {
      text-align: right;
    }
  }
`;

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
            <div>前の記事</div>
            <p>{prev.title}</p>
          </a>
        </Link>
      ) : (
        ""
      )}
      {next ? (
        <Link href={"/detail/" + next.slug}>
          <a className="next">
            <div>次の記事</div>
            <p>{next.title}</p>
          </a>
        </Link>
      ) : (
        ""
      )}
    </PageNavStyles>
  );
};

export default PageNav;
