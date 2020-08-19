import Link from "next/link";
import { Button } from "@material-ui/core";

const Tag = ({ tagName, tagId }) => {
  return (
    <Button color="primary" variant="outlined">
      <Link href={{ pathname: `/tags/[tags]` }} as={`/tags/${tagId}`}>
        <a>{tagName}</a>
      </Link>
    </Button>
  );
};

export default Tag;
