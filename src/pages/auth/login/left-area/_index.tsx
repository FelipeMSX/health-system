import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { LeftContentArea, Container, IconArea, RecoverPassword, ErrorArea } from "./styles/_index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import userService from "../../../../modules/users/infra/adapters/services/user-service";
import logo from "../../../../../src/fuse.svg";
import { authenticate } from "../../../../modules/users/infra/redux/slices/user-slice";
import PasswordTextField from "../../../../modules/users/components/password-textfield/password-textfield";
import { Redirect } from "react-router";
import StyledLoadingRoundedButton from "../../../../components/loading-rounded-button/loading-rounded-button";
import { Fade } from "@mui/material";

const LeftAreaPage: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [userName, setUserName] = useState("");
  const [allInputsAreValids, setAllInputsAreValids] = useState(false);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const handleUserNameChanges = (input: string) => {
    setUserName(input ? input : "");
  };

  const handlePasswordChanges = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, isValid?: boolean) => {
    const input = e.currentTarget.value;
    setPassword(input ? input : "");
    console.log("isValid Password" + !!isValid);
    setIsValidPassword(!!isValid);
  };

  const checkInputs = () => {
    if (userName && isValidPassword) return true;
    return false;
  };

  const handleSubmit = () => {
    setIsFetchingData(true);

    setTimeout(() => {
      userService.login(userName, password).then((response) => {
        if (response.isRight()) {
          dispatch(authenticate());
          setErrorMessage("");
        } else {
          setErrorMessage(response.value);
        }
        setIsFetchingData(false);
      });
    }, 1000);
  };

  useEffect(() => {
    setAllInputsAreValids(checkInputs());
  }, [userName, password]);

  return (
    <>
      <Container>
        <LeftContentArea>
          <Fade in timeout={2000}>
            <IconArea>
              <img src={logo}></img>
              <span>LAZARUS</span>
            </IconArea>
          </Fade>
          <form>
            <TextField
              required
              fullWidth
              label="Usuário"
              onChange={(e) => handleUserNameChanges(e.currentTarget.value)}
            />
            <PasswordTextField onChange={handlePasswordChanges} />
            <RecoverPassword>
              <a>Esqueceu sua senha?</a>
            </RecoverPassword>
            <StyledLoadingRoundedButton
              isLoading={isFetchingData}
              fullWidth
              disabled={!allInputsAreValids}
              labelText="Login"
              onClick={() => handleSubmit()}
            ></StyledLoadingRoundedButton>
            {errorMessage && <ErrorArea> {errorMessage} </ErrorArea>}
          </form>
        </LeftContentArea>
        {isAuthenticated && <Redirect to="/" push></Redirect>}
      </Container>
    </>
  );
};

export default LeftAreaPage;
