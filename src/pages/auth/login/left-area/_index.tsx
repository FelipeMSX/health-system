import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import StyledRoundedButton from "../../../../components/rounded-button/rounded-button";
import { LeftContentArea, Container, IconArea, RecoverPassword, ErrorArea } from "./styles/_index";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import userService from "../../../../modules/users/infra/adapters/services/user-service";
import logo from "../../../../../src/logo192.png";
import { authenticate } from "../../../../modules/users/infra/redux/slices/user-slice";

const LeftAreaPage: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [isFilled, setIsFilled] = useState(false);

  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const dispatch = useDispatch();

  const handleUserNameChanges = (input: string) => {
    if (input) {
      setUserName(input);
    } else {
      setUserName("");
    }
  };

  const handlePasswordChanges = (input: string) => {
    if (input) {
      setPassword(input);
    } else {
      setPassword("");
    }
  };

  const checkInputs = () => {
    if (userName && password) return true;

    return false;
  };

  const handleSubmit = () => {
    userService.login(userName, password).then((response) => {
      if (response.isRight()) {
        dispatch(authenticate());
        setErrorMessage("");
      } else {
        setErrorMessage(response.value);
      }
    });
  };

  useEffect(() => {
    setIsFilled(checkInputs());
  }, [userName, password]);

  return (
    <>
      <Container>
        <LeftContentArea>
          <IconArea>
            <img src={logo}></img>
            <span>Health</span>
          </IconArea>
          <form>
            <TextField
              required
              fullWidth
              label="Usuário"
              onChange={(e) => handleUserNameChanges(e.currentTarget.value)}
            />
            <TextField
              required
              fullWidth
              label="Senha"
              type="password"
              onChange={(e) => handlePasswordChanges(e.currentTarget.value)}
            />
            <RecoverPassword>
              <a>Esqueceu sua senha?</a>
            </RecoverPassword>
            {errorMessage && <ErrorArea> {errorMessage} </ErrorArea>}
            <StyledRoundedButton
              onClick={() => handleSubmit()}
              fullWidth
              disabled={!isFilled}
              labelText="Login"
              color="primary"
              variant="contained"
              type="submit"
            />
          </form>
        </LeftContentArea>
      </Container>
    </>
  );
};

export default LeftAreaPage;
