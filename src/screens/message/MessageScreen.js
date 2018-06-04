import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomNavigationBar from 'BottomNavigationBar'

export default class MessageScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>

                <BottomNavigationBar/>
            </View>
        );
    }
}