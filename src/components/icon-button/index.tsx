import { ChangeEventHandler, EventHandler } from 'react';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon'
import { Button} from './styles'; 

export interface Props {
    color?: string,
    hoverColor?: string,
    iconColor?: string,
    icon?:;
    onClick?: () => void;
}

const IconButton: React.FC<Props> = ({
    color,
    iconColor,
    hoverColor,
    onClick
}) => {
    const handleOnClick = () => {
        onClick?.();
    };
    return(
        <Button 
            color={color}
            hoverColor={hoverColor}
            onClick={handleOnClick}
            iconColor={iconColor}></Button>
    )
};

export default IconButton; 