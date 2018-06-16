

/**
 * @providesModule IconButton
 */


import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
// import { Icon } from 'react-native-elements'
import { FontAwesome } from '../assets/icons';

export default class IconButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <RkText rkType='awesome icon' style={styles.icon}>{this.props.icon}</RkText>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <RkText rkType='awesome icon' style={styles.arrow}>{FontAwesome.right}</RkText>
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
        justifyContent: 'center',
    },

    rightContainer: {
        flex: 1, 
        height: '100%', 
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e2e2e3',
    },

    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    arrow: {
        marginLeft: 10,
        marginRight: 15,
        position: 'absolute',
        right: 0,
    },

    title: {
        fontSize: 20,
        color: '#323233',
    },



});
