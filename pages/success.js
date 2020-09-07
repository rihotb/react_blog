import LinkButton from "../components/LinkButton";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";

export const SuccessStyles = styled.div`
  text-align: center;
`;

/**
 * お問い合わせ送信後のサクセスページ
 */
const Success = () => (
  <SuccessStyles>
    <PageTitle title="送信完了" />
    <p>送信完了しました。</p>
    <LinkButton href="/" name="TOPへ戻る"></LinkButton>
  </SuccessStyles>
);

export default Success;
