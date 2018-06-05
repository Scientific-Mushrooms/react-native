

/**
 * @providesModule ColorButton
 */


import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native';

import { Icon } from 'react-native-elements'


export default class ColorButton extends Component {

    constructor(props) {  
        super(props);  
        this.state = { press: false };  
    }

    onHideUnderlay(){  
        this.setState({ press: false });  
    }  
  
    onShowUnderlay(){  
        this.setState({ press: true });  
    }  

    render() {
        return (
            <TouchableHighlight 
                style={styles.container} 
                onPress={this.props.onPress} 
                underlayColor='#c3473a'
                onHideUnderlay={this.onHideUnderlay.bind(this)}
                onShowUnderlay={this.onShowUnderlay.bind(this)}
                activeOpacity={1}
                >

                <Text style={this.state.press ? styles.selectedTitle : styles.unselectedTitle}>{this.props.title}</Text>

            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        height: 40,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#c3473a',
    },

   
    unselectedTitle: {
        fontSize: 20,
        color: '#c3473a'
    },

    selectedTitle: {
        fontSize: 20,
        color: '#fff'
    },

});
