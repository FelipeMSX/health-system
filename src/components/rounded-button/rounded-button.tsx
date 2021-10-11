import { ButtonProps } from "@mui/material";
import { RoundedButton } from "./styles";

export interface RoundedButtonProps extends ButtonProps {
  labelText?: string;
  onClick?: () => void;
}

const StyledRoundedButton: React.FC<RoundedButtonProps> = ({ labelText, onClick, ...ButtonProps }) => {
  return (
    <>
      <RoundedButton {...ButtonProps} onClick={() => onClick?.()}>
        {labelText ?? labelText}
      </RoundedButton>
    </>
  );
};

export default StyledRoundedButton;
