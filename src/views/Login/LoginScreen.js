import React, { Component }from 'react';
import { Button, Text, View, Spinner, Toast } from 'native-base'; 
import firebase  from "firebase";

import { InputText }from '../../components';
import { styles } from './styles/';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loadingLogin: false,
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
    }
    onChangeHandler(fieldName, value) {
        this.setState({
            [fieldName]: value,
        })
    }

    tryLogin(){
        const { email, password } = this.state;
        this.setState({ loadingLogin : true})
        firebase
          .auth()
          .signInWithEmailAndPassword( email, password )
          .then( user => {
              this.renderToastMessage('Cadastro realizado com sucesso', 'OK', 'success')
          })
          .catch( error => {
              
            this.renderToastMessage(error.message, 'OK', 'warning')
          })
          .then( () => this.setState({ loadingLogin : false}))
    }
    renderToastMessage(message, nameButton, type, duration = 5000, position ){
        Toast.show({
            text: message,
            buttonText: nameButton,
            position,
            type,
            duration,
        })
    }
    renderLoad(){
        const {loadingLogin} = this.state;
        if(loadingLogin)
            return <Spinner color='blue'/>
        return (
            <Button style={ styles.button } onPress={() => this.tryLogin()}>
                    <Text> Entrar </Text>
            </Button>
        );
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
                {this.renderLoad()}

                
                
            </View>
        );
    }
}

export default LoginScreen; 