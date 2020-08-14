import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { context } from "./Provider";

const ContactContent = () => {
  const { setContactContent } = useContext(context);
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
      />
    </div>
  );
};

export default ContactContent;
