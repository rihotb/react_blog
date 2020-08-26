import React, { useState } from "react";

export const MainContext = React.createContext();

const MainProvider = (props) => {
  const [offsetValue, setOffsetValue] = useState(0);
  const [tags, setTags] = useState([]);

  return (
    <MainContext.Provider
      value={{
        offsetValue,
        setOffsetValue,
        tags,
        setTags,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
