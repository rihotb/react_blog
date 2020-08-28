/**
 * タグ情報を取得する
 * @param  query
 */
export const fetchTagApi = async (query) => {
  //queryからtagSlugを取得
  const tagSlug = query.tag;

  //tagSlugを使ってタグAPIからタグ情報を取得
  const tagRes = await fetch(
    `https://weblog.microcms.io/api/v1/tags?filters=slug[equals]${tagSlug}`,
    {
      headers: {
        "X-API-KEY": process.env.X_API_KEY,
      },
    }
  );
  const tag = await tagRes.json();

  //取得したタグ情報からtagIdを取得
  const tagId = tag.contents[0].id;

  return { tagId, tagSlug };
};
