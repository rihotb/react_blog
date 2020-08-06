import moment from "moment";

export const Date = ({ date }) => {
  let formatDate;
  formatDate = moment(date);
  formatDate = formatDate.format("YYYY年MM月DD日 HH:mm");

  return <div>{formatDate}</div>;
};

export default Date;
