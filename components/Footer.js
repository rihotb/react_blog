import Link from "next/link";
import styled from "styled-components";

export const FooterStyles = styled.div`
  background-color: gray;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  * {
    margin-bottom: 10px;
  }
  img {
    border-radius: 50%;
    background-color: white;
    width: 70px;
    height: 70px;
    margin-top: 50px;
  }

  small {
    margin-bottom: 50px;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="logo" />
        </a>
      </Link>
      <Link href="/">
        <a>タグ一覧</a>
      </Link>
      <Link href="/contact">
        <a>お問い合わせ</a>
      </Link>
      <small>© 2020 nantra blog</small>
    </FooterStyles>
  );
};

export default Footer;
