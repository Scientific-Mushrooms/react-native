import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import MessageScreen from './src/screens/MessageScreen'


const RootStack = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Message: MessageScreen,
        Profile: ProfileScreen,
    }, 
    {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'blue',
        },
    }
);

export default class App extends Component {
    render() {
        return <RootStack />;
    }
}
