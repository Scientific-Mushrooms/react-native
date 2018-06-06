

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
                    <Text style={styles.intro}>一航战，出击！</Text>
                    <Text style={styles.intro}>喵喵喵？？？</Text>
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
                        <Icon 
                            name='chevron-right' 
                            containerStyle={styles.arrow} 
                            size={30}
                            color='#e7e7e8'
                            />
                    </TouchableOpacity>
    
                    <View style={styles.bottomContainer}>

                        <View style={styles.infoContainer}>
                            <View style={styles.smallContainer}>
                                <Text style={styles.infoTitle}>Posts</Text>
                                <Text style={styles.infoValue}>2</Text>
                            </View>
                        </View>

                        <View style={styles.infoContainer}>
                            <View style={styles.smallContainer}>
                                <Text style={styles.infoTitle}>Following</Text>
                                <Text style={styles.infoValue}>3</Text>
                            </View>
                        </View>

                        <View style={styles.infoContainer}>
                            <View style={styles.smallContainer}>
                                <Text style={styles.infoTitle}>Followers</Text>
                                <Text style={styles.infoValue}>2</Text>
                            </View>
                        </View>

                        <View style={styles.infoContainer}>
                            <View style={styles.smallContainer}>
                                <Text style={styles.infoTitle}>Profile</Text>
                                <Text style={styles.infoValue}>11</Text>
                            </View>
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
        justifyContent: 'center',
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
        height: 60,
        width: '100%',
        flexDirection: 'row',
    },

    infoContainer: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#e2e2e3',
    },

    smallContainer: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: '#e2e2e3',
    },

    infoTitle: {
        color: '#8f8e94',
    },

    infoValue: {
        color: '#323233',
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

    intro: {
        height: 35,
        width: '80%',
        fontSize: 20,
        textAlign: 'center'
    }

});


export default withNavigation(InfoBar);