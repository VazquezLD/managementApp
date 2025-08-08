import { Formik, Form } from "formik";
import styled from "styled-components";
import { initialValuesLogin } from "../../formik/initialValues";
import { validationSchemaLogin } from "../../formik/validationSchema";
import InputForm from "./InputForm";
import { Link } from 'react-router-dom'

const LoginBoxStyled = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
`

const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & h2{
        margin-bottom: 30px;
    }
`

const ButtonLogin = styled.button`
  width: 300px;
  padding: 15px 0;
  background: linear-gradient(135deg, #007bff 0%, #000dff 100%);
  color: white;
  font-weight: 700;
  font-size: 15px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(107, 115, 255, 0.6);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 13, 255, 0.8);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px #000dff;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`

export const FormLogin = () => {
  return (
    <LoginBoxStyled>
      <Formik
        initialValues={initialValuesLogin}
        validationSchema={validationSchemaLogin}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <FormStyled>
            <h2>Iniciar Sesión</h2>
          <InputForm name="email" label="Email" type="text" />
          <InputForm name="password" label="Contraseña" type="password" />
          <ButtonLogin type="submit" className="sendButton">Enviar</ButtonLogin>
          <Link to='/register' ><span>¿No tienes cuenta? Crea una</span></Link>
        </FormStyled>
      </Formik>
    </LoginBoxStyled>
  );
};
