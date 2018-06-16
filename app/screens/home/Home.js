import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';
import ClavierSwiper from 'clavier-swiper';

export class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>

                <ClavierSwiper/>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainContainer: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

});

