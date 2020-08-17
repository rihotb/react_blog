import Link from "next/link";
import { Button } from "@material-ui/core";

const Tag = ({ tagName }) => {
  return (
    <Button color="primary" variant="outlined">
      <Link href="/">
        <a>{tagName}</a>
      </Link>
    </Button>
  );
};

export default Tag;
