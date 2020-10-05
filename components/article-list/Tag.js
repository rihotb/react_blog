import Link from "next/link";
import styled from "styled-components";

export const TagButtonStyles = styled.a`
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
  padding: 0.2em 0.5em;
  color: ${(props) => props.theme.colors.gray};
  border: solid 2px ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  transition: 0.4s;

  :hover {
    background: ${(props) => props.theme.colors.gray};
    color: white;
    cursor: pointer;
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
