import styled from "styled-components";
import { Props } from '.';


export const Button = styled.button<Props>`
    display: flex;
    align-items: center; //Vertical Alignment
    justify-content: center; // Horizontal Alignment
    flex-shrink: 0;

    width: 40px;
    height: 40px;

    background-color: ${(props) => props.color || 'var(--primary)' };
    
    /* var(--primary); */
    border-radius: 50%;
    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
        background-color: ${(props) => props.hoverColor || 'var(--tertiary)' };
    }

    svg > {
     width: 20px;
     height: 20px;
     color: ${(props) => props.iconColor || 'var(--white)' };
     opacity:  .7;
     color: var(--white);
    }

    div > {
        background-color: red;
        width: 20px;
        height: 20px;
    }

`;

// export const MenuOpenIcon = styled(MenuOpen)<Props>`
//     width: 20px;
//     height: 20px;
//     color: ${(props) => props.iconColor || 'var(--white)' };
//     opacity:  .7;
//     /* color: var(--white); */

// `;