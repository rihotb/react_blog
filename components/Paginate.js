import Pagination from "material-ui-flat-pagination";
import React from "react";

const Paginate = ({ limit, offset, total }) => {
  return (
    <div>
      <Pagination
        //ページあたりの記事数。
        limit={limit}
        //スキップする記事数。
        offset={offset}
        //記事の総数。
        total={total}
        //ボタンがクリックされたら動く。
        onClick={() => console.log("kitayo")}
      />
    </div>
  );
};

export default Paginate;
