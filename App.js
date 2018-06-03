import React, { Component } from 'react';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { AppNavigator } from './src/navigators/Navigator'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

import { Provider } from 'react-redux';
import store from './src/redux/store';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}
