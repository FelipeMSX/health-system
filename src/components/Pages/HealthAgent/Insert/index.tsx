import React, { ChangeEvent, useState } from 'react';
import TextBox from '../../../TextBox';
import HealthAgentService from '../../../../services/HealthAgentService'

import {
    Container,
    InnerContainer,
    Header,
    Content,
    TopArea,
    MainArea,
    LabelArea,
    ActionArea,
    BackLink,
    ArrowBackIcon,
    PageName,
    PageNameItem,
    ButtonSave
} from './styles';
import { useEffect } from 'react';
import HealthAgentModel from '../../../../model/HealthAgentModel';


const HealthAgentInsert: React.FC = () => {
    const[model, setModel] = useState<HealthAgentModel>({
        id: 0,
        firstName:'',
        fullName: '',
        age: 0
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>){
        
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
        
    }

    function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        
        alert(JSON.stringify(model));

        HealthAgentService.insert(model);
    }

    return (
        <Container>
        <form onSubmit= {onSubmit}>
            <Header></Header>
        <InnerContainer>
            <Content>

                    <TopArea>
                        <LabelArea>
                            <BackLink>
                                <ArrowBackIcon></ArrowBackIcon>
                                <span>Agentes de Saúde</span>
                            </BackLink>
                            <PageName>
                                <img></img>
                                <PageNameItem>
                                    <h1>Novo Agente de Saúde</h1>
                                    <h3>Detalhes</h3>
                                </PageNameItem>
                            </PageName>

                        </LabelArea>
                        <ActionArea>
                            <ButtonSave type="submit">Salvar</ButtonSave>

                        </ActionArea>
                    </TopArea>
                    <MainArea>

                        <TextBox 
                            name="firstName" 
                            labelName="Primeiro Nome" 
                            required={true} type="text" 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} >

                        </TextBox>
                        <TextBox 
                            name="fullName" 
                            labelName="Nome Completo" 
                            required={true} 
                            type="text" 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            >

                        </TextBox>
                        <TextBox 
                            name="age" 
                            labelName="Idade" 
                            type="number"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}>

                        </TextBox>

                    </MainArea>

            </Content>
        </InnerContainer>
                </form>
    </Container>
    )
};

export default HealthAgentInsert;