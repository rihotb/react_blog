import LinkNav from "../components/LinkNav";
import styled from "styled-components";

export const SuccessStyles = styled.div`
  text-align: center;
`;

const Success = () => (
  <SuccessStyles>
    <p>送信完了しました。</p>
    <LinkNav href="/" name="TOPへ戻る"></LinkNav>
  </SuccessStyles>
);

export default Success;
