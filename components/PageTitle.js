import Head from "next/head";

const PageTitle = ({ title, url }) => {
  return (
    <Head>
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="/logo.svg" />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      {/* <meta name="twitter:description" content={description} /> */}
      <meta name="twitter:image" content="/logo.svg" />

      <title>{title}</title>
    </Head>
  );
};

export default PageTitle;
