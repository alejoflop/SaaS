import React, { useState } from "react";
import styled from "styled-components";

import { letraPrimario } from "../UI/variables";
import { letraOscura } from "../UI/variables";

const DivCard = styled.div`
    padding-top: 10%;
    padding-bottom: 5rem;
`;

const BotoneraDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    position: absolute;
    width: 100%;
`;

const Boton = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-weight: 700;

    @media (max-width: 768px) {
        padding: 10px 3%;
    }
`;

const BotonActivo = styled(Boton)`
    background-color: ${(props) => (props.isActive ? "black" : "white")};
    color: ${(props) => (props.isActive ? "white" : "black")};
    border-top:  1px solid ${(props) => (props.isActive ? "black" : letraPrimario)};
    border-bottom:  1px solid ${(props) => (props.isActive ? "black" : letraPrimario)};
    border-left:  0.5px solid ${(props) => (props.isActive ? "black" : letraPrimario)};
    border-right:  0.5px solid ${(props) => (props.isActive ? "black" : letraPrimario)};
    border-radius: ${(props) =>
    props.isFirst ? "10px 0 0 10px" : props.isLast ? "0 10px 10px 0" : "0"};
`;

const TarjetaDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4%;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 16%;
    }
`;

const Tarjeta = styled.div`
    border: 2px solid ${(props) => (props.isSecond ? letraOscura : letraPrimario)};
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 25%;
    background-color: ${(props) => (props.isSecond ? letraPrimario : "transparent")};

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const ValorPesos = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    width: 100%;
    padding-bottom: 1%;
    color: ${(props) => (props.isSecond ? letraOscura : letraPrimario )};

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const PeriodsP = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => (props.isSecond ? letraOscura : letraPrimario )};
    text-align: center;
    width: 100%;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 0.875rem;
    }
`;

const LineDive = styled.div`
    height: 1%;
    width: 70%;
    padding-bottom: 9%;
    border-bottom: 1px solid ${(props) => (props.isSecond ? "#FFFFFF" : letraPrimario )};
`;

const CardContainer = styled.div`
    width: 100%;
    height: 37.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        height: 100%;
    }
`;

const TitleCard = styled.p`
    font-size: 1.813rem;
    font-weight: 700;
    text-align: center;
    padding-bottom: 0.625rem;
    color: ${(props) => (props.isSecond ? "#FFFFFF" : letraOscura )};
`;

const TitleDescription = styled.p`
    font-size: 0.938rem;
    font-weight: 400;
    text-align: center;
    padding-bottom: 12%;
    height: 4.375rem;
    color: ${(props) => (props.isSecond ? "#FFFFFF" : letraOscura )};
`;

const IncludedDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding-top: 11%;
    color: ${(props) => (props.isSecond ? "#FFFFFF" : letraOscura )};

    @media (max-width: 768px) {
        width: 85%;
    }
`;

const IncludedText = styled.p`
    font-size: 0.938rem;
    font-weight: 700;  
    padding-bottom: 5%;
    text-transform: uppercase;

    @media (max-width: 768px) {
        padding-bottom: 4%;
    }
`;

const IncludedTextSecond = styled.p`
    font-size: 0.938rem;
    font-weight: 700;
    padding-top: 15%;
    padding-bottom: 5%;
    text-transform: uppercase;

    @media (max-width: 768px) {
        padding-top: 2%;
    padding-bottom: 4%;
    }
`;

const IncludedTextBenefits = styled.p`
    font-size: 0.875rem;
    font-weight: 400;  
    padding-left: 10%;
    line-height: 1.7;
    height: 143px;

    @media (max-width: 768px) {
        height: auto;
    }
`;

const Save = styled.p`
    font-weight: 700;
    color: ${letraPrimario};
    display: ${(props) => (props.isSecond ? "block" : "none")};
    position: absolute;
    top: -30px; /* Ajusta el valor según sea necesario */
    left: 50.5%;
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: 768px) {
        top: -20px; /* Ajusta el valor según sea necesario */
        left: 51%;
    }
`
const SaveThird = styled.p`
    font-weight: 700;
    color: ${letraPrimario};
    display: ${(props) => (props.isThird ? "block" : "none")};
    position: absolute;
    top: -30px; /* Ajusta el valor según sea necesario */
    left: 58%;
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: 768px) {
        top: -20px; /* Ajusta el valor según sea necesario */
        left: 80%;
    }
`

const Botonera = () => {
    const [botonActivo, setBotonActivo] = useState(1);
    const [valoresPesos] = useState([
        ["2,600", "3,595", "5,200"],
        ["7,020", "9,706", "14,040"],
        ["26,520", "36,669", "53,040"],
        ],
        ["Per Month", "Per Quarter", "Per Year"]);
    
        const handleClick = (numBoton) => {
        setBotonActivo(numBoton);
        };
    
    const botonesTextos = ["MONTHLY", "QUARTERLY", "YEARLY"];

    const TitleText = ["Essential", "Pro", "Turbo"]
    const TitleDescriptions = ["Great for basic UI/UX design needs", "Great for end-to-end product design", "Great for products that require more design horsepower and tight timelines"]
    const TextBenefits = [
        ["UI execution", "Connect on Slack", "One 30 minute meeting a week"],
        ["Everything in Essential", "Full UI/UX design and research", "Dev ready Figma files", "One 1 hour meeting a week"],
        ["Everything in Essential and Pro", "User Testing", "Figma Prototypes", "Flexible meetings", "Custom workflows to speed up delivery"]
    ];
    const Periods = ["Per Month", "Per Quarter", "Per Year"];
    const Team = [
        ["1 designer working with 4-5 other customers at the same time"],
        ["1 design lead", "1 designer working on 2-3 other customers at the same time"],
        ["1 design lead", "1 designer working on 1 other customer at the same time"]
    ]
    const Saved = ["10", "15", " "]

    return (
    <DivCard>
        <BotoneraDiv id="getStarted">
        {[1, 2, 3].map((numBoton, index, array) => (
            <BotonActivo
            key={numBoton}
            isActive={botonActivo === numBoton}
            isFirst={index === 0}
            isLast={index === array.length - 1}
            onClick={() => handleClick(numBoton)}
            >
            <Save isSecond={index === 1}>Save {Saved[index-1]}%</Save>
            <SaveThird isThird={index === 2}>Save {Saved[index -1]}%</SaveThird>
            {botonesTextos[index]}
            
            </BotonActivo>
        ))}
        </BotoneraDiv>

        <TarjetaDiv>
        {valoresPesos[botonActivo - 1].map((valor, index) => (
            <Tarjeta key={index} isSecond={index === 1}>
                <CardContainer>
                    <TitleCard isSecond={index === 1}>{TitleText[index]}</TitleCard>
                    <TitleDescription isSecond={index === 1}>{TitleDescriptions[index]}</TitleDescription>
                    <ValorPesos isSecond={index === 1}>{`$ ${valor}`}</ValorPesos>
                    <PeriodsP isSecond={index === 1}>{`${Periods[botonActivo - 1]}`}</PeriodsP>
                    <LineDive isSecond={index === 1}/>
                    <IncludedDiv isSecond={index === 1}>
                        <IncludedText>What’s included:</IncludedText>
                        <IncludedTextBenefits>
                                    {TextBenefits[index].map((text, textIndex) => (
                                        <div key={textIndex}>{text}</div>
                                    ))}
                        </IncludedTextBenefits>
                        <IncludedTextSecond>Design Team</IncludedTextSecond>
                        <IncludedTextBenefits>
                                    {Team[index].map((text, textIndex) => (
                                        <div key={textIndex}>{text}</div>
                                    ))}
                        </IncludedTextBenefits>
                    </IncludedDiv>
                </CardContainer>
            </Tarjeta>
        ))}
        </TarjetaDiv>
    </DivCard>
    );
};
    
export default Botonera;