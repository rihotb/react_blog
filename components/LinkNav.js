import Link from "next/link";

const LinkNav = ({ href, name }) => {
  return (
    <Link href={href}>
      <a>{name}</a>
    </Link>
  );
};

export default LinkNav;
