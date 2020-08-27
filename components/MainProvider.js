import React, { useState } from "react";

export const MainContext = React.createContext();

const MainProvider = (props) => {
  const [offsetValue, setOffsetValue] = useState(0);
  const [tag, setTag] = useState([]);

  return (
    <MainContext.Provider
      value={{
        offsetValue,
        setOffsetValue,
        tag,
        setTag,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
