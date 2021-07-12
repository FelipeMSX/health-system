import React from "react";

import { 
    Container, 
    LeftBar, 
    RightBar, 
    UserInfo, 
    UserLabel,
    ToggleableItem
} from "./styles";

import  IconButton from '../../IconButton';

export interface Props {
    isOpened?: boolean
}

const NavBar: React.FC<Props> = ({
    isOpened
}) => {
    return (
        <Container >
            <LeftBar>
                <ToggleableItem isOpened>
                    <IconButton iconColor={'black'} color={'white'} hoverColor={'var(--lightgray)'}/>

                </ToggleableItem>
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