import { LoadingButton } from "@mui/lab";
import styled from "styled-components";

export const LoadingRoundedButton = styled(LoadingButton)`
  height: 36.5px;
  border-radius: 50px !important;
  background-color: var(--primary) !important;

  div {
    color: white;
  }
`;
