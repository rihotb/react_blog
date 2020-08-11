import Link from "next/link";

const ArticleTitle = ({ title, slug }) => {
  //hrefはpagesディレクトリ内のパス。
  //asはURLバーに表示されるパス。
  return (
    <Link href={{ pathname: `detail/[slug]` }} as={`detail/${slug}`}>
      <a>{title}</a>
    </Link>
  );
};

export default ArticleTitle;
