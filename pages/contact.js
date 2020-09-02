import LinkNav from "../components/LinkNav";
import Name from "../components/contact/Name";
import Email from "../components/contact/Email";
import ContactTitle from "../components/contact/ContactTitle";
import ContactContent from "../components/contact/ContactContent";
import Submit from "../components/contact/Submit";
import styled from "styled-components";
import Provider from "../components/contact/Provider";
import PageTitle from "../components/PageTitle";

export const ContactStyle = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 671px) {
    width: 600px;
  }

  @media (max-width: 671px) {
    padding: 10px;
    .buttons > * {
      margin-bottom: 10px;
    }
  }

  .title {
    text-align: center;
    font-size: 45px;
    margin: 50px;
    font-weight: 100;
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

/**
 * お問い合わせページ
 */
const Contact = () => {
  return (
    <Provider>
      <ContactStyle>
        <PageTitle title="Contact Form" />
        <div className="title">Contact Form</div>
        <div className="material">
          <Name />
          <Email />
          <ContactTitle />
          <ContactContent />
        </div>
        <div className="buttons">
          <Submit />
          <LinkNav href="/" name="TOPへ戻る"></LinkNav>
        </div>
      </ContactStyle>
    </Provider>
  );
};

export default Contact;
