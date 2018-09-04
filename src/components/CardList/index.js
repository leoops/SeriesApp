import React  from 'react';
import { View, Card } from 'native-base';
import { CardImage } from '../CardImage';

export const CardList = ({ items, icon, onPress }) => {
    return(
        <View>
            <Card 
                dataArray={ items }
                renderRow={( item ) =>
                    <CardImage 
                        name={ item.title } 
                        rate={ item.rate }
                        gender={ item.gender }
                        uri = { item.img } 
                        icon = { icon }
                        onPress = { onPress }
                    />
                }   
            >
            </Card> 
        </View>
    );
}