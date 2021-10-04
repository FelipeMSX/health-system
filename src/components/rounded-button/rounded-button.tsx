import { ButtonProps } from "@mui/material";
import { RoundedButton } from "./styles";

export interface CustomButtonProps {
  labelText?: string;
  onClick?: () => void;
}

const StyledRoundedButton: React.FC<ButtonProps & CustomButtonProps> = ({ labelText, onClick, ...ButtonProps }) => {
  return (
    <>
      <RoundedButton
        fullWidth={ButtonProps.fullWidth}
        color={ButtonProps.color}
        variant={ButtonProps.variant}
        onClick={() => onClick?.()}
      >
        {labelText ?? labelText}
      </RoundedButton>
    </>
  );
};

export default StyledRoundedButton;
