import React from "react";
import TextField from "@mui/material/TextField";
import StyledRoundedButton from "../../../../components/rounded-button/rounded-button";
import { LeftContentArea, Container, IconArea, RecoverPassword } from "./styles/_index";
import { Button } from "@mui/material";

const LeftAreaPage: React.FC = () => {
  return (
    <>
      <Container>
        <LeftContentArea>
          <IconArea>
            <img src="logo192.png"></img>
            <span>Health</span>
          </IconArea>
          <TextField fullWidth label="Usuário" />
          <TextField fullWidth label="Senha" type="password" />
          <RecoverPassword>
            <a>Esqueceu sua senha?</a>
          </RecoverPassword>
          <StyledRoundedButton
            onClick={() => console.log("Teste")}
            fullWidth
            labelText="Login"
            color="primary"
            variant="contained"
          />
        </LeftContentArea>
      </Container>
    </>
  );
};

export default LeftAreaPage;
