import marked from "marked";
import hljs from "highlight.js";
import styled from "styled-components";

export const DetailStyles = styled.div`
  * {
    line-height: 25px;
  }

  blockquote {
    margin: 1em 0;
    padding: 0.1em 1em;
    border-left: 5px solid #ccc;
    border-radius: 2px;
  }

  h1 {
    padding: 0.4em 0.5em;
    background: #f4f4f4;
    border-left: solid 5px #7db4e6;
    border-bottom: solid 3px #d7d7d7;
    color: #494949;
    line-height: 30px;
  }

  h2 {
    padding: 0.5em;
    background: #f4f4f4;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.23);
    color: #494949;
  }

  h3 {
    padding: 0.25em 0.5em;
    color: #494949;
    background: transparent;
    border-left: solid 5px #7db4e6;
  }

  pre {
    background-color: #eeeeee;
    padding: 10px;
    border-radius: 5px;
    overflow: scroll;
  }

  code {
    background-color: #eeeeee;
    font-size: 15px;
    padding: 3px;
  }

  a {
    color: #0066ff;
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
