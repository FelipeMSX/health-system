import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: TB;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: white;
  height: 64px;
  margin-left: 0px;

  transition: margin-left 0.2s;

  &.expanded {
    margin-left: -280px;
  }
`;

export const LeftBar = styled.div`
  display: flex;
`;

export const ToggleableItem = styled.div<{ isOpened: boolean }>`
  display: ${(props) => (props.isOpened ? "flex" : "none")};
`;

export const RightBar = styled.div`
  display: flex;
`;
