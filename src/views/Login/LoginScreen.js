import React, { Component }from 'react';
import { Button, Text, View } from 'native-base'; 

import { InputText }from '../../components';
import { styles } from './styles/';

class LoginScreen extends Component {
    render() {
        return(
            <View>
                <InputText floatingLabel styleInput={ styles.inputUser } styleLabel={ styles.InputLabel } label='User Name'/>
                <Button>
                    <Text>Hello World</Text>
                </Button>
            </View>
        );
    }
}

export default LoginScreen; 