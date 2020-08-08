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
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    font-size: 45px;
    margin: 50px;
  }

  .material > * {
    margin: 30px 0;
  }

  .buttons {
    margin-bottom: 100px;
    text-align: center;
  }

  .buttons > * {
    width: 200px;
    margin-right: 30px;
  }
`;

const Contact = () => {
  return (
    <ContactStyle>
      <div className="title">お問い合わせフォーム</div>
      <div className="material">
        <Name />
        <Email />
        <ContactTitle />
        <ContactContent />
      </div>
      <div className="buttons">
        <LinkNav href="/" name="TOPへ戻る"></LinkNav>
        <Submit />
      </div>
    </ContactStyle>
  );
};

export default Contact;
