import { LoadingButtonProps } from "@mui/lab";
import StyledRoundedButton, { RoundedButtonProps } from "../rounded-button/rounded-button";
import { LoadingRoundedButton } from "./styles";
import React from "react";

export interface LoadingRoundedButtonProps extends RoundedButtonProps {
  isLoading?: boolean;
}

const StyledLoadingRoundedButton: React.FC<LoadingRoundedButtonProps & LoadingButtonProps> = ({
  labelText,
  isLoading,
  ...ButtonProps
}) => {
  return (
    <>
      {!isLoading ? (
        <StyledRoundedButton {...ButtonProps} labelText={labelText} />
      ) : (
        <LoadingRoundedButton {...ButtonProps} loading></LoadingRoundedButton>
      )}
    </>
  );
};

export default StyledLoadingRoundedButton;
