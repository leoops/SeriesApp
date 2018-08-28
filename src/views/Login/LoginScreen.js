import React, { Component }from 'react';
import { Button, Text, View } from 'native-base'; 
import firebase  from "firebase";

import { InputText }from '../../components';
import { styles } from './styles/';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    componentDidMount(){
        const config = {
            apiKey: "AIzaSyDs8UA9wAnecj6BB0UsZ7-Sn37O7nTFpow",
            authDomain: "seriesappreact.firebaseapp.com",
            databaseURL: "https://seriesappreact.firebaseio.com",
            projectId: "seriesappreact",
            storageBucket: "seriesappreact.appspot.com",
            messagingSenderId: "934846310520"
          };
          firebase.initializeApp(config);
          firebase
          .auth()
          .signInWithEmailAndPassword('user@mail.com','123123')
          .then( user => {
              console.log(user);
          })

         
    }
    onChangeHandler(fieldName, value) {
        this.setState({
            [fieldName]: value,
        })
    }

    tryLogin(){
        console.log(this.state)
    }

    render() {
        return(
            <View style={ styles.container }>

                <InputText 
                    floatingLabel 
                    styleInput={ styles.inputUser } 
                    styleLabel={ styles.InputLabel } 
                    value={this.state.email}
                    onChangeText={value => {
                        this.onChangeHandler("email", value)
                    }}
                    label='Email'/>
                <InputText 
                    floatingLabel 
                    security 
                    value={this.state.password}
                    onChangeText={value => {
                        this.onChangeHandler("password", value)
                    }}
                    styleInput={ styles.inputUser } 
                    styleLabel={ styles.InputLabel } 
                    label='Password'
                />

                <Button style={ styles.button } onPress={() => this.tryLogin()}>
                    <Text> Entrar </Text>
                </Button>
                
            </View>
        );
    }
}

export default LoginScreen; 