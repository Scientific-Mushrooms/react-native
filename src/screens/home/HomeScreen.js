import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import BottomNavigationBar from 'BottomNavigationBar'

import { Provider } from 'react-redux';
import store from '../../redux/store';

import Home from './Home';
import IconInput from 'IconInput'
import IconButton from 'IconButton'

export default class HomeScreen extends Component {
    username = ''
    static navigationOptions = {
        header: null,
    };

    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
    };

    click = () => {
        alert(this.username);
    }

    render() {
        return (
            <View style={styles.mainContainer}>

                <Text>This is home page</Text>
                <Text>{this.username}</Text>
                <IconInput icon='settings' placeholder='mmmmmmm' onChangeText={this.onUsernameChanged}/>
                <Home/>
                <IconButton title='test' onPress={this.click}/>
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

