

/**
 * @providesModule BaseComponent
 */


import React, { Component } from 'react';
import BottomNavigationBar from 'BottomNavigationBar'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

export default class BaseComponent extends Component {

    static navigationOptions = {
        header: null,
    };

    ip = 'http://192.168.239.148:8080'

    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form})
                    .then((response) => (response.json()))
                    .catch((error) => { console.error(error); });
    }

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

}
