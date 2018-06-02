import React, { Component } from 'react';
import {  View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import BottomNavigationBar from '../../components/ButtomNavigationBar'
import { Button, Avatar, Icon } from 'react-native-elements'


export default class ProfileMainScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    toLoginPage = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.mainContainer}>

                <View style={styles.headerContainer}>
                    <View style={styles.headerPadding}/>
                    <View style={styles.headerFunction}>
                        <Icon name='settings' />
                    </View>
                </View>
                
                <ScrollView 
                    style={styles.scrollContainer} 
                    showsVerticalScrollIndicator={false}>

                    

                    <TouchableOpacity style={styles.userContainer} onPress={this.toLoginPage}> 
                        <Avatar
                            large
                            rounded
                            source={require("../../images/icons/password.png")}
                            activeOpacity={0.7}
                        />
                        <Text style={styles.name}>233333333333</Text>
                        <Icon name='chevron-right' style={styles.icon} size={30}/>
                    </TouchableOpacity>

                    <View style={styles.buttonGroupA}>
                        <Button 
                            leftIcon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                            rightIcon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                            containerViewStyle={styles.button}
                            title="Go to login"
                            onPress={this.toLoginPage}
                        />
                        <Button 
                            leftIcon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                            rightIcon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                            containerViewStyle={styles.button}
                            title="Go to login"
                            onPress={this.toLoginPage}
                        />
                        <Button 
                            leftIcon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                            rightIcon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                            containerViewStyle={styles.button}
                            title="Go to login"
                            onPress={this.toLoginPage}
                        />
                        <Button 
                            leftIcon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                            rightIcon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                            containerViewStyle={styles.button}
                            title="Go to login"
                            onPress={this.toLoginPage}
                        />
                    </View>

                </ScrollView>
                <BottomNavigationBar/>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainContainer: { 
        flex: 1,
        backgroundColor: '#eff0f0'
    },

    scrollContainer: {
        width: '100%',
    },

    headerContainer: {
        backgroundColor: '#b72712',
    },

    headerPadding: {
        height: 20,
    },

    headerFunction: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    userContainer: {
        width: '100%',
        height: 90,
        backgroundColor: '#fbfcfd',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    name: {
        width: '60%',
        height: '30%',
        marginLeft: 10,
        marginRight: 20,
    },

    button: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0.5,
        borderColor: '#eff0f0'
    },

    buttonGroupA: {
        marginTop: 10
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
     },

});
