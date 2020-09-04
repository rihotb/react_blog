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
  }

  h1 {
    text-align: center;
    font-size: 45px;
    margin: 50px;
    font-weight: 100;
  }
`;

export const FormsStyle = styled.div`
  div {
    margin: 5px 0;
  }
`;

export const ButtonsStyles = styled.div`
  margin-bottom: 100px;
  text-align: center;

  button {
    margin-top: 20px;
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
        <h1>Contact Form</h1>
        <FormsStyle>
          <Name />
          <Email />
          <ContactTitle />
          <ContactContent />
        </FormsStyle>
        <ButtonsStyles>
          <Submit />
          <LinkNav href="/" name="TOPへ戻る"></LinkNav>
        </ButtonsStyles>
      </ContactStyle>
    </Provider>
  );
};

export default Contact;
