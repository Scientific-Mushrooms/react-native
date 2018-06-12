import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomNavigationBar from 'BottomNavigationBar'
import ConfessionWall from '../../modules/confession_wall/ConfessionWall';

export default class MessageScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <ConfessionWall/>
                <BottomNavigationBar/>
            </View>
        );
    }
}