import Link from "next/link";

const BlogLogo = (props) => {
  const { title } = props;
  if (title === "nantara blog") {
    return (
      <h1>
        <Link href="/">
          <a>
            <img src="/nantarablog-logo1.svg" alt="blog-logo" width="200" />
          </a>
        </Link>
      </h1>
    );
  } else {
    return (
      <Link href="/">
        <a>
          <img src="/nantarablog-logo1.svg" alt="blog-logo" width="200" />
        </a>
      </Link>
    );
  }
};

export default BlogLogo;
