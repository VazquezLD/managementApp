import { Formik, Form, Field, ErrorMessage} from "formik";
import styled from "styled-components";
import { EditButton } from "./EmployeeCard";
import { useToggle } from "../../hooks/useToggle";
import {initialValues} from "../../formik/initialValuesEmployee"
import { validationSchemaEmployee } from "../../formik/validationSchemaEmployee";
import { useEmployee } from "../../hooks/useEmployees";

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
const ErrorMessageStyled = styled.span`
    color: red;
    font-weight: 600;
    font-size: 15px;
`

const DivError = styled.div`
    display: flex;
    flex-direction: column;
`

const EmployeeForm = () => {
    const {toggle} = useToggle();
    const {addNewEmployee} = useEmployee();

    return(
        <HomeStyled>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaEmployee}
            onSubmit={(values, {resetForm}) => {
                addNewEmployee({ ...values, id: Date.now() })
                console.log(values);
                toggle();
                resetForm();
            }}
            >
        <FormStyled>
            <div>
                <label>Nombre</label>
                <DivError>
                    <FieldStyled name="nombre" type="text" placeholder="Ingrese nombre"></FieldStyled>
                    <ErrorMessage component={ErrorMessageStyled} name={'nombre'}/>
                </DivError>
                
                <label>Apellido</label>
                <DivError>
                    <FieldStyled name="apellido" type="text" placeholder="Ingrese apellido"></FieldStyled>
                    <ErrorMessage component={ErrorMessageStyled} name={'apellido'}/>
                </DivError>
            </div>
            <div>
                <label>Cargo</label>
                <DivError>
                    <FieldStyled name="cargo" type="text" placeholder="Ingrese cargo"></FieldStyled>
                    <ErrorMessage component={ErrorMessageStyled} name={'cargo'}/>
                </DivError>

                <label>Salario</label>
                <DivError>
                    <FieldStyled name="salario" type="number" placeholder="Ingrese salario $"></FieldStyled>
                    <ErrorMessage component={ErrorMessageStyled} name={'salario'}/>
                </DivError>
            </div>
            <div>
                <label>Fecha ingreso</label>
                <DivError>
                    <FieldStyled name="fecha" type="date"></FieldStyled>
                    <ErrorMessage component={ErrorMessageStyled} name={'fecha'}/>
                </DivError>
            </div>
            <div>
                <label>Estado</label>
                <DivError>
                    <FieldStyled name='estado' component="select">
                        <option value="">Selecciona estado</option>
                        <option value="Activo">Activo</option>
                        <option value ="Inactivo">Inactivo</option>
                    </FieldStyled>
                    <ErrorMessage component={ErrorMessageStyled} name={'estado'}/>
                </DivError>
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