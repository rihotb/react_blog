import moment from "moment";
import styled from "styled-components";

export const DateStyles = styled.div`
  margin-bottom: 10px;
`;

export const DateStylesForDetail = styled.span`
  margin-right: 20px;
  color: gray;
`;

export const PublishedDate = ({ date, name }) => {
  const formatPublishedDate = moment(date).format("YYYY-MM-DD");

  //記事詳細画面
  if (name === "detail") {
    return (
      <DateStylesForDetail>公開：{formatPublishedDate}</DateStylesForDetail>
    );
  }

  //記事一覧画面
  return <DateStyles>{formatPublishedDate}</DateStyles>;
};

export default PublishedDate;
