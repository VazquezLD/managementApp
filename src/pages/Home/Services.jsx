import styled from "styled-components";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GrTasks } from "react-icons/gr";
import { ButtonBlue } from "../../components/ButtonBlue";
import { BsGraphUpArrow } from "react-icons/bs";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ServiceWrapper = styled.div`
    text-align: center;
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    flex-direction: column;
    gap: 20px;

    & p {
        font-weight: 200;
        color: gray;
        max-width: 600px;
        line-height: 1.6;
    }
`;

const ServiceBox = styled(motion.div)`
    text-align: left;
    padding: 20px;
    height: 80%;
    gap: 20px;
    background-color: white;
    width: 400px;
    border-radius: 8px;
    box-shadow: 0px 0px 24px -7px rgba(0,0,0,0.09);
    -webkit-box-shadow: 0px 0px 24px -7px rgba(0,0,0,0.09);
    -moz-box-shadow: 0px 0px 24px -7px rgba(0,0,0,0.09);

    & div {
        height: 50px;
        width: 100%;
        background-color: red;
    }
`;

const SpanStyled = styled.span`
    color: #007bff;
    letter-spacing: 2px;
`;

const ServicesContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
`;

export const Services = () => {
    const servicesData = [
        {
            icon: <HiOutlineUserGroup size={48} />,
            title: "Control de personal.",
            text: "Te invitamos a administrar fácilmente la información de tu equipo, de forma eficiente y gratuita. Capacidad de rápido aprendizaje y actualizaciones constantes.",
            path: "/empleados"
        },
        {
            icon: <GrTasks size={48} />,
            title: "Seguimiento de Servicios.",
            text: "Te invitamos a administrar fácilmente la información de tu equipo, de forma eficiente y gratuita. Capacidad de rápido aprendizaje y actualizaciones constantes.",
            path: "/servicios"
        },
        {
            icon: <BsGraphUpArrow size={48} />,
            title: "Gráficos sobre todas las estadísticas.",
            text: "Te invitamos a administrar fácilmente la información de tu equipo, de forma eficiente y gratuita. Capacidad de rápido aprendizaje y actualizaciones constantes.",
            path: "/graficos"
        }
    ];

    return (
        <ServiceWrapper>
            <SpanStyled>Bienvenido a ManageMeant</SpanStyled>
            <h2>Qué ofrecemos</h2>
            <p>Te invitamos a administrar fácilmente la información de tu equipo de forma eficiente y gratuita. Capacidad de rápido aprendizaje y actualizaciones constantes.</p>
            
            <ServicesContainer>
                {servicesData.map((service, index) => (
                    <ServiceBox
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3, duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }} 
                    >
                        {service.icon}
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                        <NavLink to={service.path}>
                            <ButtonBlue text={"Probar"} />
                        </NavLink>
                    </ServiceBox>
                ))}
            </ServicesContainer>
        </ServiceWrapper>
    );
};

