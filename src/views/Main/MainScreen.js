import React, { Component } from 'react';
import { View } from "native-base";
import series from '../../../series.json';
import { CardList } from '../../components';
class MainScreen extends Component {
    render(){
        return(
            <View>
                <CardList 
                    items={ series } 
                    icon='star'
                    onPres={() => {} }
                />
            </View>
        );
    }
}

export default MainScreen;