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
  const {
    setSubmitFlg,
    name,
    email,
    contactContent,
    setNameValidateFlg,
    setEmailValidateFlg,
    setContentlValidateFlg,
  } = useContext(context);

  const handleChange = () => {
    //名前が入力されているかどうかチェックする
    if (!name) {
      setNameValidateFlg(false);
    } else {
      setNameValidateFlg(true);
    }

    //アドレスが入力されているかどうかチェックする
    if (!email) {
      setEmailValidateFlg(false);
    } else {
      setEmailValidateFlg(true);
    }

    //内容が入力されているかどうかチェックする
    if (!contactContent) {
      setContentlValidateFlg(false);
    } else {
      setContentlValidateFlg(true);
    }

    //名前、アドレス、内容が入力されていれば送信する
    if (name && email && contactContent) {
      setSubmitFlg(true);
    }
  };
  return <SubmitButtonStyles onClick={handleChange}>送信</SubmitButtonStyles>;
};

export default Submit;
