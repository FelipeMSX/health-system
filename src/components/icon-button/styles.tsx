import styled from "styled-components";
import { Props } from ".";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

export const StyledButton = styled(IconButton)<Props & IconButtonProps>`
  display: flex;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.backgroundColor || "var(--primary)"};
  border-radius: 100%;
  cursor: pointer;

  color: white;
  transition: background-color 0.2s;

  > svg {
    background-color: white;
    color: red;
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${(props) => props.hoverColor || "var(--tertiary)"};
  }
`;
