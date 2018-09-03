import React  from 'react';
import { Card } from 'native-base';
imort

export const CardList = ({}) => {
    return(
        <Card 
            dataArray={items}
            renderRow={(item) =>
                <CardItem 
                    name={ item.name } 
                    rate={ item.rate }
                    gender={ item.gender }
                    uri = { item.uri } 
                />
            }   
        >
        </Card> 
    );
}