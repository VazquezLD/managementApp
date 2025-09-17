import styled from "styled-components";
import { useEmployee } from "../../hooks/useEmployees";

const EmployeeCardStyled = styled.div`
    width: 100%;
    height: 60px;
    background: #ffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    padding: 16px;
    padding-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & p{
        font-size: 14px;
        font-weight: 200;
    }
`;

const DeleteButton = styled.button`
    background: #ff4d4f;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 6px rgba(255,77,79,0.15);
    height: 30px;

    &:hover {
        background: #d9363e;
        box-shadow: 0 4px 12px rgba(255,77,79,0.25);
    }

    &:active {
        background: #b71c1c;
    }
`;

export const EditButton = styled.button`
    background: #1890ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 6px rgba(24,144,255,0.15);
    height: 30px;
    max-width: 100px;

    &:hover {
        background: #40a9ff;
        box-shadow: 0 4px 12px rgba(24,144,255,0.25);
    }

    &:active {
        background: #0050b3;
    }
`;

const PSalary = styled.span`
    font-weight: 400;
    color: #3db93d;
    
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const SpanActive = styled.span`
    color: #40a9ff;
`;

const SpanInactive = styled.span`
    font-weight: 300;
    color: gray;
    background-color: #c7c7c726;
    padding: 10px;
    border-radius: 4px;
`;

const EmployeeCard =() => {
    const {employees, deleteEmployeeById} = useEmployee();

    return(
        <>
        {employees.length === 0 ? ( <h3>No hay ningún empleado cargado...</h3> ):
        (
            employees.map(emp => (
                <EmployeeCardStyled key={emp.id}>
                    <div>
                        <h4>{emp.nombre} {emp.apellido}</h4>
                        <p>{emp.cargo}</p>
                    </div>
                    <div><PSalary>$ {emp.salario}</PSalary></div>
                    <div><p>{emp.fecha}</p></div>
                    <div>
                        {emp.estado == "Activo" && <SpanActive>Activo</SpanActive>}
                        {emp.estado == "Inactivo" && <SpanInactive>Inactivo</SpanInactive>}
                    </div>
                    
                    <ButtonGroup>
                        <EditButton>
                            Editar
                        </EditButton>
                        <DeleteButton onClick={() => deleteEmployeeById(emp.id)}>
                            Eliminar
                        </DeleteButton>
                    </ButtonGroup>
                </EmployeeCardStyled>
        )))}
        </>
    )
}

export default EmployeeCard;