import React, { Component } from 'react';
import BottomNavigationBar from 'BottomNavigationBar'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

export default class BaseComponent extends Component {

    static navigationOptions = {
        header: null,
    };

    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form})
                    .then((response) => (response.json()))
                    .catch((error) => { console.error(error); });
    }

}
