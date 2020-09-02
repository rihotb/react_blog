import Link from "next/link";
import React from "react";
import { Button } from "@material-ui/core";

const LinkNav = ({ href, name }) => {
  return (
    <Link href={href}>
      <Button color="primary" variant="outlined">
        <a>{name}</a>
      </Button>
    </Link>
  );
};

export default LinkNav;
