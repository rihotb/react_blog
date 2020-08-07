const ArticleDetail = ({ content }) => {
  //__htmlプロパティを持つオブジェクトを渡すと、文字列をDOMに変換する
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default ArticleDetail;
