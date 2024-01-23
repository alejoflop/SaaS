import React from 'react';
import styled from 'styled-components';
import { colorPrimario } from './variables';
import { letraPrimario } from './variables';

const StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColor || colorPrimario};
    color: #fff;
    padding: 10px 27px;
    border: none;
    border-radius: 9px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 300ms;

    &:hover {
        background-color: ${(props) => props.hoverColor || letraPrimario};
    }

    @media (max-width: 768px) {
        padding: 8px 21px;
        font-size: 14px;
    }
`;

const Button = ({ children, onClick, backgroundColor, hoverColor }) => {
    return (
        <StyledButton
        onClick={onClick}
        backgroundColor={backgroundColor}
        hoverColor={hoverColor}
        >
        {children}
        </StyledButton>
    );
};

export default Button;
