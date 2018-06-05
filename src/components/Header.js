

/**
 * @providesModule Header
 */


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


export default class Header extends Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerPadding}/>
                <View style={styles.headerFunction}>
                <Icon name='settings'/>
                </View>
            </View>
        )}
}

const styles = StyleSheet.create({

    headerContainer: {
        backgroundColor: '#b72712',
        width: '100%',
        top: 0,
    },

    headerPadding: {
        height: 20,
    },

    headerFunction: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
    },


});