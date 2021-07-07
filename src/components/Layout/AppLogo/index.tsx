import React from "react";

import { Container, LeftContainer } from "./styles";
import  IconButton from '../../IconButton';

const AppLogo: React.FC = () => {
    return (
        <Container>
            <LeftContainer>
                <img src='logo192.png'></img>
                <span>Health</span>
            </LeftContainer>
            <IconButton />
        </Container>
    )
};

export default AppLogo;