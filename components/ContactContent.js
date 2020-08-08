import React from "react";
import TextField from "@material-ui/core/TextField";

const ContactContent = () => {
  return (
    <div>
      <TextField
        id="outlined-multiline-static"
        multiline
        label="内容"
        rows={4}
        variant="outlined"
      />
    </div>
  );
};

export default ContactContent;
