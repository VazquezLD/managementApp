import { Formik, Form } from "formik";
import styled from "styled-components";
import { initialValuesLogin } from "../../formik/initialValues";
import { validationSchemaLogin } from "../../formik/validationSchema";
import InputForm from "./InputForm";

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
    gap: 40px;
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
          <InputForm name="email" label="Email" type="text" />
          <InputForm name="password" label="Contraseña" type="password" />
        </FormStyled>
      </Formik>
    </LoginBoxStyled>
  );
};
