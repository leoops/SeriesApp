import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Right, Left, Text, Button, Icon, Body } from 'native-base';
import { styles } from "./styles";
export const CardImage = ({ 
    uri = {}, 
    name, 
    rate, 
    gender,
    icon,
    onPress,
}) => {
    return(
        <Card>
            <CardItem>
                <Body>
                    <Text>{ name }</Text>
                </Body>
                <Right>
                    <Button transparent
                        onPress={ onPress }    
                    >
                        <Icon active name={ icon }/>
                    </Button>
                </Right>
            </CardItem>
            <CardItem cardBody>
                <Image 
                source={{ uri : uri }} 
                style={ styles.imageCard }/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{ gender }</Text>
                    <Text>{ rate }</Text>
                </Body>
            </CardItem>
        </Card>
    )
} 