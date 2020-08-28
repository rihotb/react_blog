import Pagination from "material-ui-flat-pagination";
import React from "react";
import { useRouter } from "next/router";

const Paginate = ({ limit, total, name, offsetValue, tagSlug }) => {
  const router = useRouter();

  const handleClick = (page) => {
    //ページの一番上に移動する
    scrollTo(0, 0);

    //tagページでPaginateボタンを押したときのルーティング
    if (name === "tag") {
      //1ページ目を押した時
      if (page === 1) {
        router.push(`/tags/[tag]`, `/tags/${tagSlug}`);
        //2ページ目以降を押した時
      } else {
        router.push(`/tag/[tag]/page/[page]`, `/tag/${tagSlug}/page/${page}`);
      }
    }
    //index, pageページでPaginateボタンを押したときのルーティング
    if (name === "page" || name === "index") {
      //1ページ目を押した時
      if (page === 1) {
        router.push(`/`);
        //2ページ目以降を押した時
      } else {
        router.push(`/page/[page]`, `/page/${page}`);
      }
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
        //ボタンがクリックされたら動く。
        onClick={(e, offset, page) => handleClick(page)}
      />
    </div>
  );
};

export default Paginate;
