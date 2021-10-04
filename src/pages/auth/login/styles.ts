import { Button, TextField } from "@mui/material";
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
