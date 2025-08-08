import styled from "styled-components";
import { ErrorMessage, Field } from 'formik'
import { LabelForm } from "./LabelForm";

const InputBoxStyled = styled.div`
    display: flex;
    flex-direction: column;
`
export const InputField = styled(Field)`
    width: 300px;
    border-radius: 10px;
    height: 50px;
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

const InputForm = ({label, name, type, isError}) => {
    return(
        <>
        
                <InputBoxStyled>
                    <LabelForm label={label} htmlFor={name}/>
                    <InputField
                    name={name}
                    type={type}
                    error={isError}
                    id={label} 
                    />
                    <ErrorMessage component={ErrorMessageStyled} name={name}/>
                </InputBoxStyled>
            
        </>
    )
}

export default InputForm