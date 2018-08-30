import React, { Component }from 'react';
import { View, Spinner, Toast } from 'native-base'; 
import firebase  from "firebase";

import { styles } from './styles/';
import { ButtonGroup, Button, ButtonLoadable, Input } from '../../components';

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

    
    renderToastMessage(message, nameButton, type, duration = 5000, position ){
        Toast.show({
            text: message,
            buttonText: nameButton,
            position,
            type,
            duration,
        })
    }

    tryLogin(){
        const { email, password } = this.state;
        this.setState({ loadingLogin : true})
        firebase
            .auth()
            .signInWithEmailAndPassword( email, password )
            .then( user => {
                this.renderToastMessage('Login realizado com sucesso', 'OK', 'success')
                //this.props.navigation.navigate('');
            })
            .catch( error => {
                this.renderToastMessage(error.code, 'OK', 'warning')
                this.createUser(email, password)
            })
            .then( () => this.setState({ loadingLogin : false}))
    }

    createUser(email, password) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                this.renderToastMessage('Cadastro realizado com sucesso', 'OK', 'success')
            })
            .catch( error => {
                this.renderToastMessage(error.code, 'OK', 'warning')
            })
    }

    

    render() {
        return(

            <View style={ styles.container }>
                <Input 
                    floatingLabel 
                    styleInput={ styles.inputUser } 
                    styleLabel={ styles.InputLabel } 
                    value={this.state.email}
                    onChangeText={value => {
                        this.onChangeHandler("email", value)
                    }}
                    label='Email'/>
                <Input 
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
                <ButtonGroup row center>
                    <Button 
                        icon='logo-facebook'
                        circle
                        onPress={() => {}}
                    />

                    < ButtonLoadable 
                        icon='log-in'
                        circle
                        active = {this.state.loadingLogin}
                        onPress={() => this.tryLogin()}
                    />
                    
                    <Button 
                        icon='logo-google'
                        circle
                        onPress={() => {}}
                    />
                </ButtonGroup>
                <ButtonGroup center>
                    <Button 
                        label='Cadastrar'
                        text
                        onPress={() => {}}
                    />
                    <Button 
                        label='Esqueci minha senha'
                        text
                        onPress={() => {}}
                    />
                </ButtonGroup>
            </View>
        );
    }
}

export default LoginScreen;