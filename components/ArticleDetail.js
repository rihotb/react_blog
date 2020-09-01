import marked from "marked";
import hljs from "highlight.js";
import styled from "styled-components";

export const DetailStyles = styled.div`
  pre {
    padding: 20px;
    background-color: #eeeeee;
    font-size: 15px;
  }
`;

const ArticleDetail = ({ content, pageName }) => {
  //hightlight.jsを有効にする
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });

  //記事一覧ページ用。HTMLタグなし。
  if (pageName === "index") {
    //marked()でMarkdown(content)をHTMLに変換する
    const convertedHTML = marked(content);
    //変換したHTMLからHTMLタグを取り除く
    const contentWithoutHtmlTags = convertedHTML.replace(
      /<("[^"]*"|'[^']*'|[^'">])*>/g,
      ""
    );
    return <div>{contentWithoutHtmlTags}</div>;
  }

  //detailページ用。HTMLタグあり。
  if (pageName === "detail") {
    return (
      <DetailStyles>
        <div
          //marked()でMarkdown(content)をHTMLに変換し、変換したHTMLを描画する
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </DetailStyles>
    );
  }
};

export default ArticleDetail;
