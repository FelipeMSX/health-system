import React from "react";
import { Container, MainArea } from "./styles";
import LeftAreaPage from "./left-area/_index";
import RightAreaPage from "./right-area/_index";

const Login: React.FC = () => {
  return (
    <Container>
      <MainArea>
        <LeftAreaPage />
        <RightAreaPage />
      </MainArea>
    </Container>
  );
};

export default Login;
