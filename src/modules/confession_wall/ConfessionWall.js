import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from 'Header';
import Post from 'Post';
import { Icon } from 'react-native-elements';

export default class ConfessionWall extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>

                <Header leftIcon='md-person-add' type='ionicon'/>

                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.actionButton} onPress={this.props.onPress}>
                        <Icon
                            name='new-message'
                            type='entypo'
                            containerStyle={styles.arrow}
                            size={25}
                            color='#e7e7e8'
                        />
                        <Text style={styles.actionText}>表白墙</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton} onPress={this.props.onPress}>
                        <Icon
                            name='github'
                            type='entypo'
                            containerStyle={styles.arrow}
                            size={25}
                            color='#e7e7e8'
                        />
                        <Text style={styles.actionText}>匿名墙</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <Post/>
                    <Post />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    actionContainer: {
        height: 50,
        flexDirection: 'row'
    },

    actionButton: {
        height: '100%',
        width: '50%',
        backgroundColor: '#b72712',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    scrollContainer: {
        width: '100%',
    },

    actionText: {
        color: '#fff',
        marginLeft: 3
    }

});