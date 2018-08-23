import React from 'react';
import { Item, Input, Label } from 'native-base';

export const InputText = ({ 
    label, 
    floatingLabel = false,
    fixedLabel = false,
    styleInput = {},
    styleLabel = {},
}) => {
    return(
        <Item 
            style={styleInput} 
            floatingLabel={floatingLabel}
            fixedLabel={fixedLabel} >
            <Label style={styleLabel} >{label}</Label>
            <Input />
        </Item>
    );
}