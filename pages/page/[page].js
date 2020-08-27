import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { MainContext } from "../../components/MainProvider";

/**
 * 記事一覧ページの2ページ目以降
 */
const Page = () => {
  const { offsetValue } = useContext(MainContext);
  const queryOffset = `?offset=${offsetValue}`;

  return <Layout title="nantra blog" query={queryOffset} name="page" />;
};

export default Page;
