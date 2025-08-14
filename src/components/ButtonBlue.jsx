import styled from "styled-components";

const StyledButton = styled.button`
    width: 180px;
    height: 40px;
    background-color: #007bff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    color: white;
    transition: all 0.3s ease;
    font-size: 15px;
    margin-top: 20px;

    &:hover {
        transform: scale(1.03);
    }
`;

export const ButtonBlue = ({ text }) => {
    return (
        <StyledButton>
            {text}
        </StyledButton>
    );
};