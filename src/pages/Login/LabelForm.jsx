import styled from "styled-components";

const LabelStyled = styled.label`
    font-size: 16px;
    font-weight: 400;
`

export const LabelForm = ({label}) => {
    return(
        <LabelStyled>
            {label}
        </LabelStyled>
    )
}