import moment from "moment";
import styled from "styled-components";

export const DateStylesForDetail = styled.span`
  color: gray;
`;

export const UpdatedDate = ({ date }) => {
  const formatUpdatedDate = moment(date).format("YYYY-MM-DD");

  return <DateStylesForDetail>更新：{formatUpdatedDate}</DateStylesForDetail>;
};

export default UpdatedDate;
