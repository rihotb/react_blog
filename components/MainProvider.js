import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const MainContext = React.createContext();

const MainProvider = (props) => {
  const [offsetValue, setOffsetValue] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const router = useRouter();

  // offsetValueが変更された時に動く
  useEffect(() => {
    //offsetValueがtrueの時、つまり1以外のページ番号が押された時に動く
    if (offsetValue) {
      router.push(`/page/[page]`, `/page/${pageNumber}`);
    }
  }, [offsetValue]);

  // pageNumberが変更された時に動く
  useEffect(() => {
    if (pageNumber <= 1) {
      router.push("/");
    }
  }, [pageNumber]);

  return (
    <MainContext.Provider
      value={{ offsetValue, setOffsetValue, pageNumber, setPageNumber }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
