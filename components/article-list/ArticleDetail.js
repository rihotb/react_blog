import marked from "marked";
import hljs from "highlight.js";
import styled from "styled-components";

//記事詳細ページのスタイル
export const DetailStyles = styled.div`
  line-height: 1.5;

  blockquote {
    margin: 1em 0;
    padding: 0.1em 1em;
    border-left: 5px solid #ccc;
    border-radius: 2px;
  }

  h2 {
    background: #dfefff;
    box-shadow: 0px 0px 0px 5px #dfefff;
    border: dashed 2px white;
    padding: 0.2em 0.5em;
  }

  h3 {
    padding: 0.25em 0.5em;
    color: #494949;
    background: transparent;
    border-left: solid 5px #64bcfc;
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
    color: #0044cc;
  }
`;

//記事一覧ページの記事詳細部分のスタイル
export const DetailStylesForIndex = styled.div`
  /* 3行以上ある場合は省略して語尾を…にする */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ArticleDetail = ({ content, pageName }) => {
  //hightlight.jsを有効にする
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });

  //記事一覧ページ用。HTMLタグなし。
  if (pageName === "index" || pageName === "tag") {
    //marked()でMarkdown(content)をHTMLに変換する
    const convertedHTML = marked(content);
    //変換したHTMLからHTMLタグを取り除く
    const contentWithoutHtmlTags = convertedHTML.replace(
      /<("[^"]*"|'[^']*'|[^'">])*>/g,
      ""
    );
    return (
      <DetailStylesForIndex>{contentWithoutHtmlTags}</DetailStylesForIndex>
    );
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
