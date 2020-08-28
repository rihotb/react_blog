import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
export const MainContext = React.createContext();

//propsで初期値を渡す
const MainProvider = (props) => {
  // const router = useRouter();
  // let initOffsetValue;

  // const [page, setPage] = useState(0);
  // //初期値は一番最初（MainProvider自体が呼び出された時）しか入らない。stateは一番上に書く。
  // const [offsetValue, setOffsetValue] = useState(initOffsetValue);
  // const [tag, setTag] = useState([]);

  // //useEffectがどのタイミングで実行されるか
  // useEffect(() => {
  //   if (router.query.page) {
  //     setPage(router.query.page);
  //     initOffsetValue = (router.query.page - 1) * 10;
  //     // console.log(initOffsetValue);
  //   }
  // }, [router]);

  return (
    <MainContext.Provider
      value={
        {
          // offsetValue,
          // setOffsetValue,
          // tag,
          // setTag,
        }
      }
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
