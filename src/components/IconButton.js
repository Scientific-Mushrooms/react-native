/**
 * @providesModule IconButton
 */

import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

import { Icon } from 'react-native-elements'


export default class CommonButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Icon name={this.props.icon} containerStyle={styles.icon} size={20} color='#8f8e94' />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Icon name='chevron-right' containerStyle={styles.arrow} size={30} color='#e7e7e8'/>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: '#fbfcfd',
        height: 40,
        width: '100%',
        alignItems: 'center',
    },

    rightContainer: {
        flex: 1, 
        height: '100%', 
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e2e2e3',
    },

    icon: {
        height: 40,
        width: 40,
    },

    arrow: {
        height: 40,
        width: 40,
        position: 'absolute',
        right: 0,
    },

    title: {
        fontSize: 20,
        color: '#323233',
    },



});
