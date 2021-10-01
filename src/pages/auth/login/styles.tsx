import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background-light);
  width: 100vw;
  height: 100vh;
`;

export const MainArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 1435px;
  height: 768px;
  border-radius: 30px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export const LeftArea = styled.div`
  background-color: white;

  display: flex;
  width: 480px;
  height: 100%;
  border-radius: 30px 0px 0px 30px;
  justify-content: center;
`;

export const IconArea = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;

  img {
    width: 70px;
    height: 70px;
  }
`;

export const LeftContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 320px;
  height: 100%;
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;
`;

export const RecoverPassword = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const RigthArea = styled.div`
  display: flex;
  width: calc(100% - 480px);
  height: 100%;
  border-radius: 0px 30px 30px 0px;

  background: linear-gradient(to right, rgb(27, 35, 48) 0%, rgb(13, 17, 24) 100%);
`;

export const TextFieldMUI = styled(TextField)`
  width: 100%;
`;
