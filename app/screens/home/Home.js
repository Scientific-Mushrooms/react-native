import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';

// import IconInput from 'IconInput'
// import IconButton from 'IconButton'
import InfoBar from 'InfoBar';
// import ColorButton from 'ColorButton'

import Swiper from 'react-native-swiper';

export class HomeScreen extends Component {
    username = '';
    password = '';
    static navigationOptions = {
        header: null,
    };

    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
    };

    click = () => {
        alert("11111");
    }

    render() {
        return (
            <View style={styles.mainContainer}>

                {/* <IconInput 
                    icon='settings' 
                    placeholder='username' 
                    onChangeText={this.onUsernameChanged}
                    />
                    
                <IconInput 
                    icon='settings' 
                    placeholder='username' 
                    onChangeText={this.onUsernameChanged}
                    /> */}

                <Text>This is home page</Text>
                <InfoBar name='admin'/>
                <Text>{this.username}</Text>
              
                <Swiper 
                    style={styles.swiper} 
                    showsButtons={false}
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={4} 
                    paginationStyle={{ bottom: 100 }} 
                    >
                    <View style={styles.slide1}>
                        <Image style={styles.image} source={require('../../images/avatars/test.png')} />
                    </View>
                    <View style={styles.slide2}>
                        <Image style={styles.image} source={require('../../images/avatars/test.png')} />
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.image} source={require('../../images/avatars/test.png')} />
                    </View>
                </Swiper>

                {/* <IconButton title='test' onPress={this.click}/> */}
                {/* <ColorButton title='33' onPress={this.click}/> */}
            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainContainer: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    image: {
        height: 150,
        width: 300,
    },

    swiper: {
       
    },


});

