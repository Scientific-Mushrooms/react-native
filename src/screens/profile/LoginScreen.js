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

export default class LoginScreen extends Component {

    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
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
            this.props.navigation.navigate('Home');
        } else {
            alert('fail')
        }
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
                    <Text style={styles.btText}>登录</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate('Home', { user: 'Lucy' })}>
                    <Text style={styles.btText}>注册</Text>
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
  