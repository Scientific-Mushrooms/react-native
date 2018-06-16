

/**
 * @providesModule Header
 */


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { RkText } from 'react-native-ui-kitten';


class Header extends Component {

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerPadding}/>
                <View style={styles.headerFunction}>
                <RkText rkType='awesome hero' style={styles.leftIcon}>{this.props.leftIcon}</RkText>
                <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
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
        alignItems: 'center',
        flexDirection: 'row',
    },

    leftIcon: {
        position: 'absolute',
        left: 0,
        marginLeft: 10,
    },

    title: {
        fontSize: 20,
        color: '#fff',
    },

});

export default withNavigation(Header);