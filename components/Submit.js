import React from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import Router from "next/router";

const handleChange = () => {
  axios({
    method: "POST",
    url: "https://weblog.microcms.io/api/v1/contact",
    headers: {
      "Content-Type": "application/json",
      "X-WRITE-API-KEY": process.env.X_WRITE_API_KEY,
    },
    data: {
      name: "name",
      email: "nanashi@example.io",
      title: "title",
      content: "contents",
    },
  })
    .then(() => {
      Router.push({
        pathname: "/success",
      });
    })
    .catch((err) => {
      console.log(err);
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
