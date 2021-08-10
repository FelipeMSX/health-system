import React from "react";
import { UseAppContext } from "../../../contexts/ApplicationContext";
import  IconButton from '../../IconButton';

import { 
    Container, 
    LeftContainer 
} from "./styles";

export interface Props {
    isOpened?: boolean
}


const AppLogo: React.FC<Props> = ({ 
    isOpened
}) => {
    const {isSideBarExpanded, setSideBarVisibilty} = UseAppContext();
    
    return (
        <Container className={isSideBarExpanded ? "": "expanded"}>
            <LeftContainer>
                <img src='logo192.png'></img>
                <span>Health</span>
            </LeftContainer>
            <IconButton onClick={() => setSideBarVisibilty(false)}/>
        </Container>
    )
};

export default AppLogo;