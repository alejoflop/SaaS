import React from "react";
import styled from "styled-components"

import cost from "../../Assets/cost.svg"
import adaptable from "../../Assets/adaptable.svg"
import fast from "../../Assets/fast.svg"
import Eclipse1 from "../../Assets/Eclipse1.svg"
import Eclipse2 from "../../Assets/Eclipe2.svg"
import Eclipse3 from "../../Assets/Eclipe3.svg"
import StepImg1 from "../../Assets/StepsImg1.svg"
import StepImg2 from "../../Assets/StepsImg2.svg"
import StepImg3 from "../../Assets/StepsImg3.svg"

import { fondoClaro } from "../UI/variables";
import { letraSemiOscura } from "../UI/variables";
import { letraPrimario } from "../UI/variables";
import { colorPrimario } from "../UI/variables";
import { letraOscura } from "../UI/variables";

const InfoSection = styled.div`
    background-color: ${fondoClaro};
    padding-top: 9.5rem;
    padding-bottom: 8.438rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding-top: 4.313rem;
        padding-bottom: 4.313rem;
    }
`;

const StyledTitle = styled.p`
    font-size: 2.5rem;
    color: ${letraOscura};
    font-weight: 700;
    text-align: center;
    line-height: 1.333;
    text-transform: capitalize;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const StyledTitlePrimary = styled.span`
    color: ${letraPrimario};
`;

const Subtiltle = styled.p`
    padding-top: 1.5rem;
    font-size: 1rem;
    color: ${letraOscura};
    font-weight: 500;
    text-align: center;
    line-height: 1.5rem;
`;

const BenefitsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3.125rem;
    padding-top: 1.438rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const BenefitsElementDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.438rem;

    @media (max-width: 768px) {
        gap: 0.875rem;
    }
`;

const BenefitsImg = styled.img`
    height: 8.125rem;
    width: 9.375rem;

    @media (max-width: 768px) {
        width: 40%;
        height: auto;
    }
`;

const BenefitsTitle = styled.p`
    font-size: 1.188rem;
    color: ${letraOscura};
    font-weight: 700;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.125rem;
    }
`;

const BenefitsSubTitle = styled.p`
    font-size: 1rem;
    color: ${letraOscura};
    font-weight: 400;
    text-align: center;
    width: 390px;
    line-height: normal;

    @media (max-width: 768px) {
        width: 80%;
        font-size: 0.875rem;
    }
`;

const Benefits = () => {
    return(
        <BenefitsDiv>
            <BenefitsElementDiv>
                <BenefitsImg src={cost}/>
                <BenefitsTitle>Costs 70% less</BenefitsTitle>
                <BenefitsSubTitle>We developed highly-optimized design processes to let us work fast and deliver incredible results and we pass those savings on to you</BenefitsSubTitle>
            </BenefitsElementDiv>
            <BenefitsElementDiv>
                <BenefitsImg src={adaptable}/>
                <BenefitsTitle>Adaptable and scalable</BenefitsTitle>
                <BenefitsSubTitle>High-velocity is crucial to a startup’s success, and that’s why TDP delivers new designs every week so your momentum never falters</BenefitsSubTitle>
            </BenefitsElementDiv>
            <BenefitsElementDiv>
                <BenefitsImg src={fast}/>
                <BenefitsTitle>Fast turnaround times</BenefitsTitle>
                <BenefitsSubTitle>TDP was built for flexibility—we quickly adapt and grow as you grow</BenefitsSubTitle>
            </BenefitsElementDiv>
        </BenefitsDiv>
    );
};

const StyledSecondaryTitle = styled.p`
    padding-top: 11.25rem;
    font-size: 2.5rem;
    color: ${letraOscura};
    font-weight: 700;
    text-align: center;
    line-height: 2.938rem;
    text-transform: capitalize;

    @media (max-width: 768px) {
        padding-top: 4.313rem;
        font-size: 2rem;
    }
`;

const SecondarySubtiltle = styled.p`
    padding-top: 1.438rem;
    font-size: 0.938rem;
    color: ${letraSemiOscura};
    font-weight: 400;
    text-align: center;
    line-height: normal;
    width: 59rem;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const StepsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5.438rem;
    padding-top: 3.875rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        padding-top: 1.438rem;
    }
`;

const StepsElementDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.438rem;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

const StepsImg = styled.img`
    @media (max-width: 768px) {
        width: auto;
        height: 2.5rem;
    }
`;

const PersonImg = styled.img`
    @media (max-width: 768px) {
        width: auto;
        height: 9.375rem;
    }
`;

const StepsTitle = styled.p`
    font-size: 1.25rem;
    color: ${colorPrimario};
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    line-height: 1.375rem;
`;

const StepsSubTitle = styled.p`
    font-size: 1rem;
    color: ${letraOscura};
    font-weight: 400;
    text-align: center;
    width: 17.75rem;

    @media (max-width: 768px) {
        font-size: 0.938rem;
    }
`;

const Steps = () => {
    return(
        <StepsDiv>
            <StepsElementDiv>
                <StepsImg src={Eclipse1}/>
                <StepsTitle>Sign up for one of <br/> our services</StepsTitle>
                <PersonImg src={StepImg1}/>
                <StepsSubTitle>We developed highly-optimized design processes to let us work fast and deliver incredible results and we pass those savings on to you</StepsSubTitle>
            </StepsElementDiv>
            <StepsElementDiv>
                <StepsImg src={Eclipse2}/>
                <StepsTitle>Meet your perfect <br/> match</StepsTitle>
                <PersonImg src={StepImg2}/>
                <StepsSubTitle>We match you with the best TDP design expert for your needs. Then we schedule a call to learn about your startup.</StepsSubTitle>
            </StepsElementDiv>
            <StepsElementDiv>
                <StepsImg src={Eclipse3}/>
                <StepsTitle>The first sprint begins <br/> (hold on tight)</StepsTitle>
                <PersonImg src={StepImg3}/>
                <StepsSubTitle>TDP manages the project, learns the intimate details of what your users want, and delivers impactful design iterations.</StepsSubTitle>
            </StepsElementDiv>
        </StepsDiv>
    );
};

const Information = () => {
    return (
        <InfoSection>
            <StyledTitle>A diverse team of <StyledTitlePrimary>passionate</StyledTitlePrimary> UX nerds who are<br/> here to help your <StyledTitlePrimary>startup succeed</StyledTitlePrimary></StyledTitle>
            <Subtiltle>From ideation to expansion, TDP understands the unique demands of your startup—providing you with <br/> optimized design strategies and fast turnarounds for an affordable monthly subscription.</Subtiltle>
            <Benefits/>
            <StyledSecondaryTitle id="start">How <StyledTitlePrimary>signing up</StyledTitlePrimary> with The Design Project <StyledTitlePrimary>works</StyledTitlePrimary>!?</StyledSecondaryTitle>
            <SecondarySubtiltle>Take a minute to imagine how you’d feel watching your user count grow, and retention rates stay consistently high. When you prioritize effective UX, better retention and growth are natural consequences. Backed by countless hours of research and testing, TDP blends UX, UI, and Product design into a deliciously smooth process that fuels productivity and success.</SecondarySubtiltle>
            <Steps/>
        </InfoSection>
        );
    };

export default Information;