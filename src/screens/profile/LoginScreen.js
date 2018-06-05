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


class LoginScreen extends BaseComponent {

    constructor(props) {
        super(props);
    }

    phoneNumber = '';
    password = '';

    onPhoneNumberChanged = (newPhoneNumber) => {
        this.phoneNumber= newPhoneNumber;
    };
    
    onPasswordChanged = (newPassword) => {
        this.password = newPassword;
    };
    
    login = () => {

        let form = new FormData();
        form.append("phoneNumber", this.phoneNumber);
        form.append("password", this.password);

        this.post(this.ip + '/login',form).then((result) => {

            if (result.status == 'fail') {
                alert(result.description);

            } else {
                this.props.dispatch(login(this.username));
                this.props.navigation.navigate('Home');
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
        alignItems: 'center',
        backgroundColor: '#fbfcfd',
    },

});
  
const mapStateToProps = state => ({
    user: state.user.name,
    counter: state.counter,
})

export default connect(mapStateToProps)(LoginScreen);