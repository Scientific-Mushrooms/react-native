import React, { Component } from 'react';
import {  View, Text, StyleSheet, ScrollView } from 'react-native';

import BottomNavigationBar from 'BottomNavigationBar';
import IconButton from 'IconButton';

import { Icon } from 'react-native-elements';
import InfoBar from 'InfoBar';

import { connect } from 'react-redux';


class ProfileMainScreen extends Component {

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
                
                <ScrollView  style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <InfoBar name={this.props.name}/>

                    <View style={styles.buttonGroupA}>
                        <IconButton title='Setting' onPress={this.toLoginPage} icon='settings'/>
                        <IconButton title='Message' onPress={this.toLoginPage} icon='settings'/>
                        <IconButton title='233333' onPress={this.toLoginPage} icon='settings'/>
                        <IconButton title='233333' onPress={this.toLoginPage} icon='settings'/>
                    </View>

                    <View style={styles.buttonGroupA}>
                        <IconButton title='Setting' onPress={this.toLoginPage} icon='settings'/>
                        <IconButton title='Message' onPress={this.toLoginPage} icon='settings'/>
                        <IconButton title='233333' onPress={this.toLoginPage} icon='settings'/>
                        <IconButton title='233333' onPress={this.toLoginPage} icon='settings'/>
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
        backgroundColor: '#eff0f0',
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

    buttonGroupA: {
        marginTop: 10
    },

});

const mapStateToProps = state => ({
    name: state.user.name,
})

export default connect(mapStateToProps)(ProfileMainScreen);