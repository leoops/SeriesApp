
import React from 'react';
import { Button as NBButton, Text, Icon} from "native-base";
import { styles } from "./styles";

export const Button = ({
    icon = null,
    label = '',
    circle = false,
    onPress,
    style,
    text = false
}) => {
    const exibirIcon = icon => {
        return  icon != null ? <Icon name={icon} /> : null
    }
    const exibirText = label => {
        return label != '' ? <Text>{label}</Text> : null
    }
    return (
        <NBButton transparent={text} 
            style={ 
                text ? null : [
                    styles.button, 
                    style != null ? style : null,
                    circle ? styles.circle: null]
            } 
            onPress={onPress} 
        >
            { exibirIcon(icon) }
            { exibirText(label) }
        </NBButton>
    )
}