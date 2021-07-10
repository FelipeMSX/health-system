import styled from 'styled-components';

import { Button, MenuOpenIcon} from './styles'; 

export interface Props {
    color?: string,
    hoverColor?: string,
    iconColor?: string
}

const IconButton: React.FC<Props> = ({
    color,
    iconColor,
    hoverColor
}) => {
    return(
        <Button 
            color={color}
            hoverColor={hoverColor}
        >
            <MenuOpenIcon iconColor={iconColor} >

            </MenuOpenIcon>
        </Button>
    )
};

export default IconButton; 