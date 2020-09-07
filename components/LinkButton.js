import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const LinkButtonStyles = styled.button`
  padding: 0.5em 1em;
  background: white;
  color: ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
`;

const LinkButton = ({ href, name }) => {
  return (
    <Link href={href}>
      <LinkButtonStyles>
        <a>{name}</a>
      </LinkButtonStyles>
    </Link>
  );
};

export default LinkButton;
