import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import BottomNavigationBar from '../../components/BottomNavigationBar'

import { Provider } from 'react-redux';
import store from '../../redux/store';

import Home from './Home';


export default class HomeScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.mainContainer}>

                <Text>This is home page</Text>

                <Home/>

                <BottomNavigationBar/>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainContainer: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

