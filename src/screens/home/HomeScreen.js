import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import BottomNavigationBar from 'BottomNavigationBar'

import { Provider } from 'react-redux';
import store from '../../redux/store';

import Home from './Home';
import IconInput from 'IconInput'
import IconButton from 'IconButton'
import InfoBar from 'InfoBar';

import ColorButton from 'ColorButton'

export default class HomeScreen extends Component {
    username = '';
    password = '';
    static navigationOptions = {
        header: null,
    };

    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
    };

    click = () => {
        alert("11111");
    }

    render() {
        return (
            <View style={styles.mainContainer}>

            <IconInput 
                    icon='settings' 
                    placeholder='username' 
                    onChangeText={this.onUsernameChanged}
                    />

                     <IconInput 
                    icon='settings' 
                    placeholder='username' 
                    onChangeText={this.onUsernameChanged}
                    />
                <Text>This is home page</Text>
                <InfoBar name='admin'/>
                <Text>{this.username}</Text>
                <Home/>
                <IconButton title='test' onPress={this.click}/>
                <ColorButton title='test2' onPress={this.click}/>
                <BottomNavigationBar onPress={this.click}/>
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

