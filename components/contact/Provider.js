import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

export const context = React.createContext();

const Provider = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactTitle, setContactTitle] = useState("");
  const [contactContent, setContactContent] = useState("");
  const [submitFlg, setSubmitFlg] = useState(false);
  const [nameValidateFlg, setNameValidateFlg] = useState(true);
  const [emailValidateFlg, setEmailValidateFlg] = useState(true);
  const [contentlValidateFlg, setContentlValidateFlg] = useState(true);
  const [body, setBody] = useState({});

  /**
   * 送信ボタンが押されたら動く
   */
  useEffect(() => {
    if (submitFlg) {
      setData();
      postAPI();
    }
  }, [submitFlg]);

  /**
   * お問い合わせフォームで入力された各データをbodyオブジェクトにセットする
   */
  const setData = () => {
    //nameプロパティを追加して値（変数name）を代入する
    body.name = name;
    body.email = email;
    body.title = contactTitle;
    body.content = contactContent;
    setBody(body);
  };

  /**
   * POSTリクエストを送る
   */
  const postAPI = () => {
    axios({
      method: "POST",
      url: "https://weblog.microcms.io/api/v1/contact",
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": process.env.X_WRITE_API_KEY,
      },
      data: body,
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

  return (
    <context.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        contactTitle,
        setContactTitle,
        contactContent,
        setContactContent,
        submitFlg,
        setSubmitFlg,
        nameValidateFlg,
        setNameValidateFlg,
        emailValidateFlg,
        setEmailValidateFlg,
        contentlValidateFlg,
        setContentlValidateFlg,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default Provider;
