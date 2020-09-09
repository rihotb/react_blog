import styled from "styled-components";
import cheerio from "cheerio";

export const TocStyles = styled.ul``;

//記事詳細画面の目次
const TableOfContent = ({ convertedHTML }) => {
  //HTMLをcheerioを使って解析する。
  const $ = cheerio.load(convertedHTML);
  //h2~h4を配列として抜き出す。
  const headings = $("h2, h3, h4").toArray();
  //headings配列を整形してtext,id,nameのtoc配列を作成する。
  const toc = headings.map((data) => ({
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name,
  }));

  return (
    <TocStyles>
      {toc.map((item) => (
        <li className={item.name} key={item.id}>
          {/* 各見出しに対してaタグを貼る */}
          <a href={"#" + item.id}>{item.text}</a>
        </li>
      ))}
    </TocStyles>
  );
};

export default TableOfContent;
