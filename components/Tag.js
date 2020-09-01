import Link from "next/link";
import { Button } from "@material-ui/core";
import styled from "styled-components";

export const TagStyles = styled.div`
  .name {
    text-transform: none;
  }
`;

const Tag = ({ tagName, tagSlug }) => {
  return (
    <TagStyles>
      <Button color="primary" variant="outlined" className="name">
        <Link href={{ pathname: `/tags/[tag]` }} as={`/tags/${tagSlug}`}>
          <a>{tagName}</a>
        </Link>
      </Button>
    </TagStyles>
  );
};

export default Tag;
