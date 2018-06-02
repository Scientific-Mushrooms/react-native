import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import BottomNavigationBar from '../components/ButtomNavigationBar'

import { Provider } from 'react-redux';
import store from '../redux/store';
import { connect } from 'react-redux';
import { increase, decrease, reset } from '../redux/actions/actionsTypes';

import Home from './Home';
export default class HomeScreen extends Component {

    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            
            <View style={styles.mainContainer}>

                <Text>This is home page</Text>

                <BottomNavigationBar/>
                <Provider store={store}>
                <Home/>
                </Provider>
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

