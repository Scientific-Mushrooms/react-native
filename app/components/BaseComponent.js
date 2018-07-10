

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

    

}
