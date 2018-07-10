import React, { Component } from 'react';
import {  
    View, 
    StyleSheet, 
    ScrollView,
} from 'react-native';

import IconButton from 'IconButton';
import InfoBar from 'InfoBar';


import {
    RkButton,
    RkText,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';

export class Profile extends Component {

    static navigationOptions = {
        title: 'Profile'
    };


    render() {
        return (
            <View style={styles.mainContainer}>
                
                <ScrollView  style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <InfoBar user={this.props.user}/>

                    <View style={styles.buttonGroupA}>
                        <IconButton title='Settings' onPress={()=>this.props.navigation.navigate('Settings')} icon={FontAwesome.cog}/>
                        <IconButton title='Themes' onPress={() => this.props.navigation.navigate('Themes')} icon={FontAwesome.cog} />
                        <IconButton title='Settings' onPress={() => this.props.navigation.navigate('Settings')} icon={FontAwesome.cog} />
                        <IconButton title='Settings' onPress={() => this.props.navigation.navigate('Settings')} icon={FontAwesome.cog} />
                    </View>

                    <View style={styles.buttonGroupA}>
                        <IconButton title='Settings' onPress={() => this.props.navigation.navigate('Settings')} icon={FontAwesome.cog} />
                        <IconButton title='Themes' onPress={() => this.props.navigation.navigate('Themes')} icon={FontAwesome.cog} />
                        <IconButton title='Settings' onPress={() => this.props.navigation.navigate('Settings')} icon={FontAwesome.cog} />
                        <IconButton title='Settings' onPress={() => this.props.navigation.navigate('Settings')} icon={FontAwesome.cog} />
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
