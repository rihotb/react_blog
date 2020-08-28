/**
 * 記事一覧情報を取得する
 * @param query
 */
export const fetchIndexApi = async (query = "") => {
  //記事一覧APIを呼び出して記事一覧情報を取得
  const res = await fetch(`https://weblog.microcms.io/api/v1/index${query}`, {
    headers: {
      "X-API-KEY": process.env.X_API_KEY,
    },
  });

  const articles = await res.json();

  return articles;
};
