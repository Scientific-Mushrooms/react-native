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

    phoneNumber = '';

    username = '';

    password = '';

    repassword = '';

    onPhoneNumberChanged = (newPhoneNumber) => {
        this.phoneNumber = newPhoneNumber;
    };

    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
    };
    
    onPasswordChanged = (newPassword) => {
        this.password = newPassword;
    };

    onRepasswordChanged = (newRepassword) => {
        this.repassword = newRepassword;
    };
    
    login = () => {
        if (this.username == 'admin' && this.password == '123') {
            this.props.navigation.navigate('Home');
        } else {
            alert('fail')
        }
    };

    signup = () => {

        if (this.password != this.repassword) {
            alert("different password");
        } else if (this.password == '' || this.phoneNumber == '') {
            alert("can not be empty");
        } else {
            let form = new FormData();
            form.append("phoneNumber", this.phoneNumber);
            form.append("password", this.password);
            form.append("username", this.username);

            this.post(this.ip + '/signup',form).then((result) => {

                if (result.status == 'fail') {
                    alert(result.description);

                } else {
                    this.props.dispatch(login(this.username));
                    this.props.navigation.navigate('Home');
                }

            })
        }
        
    };
    
    render() {
        return (
            <View style={styles.container}>

                <Header/>

                <IconInput 
                    icon='mobile-phone' 
                    type='font-awesome'
                    placeholder='phone number' 
                    onChangeText={this.onPhoneNumberChanged}
                    />

                <IconInput 
                    icon='user' 
                    type='evilicon'
                    placeholder='username' 
                    onChangeText={this.onUsernameChanged} 
                    secureTextEntry={true}
                    />

                <IconInput 
                    icon='lock' 
                    type='evilicon'
                    placeholder='password' 
                    onChangeText={this.onPasswordChanged} 
                    secureTextEntry={true}
                    />

                <IconInput 
                    icon='unlock' 
                    type='evilicon'
                    placeholder='repassword' 
                    onChangeText={this.onRepasswordChanged}
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