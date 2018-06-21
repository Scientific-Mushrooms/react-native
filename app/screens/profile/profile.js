import React, { Component } from 'react';
import {  
    View, 
    StyleSheet, 
    ScrollView,
    Text } from 'react-native';

import IconButton from 'IconButton';
import InfoBar from 'InfoBar';
import Header from 'Header';

import {
    RkButton,
    RkText,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';

export class Profile extends React.Component {

    static navigationOptions = {
        title: 'Profile'
    };

    toLoginPage = () => {
        this.props.navigation.navigate('Login')
        alert()
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                
                <ScrollView  style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <InfoBar user={this.props.user}/>

                    <View style={styles.buttonGroupA}>
                        <IconButton title='Settings' onPress={()=>this.props.navigation.navigate('Settings')} icon={FontAwesome.cog}/>
                        <IconButton title='Settings' onPress={() => this.props.navigation.navigate('Settings')} icon={FontAwesome.cog} />
                        <IconButton title='Settings' onPress={() => this.props.navigation.navigate('Settings')} icon={FontAwesome.cog} />
                        <IconButton title='Settings' onPress={() => this.props.navigation.navigate('Settings')} icon={FontAwesome.cog} />
                    </View>

                    <View style={styles.buttonGroupA}>
                        <IconButton title='Setting' onPress={this.toLoginPage} icon={FontAwesome.right} />
                        <IconButton title='Message' onPress={this.toLoginPage} icon={FontAwesome.right} />
                        <IconButton title='233333' onPress={this.toLoginPage} icon={FontAwesome.right} />
                        <IconButton title='233333' onPress={this.toLoginPage} icon={FontAwesome.right} />
                    </View>

                </ScrollView>

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
