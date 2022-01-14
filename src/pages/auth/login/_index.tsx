import React, { useEffect } from "react";
import { Container, MainArea } from "./styles";
import LeftAreaPage from "./left-area/_index";
import RightAreaPage from "./right-area/_index";
import { Zoom } from "@mui/material";
import { toogleFullscreenMode } from "../../../store/slices/ui/ui-slice";
import { useDispatch } from "react-redux";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("teste user effect no Login");
  //   dispatch(toogleFullscreenMode(true));
  // });

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
