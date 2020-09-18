import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { context } from "./Provider";

const Name = () => {
  const { setName, nameValidateFlg } = useContext(context);

  //名前が入力されていないときに表示される
  if (!nameValidateFlg) {
    return (
      <div>
        <TextField
          error
          label="名前"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          required
          helperText="名前を入力してください"
        />
      </div>
    );
  } else {
    //送信ボタンを押す前と、名前が入力されているときに表示される
    return (
      <div>
        <TextField
          label="名前"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
    );
  }
};

export default Name;
