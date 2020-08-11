import React, { useState } from "react";

export const context = React.createContext();

const Provider = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactTitle, setContactTitle] = useState("");
  const [contactContent, setContactContent] = useState("");

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
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default Provider;
