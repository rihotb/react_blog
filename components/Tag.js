import LinkNav from "./LinkNav";

const Tag = ({ tag }) => {
  //{}のときは中身にJSがかける。結果をreturnとして出す。一般的な書き方。
  return <LinkNav href="/" name={tag}></LinkNav>;
};

/* const Tag = () => (
  //()のときはhtmlの内容だけ書ける。JSはかけない。
  <div>
    <span>タグ</span>
  </div>
); */

// const Tag = (tag) => <div>{tag}</div>;

/* const Tag = () => (
   <div>
    <span>タグ</span>
  </div>
); */

//こっちが基本の書き方。<div>じゃなくて<>でもOK
/* const Tag = (tag) => {
  return (
    <div>
      <span>{tag}</span>
    </div>
  );
}; */

export default Tag;
