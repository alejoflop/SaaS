import React from "react";
import styled from "styled-components"

import github from "../../Assets/Github.svg"
import linkedin from "../../Assets/linkedin.svg"

import { letraPrimario } from "../UI/variables";

const FooterDiv = styled.div`
    padding-top: 8.438rem;
    padding-bottom: 8.438rem;
    background-color: #1D1D1D;
    display: flex;
    justify-content: center;
    gap: 56%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        padding-top: 15%;
        padding-bottom: 10%;
    }
`;

const DivNetwork = styled.div`
    
`;

const TitleNetwork = styled.p`
    color: #FFFFFF;
    font-size: 5rem;
    font-weight: 700;
`;

const LinkDiv = styled.div`
    display: flex;
    gap: 15%;
`;

const NetworkDiv = styled.a`
    display: flex;
    gap: 8%;
    align-items: center;
`;

const NetworkImg = styled.img`
    width: 1.625rem;
    height: auto;
`;

const NetworkParagraph = styled.p`
    font-size: 0.938rem;
    font-weight: 400;
    color: #FFFFFF;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 0.875rem;

    @media (max-width: 768px) {
    
    }
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #FFF;
    font-weight: 700;
    transition: 300ms;
    text-align: right;

    @media (max-width: 768px) {
        text-align: center;
    }

    &:hover {
        color: ${letraPrimario};
    }
`;

const MenuList = ({ items }) => {
    return (
        <List>
        {items.map((item, index) => (
            <StyledLink href={`#${item}`} key={index} smooth={true}>
                {item}
            </StyledLink>
        ))}
        </List>
    );
};

const Footer = () => {
    const menuItems = ['HOW IT WORKS', 'ABOUT', 'WORK', 'PRICING', 'BLOG'];
    return (
        <FooterDiv>
            
            <DivNetwork>
                <TitleNetwork>SaaS</TitleNetwork>
                <LinkDiv>
                    <NetworkDiv href="https://github.com/alejoflop">
                        <NetworkImg src={github}/>
                        <NetworkParagraph>Github</NetworkParagraph>
                    </NetworkDiv>
                    <NetworkDiv href="https://www.linkedin.com/in/alejandroflorezl/">
                        <NetworkImg src={linkedin}/>
                        <NetworkParagraph>Linkedin</NetworkParagraph>
                    </NetworkDiv>
                </LinkDiv>
            </DivNetwork>
            <MenuList items={menuItems} />
            
        </FooterDiv>
        );
    };

export default Footer;