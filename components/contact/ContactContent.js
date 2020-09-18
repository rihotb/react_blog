import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { context } from "./Provider";

const ContactContent = () => {
  const { setContactContent, contentlValidateFlg } = useContext(context);

  //内容が入力されていないときに表示される
  if (!contentlValidateFlg) {
    return (
      <div>
        <TextField
          error
          id="outlined-multiline-static"
          multiline
          label="内容"
          rows={4}
          variant="outlined"
          fullWidth
          onChange={(e) => setContactContent(e.target.value)}
          required
          helperText="内容を入力してください"
        />
      </div>
    );
  } else {
    //送信ボタンを押す前と、内容が入力されているときに表示される
    return (
      <div>
        <TextField
          id="outlined-multiline-static"
          multiline
          label="内容"
          rows={4}
          variant="outlined"
          fullWidth
          onChange={(e) => setContactContent(e.target.value)}
          required
        />
      </div>
    );
  }
};

export default ContactContent;
