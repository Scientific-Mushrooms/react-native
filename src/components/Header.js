

/**
 * @providesModule Header
 */


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Header extends Component {

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerPadding}/>
                <View style={styles.headerFunction}>
                <Icon 
                    name={this.props.leftIcon} 
                    containerStyle={styles.leftIcon} 
                    size={25} 
                    onPress={this.goBack}
                    color='#fff'
                    type={this.props.type}
                    underlayColor='transparent'
                    />
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