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



_login = (result) => {
    if (result.status == 'success') {
        // this.props.dispatch(login(this.username));
        // this.props.navigation.navigate('Home');
        alert("666");
    } else {
        alert(fail);
    }
}

class LoginScreen extends Component {

    static navigationOptions = {
        header: null,
    };
    
    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form})
                    .then((response) => (response.json()))
                    .catch((error) => { console.error(error); });
    }
    
    username = '';
    password = '';

    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
    };
    
    onPasswordChanged = (newPassword) => {
        this.password = newPassword;
    };
    
    login = (result) => {
        if (result.status == 'success') {
            // this.props.dispatch(login(this.username));
            // this.props.navigation.navigate('Home');
            alert("666");
        } else {
            alert(fail);
        }
    }

    signup = () => {
        this.props.dispatch(logout());
        this.props.navigation.navigate('Signup');
    };

    test = () => {
        let form = new FormData();
        form.append("name", "30013");

        post(ip + '/login',form).then(_login)
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