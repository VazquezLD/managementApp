import styled from "styled-components";
import { FormLogin } from "./LoginForm";

const LoginContainerStyled = styled.div`
    width: 60vw;
    height: 80vh;
    border: 1px solid #cccccc88;
    padding: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: 0px 0px 40px 1px #007bff55;
`

const AsideStyled = styled.div`
    width: 40%;
    height: 100%;
    border-radius: 20px;
    background-color: #6061a8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    text-align: center;
    background-color: #007bff;
    opacity: 0.8;
    background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #007bff 10px ), repeating-linear-gradient( #19197655, #191976 );
    color: white;
    & p{
      font-size: 15px;
    }
`

export const LoginContainer = () => {
  return (
    <LoginContainerStyled>
      <FormLogin/>
      <AsideStyled>
        <div>
            <h3>Bienvenido a FLASHMIND.</h3>
            <p> Por favor, inicie sesión para continuar.</p>
        </div>
      </AsideStyled>
    </LoginContainerStyled>
  );
}