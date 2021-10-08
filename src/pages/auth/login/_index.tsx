import React from "react";
import { Container, MainArea } from "./styles";
import LeftAreaPage from "./left-area/_index";
import RightAreaPage from "./right-area/_index";
import { UseAppContext } from "../../../context/app-context";

const Login: React.FC = () => {
  const { setFullscreen } = UseAppContext();

  setFullscreen(true);
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
