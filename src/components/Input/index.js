import React from 'react';
import { 
    Item, 
    Input as InputNB, 
    Label } from 'native-base';

export const Input = ({ 
    label, 
    onChangeText,
    value='',
    floatingLabel = false,
    fixedLabel = false,
    security = false,
    styleInput = {},
    styleLabel = {},
}) => {
    return(
        <Item 
            style={styleInput} 
            floatingLabel={floatingLabel}
            fixedLabel={fixedLabel} >
            <Label style={styleLabel} >{label}</Label>
            <InputNB 
                secureTextEntry={security}
                value={value}
                onChangeText={onChangeText}
             />
        </Item>
    );
}