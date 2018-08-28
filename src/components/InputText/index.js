import React from 'react';
import { Item, Input, Label } from 'native-base';

export const InputText = ({ 
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
            <Input 
                secureTextEntry={security}
                value={value}
                onChangeText={onChangeText}
             />
        </Item>
    );
}