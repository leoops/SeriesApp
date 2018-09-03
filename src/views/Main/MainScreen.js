import React, { Component } from 'react';
import { View } from "native-base";
import seriesJson from '../../../series.json';
import { CardImage } from '../../components';
class MainScreen extends Component {
    render(){
        return(
            <View>
                <CardImage 
                    name='leo' 
                    uri='http://static1.purebreak.com.br/articles/3/10/32/3/@/52253-band-exibira-quarta-temporada-de-the-620x0-1.jpg' 
                    rate='1.9' 
                    gender='acao' 
                />
            </View>
        );
    }
}

export default MainScreen;