import Link from "next/link";
import styled from "styled-components";

export const TagButtonStyles = styled.a`
  margin-right: 10px;
  display: inline-block;
  padding: 0.3em 1em;
  color: ${(props) => props.theme.colors.gray};
  border: solid 2px ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  transition: 0.4s;

  :hover {
    background: ${(props) => props.theme.colors.gray};
    color: white;
  }
`;

const Tag = ({ tagName, tagSlug }) => {
  return (
    <>
      <Link href={{ pathname: `/tags/[tag]` }} as={`/tags/${tagSlug}`}>
        <TagButtonStyles>{tagName}</TagButtonStyles>
      </Link>
    </>
  );
};

export default Tag;
