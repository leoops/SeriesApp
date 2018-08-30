import React from 'react';
import { Button } from '../Button';
import { styles } from './styles';
import { Spinner } from 'native-base';

export const ButtonLoadable = ({ 
    active = false, 
    colorSpinner = 'blue', 
    circle = false,
    label, 
    icon, 
    onPress 
}) => {
    if( active )
        return <Spinner color={ colorSpinner }/>
    return (
        <Button 
            circle
            icon={ icon }
            label={ label }
            onPress={ onPress }
        />      
    );
}