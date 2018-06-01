import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class ButtonNavigationBar extends Component {

    homeIcon = { name: 'home', size: 30, color: 'white'};
    homeIcon = { name: 'home', size: 30, color: 'white'};
    messageIcon = { name: 'message', size: 30, color: 'white'};
    profileIcon = { name: 'account-circle', size: 30, color: 'white'};

    homeOnPress = () => {
        this.props.navigation.navigate('LOL');
    }

    unknownOnPress = () => {
        this.props.navigation.navigate('Profile');
    }

    messageOnPress = () => {
        this.props.navigation.navigate('Message');
    }

    profileOnPress = () => {
        this.props.navigation.navigate('Profile');
    }

    render() {
      return (
          <View style={styles.barContainer}>
                <View style={styles.flexContainer}>

                <Button
                    icon={this.homeIcon}
                    onPress={this.homeOnPress}
                    containerViewStyle={styles.button}
                />

                <Button
                    icon={this.homeIcon}
                    onPress={this.homeOnPress}
                    containerViewStyle={styles.button}
                />

                <Button
                    icon={this.messageIcon}
                    onPress={this.messageOnPress}
                    containerViewStyle={styles.button}
                />

                <Button
                    icon={this.profileIcon}
                    onPress={this.profileOnPress}
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
        position: 'absolute',
        bottom: 0,
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

  export default withNavigation(ButtonNavigationBar);