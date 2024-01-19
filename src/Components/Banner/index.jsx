import React from "react";
import styled from "styled-components"

import check from "../../Assets/check.svg";
import imgBanner from "../../Assets/banner.png"
import Button from "../UI/button";

import { fondoBanner } from "../UI/variables";
import { letraSemiOscura } from "../UI/variables";
import { letraPrimario } from "../UI/variables";
import { colorPrimario } from "../UI/variables";
import { letraOscura } from "../UI/variables";

const BannerSection = styled.div`
    background-color: ${fondoBanner};
    padding-top: 3.438rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
`;

const StyledTitle = styled.p`
    font-size: 3.125rem;
    color: ${letraSemiOscura};
    font-weight: 700;
    text-align: center;
`;

const StyledTitlePrimary = styled.span`
    color: ${letraPrimario};
`;

const DivChecks = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
    padding-top: 3.438rem;
    padding-bottom: 1.375rem;
`;

const CheckElement = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
`;

const LogoCheck = styled.img`
    width: 27px;
    height: 27px;
`;

const CheckParagraph = styled.p`
    font-size: 1.063rem;
    font-weight: 700;
    color: ${letraOscura};
`;

const Checks = () => {
    return (
        <DivChecks>
            <CheckElement><LogoCheck src={check}/><CheckParagraph>No hiring headaches</CheckParagraph></CheckElement>
            <CheckElement><LogoCheck src={check}/><CheckParagraph>Weekly turnaround times</CheckParagraph></CheckElement>
            <CheckElement><LogoCheck src={check}/><CheckParagraph>One flat monthly rate</CheckParagraph></CheckElement>
        </DivChecks>
    );
};

const ImgBanner = styled.img`
    height: 406px;
    Overflow: hidden;
`

const Banner = () => {
    const scrollToSection = () => {
        const section = document.getElementById('miSeccion');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <BannerSection>
            <StyledTitle>A UI/UX design subscription so <StyledTitlePrimary>good</StyledTitlePrimary> <br/> it should come with a <StyledTitlePrimary>warning</StyledTitlePrimary> label</StyledTitle>
            <Checks/>
            <Button onClick={scrollToSection} backgroundColor={letraPrimario} hoverColor={colorPrimario}>start your risk free trial</Button>
            <ImgBanner src={imgBanner}/>
        </BannerSection>
        );
    };

export default Banner;