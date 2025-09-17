import styled from "styled-components";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const ServiceCardStyled = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    padding: 16px;
    display: flex;
    height: 300px;
    flex-direction: column;
    gap: 10px;
`

const TitleServiceStyled = styled.span`
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid #ccc;
    height: fit-content;
`

const DataServiceContainer = styled.div`
    width: 100%;
    flex: 1;
    padding: 5px;
    display: flex;
    gap: 20px;
`

const FirtsDataBox = styled.div`
    width: 30%;
    background-color: #f0f0f0;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
`

const SecondDataBox = styled.div`
    flex: 1;
    height: 100%;
    background-color: #f0f0f0
`

const ExpensesStyled = styled.span`
    width: 100%;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap:5px;
`

const SpanExpeseStyled = styled.span`
    font-weight: 300;
    color: #424242;
`

const ExpenseContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 10px;
`
const TotalStyled = styled.span`
    font-weight: 600;
    color: black;
`

const ExpenseTotal= styled(ExpenseContainer)`
    border-top: 1px solid #ccc;
    padding: 5px;
`

const DivContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ServiceCard = () => {
    return(
        <ServiceCardStyled>
            <TitleServiceStyled>Servicio Desarrollo Web</TitleServiceStyled>
            <DataServiceContainer>
                <FirtsDataBox>
                    <ExpensesStyled style={{paddingLeft:10}}><RiMoneyDollarCircleLine style={{color:"007bff", fontSize:20}}/> Detalle de expensas</ExpensesStyled>
                    
                    <DivContainer>
                        <ExpenseContainer>
                        <SpanExpeseStyled>Licencias de software</SpanExpeseStyled><SpanExpeseStyled>$50/mo</SpanExpeseStyled>
                        </ExpenseContainer>
                        <ExpenseContainer>
                            <SpanExpeseStyled>Marketing</SpanExpeseStyled><SpanExpeseStyled>$550/mo</SpanExpeseStyled>
                        </ExpenseContainer>
                        <ExpenseContainer>
                            <SpanExpeseStyled>Development</SpanExpeseStyled><SpanExpeseStyled>$15000/mo</SpanExpeseStyled>
                        </ExpenseContainer>
                    </DivContainer>
                    
                    <ExpenseTotal>
                        <TotalStyled>Total:</TotalStyled><TotalStyled>$15600</TotalStyled>
                    </ExpenseTotal>
                </FirtsDataBox>
                <SecondDataBox></SecondDataBox>
            </DataServiceContainer>
        </ServiceCardStyled>
    )
}