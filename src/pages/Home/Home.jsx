import styled from "styled-components";
import heroImg from "../../assets/heroImg.png";
import { ButtonBlue } from "../../components/ButtonBlue";
import { Services } from "./Services";
import { motion } from "framer-motion";
import { Frecuent } from "./Frecuent"

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const HeroStyled = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & div {
        display: flex;
        justify-content: center;
        width: 30%;
        height: 100%;
        flex-direction: column;
        gap: 30px;
    }
    & p {
        max-width: 60%;
        font-weight: 300;
        line-height: 1.6;
        margin: 0 auto 0 0;
        color: #333;
        letter-spacing: 0.2px;
    }
    & img {
        aspect-ratio: 1/1;
        height: 90%;
        object-fit: contain;
    }
`;

export const Home = () => {
    return (
        <HomeWrapper>
            <HeroStyled>
                
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h1>Tu página perfecta para el manejo de empresa.</h1>
                    <p>
                        ManageMeant está diseñado para todo el mundo, su simplicidad de uso
                        y curva de aprendizaje te facilitarán el manejo básico de los
                        esenciales de cualquier empresa.
                    </p>
                    <ButtonBlue text={"Nuestros servicios"} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img src={heroImg} alt="" />
                </motion.div>
            </HeroStyled>
            <Services />
            <Frecuent/>
        </HomeWrapper>
    );
};
