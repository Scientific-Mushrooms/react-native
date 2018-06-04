

/**
 * @providesModule InfoBar
 */


import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class InfoBar extends Component {

    toLoginPage = () => {
        this.props.navigation.navigate('Login')
        
    }

    render() {

        if (this.props.name === null) {
            return (
                <View style={styles.container}>
                    <Text style={styles.introContainer}>xxxxxxxxxxxxxxxxx</Text>
                    <TouchableOpacity style={styles.button} onPress={this.toLoginPage}>
                        <Text>LOG IN</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                
                    <TouchableOpacity style={styles.topContainer} onPress={this.toLoginPage}> 
                        <Image source={require('../images/avatars/test.png')} style={styles.avatar}/>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <Icon name='chevron-right' style={styles.arrow} size={30}/>
                    </TouchableOpacity>
    
                    <View style={styles.bottomContainer}>
                        <View style={styles.infoContainer}>
                        </View>
                        <View style={styles.infoContainer}>
                        </View>
                        <View style={styles.infoContainer}>
                        </View>
                        <View style={styles.infoContainer}>
                        </View>
                    </View>

                </View>
            );
        }
    }
}



const styles = StyleSheet.create({

    container: { 
        width: '100%',
        backgroundColor: '#fbfcfd',
        height: 140,
        alignItems: 'center',
    },

    topContainer: {
        width: '100%',
        height: 90,
        backgroundColor: '#fbfcfd',
        alignItems: 'center',
        flexDirection: 'row',
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 15,
        marginRight: 15,
    },

    arrow: {
        position: 'absolute',
        right: 0,
    },

    bottomContainer: {
        height: 50,
        width: '100%',
        backgroundColor: "black",
        flexDirection: 'row',
    },

    infoContainer: {
        width: '25%',
        height: '100%',
    },

    button: {
        height: 40,
        width: '95%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },

    introContainer: {
        height: 70,
        width: '80%',
        fontSize: 30
    }

});


export default withNavigation(InfoBar);