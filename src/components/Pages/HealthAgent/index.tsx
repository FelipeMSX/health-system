import React from 'react';
import TextBox from '../../TextBox';

import {
    Container,
    Header,
    Content,
    TopArea,
    MainArea
} from './styles';
import SimpleTabs from './tabtest';


const HealthAgent: React.FC = () => {
    return (
    <Container>
        <Header></Header>
        <Content>
            <TopArea>
                <h1>Agente de Saúde</h1>
            </TopArea>
            <MainArea>

            </MainArea>
        </Content>
    </Container>
    )
};

export default HealthAgent;