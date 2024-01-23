import React from "react";
import styled from "styled-components"

import Comb from "../../Assets/combinator.svg"
import Seq from "../../Assets/sequioia.svg"
import Acc from "../../Assets/accel.svg"
import a16z from "../../Assets/a16z.svg"
import line from "../../Assets/Line1.svg"

import { letraPrimario } from "../UI/variables";
import { fondoOscuro } from "../UI/variables";

const CustomersDiv = styled.div`
    background-color: ${fondoOscuro};
    display: flex;
    flex-direction: column;
    gap: 3.25rem;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    padding-top: 5rem;
    padding-bottom: 5rem;

    @media (max-width: 768px) {
        padding-top: 3rem;
        padding-bottom: 2rem;
        gap: 1rem;
    }
`;

const CustomersTitle = styled.p`
    font-size: 2.375rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    text-transform: capitalize;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const StyledTitlePrimary = styled.span`
    color: ${letraPrimario};
`;

const DivCustomers = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1.625rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`;

const LogoCustomers = styled.img`
    height: auto;
    width: auto;
    @media (max-width: 768px) {
        height: 70px;
    }
`;

const Line = styled.img`
    @media (max-width: 768px) {
        display: none;
    }
`

const LogosCustomers = () => {
    return(
        <DivCustomers>
            <LogoCustomers src={Comb}/>
            <Line src={line}/>
            <LogoCustomers src={Seq}/>
            <Line src={line}/>
            <LogoCustomers src={Acc}/>
            <Line src={line}/>
            <LogoCustomers src={a16z}/>
        </DivCustomers>
    );
};

const Customers = () => {
    return (
        <CustomersDiv>
            <CustomersTitle>We helped our customers raise <StyledTitlePrimary>$1B+</StyledTitlePrimary> </CustomersTitle>
            <LogosCustomers/>
        </CustomersDiv>
        );
    };

export default Customers;