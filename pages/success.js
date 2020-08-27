import LinkNav from "../components/LinkNav";
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
    <LinkNav href="/" name="TOPへ戻る"></LinkNav>
  </SuccessStyles>
);

export default Success;
