

/**
 * @providesModule Post
 */


import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, ImageBackground, br } from 'react-native';

import { Icon } from 'react-native-elements'


export default class Post extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.mainContainer} onPress={this.props.onPress}>

                <View style={styles.topContainer}>
                    <TouchableOpacity style={styles.avatarContainer}>
                        <Image source={require('../images/avatars/test.png')} style={styles.avatar} />
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <View style={styles.textUpContainer}>
                            <Text style={styles.name}>clavier</Text>
                            <Text style={styles.action}>分享了</Text>
                        </View>
                        <View style={styles.textDownContainer}>
                            <Text style={styles.time}>昨天 13:28</Text>
                        </View>
                    </View>  
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.leftContainer}></View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.content}>
                        {`今、世界が動き出した 
あらゆる音楽と共に 
ふと、気がつけばいつまでも 
そう、繰り返すように 
降り出した雨の音は（音は） 

ずっと、遠くまで響いた（響いた） 
終わることない道の果てまで 
そう、届いているはず 
どこまでも歩いてく 
君と手を繋ぎながら 
                        `}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#fbfcfd',
        height: 300,
        width: '100%',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e2e2e3'
    },

    topContainer: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatarContainer: {
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    textContainer: {
        height: 40,
    },

    textUpContainer: {
        flexDirection: 'row',
        height: '70%',
        alignItems: 'center'
    },

    textDownContainer: {
        height: '30%',
    },

    name: {
        color: '#5a7cab',
        fontSize: 18,
        marginRight: 10,
    },

    action: {
        color: '#656566',
        fontSize: 14,
    },

    time: {
        color: '#b6b7b8',
        fontSize: 12,
        marginRight: 10,
    },


    bottomContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },

    leftContainer: {
        height: '100%',
        width: 70,
    },

    rightContainer: {
        flex: 1,
        height: '100%',
        width: '78%',
    },

    content: {
        width: '100%',
        height: '100%',
        fontSize: 14,
    }




});
