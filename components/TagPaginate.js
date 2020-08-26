import Pagination from "material-ui-flat-pagination";
import React, { useContext } from "react";
import { MainContext } from "./MainProvider";

const TagPaginate = ({ limit, total }) => {
  const { tagOffsetValue, setTagOffsetValue, setTagPageNumber } = useContext(
    MainContext
  );

  const handleClick = (offset, page) => {
    setTagOffsetValue(offset);
    setTagPageNumber(page);
    //ページの一番上に移動する
    scrollTo(0, 0);
  };

  return (
    <div>
      <Pagination
        //ページあたりの記事数。デフォルト値は10。
        limit={limit}
        //何件目の記事から取得するかを指定。デフォルト値は0。
        offset={tagOffsetValue}
        //記事の総数。
        total={total}
        //ボタンがクリックされたら動く。offsetには新しい値が入る。2を押したらoffsetは10。
        onClick={(e, offset, page) => handleClick(offset, page)}
      />
    </div>
  );
};

export default TagPaginate;
