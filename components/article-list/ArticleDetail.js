import marked from "marked";
import hljs from "highlight.js";
import styled from "styled-components";
import TableOfContent from "./TableOfContent";

//記事詳細ページのスタイル
export const DetailStyles = styled.div`
  line-height: 2;

  blockquote {
    margin: 1em 0;
    padding: 0.1em 1em;
    border-left: 5px solid #ccc;
    border-radius: 2px;
  }

  h2 {
    margin-top: 50px;
    background: ${(props) => props.theme.colors.lightBlue};
    box-shadow: 0px 0px 0px 5px ${(props) => props.theme.colors.lightBlue};
    border: dashed 2px white;
    padding: 0.2em 0.5em;
  }

  h3 {
    padding: 0.25em 0.5em;
    background: transparent;
    border-left: solid 5px ${(props) => props.theme.colors.shadeBlue};
  }

  pre {
    background-color: #eeeeee;
    padding: 10px;
    border-radius: 5px;
    overflow: scroll;
    font-size: 15px;
    line-height: 1.5;
  }

  p > code,
  li > code {
    background-color: #eeeeee;
    font-size: 15px;
    margin: 0 2px;
    padding: 2px 4px;
    border: 1px solid #ddd;
    border-radius: 2px;
  }

  a {
    color: #0044cc;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

//記事一覧ページの記事詳細部分のスタイル
export const DetailStylesForIndex = styled.div`
  /* 3行以上ある場合は省略して語尾を…にする */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 10px 0;
`;

const ArticleDetail = ({ content, name, toc }) => {
  //hightlight.jsを有効にする
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });

  const renderer = new marked.Renderer();
  const linkRenderer = renderer.link;

  //aタグにtarget="_blank"とrel="noopener"を追加して、別タブで開くようにする
  renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a target="_blank" rel="noopener" ');
  };

  //marked()でMarkdown(content)をHTMLに変換する
  const convertedHTML = marked(content, { renderer });

  //記事一覧ページ用。HTMLタグなし。
  if (name === "index" || name === "tag") {
    //変換したHTMLからHTMLタグを取り除く
    const contentWithoutHtmlTags = convertedHTML.replace(
      /<("[^"]*"|'[^']*'|[^'">])*>/g,
      ""
    );
    return (
      <DetailStylesForIndex>{contentWithoutHtmlTags}</DetailStylesForIndex>
    );
  }

  //記事詳細ページ用。HTMLタグあり。
  if (name === "detail") {
    return (
      <DetailStyles>
        {/* tocがtrueの時だけ目次を表示する */}
        {toc && <TableOfContent convertedHTML={convertedHTML} />}
        <div
          //変換したHTMLを描画する
          dangerouslySetInnerHTML={{ __html: convertedHTML }}
        />
      </DetailStyles>
    );
  }
};

export default ArticleDetail;
