import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
export const MainContext = React.createContext();

//propsで初期値を渡す
const MainProvider = (props) => {
  const router = useRouter();
  let initOffsetValue;

  const [page, setPage] = useState(0);

  useEffect(() => {
    if (router.query) {
      setPage(router.query.page);
    }
  }, [router]);

  // pageが取得されてセットされたら処理される
  useEffect(() => {
    if (page) {
      //ページ番号を元に、initOffsetValueの値を計算
      initOffsetValue = (page - 1) * 10;
      console.log(page);
      console.log(initOffsetValue);
    }
  }, [page]);

  // console.log(router.query.page);
  // //router.query.pageはページ番号がはいるけど、最初はundefined。
  // //initOfsetValueもNaNが入ってしまう
  // initOffsetValue = (router.query.page - 1) * 10;
  // console.log(initOffsetValue);

  const [offsetValue, setOffsetValue] = useState(initOffsetValue);
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
