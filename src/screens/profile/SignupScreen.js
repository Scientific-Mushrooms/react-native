import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput } from 'react-native';

import IconInput from 'IconInput';
import Header from 'Header';
import ColorButton from 'ColorButton';
import BaseComponent from 'BaseComponent';

import { connect } from 'react-redux';
import { logout, login } from '../../redux/actions/action';

class SignupScreen extends BaseComponent {

    username = '';
    password = '';

    onUsernameChanged = (newUsername) => {
        console.log(newUsername);
        this.username = newUsername;
    };
    
    onPasswordChanged = (newPassword) => {
        console.log(newPassword);
        this.password = newPassword;
    };
    
    login = () => {
        if (this.username == 'admin' && this.password == '123') {
            this.props.navigation.navigate('Home');
        } else {
            alert('fail')
        }
    };

    signup = () => {
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

                <IconInput 
                    icon='settings' 
                    placeholder='password' 
                    onChangeText={this.onPasswordChanged} 
                    secureTextEntry={true}
                    />

                <IconInput 
                    icon='phone' 
                    placeholder='username' 
                    onChangeText={this.onUsernameChanged}
                    />


                <ColorButton title='JOIN NOW' onPress={this.signup}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fbfcfd',
    },

});
  
const mapStateToProps = state => ({
    user: state.user.name,
})

export default connect(mapStateToProps)(SignupScreen);