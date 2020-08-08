import LinkNav from "../components/LinkNav";
import Name from "../components/Name";
import Email from "../components/Email";
import ContactTitle from "../components/ContactTitle";
import ContactContent from "../components/ContactContent";
import Submit from "../components/Submit";
import styled from "styled-components";

export const ContactStyle = styled.div`
  width: 600px;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 45px;
    margin: 50px;
  }
`;

const Contact = () => {
  return (
    <ContactStyle>
      <div className="title">お問い合わせフォーム</div>
      <Name />
      <Email />
      <ContactTitle />
      <ContactContent />
      <div>
        <Submit />
      </div>
      <LinkNav href="/" name="TOPへ"></LinkNav>
    </ContactStyle>
  );
};

export default Contact;
