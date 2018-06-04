

/**
 * @providesModule InfoBar
 */


import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

export default class InfoBar extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.userContainer} onPress={this.toLoginPage}> 
                        <Avatar
                            large
                            rounded
                            source={require('../images/avatars/test.png')}
                            activeOpacity={0.7}
                        />
                        <Text style={styles.name}>233333333333</Text>
                        <Icon name='chevron-right' style={styles.icon} size={30}/>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({

    mainContainer: { 
        flex: 1,
        backgroundColor: '#eff0f0',
    },

    headerPadding: {
        height: 20,
    },

    headerFunction: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    userContainer: {
        width: '100%',
        height: 90,
        backgroundColor: '#fbfcfd',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },



});
