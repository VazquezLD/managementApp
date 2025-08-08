import styled from "styled-components";

const LabelStyled = styled.label`
    font-size: 16px;
    font-weight: 400;
`

export const LabelForm = ({label, htmlFor}) => {
    return(
        <LabelStyled>
            <LabelStyled htmlFor={htmlFor}>{label}</LabelStyled>
        </LabelStyled>
    )
}