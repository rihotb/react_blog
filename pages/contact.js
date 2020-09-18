import LinkButton from "../components/LinkButton";
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
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 30px;
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
    font-size: 15px;
  }

  @media (min-width: 671px) {
    button {
      margin-right: 30px;
    }
  }
`;

/**
 * お問い合わせページ
 */
const Contact = () => {
  return (
    <Provider>
      <ContactStyle>
        <PageTitle title="お問い合わせ" />
        <h1>お問い合わせ</h1>
        <FormsStyle>
          <Name />
          <Email />
          <ContactTitle />
          <ContactContent />
        </FormsStyle>
        <ButtonsStyles>
          <Submit />
          <LinkButton href="/" name="TOPへ戻る"></LinkButton>
        </ButtonsStyles>
      </ContactStyle>
    </Provider>
  );
};

export default Contact;
