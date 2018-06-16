

/**
 * @providesModule clavier-swiper
 */


import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';


export default class ClavierSwiper extends Component {


    render() {
        return (
            <View style={styles.mainContainer}>

                <Swiper
                    style={styles.swiper}
                    showsButtons={false}
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={4}
                    paginationStyle={{ bottom: 500 }}
                    >

                    <View style={styles.slide1}>
                        <Image style={styles.image} source={require('../images/avatars/test.png')} />
                    </View>
                    <View style={styles.slide2}>
                        <Image style={styles.image} source={require('../images/avatars/test.png')} />
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.image} source={require('../images/avatars/test.png')} />
                    </View>
                </Swiper>
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

    image: {
        height: 150,
        width: '100%',
    },

    swiper: {

    },


});