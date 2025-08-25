import styled from "styled-components";
import { EmployeeGrid } from "./EmployeeGrid";

const HomeStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const AddButton = styled.button`
    border-radius: 4px;
    color: white;
    padding: 10px 5px;
    background-color: #58d358;
    border: 2px solid #3db93d;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-right: 60px;

    &:hover{
        background-color: #3db93d;  
    }
`;

const NavbarFilterStyled = styled.div`
    width: 60%;
    height: 60px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between ;
    background-color: #f9f9f9;

    & ul{
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        width: 76%;
    }

`

const Employee = () => {
    return(
        <HomeStyled>
            <h1>Empleados</h1>
            <NavbarFilterStyled>
                <ul>
                    <li><span>Nombre/Apellido</span></li>
                    <li><span>Cargo</span></li>
                    <li><span>Salario</span></li>
                    <li><span>Fecha de Ingreso</span></li>
                    <li><span>Estado</span></li>
                </ul>

                <AddButton>Agregar Empleado</AddButton>
            </NavbarFilterStyled>
            <EmployeeGrid />
        </HomeStyled>
    )
}

export default Employee