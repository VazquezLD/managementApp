import styled from "styled-components";
import { useState } from "react";
import {initialEmployees} from "../../utils/Employees"

const EmployeeCardStyled = styled.div`
    width: 100%;
    background: #fff;
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
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(255,77,79,0.25);
    }

    &:active {
        background: #b71c1c;
        transform: scale(0.98);
    }
`;

const EditButton = styled.button`
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

    &:hover {
        background: #40a9ff;
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(24,144,255,0.25);
    }

    &:active {
        background: #0050b3;
        transform: scale(0.98);
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

    const [employees, setEmployees] = useState(initialEmployees);
    
        const handleDelete = (id) => {
            setEmployees(employees.filter(emp => emp.id !== id));
        };

    return(
        <>
        {employees.length === 0 ? ( <h3>No hay ningún empleado cargado...</h3> ):
        (
            employees.map(emp => (
                <EmployeeCardStyled key={emp.id}>
                    <div>
                        <h4>{emp.name}</h4>
                        <p>{emp.position}</p>
                    </div>
                    <div><PSalary>{emp.salary}</PSalary></div>
                    <div><p>{emp.date}</p></div>
                    <div>
                        {emp.status && <SpanActive>Activo</SpanActive>}
                        {!emp.status && <SpanInactive>Inactivo</SpanInactive>}
                    </div>
                    
                    <ButtonGroup>
                        <EditButton>
                            Editar
                        </EditButton>
                        <DeleteButton onClick={() => handleDelete(emp.id)}>
                            Eliminar
                        </DeleteButton>
                    </ButtonGroup>
                </EmployeeCardStyled>
        )))}
        </>
    )
}

export default EmployeeCard;