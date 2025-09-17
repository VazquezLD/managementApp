import styled from "styled-components";
import { ServiceCard } from "./ServiceCard";

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100%;
    background-color: #f9f9f9;
    padding-top: 40px;
`;

const SpanStyled = styled.span`
    font-weight: 400;
    color: #424242;
`;

const ServicesContainer = styled.div`
    display: grid;
    overflow-y: scroll;
    grid-template-columns: 1fr;
    width: 70vw;
    height: 500px;
    margin-top: 10px;
    padding: 10px;
    gap: 10px;
`

const Services = () => {
    return(
        <HomeWrapper>
            <h1>Dashboard de tus Servicios</h1>
            <SpanStyled>Una vista detallada de tus servicios y cada una de sus caracteristicas mas importantes.</SpanStyled>

            <ServicesContainer>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </ServicesContainer>

        </HomeWrapper>
    )
}

export default Services