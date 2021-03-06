import React, { ChangeEvent, useState } from "react";

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
  ButtonSave,
} from "./styles";
import { useEffect } from "react";
import HealthAgentModel from "../../../model/health-agent-model";
import HealthAgentService from "../../../services/health-agent-service";
import TextBox from "../../../components/text-box";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const HealthAgentInsert: React.FC = () => {
  const [model, setModel] = useState<HealthAgentModel>({
    id: 0,
    firstName: "",
    fullName: "",
    age: 0,
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    alert(JSON.stringify(model));

    HealthAgentService.insert(model);
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
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
                <Button>Teste</Button>
              </ActionArea>
            </TopArea>
            <MainArea>
              <TextBox
                name="firstName"
                labelName="Primeiro Nome"
                required={true}
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              ></TextBox>
              <Button size="large" shape="circle" icon={<SearchOutlined />} />
            </MainArea>
          </Content>
        </InnerContainer>
      </form>
    </Container>
  );
};

export default HealthAgentInsert;
