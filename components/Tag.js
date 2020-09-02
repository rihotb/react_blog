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
      <Link href={{ pathname: `/tags/[tag]` }} as={`/tags/${tagSlug}`}>
        <Button color="primary" variant="outlined" className="name">
          <a>{tagName}</a>
        </Button>
      </Link>
    </TagStyles>
  );
};

export default Tag;
