import firebase  from "firebase";
import { View, Toast } from 'native-base'; 
import React, { Component }from 'react';
import { connect } from "react-redux";

import { styles } from './styles/';
import { renderToastMessage, firebaseLoginErrorCodeMessageReturn } from "../../utils";
import { ButtonGroup, Button, ButtonLoadable, Input } from '../../components';
import { tryLogin, createUser } from '../../store/actions/userActions';

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

        this.props.tryLogin({ email, password })
        .then( () => {
            return this.props.navigation.replace('Main');
        })
        .catch( error => {
            this.setState({ loadingLogin : false})
            return renderToastMessage( firebaseLoginErrorCodeMessageReturn(error.code) , 'ok', 'warning');
        })
        
        
    }

    createUser(email, password) {
        this.props.createUser({ email, password })
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

export default connect( null, { 
    tryLogin,
    createUser,
} )(LoginScreen);