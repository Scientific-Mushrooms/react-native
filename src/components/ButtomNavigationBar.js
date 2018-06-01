import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


export default class HomeScreen extends Component {
    render() {
      return (
          <View style={styles.barContainer}>
                <View style={styles.flexContainer}>
                    <Button 
                        icon={{ name: 'home', size: 15, color: 'white', top: '10%' }}
                        raised
                        title='11'
                        onPress={() => this.props.navigation.navigate('Profile')}
                        buttonStyle={styles.homeButton}
                    />

                    <Button 
                        icon={{ name: 'add-alarm', size: 15, color: 'white' }}
                        title='22'
                        onPress={() => this.props.navigation.navigate('Profile')}
                        buttonStyle={styles.homeButton}
                    />

                    <Button 
                        icon={{ name: 'add-alarm', size: 15, color: 'white' }}
                        title='33'
                        onPress={() => this.props.navigation.navigate('Profile')}
                        buttonStyle={styles.homeButton}
                    />

                    <Button 
                        icon={{ name: 'add-alarm', size: 15, color: 'white' }}
                        title='44'
                        onPress={() => this.props.navigation.navigate('Profile')}
                        buttonStyle={styles.homeButton}
                    />
  
            </View>
        </View>
      );
    }
}





const styles = StyleSheet.create({

    barContainer: {
        backgroundColor: 'green',
        width: '100%',
        height: '8%',
    },

    flexContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },

    homeButton: {
        height: '100%',
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,

    }
    
  });