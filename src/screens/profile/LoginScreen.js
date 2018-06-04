import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
  } from 'react-native';

import passwordIcon from '../../images/icons/password.png';
import usernameIcon from '../../images/icons/username.png';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/actions/action'

class LoginScreen extends Component {

    static navigationOptions = {
        header: null,
    };
    
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
    
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.inputBox}>
                    <Image
                        style={styles.img}
                        source={usernameIcon}
                        />
                    <TextInput
                        style={styles.input}
                        onChangeText={this.onUsernameChanged}
                        placeholderTextColor={'#fff'}
                        placeholder={'username'}
                        underlineColorAndroid={'transparent'}
                        />
                </View>

                <View style={styles.inputBox}>
                    <Image
                        source={passwordIcon}
                        style={styles.img}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.onPasswordChanged}
                        secureTextEntry={true}
                        placeholderTextColor={'#fff'}
                        placeholder={'password'}
                        underlineColorAndroid={'transparent'}/>
                </View>

                <TouchableOpacity
                    onPress={this.login}
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
        backgroundColor: '#F5FCFF',
    },
    img: {
        width: 30,
        height: 30,
    },
    input: {
        width: 200,
        height: 40,
        color: '#fff',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
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