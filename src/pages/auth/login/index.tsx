import { Button, Input } from "antd";
import React from "react";
import {
  Container,
  IconArea,
  LeftArea,
  LeftContentArea,
  MainArea,
  RecoverPassword,
  RigthArea,
  TextFieldMUI,
} from "./styles";
import TextField from "@mui/material/TextField";
import { theme } from "../../../styles/theme";
import { ThemeProvider } from "@mui/system";

const Login: React.FC = () => {
  return (
    <Container>
      <MainArea>
        <LeftArea>
          <LeftContentArea>
            <IconArea>
              <img src="logo192.png"></img>
              <span>Health</span>
            </IconArea>
            <Input placeholder="Usuário" size="large" />
            <TextFieldMUI label="Usuário" />
            <Input placeholder="Senha" size="large" type="password" />
            <RecoverPassword>
              <a>Esqueceu sua senha?</a>
            </RecoverPassword>
            <Button type="primary" size="large" shape="round" style={{ width: "100%" }}>
              Login
            </Button>
          </LeftContentArea>
        </LeftArea>
        <RigthArea></RigthArea>
      </MainArea>
    </Container>
  );
};

export default Login;
