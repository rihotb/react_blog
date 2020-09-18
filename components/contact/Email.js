import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { context } from "./Provider";

const Email = () => {
  const { setEmail, emailValidateFlg } = useContext(context);

  //アドレスが入力されていないときに表示される
  if (!emailValidateFlg) {
    return (
      <div>
        <TextField
          error
          label="メールアドレス"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          required
          helperText="メールアドレスを入力してください"
        />
      </div>
    );
  } else {
    //アドレスが入力されていないときに表示される
    return (
      <div>
        <TextField
          label="メールアドレス"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
    );
  }
};

export default Email;
