import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
      <div className="zigzag"></div>
      <span>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>
      </span>

      <span>
        <Link href="//github.com/rihotb" prefetch={false}>
          <a className="links">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
      </span>
      <span>
        <Link href="/">
          <a className="links">タグ一覧</a>
        </Link>
      </span>
      <span>
        <Link href="/contact">
          <a className="links">お問い合わせ</a>
        </Link>
      </span>
      <small>© 2020 nantara blog</small>
    </FooterStyles>
  );
};

export default Footer;
