import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import BottomNavigationBar from '../components/ButtomNavigationBar'


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                <BottomNavigationBar/>
            </View>
        );
    }
}

