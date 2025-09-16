import { Formik, Form, Field} from "formik";
import styled from "styled-components";
import { EditButton } from "./EmployeeCard";
import { useToggle } from "../../hooks/useToggle";
import {initialValues} from "../../formik/initialValuesEmployee"

const HomeStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    margin-top: 50px;
    background-color: white;

    & div{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        gap: 10px;
    }
`;

const FormStyled = styled(Form)`
    padding-top: 40px;
    width: auto;
    display: flex;
    justify-content: space-between;
    height: 400px;
    flex-direction: column;
    align-items: center;
`

const FieldStyled = styled(Field)`
    width: 250px;
    border-radius: 10px;
    height: 40px;
    padding: 10px 14px;
    border: 1.5px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`

const EmployeeForm = () => {
    const {toggle} = useToggle();

    return(
        <HomeStyled>
            <Formik
            initialValues={initialValues}
            onSubmit={(values, {resetForm}) => {
                console.log(values);
                toggle();
                resetForm();
            }}
            >
        <FormStyled>
            <div>
                <label>Nombre</label>
                <FieldStyled name="nombre" type="text" placeholder="Ingrese nombre"></FieldStyled>
                <label>Apellido</label>
                <FieldStyled name="apellido" type="text" placeholder="Ingrese apellido"></FieldStyled>
            </div>
            <div>
                <label>Cargo</label>
                <FieldStyled name="cargo" type="text" placeholder="Ingrese cargo"></FieldStyled>
                <label>Salario</label>
                <FieldStyled name="salario" type="number" placeholder="Ingrese salario $"></FieldStyled>
            </div>
            <div>
                <label>Fecha ingreso</label>
                <FieldStyled name="fecha" type="date"></FieldStyled>
            </div>
            <div>
                <label>Estado</label>
                <FieldStyled name="estado" as="select">
                    <option value="">Selecciona</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </FieldStyled>
            </div>
            <div>
                <EditButton type="submit">Guardar</EditButton>
                <EditButton onClick={toggle}>Cancelar</EditButton>
            </div>
        </FormStyled>
    </Formik>
        </HomeStyled>
    )
};

export default EmployeeForm;