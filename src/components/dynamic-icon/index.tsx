import { MaterialIcon } from './styles';

export interface Props {
    iconName?: string
    iconColor?: string
    iconSize?: string
}

const DynamicIcon: React.FC<Props> = ({
    iconName,
    iconColor
}) => {
    return(
        <MaterialIcon iconColor={iconColor}>{iconName}</MaterialIcon>
    )
};

export default DynamicIcon;