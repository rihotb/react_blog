import Head from "next/head";

const PageTitle = ({ title, url }) => {
  return (
    <Head>
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content="https://images.microcms-assets.io/protected/ap-northeast-1:44270ec3-ac4b-4ded-95c6-6a3048daa309/service/weblog/media/icon-144x144.png"
      />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      {/* <meta name="twitter:description" content={description} /> */}
      <meta
        name="twitter:image"
        content="https://images.microcms-assets.io/protected/ap-northeast-1:44270ec3-ac4b-4ded-95c6-6a3048daa309/service/weblog/media/icon-144x144.png"
      />

      <title>{title}</title>
    </Head>
  );
};

export default PageTitle;
