import React, { Componnet } from 'react';
import { Button } from "native-base";

export const ButtonToast = ({ 
    label,
    text, 
    buttonText,
    buttonStyle,
    buttonTextStyle,
    position, // botton, top
    textStyle,
    type, //danger, success, warning
    duration, 
    onClose
 }) => {

    show = ( 
        text, buttonText,
        buttonStyle, buttonTextStyle,
        position, textStyle,
        type, duration, onClose,
    ) => {

        Toast.show({
            text, buttonText,
            buttonStyle, buttonTextStyle,
            position, textStyle,
            type, duration, onClose,
        })
    }


    return(
        <Button
        onPress={() => show(
                text, buttonText,
                buttonStyle, buttonTextStyle,
                position, textStyle,
                type, duration, onClose,)
          }
        >
        </Button>
    );
}
