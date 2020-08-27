import Pagination from "material-ui-flat-pagination";
import React, { useContext } from "react";
import { MainContext } from "./MainProvider";
import { useRouter } from "next/router";

const Paginate = ({ limit, total, name }) => {
  const { offsetValue, setOffsetValue, tag } = useContext(MainContext);
  const router = useRouter();
  let slug;

  if (tag.contents) {
    slug = tag.contents[0].slug;
  }

  const handleClick = (offset, page) => {
    setOffsetValue(offset);
    //ページの一番上に移動する
    scrollTo(0, 0);

    //tagページでPaginateボタンを押したときのルーティング
    if (name === "tag") {
      router.push(`/tag/[tag]/page/[page]`, `/tag/${slug}/page/${page}`);
    }
    //index, pageページでPaginateボタンを押したときのルーティング
    if (name === "page" || name === "index") {
      router.push(`/page/[page]`, `/page/${page}`);
    }
  };

  return (
    <div>
      <Pagination
        //ページあたりの記事数。デフォルト値は10。
        limit={limit}
        //何件目の記事から取得するかを指定。デフォルト値は0。
        offset={offsetValue}
        //記事の総数。
        total={total}
        //ボタンがクリックされたら動く。offsetには新しい値が入る。2を押したらoffsetは10。
        onClick={(e, offset, page) => handleClick(offset, page)}
      />
    </div>
  );
};

export default Paginate;
