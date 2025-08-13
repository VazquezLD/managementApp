import styled from "styled-components";
import EmployeeCard from "./EmployeeCard";

const EmployeeGridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px;
    background-color: #f9f9f9;
    width: 60%;
    max-height: 60vh;
    overflow-y: scroll;
    border-top: 1px solid #ccc;
`;

export const EmployeeGrid = () => {

    return (
        <EmployeeGridStyled>
            <EmployeeCard/>
        </EmployeeGridStyled>
    );
}