import React from "react";
import { Container, MainArea } from "./styles";
import LeftAreaPage from "./left-area/_index";
import RightAreaPage from "./right-area/_index";
import { UseAppContext } from "../../../context/app-context";
import { Zoom } from "@mui/material";

const Login: React.FC = () => {
  const { setFullscreen } = UseAppContext();

  setFullscreen(true);
  return (
    <Container>
      <Zoom in>
        <MainArea>
          <LeftAreaPage />
          <RightAreaPage />
        </MainArea>
      </Zoom>
    </Container>
  );
};

export default Login;
