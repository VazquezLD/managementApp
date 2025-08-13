import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

const LayoutWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-top: 80px;
    box-sizing: border-box;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
