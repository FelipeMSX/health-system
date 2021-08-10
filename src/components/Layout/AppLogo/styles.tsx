import styled from "styled-components";
import { Props } from '.';


export const Container = styled.div<Props>`
    grid-area: AN;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px;  
    background-color: var(--primary);
    width: 280px;
    height: 64px;
    margin-left: 0;
    transition: margin-left 0.2s;
    
    &.expanded {
      margin-left: -280px ;
    }
`;

export const LeftContainer= styled.div`
    display: flex;
    align-items: center;

    > span {
        font-size: 16px;
        color: var(--white);
        font-weight: 500;
        text-transform: uppercase;
        margin-left: 80px;
        
    }

    > img {
        width: 24px;
        height: 24px;
    }
`;