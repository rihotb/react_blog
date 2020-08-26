import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const MainContext = React.createContext();

const MainProvider = (props) => {
  const [offsetValue, setOffsetValue] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [tagOffsetValue, setTagOffsetValue] = useState(0);
  const [tagPageNumber, setTagPageNumber] = useState(0);
  const router = useRouter();

  // offsetValueが変更された時に動く
  useEffect(() => {
    //1ページ目に戻った時に動く
    if (pageNumber === 1) {
      router.push("/");
    }
    //offsetValueがtrueの時、つまり1以外のページ番号が押された時に動く
    if (offsetValue) {
      router.push(`/page/[page]`, `/page/${pageNumber}`);
    }
  }, [offsetValue]);

  //tagページでpaginationボタンを押された時に動く
  useEffect(() => {
    if (tagOffsetValue) {
      router.push(`/tag/[tag]/page/[page]`, `/tag/other/page/${tagPageNumber}`);
    }
  }, [tagOffsetValue]);

  return (
    <MainContext.Provider
      value={{
        offsetValue,
        setOffsetValue,
        pageNumber,
        setPageNumber,
        tagOffsetValue,
        setTagOffsetValue,
        tagPageNumber,
        setTagPageNumber,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
