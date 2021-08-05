import { ChangeEventHandler, EventHandler } from 'react';
import styled from 'styled-components';

import { Button, MenuOpenIcon} from './styles'; 

export interface Props {
    color?: string,
    hoverColor?: string,
    iconColor?: string,
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
        >
            <MenuOpenIcon iconColor={iconColor} >

            </MenuOpenIcon>
        </Button>
    )
};

export default IconButton; 