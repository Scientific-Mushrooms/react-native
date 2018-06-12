import React, { Component } from 'react';
import {  View, StyleSheet, ScrollView } from 'react-native';

import BottomNavigationBar from 'BottomNavigationBar';
import IconButton from 'IconButton';
import InfoBar from 'InfoBar';
import Header from 'Header';


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

                <Header leftIcon='settings' title='账号' leftIconOnPress={this.toLoginPage}/>
                
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

    buttonGroupA: {
        marginTop: 10
    },

});

const mapStateToProps = state => ({
    name: state.user.name,
})

export default connect(mapStateToProps)(ProfileMainScreen);