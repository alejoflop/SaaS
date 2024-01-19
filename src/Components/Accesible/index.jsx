import React from "react";
import styled from "styled-components"

import article1 from "../../Assets/article1.png"
import article2 from "../../Assets/article2.png"
import article3 from "../../Assets/article3.png"

import { letraPrimario } from "../UI/variables";
import { fondoOscuro } from "../UI/variables";

const AccesibleDiv = styled.div`
    background-color: ${fondoOscuro};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 8.438rem;
    padding-bottom: 5rem;
`;

const AccesibleTitle = styled.p`
    font-size: 2.375rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    text-transform: capitalize;
    padding-bottom: 6.813rem;
`;

const StyledTitlePrimary = styled.span`
    color: ${letraPrimario};
`;

const ArticleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.375rem;
    align-items: center;
`;

const Article = styled.img`
    
`

const Accesible = () => {
    return (
        <AccesibleDiv id="getStarted">
            <AccesibleTitle>How <StyledTitlePrimary>accessible</StyledTitlePrimary> UX design is changing the <br/> <StyledTitlePrimary>businesses</StyledTitlePrimary> for the better</AccesibleTitle>
            <ArticleDiv>
                <Article src={article1}/>
                <Article src={article2}/>
                <Article src={article3}/>
            </ArticleDiv>
        </AccesibleDiv>
        );
    };

export default Accesible;