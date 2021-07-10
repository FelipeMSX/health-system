import React from "react";

import { Container, LeftBar, RightBar, UserInfo, UserLabel} from "./styles";
import  IconButton from '../../IconButton';

const NavBar: React.FC = () => {
    return (
        <Container >
            <LeftBar>
                <IconButton iconColor={'black'} color={'white'} hoverColor={'var(--lightgray)'}/>
            </LeftBar>
            <RightBar>
                <UserInfo>
                    <UserLabel>
                        <h1>Felipe Morais</h1>
                        <span>Administrador</span>
                    </UserLabel>
                    <img src='UserPicture.jpg'></img>
                </UserInfo>
            </RightBar>
        </Container>
    )
};

export default NavBar;