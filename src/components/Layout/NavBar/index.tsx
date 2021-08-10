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
import { UseAppContext } from "../../../contexts/ApplicationContext";

export interface Props {
    isOpened?: boolean
}

const NavBar: React.FC<Props> = ({
    isOpened
}) => {
    const {isSideBarExpanded, setSideBarVisibilty} = UseAppContext();
    
    return (
        <Container className={isSideBarExpanded ? "" : "expanded"} >
            <LeftBar>
                <ToggleableItem isOpened ={!isSideBarExpanded}>
                    <IconButton iconColor={'black'} color={'white'} hoverColor={'var(--lightgray)'} onClick={() => setSideBarVisibilty(true)}/>
                </ToggleableItem>
                <IconButton iconColor={'black'} color={'red'} hoverColor={'var(--lightgray)'}/>
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