import { Icon } from "@mui/material";
import styled from "styled-components";
import { Props } from ".";

export const MaterialIcon = styled(Icon)<Props>`
  font-size: ${(props) => props.iconSize || "20px !important"};
  color: ${(props) => props.iconColor || "var(--white)"};
  opacity: 0.7;
`;
