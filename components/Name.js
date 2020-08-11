import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { context } from "./Provider";

const Name = () => {
  const { setName } = useContext(context);
  return (
    <div>
      <TextField
        id="standard-basic"
        label="名前"
        fullWidth
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Name;
