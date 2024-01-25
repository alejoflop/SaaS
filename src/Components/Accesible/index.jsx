import React, { useState } from "react";
import styled from "styled-components";

import article1 from "../../Assets/article1.png";
import article2 from "../../Assets/article2.png";
import article3 from "../../Assets/article3.png";
import arrowBack from "../../Assets/arrow-back.svg";
import arrowFront from "../../Assets/arrow-front.svg";
import erick from "../../Assets/erick_desoto.png";
import ethan from "../../Assets/Ethan.png";

import { letraPrimario } from "../UI/variables";
import { fondoOscuro } from "../UI/variables";
import { disable } from "../UI/variables";
import Button from "../UI/button";

const AccesibleDiv = styled.div`
    background-color: ${fondoOscuro};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 8.438rem;
    padding-bottom: 5rem;

    @media (max-width: 768px) {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`;

const AccesibleTitle = styled.p`
    font-size: 2.375rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    text-transform: capitalize;
    padding-bottom: 6.813rem;

    @media (max-width: 768px) {
        font-size: 2rem;
        padding-bottom: 2rem;
    }
`;

const StyledTitlePrimary = styled.span`
    color: ${letraPrimario};
`;

const ArticleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.375rem;
    align-items: center;

    @media (max-width: 768px) {
        gap: 1.25rem;
    }
`;

const Article = styled.img`
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CarruselDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3.438rem;
    width: 72.5rem;
    align-items: center;

    @media (max-width: 768px) {
        padding-top: 1rem;
        width: 90%;
    }
`;

const CarruselTextDiv = styled.div`
    display: flex;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const CarruselButton = styled.img`
    height: auto;
    width: auto;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 40px;
        width: 40px;
    }
`;

const CarruselComment = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const QuotationMarks = styled.span`
    text-align: j;
    color: ${letraPrimario};
`;

const CarruselTextos = styled.div`
    padding-left: 4%;
    padding-right: 4%;
    color: #FFFFFF;
    text-align: center;
    line-height: 3rem;

    @media (max-width: 768px) {
        padding-left: 0;
        padding-right: 0;
        line-height: 1.3rem;
    }
`;

const WriterDiv = styled.div`
    padding-top: 4%;
    padding-bottom: 6%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        padding-top: 2%;
        padding-bottom: 14%;
        gap: 0;
    }
`;

const WriterImg = styled.img`
    width: 4.625rem;
    height: 4.625rem;

    @media (max-width: 768px) {
        width: 23%;
        height: auto;
    }
`;

const WriterInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const WriterName = styled.p`
    width: auto;
    color: ${letraPrimario};
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const WriterJob = styled.p`
    width: auto;
    color: #FFFFFF;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const Carrusel = () => {
    const [indice, setIndice] = useState(0);

    const textosCarrusel = [
        {
        texto: "TDP helped identify the main pain points and designed a new UX that is accessible and easy to understand. The redesign pushed us forward on our mission to be able to verify 100% of IDs in real-time, and we raised over $100M in funding.",
        escritor: "Erick Desoto",
        src: erick,
        jobposition: "VP of Product at Socure"
        },
        {
        texto: "TDP's UX redesign was a game-changer, addressing crucial pain points. It propelled our mission to achieve 100% real-time ID verification, resulting in a remarkable $100M in funding.",
        escritor: "Ethan Turner",
        src: ethan,
        jobposition: "Marketing Coordinator"
        },
    ];

    const irAlSiguiente = () => {
        setIndice((prevIndice) => (prevIndice + 1) % textosCarrusel.length);
    };

    const irAlAnterior = () => {
        setIndice((prevIndice) => (prevIndice - 1 + textosCarrusel.length) % textosCarrusel.length);
    };

return (
    <CarruselDiv>
        <CarruselTextDiv>
            <CarruselButton onClick={irAlAnterior} src={arrowBack}/>
            <CarruselTextos>
                <CarruselComment><QuotationMarks>“</QuotationMarks>{textosCarrusel[indice].texto}<QuotationMarks>”</QuotationMarks></CarruselComment>
            </CarruselTextos>
            <CarruselButton onClick={irAlSiguiente} src={arrowFront}/>
        </CarruselTextDiv>
        <WriterDiv>
            <WriterImg src={textosCarrusel[indice].src} />
            <WriterInfoDiv>
                <WriterName>{textosCarrusel[indice].escritor}</WriterName>
                <WriterJob>{textosCarrusel[indice].jobposition}</WriterJob>
            </WriterInfoDiv>
        </WriterDiv>
    </CarruselDiv>
    );
};



const Accesible = () => {
    return (
        <AccesibleDiv>
        <AccesibleTitle>
            How <StyledTitlePrimary>accessible</StyledTitlePrimary> UX design is changing the <br />{" "}
            <StyledTitlePrimary>Businesses</StyledTitlePrimary> for the better
        </AccesibleTitle>
        <ArticleDiv>
            <Article src={article1} />
            <Article src={article2} />
            <Article src={article3} />
        </ArticleDiv>
        <Carrusel />
        <Button backgroundColor={disable} hoverColor={disable} pointer={false}>see our case studies</Button>
        </AccesibleDiv>
    );
};

export default Accesible;
