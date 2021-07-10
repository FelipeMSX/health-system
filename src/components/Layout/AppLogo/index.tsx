import React from "react";
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

    return (
        <Container isOpened={isOpened}>
            <LeftContainer>
                <img src='logo192.png'></img>
                <span>Health</span>
            </LeftContainer>
            <IconButton />
        </Container>
    )
};

export default AppLogo;