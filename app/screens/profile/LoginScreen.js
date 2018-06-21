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


import { connect } from 'react-redux';
import { logout, login } from '../../redux/actions/action';


class LoginScreen extends Component {

    login = () => {

        if (this.phoneNumber == '' || this.password == '') {
            alert('can not be empty');
        } else {
            let form = new FormData();
            form.append("phoneNumber", this.phoneNumber);
            form.append("password", this.password);

            this.post(this.ip + '/login', form).then((result) => {

                if (result.status == 'fail') {
                    alert(result.description);
    
                } else {
                    this.props.dispatch(login(result.user.username));
                    this.props.navigation.navigate('Home');
                }
            })
        }
    };


    signup = () => {
        this.props.dispatch(logout());
        this.props.navigation.navigate('Signup');
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>

                <Header leftIcon='chevron-left' title='账号' leftIconTo='back'/>

                <IconInput 
                    icon='phone' 
                    placeholder='phone number' 
                    onChangeText={this.onPhoneNumberChanged}
                    />

                <IconInput 
                    icon='settings' 
                    placeholder='password' 
                    onChangeText={this.onPasswordChanged} 
                    secureTextEntry={true}
                    />

                <View style={styles.buttonContainer}>
                    <ColorButton title='LOG IN' onPress={this.login}/>
                    <ColorButton title='SIGN UP' onPress={this.signup}/>
                </View>

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

    buttonContainer: {
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
    }

});
  
const mapStateToProps = state => ({
    user: state.user.name,
    counter: state.counter,
})

export default connect(mapStateToProps)(LoginScreen);