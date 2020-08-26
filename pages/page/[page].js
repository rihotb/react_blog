import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { MainContext } from "../../components/MainProvider";

const Page = () => {
  const { offsetValue } = useContext(MainContext);
  const queryOffset = `?offset=${offsetValue}`;

  return <Layout title="nantra blog" query={queryOffset} name="page" />;
};

export default Page;
