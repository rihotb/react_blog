import styled from "styled-components";
import {
  PocketShareButton,
  PocketIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export const SNSStyles = styled.div`
  text-align: center;
  margin: 40px 0;
  button {
    margin: 0 5px;
  }
`;

//SNSシェアボタン
const SNS = ({ title, url }) => {
  return (
    <SNSStyles>
      <TwitterShareButton title={title} url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <PocketShareButton url={url}>
        <PocketIcon size={32} round />
      </PocketShareButton>
    </SNSStyles>
  );
};

export default SNS;
