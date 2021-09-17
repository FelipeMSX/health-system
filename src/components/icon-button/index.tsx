import { StyledButton } from "./styles";
export interface Props {
  backgroundColor?: string;
  hoverColor?: string;
  iconColor?: string;
  onClick?: () => void;
}

const StyledMaterialButton: React.FC<Props> = ({ backgroundColor, iconColor, hoverColor, onClick }) => {
  const handleOnClick = () => {
    onClick?.();
  };
  return (
    <>
      <StyledButton
        backgroundColor={backgroundColor}
        hoverColor={hoverColor}
        onClick={handleOnClick}
        iconColor={iconColor}
        color="primary"
      />
    </>
  );
};

export default StyledMaterialButton;
