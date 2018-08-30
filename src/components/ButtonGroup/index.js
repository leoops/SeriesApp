import React, { Component } from 'react';
import { View } from "native-base";
import { styles } from "./styles";

export const ButtonGroup = ({ 
    children, 
    center = false , 
    row = false, 
}) =>  (

    <View style={[
        styles.buttonGroup, 
        row ? styles.row : null, 
        center ? styles.center : null,
    ]}>
        {children}
    </View>
)