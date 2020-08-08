import Link from "next/link";
import React from "react";
import { Button } from "@material-ui/core";

const LinkNav = ({ href, name }) => {
  return (
    <Button color="primary" variant="outlined">
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </Button>
  );
};

export default LinkNav;
