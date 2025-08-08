import styled from "styled-components";
import { LoginContainer } from './LoginContainer';


const LoginWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d4e5f8cc;
`;

export const Login = () => {
  return (
    <LoginWrapper>
      <LoginContainer />
    </LoginWrapper>
  );
}       
