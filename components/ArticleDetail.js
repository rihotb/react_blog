const ArticleDetail = ({ content, pageName }) => {
  //HTMLタグを消去する正規表現
  let contentWithoutTags = content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");

  //indexページとtagページ用。HTMLタグなし。
  if (pageName === "index" || "tag") {
    return <div>{contentWithoutTags}</div>;
  }

  //detailページ用。HTMLタグあり。
  if (pageName === "detail") {
    //__htmlプロパティを持つオブジェクトを渡すと、文字列をDOMに変換する
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
};

export default ArticleDetail;
