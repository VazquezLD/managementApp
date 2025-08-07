import styled from "styled-components";
import { Navbar } from "../components/Navbar";

const LayoutWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-top: 80px;
    box-sizing: border-box;
    background-color: #ffffff;
    justify-content: center;
`;

const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutWrapper>
        <Content>{children}</Content>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
