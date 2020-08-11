import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { context } from "./Provider";

const ContactTitle = () => {
  const { setContactTitle } = useContext(context);
  return (
    <div>
      <TextField
        id="standard-basic"
        label="タイトル"
        fullWidth
        onChange={(e) => setContactTitle(e.target.value)}
      />
    </div>
  );
};

export default ContactTitle;
