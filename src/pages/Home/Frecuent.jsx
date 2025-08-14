import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FrecuentStyled = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 40px 0;
    gap: 20px;
`;

const QuestionBox = styled(motion.div)`
    width: 90%;
    background: #f5f7fa;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

const QuestionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    background: #e9f0fb;
    border-radius: 8px 8px 0 0;
`;

const PlusButton = styled.button`
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, transform 0.2s;
    &:hover {
        background: #0056b3;
        transform: scale(1.08);
    }
`;

const FrecuentDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
`
;

const FrecuentPresent = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & p{
        max-width: 70%;
    }
`

const Answer = styled(motion.div)`
    padding: 18px 24px;
    background: #fff;
    border-radius: 0 0 8px 8px;
    font-size: 1rem;
    color: #333;
    border-top: 1px solid #e0e0e0;
`;

const faqs = [
    {
        question: "¿Cómo puedo agregar un nuevo empleado?",
        answer: "Para agregar un nuevo empleado, ve a la sección de empleados y haz clic en 'Agregar empleado'. Completa el formulario y guarda los cambios."
    },
    {
        question: "¿Puedo editar la información de un empleado?",
        answer: "Sí, puedes editar la información haciendo clic en el botón de editar junto al empleado que deseas modificar."
    },
    {
        question: "¿Cómo elimino un servicio?",
        answer: "Dirígete a la sección de servicios, selecciona el servicio y haz clic en el botón de eliminar."
    },
    {
        question: "¿Qué hago si olvido mi contraseña?",
        answer: "Haz clic en '¿Olvidaste tu contraseña?' en la pantalla de inicio de sesión y sigue las instrucciones para recuperarla."
    },
    {
        question: "¿Cómo puedo ver las estadísticas de mi empresa?",
        answer: "Accede a la sección de gráficos para ver estadísticas detalladas sobre tu empresa."
    }
];

export const Frecuent = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <FrecuentStyled>
            <FrecuentDiv>
                <FrecuentPresent>
                    <h1>Preguntas Frecuentes</h1>
                    <p>Aquí encontrarás respuestas rápidas a las dudas más comunes sobre ManageMeant. 
                        Desde cómo empezar a usar la plataforma hasta cómo gestionar tu equipo de forma eficiente, 
                        reunimos toda la información para que no pierdas tiempo buscando.
                    </p>
                </FrecuentPresent>
            </FrecuentDiv>
            <FrecuentDiv>
                {faqs.map((faq, idx) => (
                <QuestionBox
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.07 }}
                >
                    <QuestionHeader onClick={() => handleToggle(idx)}>
                        {faq.question}
                        <PlusButton>
                            {openIndex === idx ? "-" : "+"}
                        </PlusButton>
                    </QuestionHeader>
                    <AnimatePresence>
                        {openIndex === idx && (
                            <Answer
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                {faq.answer}
                            </Answer>
                        )}
                    </AnimatePresence>
                </QuestionBox>
            ))}
            </FrecuentDiv>
        </FrecuentStyled>
    );
};
