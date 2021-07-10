import React from "react";

import { 
    Container, 
    UserData, 
    UserPicture, 
    LinkContent, 
    Title, 
    GroupLink, 
    DirectLink, 
    LinkInfo, 
    PersonIcon 
} from "./styles";

import { Link } from 'react-router-dom';


const SideBar: React.FC = () => {
    return (
        <Container >
            <UserData >
                <h1>Felipe Morais</h1>
                <span>felipeprodev@gmail.com</span>
                <UserPicture>
                    <img src='UserPicture.jpg'></img>
                </UserPicture>
            </UserData>
            <LinkContent>
                <Title>
                    <h1>Aplicação</h1>
                </Title>
                <Title>
                    <h1>Aplicação</h1>
                </Title>
                {/* <GroupLink>
                    <ul>
                        <li>primeiro item</li>
                        <li>segundo item</li>
                        <li>terceiro item</li>
                    </ul>
                </GroupLink> */}
                <DirectLink>
                    <LinkInfo>
                    <Link to ='/health-agent'>
                        <PersonIcon/>
                        <span>Agente de Saúde</span>
                    </Link>
                    </LinkInfo>
                </DirectLink>

                <DirectLink>
                    <LinkInfo>
                    <Link to ='/street'>
                        <PersonIcon/>
                        <span>Rua</span>
                    </Link>
                    </LinkInfo>
                </DirectLink>
            </LinkContent>
        </Container>
    )
};

export default SideBar;