import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import BottomNavigationBar from '../../components/BottomNavigationBar'

import { Provider } from 'react-redux';
import store from '../../redux/store';

import Home from './Home';
import IconInput from 'IconInput'

export default class HomeScreen extends Component {
    username = ''
    static navigationOptions = {
        header: null,
    };

    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
    };

    render() {
        return (
            <View style={styles.mainContainer}>

                <Text>This is home page</Text>
                <Text>{this.username}</Text>
                <IconInput icon='settings' placeholder='mmmmmmm' onChangeText={this.onUsernameChanged}/>
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

