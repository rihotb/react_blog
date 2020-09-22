import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const FooterStyles = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;

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

  span a {
    margin: 0 5px;
  }

  small {
    margin-bottom: 50px;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <span>
        <img src="/logo.svg" alt="logo" />
      </span>

      <span>
        <a href="https://github.com/rihotb">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com/honaka_uw">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </span>
      <span>
        <Link href="/taglist">
          <a>タグ一覧</a>
        </Link>
      </span>
      <span>
        <Link href="/contact">
          <a>お問い合わせ</a>
        </Link>
      </span>
      <small>© 2020 nantara blog</small>
    </FooterStyles>
  );
};

export default Footer;
