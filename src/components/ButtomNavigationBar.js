import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


export default class HomeScreen extends Component {

    homeIcon = { name: 'home', size: 30, color: 'white'};
    homeIcon = { name: 'home', size: 30, color: 'white'};
    messageIcon = { name: 'message', size: 30, color: 'white'};
    profileIcon = { name: 'account-circle', size: 30, color: 'white'};
    render() {
      return (
          <View style={styles.barContainer}>
                <View style={styles.flexContainer}>

                <Button
                    icon={this.homeIcon}
                    onPress={() => this.props.navigation.navigate('Profile')}
                    containerViewStyle={styles.button}
                />

                <Button
                    icon={this.homeIcon}
                    onPress={() => this.props.navigation.navigate('Profile')}
                    containerViewStyle={styles.button}
                />

                <Button
                    icon={this.messageIcon}
                    onPress={() => this.props.navigation.navigate('Profile')}
                    containerViewStyle={styles.button}
                />

                <Button
                    icon={this.profileIcon}
                    onPress={() => this.props.navigation.navigate('Profile')}
                    containerViewStyle={styles.button}
                />
                   
            </View>
        </View>
      );
    }
}





const styles = StyleSheet.create({

    barContainer: {
        width: '100%',
        height: '8%',
    },

    flexContainer: {
        flex: 1,
        flexDirection: 'row',
    },

    button: {
        height: '100%',
        width: '25%',
        backgroundColor: 'pink',
        marginLeft: 0,
        marginRight: 0,
    },
    
  });