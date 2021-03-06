import React, { useState } from "react";

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
import HealthAgentService from "../../services/health-agent-service";
import HealthAgentModel from "../../model/health-agent-model";

const HealthAgent: React.FC = () => {
  const [dataTest, setData] = useState<HealthAgentModel[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (dataLoaded) return;

    HealthAgentService.getAll()
      .then((response) => {
        // setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setDataLoaded(true);
  });
  return (
    <Container>
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
            <ActionArea></ActionArea>
          </TopArea>
          {/* <MainArea>
            {dataTest.map((postItem) => {
              return <li key={postItem.id}>{postItem.fullName}</li>;
            })}
          </MainArea> */}
        </Content>
      </InnerContainer>
    </Container>
  );
};

export default HealthAgent;
