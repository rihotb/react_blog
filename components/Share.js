import styled from "styled-components";
import {
  PocketShareButton,
  PocketIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export const ShareStyles = styled.div`
  text-align: center;
  margin: 40px 0;
  button {
    margin: 0 5px;
  }
`;

//SNSシェアボタン
const Share = ({ title, url }) => {
  return (
    <ShareStyles>
      <TwitterShareButton title={title} url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <PocketShareButton url={url}>
        <PocketIcon size={32} round />
      </PocketShareButton>
    </ShareStyles>
  );
};

export default Share;
