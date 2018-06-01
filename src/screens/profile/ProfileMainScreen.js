import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import BottomNavigationBar from '../../components/ButtomNavigationBar'


export default class ProfileMainScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.mainContainer}>


                {/* <Button
                    title="Go to login"
                    onPress={() => {this.props.navigation.navigate('Login')}}
                /> */}
                <BottomNavigationBar/>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainContainer: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

});
