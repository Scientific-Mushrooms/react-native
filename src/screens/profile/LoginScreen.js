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


import { connect } from 'react-redux';
import { login, logout } from '../../redux/actions/action'

const ip = 'http://192.168.239.148:8080'

class LoginScreen extends Component {

    static navigationOptions = {
        header: null,
    };
    
    username = '';
    password = '';

    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
    };
    
    onPasswordChanged = (newPassword) => {
        this.password = newPassword;
    };
    
    login = () => {
        if (this.username == 'admin' && this.password == '123') {
            this.props.dispatch(login(this.username));
            this.props.navigation.navigate('Home');
        } else {
            alert('fail')
        }
    };

    signup = () => {
        this.props.dispatch(logout());
        this.props.navigation.navigate('Signup');
    };

    test = () => {
        let parameters = new FormData();
            parameters.append("name", "30013");
            parameters.append("pg", "1");
            parameters.append('ps', '20');
        fetch(ip + '/login', {
            method: 'POST',
            body: parameters})
            .then((response) => response.json())
            .then((responseJson) => { alert(responseJson.user.name) })
            .catch((error) => { console.error(error); });
    };
    
    render() {
        return (
            <View style={styles.container}>

                <Header/>

                <IconInput 
                    icon='settings' 
                    placeholder='username' 
                    onChangeText={this.onUsernameChanged}
                    />

                <IconInput 
                    icon='settings' 
                    placeholder='password' 
                    onChangeText={this.onPasswordChanged} 
                    secureTextEntry={true}
                    />

                <TouchableOpacity
                    onPress={this.test}
                    style={styles.button}>
                    <Text style={styles.btText}>LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signup}>
                    <Text style={styles.btText}>SIGN UP</Text>
                </TouchableOpacity>

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