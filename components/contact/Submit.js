import React, { useContext } from "react";
import { context } from "./Provider";
import styled from "styled-components";

export const SubmitButtonStyles = styled.button`
  padding: 0.5em 1em;
  color: white;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
`;

const Submit = () => {
  const { setSubmitFlg } = useContext(context);

  //送信ボタンを押されたらsubmitFlgをtrueにする
  const handleChange = () => {
    setSubmitFlg(true);
  };
  return <SubmitButtonStyles onClick={handleChange}>送信</SubmitButtonStyles>;
};

export default Submit;
