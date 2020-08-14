import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { context } from "./Provider";

const Submit = () => {
  const { setSubmitFlg } = useContext(context);

  //送信ボタンを押されたらsubmitFlgをtrueにする
  const handleChange = () => {
    setSubmitFlg(true);
  };
  return (
    <Button color="primary" variant="contained" onClick={handleChange}>
      送信
    </Button>
  );
};

export default Submit;
