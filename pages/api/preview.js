import fetch from "node-fetch";

export default async (req, res) => {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    //slugは記事のID、draftKeyは下書き用のdraftKey
    `https://weblog.microcms.io/api/v1/index/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { "X-API-KEY": process.env.X_API_KEY || "" } }
  )
    .then((res) => res.json())
    .catch((error) => null);

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  //本来の記事のパスにリダイレクト
  res.writeHead(307, { Location: `detail/${content.id}` });
  res.end("Preview mode enabled");
};
