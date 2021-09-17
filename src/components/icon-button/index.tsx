import { Button } from "./styles";
import DynamicIcon from "../dynamic-icon";

export interface Props {
  color?: string;
  hoverColor?: string;
  iconColor?: string;
  icon?: string;
  onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ color, iconColor, hoverColor, icon, onClick }) => {
  const handleOnClick = () => {
    onClick?.();
  };
  return (
    <Button color={color} hoverColor={hoverColor} onClick={handleOnClick} iconColor={iconColor}>
      <DynamicIcon iconName={icon} iconColor={iconColor} />
    </Button>
  );
};

export default IconButton;
