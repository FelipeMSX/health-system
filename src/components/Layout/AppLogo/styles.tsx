import styled from "styled-components";

export const Container = styled.div`
    grid-area: AN;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px;  
    background-color: var(--primary);
    width: 280px;
    height: 64px;

`;

export const LeftContainer= styled.div`
    display: flex;
    align-items: center;

    > span {
        font-size: 16px;
        color: var(--white);
        font-weight: 500;
        text-transform: uppercase;
        margin-left: 20px;
        
    }

    > img {
        width: 24px;
        height: 24px;
    }
`;