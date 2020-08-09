import React from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

const handleChange = () => {
  fetch("https://weblog.microcms.io/api/v1/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-WRITE-API-KEY": process.env.X_WRITE_API_KEY,
    },
    body: JSON.stringify({
      name: "3nanashi",
      email: "nanashi@example.io",
      title: "title",
      content: "お世話になります。\nエンタープライズプランを使いたいです。",
    }),
  });
};

const Submit = () => {
  return (
    <Button color="primary" variant="contained" onClick={handleChange}>
      送信
    </Button>
  );
};

export default Submit;
