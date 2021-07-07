import styled from "styled-components";
import { PersonPlusFill } from "@styled-icons/bootstrap/PersonPlusFill";

export const Container = styled.div`
    grid-area: AL;
    /* display: flex;
    flex-direction: column; */

    padding-top: 24px;
    background-color: var(--primary);
    width: 280px;
    height:  calc(100vh - 64px);
    position:relative;
    overflow-y: scroll;
    overflow: overlay;
    overflow-x: hidden;
        
    > div {
        height: 4000px;
    }
    ::-webkit-scrollbar{
        width: 10px;
        scrollbar-width: initial;
    }

    ::-webkit-scrollbar-thumb{
        background-color: rgba(255,255,255,0.5);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover{
        background-color: rgba(255,255,255,0.2);
    }
  
`;

export const UserData = styled.div`
    display: flex;
    height: 138px;
    max-height:138px;
    width: 280px;
    align-items: center;
    flex-direction: column;
    position: relative;
    
    box-shadow: rgba(0,0,0,0.2) 0px 3px 0px 0px;
    
    > h1 {
        font-size: 17px;
        font-weight: bold;
        color: var(--white);
        line-height: 25px;
    }
    
    > span{
        font-size: 15px;
        color: var(--white);
        opacity: 50%;
    }

`;

export const UserPicture = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70px;
    height: 70px;

    bottom: -30px;
    border-radius: 50px;
    position: absolute;
    background-color: var(--secondary);

    > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;

export const LinkContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 100vh;
    padding: 8px 12px;
    background-color: var(--secondary);

`;

export const Title = styled.div`
    display: flex;
    margin-left: 12px;
    margin-top: 40px;
    font-size: 8px;
    font-weight: bold;
    color: var(--white);
    width: 280px;
    height: 30px;
    align-items: center;
    text-transform: uppercase;


`;

export const LinkInfo = styled.div`
    cursor:pointer;

    > span{
        margin-left: 10px;
        color: var(--white);
        opacity: .6;
    }
`;

export const PersonIcon = styled(PersonPlusFill)`
    width: 20px;
    height: 20px;
    color: var(--white);
    opacity: .7;
 `;

export const GroupLink = styled.div``;

export const DirectLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    padding: 8px 12px;
    border-radius: 6px;

    transition: background-color 0.2s;

    &:hover {
        background-color: var(--quaternary) ;
    }
`;

