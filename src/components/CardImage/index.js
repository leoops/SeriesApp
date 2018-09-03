import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Right, Left, Text, Button, Icon, Body } from 'native-base';

export const CardImage = ({ 
    uri = {}, 
    name, 
    rate, 
    gender,
}) => {
    return(
        <Card>
            <CardItem>
                <Left>
                    <Text>{ name }</Text>
                </Left>
                <Right>
                    <Button transparent>
                        <Icon active name="favorite" />
                    </Button>
                </Right>
            </CardItem>
            <CardItem cardBody>
                <Image source={{ uri : uri }} style={{height: 200, width: null, flex: 1}}/>
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