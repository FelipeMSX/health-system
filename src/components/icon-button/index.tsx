import { IconButtonProps } from "@mui/material";
import { StyledButton } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";

export interface Props {
  backgroundColor?: string;
  hoverColor?: string;
  iconColor?: string;
  onClick?: () => void;
  icon?: JSX.Element;
}

const StyledMaterialButton: React.FC<IconButtonProps & Props> = ({
  backgroundColor,
  iconColor,
  hoverColor,
  onClick,
  icon: icon2,
  ...IconButtonProps
}) => {
  const handleOnClick = () => {
    onClick?.();
  };
  return (
    <>
      <StyledButton
        // backgroundColor={backgroundColor}
        // hoverColor={hoverColor}
        onClick={() => onClick?.()}
        // iconColor={iconColor}
        color={IconButtonProps.color}
      >
        {icon2}
      </StyledButton>
    </>
  );
};

export default StyledMaterialButton;
