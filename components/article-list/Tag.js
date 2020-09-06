import Link from "next/link";
import styled from "styled-components";

export const TagStyles = styled.div`
  display: inline-block;
  margin: 5px 10px 0 0;

  .name {
    text-transform: none;
  }

  .btn-flat-border {
    display: inline-block;
    padding: 0.3em 1em;
    color: #454545;
    border: solid 2px #454545;
    border-radius: 5px;
    transition: 0.4s;
  }

  .btn-flat-border:hover {
    background: #454545;
    color: white;
  }
`;

const Tag = ({ tagName, tagSlug }) => {
  return (
    <TagStyles>
      <Link href={{ pathname: `/tags/[tag]` }} as={`/tags/${tagSlug}`}>
        <a className="btn-flat-border">{tagName}</a>
      </Link>
    </TagStyles>
  );
};

export default Tag;
