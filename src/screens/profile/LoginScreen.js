import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ToastAndroid, } from 'react-native';

import IconInput from 'IconInput';
import Header from 'Header';
import ColorButton from 'ColorButton';
import BaseComponent from '../../components/BaseComponent'

import { connect } from 'react-redux';
import { logout, login } from '../../redux/actions/action';


import { post } from '../../services/LoginService';

const ip = 'http://192.168.239.148:8080'

class LoginScreen extends BaseComponent {

    constructor(props) {
        super(props);
    }

    phoneNumber = '';
    username = '';
    password = '';

    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
    };
    
    onPasswordChanged = (newPassword) => {
        this.password = newPassword;
    };
    
    login = () => {
        let form = new FormData();
        form.append("phoneNumber", this.phoneNumber);

        this.post(ip + '/login',form).then((result) => {
            if (result.status == 'success') {
                this.props.dispatch(login(this.username));
                this.props.navigation.navigate('Home');
            } else {
                alert('fail');
            }
        })
    }

    signup = () => {
        this.props.dispatch(logout());
        this.props.navigation.navigate('Signup');
    };

    
    render() {
        return (
            <View style={styles.container}>

                <Header/>

                <IconInput 
                    icon='phone' 
                    placeholder='username' 
                    onChangeText={this.onUsernameChanged}
                    />

                <IconInput 
                    icon='settings' 
                    placeholder='password' 
                    onChangeText={this.onPasswordChanged} 
                    secureTextEntry={true}
                    />

                <ColorButton title='LOG IN' onPress={this.login}/>
                <ColorButton title='SIGN UP' onPress={this.signup}/>

            </View>
        );
    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fbfcfd',
    },

    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',    
        marginBottom: 8,
    },

    btText: {
        color: '#fff',
    }

});
  
const mapStateToProps = state => ({
    user: state.user.name,
    counter: state.counter,
})

export default connect(mapStateToProps)(LoginScreen);