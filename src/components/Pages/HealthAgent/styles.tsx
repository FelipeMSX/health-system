import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 32px;
    background-color: #FFFFFF;
    
`;

export const Header = styled.div`
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    position: absolute;
    background: linear-gradient(to right, #1b2330 0%, #252f3e 100%);
    pointer-events: none;
    background-size: cover;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const TopArea = styled.div`
    display: flex;
    background-color: transparent;
    height: 200px;
`;

export const MainArea = styled.div`
    display: flex;
    background-color: white;
    height: 100%;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    
`;

