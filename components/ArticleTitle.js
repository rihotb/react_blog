import Link from "next/link";

const ArticleTitle = ({ title, slug, id }) => {
  return (
    <Link href={{ pathname: "/detail", query: { id: `${id}` } }} as={`${slug}`}>
      <a>{title}</a>
    </Link>
  );
};

export default ArticleTitle;
