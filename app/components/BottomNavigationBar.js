

/**
 * @providesModule BottomNavigationBar
 */


import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class BottomNavigationBar extends Component {

    homeIcon = { name: 'home', size: 30, color: 'white'};
    homeIcon = { name: 'home', size: 30, color: 'white'};
    messageIcon = { name: 'message', size: 30, color: 'white'};
    profileIcon = { name: 'account-circle', size: 30, color: 'white'};

    homeOnPress = () => {
        this.props.navigation.navigate('HomePage');
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


                <TouchableHighlight style={styles.button} onPress={this.homeOnPress}>
                      <Icon
                          name='home'
                          type='feather'
                          containerStyle={styles.arrow}
                          size={25}
                          color='#666666'
                      />
                </TouchableHighlight>

                  <TouchableHighlight style={styles.button} onPress={this.homeOnPress}>
                      <Icon
                          name='message-square'
                          type='feather'
                          containerStyle={styles.arrow}
                          size={25}
                          color='#666666'
                      />
                  </TouchableHighlight>

                  <TouchableHighlight style={styles.button} onPress={this.messageOnPress}>
                      <Icon
                          name='wall'
                          type='material-community'
                          containerStyle={styles.arrow}
                          size={25}
                          color='#666666'
                      />
                  </TouchableHighlight>

                  <TouchableHighlight style={styles.button} onPress={this.profileOnPress}>
                      <Icon
                          name='user'
                          type='feather'
                          containerStyle={styles.arrow}
                          size={25}
                          color='#666666'
                      />
                  </TouchableHighlight>   
                   
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
        backgroundColor: '#f3f3f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

export default withNavigation(BottomNavigationBar);