import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { context } from "./Provider";

const Email = () => {
  const { setEmail } = useContext(context);
  return (
    <div>
      <TextField
        label="メールアドレス"
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default Email;
