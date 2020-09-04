import moment from "moment";
import styled from "styled-components";

export const DateStyles = styled.div`
  margin-bottom: 10px;
`;

export const Date = ({ date }) => {
  let formatDate;
  formatDate = moment(date);
  formatDate = formatDate.format("YYYY年MM月DD日 HH:mm");

  return <DateStyles>{formatDate}</DateStyles>;
};

export default Date;
