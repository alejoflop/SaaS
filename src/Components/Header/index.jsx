import React from "react";
import styled from "styled-components"
import logo from "../../Assets/logo.svg";
import Button from "../UI/button";
import { fondoBanner } from "../UI/variables";
import { letraPrimario } from "../UI/variables";

const HeaderSection = styled.header`
    background-color: ${fondoBanner};
    padding-top: 3.438rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    gap: 6.25rem;
`;

const Logo = styled.img`
    height: auto;
    width: auto;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2.313rem;
    font-size: 0.875rem;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: 700;
    transition: 300ms;

    &:hover {
        color: ${letraPrimario};
    }
`;

const MenuList = ({ items }) => {
    return (
        <List>
        {items.map((item, index) => (
            <StyledLink href={`#${item.toLowerCase()}`}>{item}</StyledLink>
        ))}
        </List>
    );
};

const Header = () => {
    const menuItems = ['HOW IT WORKS', 'ABOUT', 'WORK', 'PRICING', 'BLOG'];
    const scrollToSection = () => {
        const section = document.getElementById('getStarted');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <HeaderSection>
            <Logo src={logo} alt="Logo SaaS" />
            <MenuList items={menuItems} />
            <Button onClick={scrollToSection}>GET STARTED</Button>
        </HeaderSection>
    );
};

export default Header;