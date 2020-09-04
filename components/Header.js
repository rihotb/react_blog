import styled from "styled-components";
import BlogLogo from "./BlogLogo";
import PageTitle from "./PageTitle";

export const LogoStyles = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const Header = (props) => {
  const { title = "nantara blog" } = props;

  return (
    <>
      <PageTitle title={title} />
      <LogoStyles>
        <BlogLogo />
      </LogoStyles>
    </>
  );
};

export default Header;
