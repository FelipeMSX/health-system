import { Button } from "@mui/material";
import styled from "styled-components";

export const UserInfo = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 18px !important;
  height: 52px;
  justify-content: space-between;
  cursor: pointer;
  width: max-content;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
