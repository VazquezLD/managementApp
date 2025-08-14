import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

const LayoutWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    overflow-y: scroll;
    padding-top: 80px;
    box-sizing: border-box;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
`;

const Layout = () => {
  return (
    <>
      <Navbar />
      <LayoutWrapper>
        <Content><Outlet/></Content>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
