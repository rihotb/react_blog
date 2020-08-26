import Link from "next/link";
import { Button } from "@material-ui/core";

const Tag = ({ tagName, tagSlug }) => {
  return (
    <Button color="primary" variant="outlined">
      <Link href={{ pathname: `/tags/[tag]` }} as={`/tags/${tagSlug}`}>
        <a>{tagName}</a>
      </Link>
    </Button>
  );
};

export default Tag;
