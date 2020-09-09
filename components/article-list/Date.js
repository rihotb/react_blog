import moment from "moment";
import styled from "styled-components";

export const DateStyles = styled.div`
  margin-bottom: 10px;
`;

export const DateStylesForDetail = styled.div`
  color: gray;
`;

export const Date = ({ date, name }) => {
  let formatDate;
  formatDate = moment(date);
  formatDate = formatDate.format("YYYY年MM月DD日 HH:mm");

  //記事詳細画面
  if (name === "detail") {
    return <DateStylesForDetail>{formatDate}</DateStylesForDetail>;
  }

  //記事一覧画面
  return <DateStyles>{formatDate}</DateStyles>;
};

export default Date;
