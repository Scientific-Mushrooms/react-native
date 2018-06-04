/**
 * @providesModule IconInput
 */

import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

import { Icon } from 'react-native-elements'


export default class iconInput extends Component {

    render() {
        return (
            <View style={styles.container} onPress={this.props.onPress}>
                <View style={styles.middleContainer}>
                    <Icon name={this.props.icon} containerStyle={styles.icon} size={20} color='#8f8e94' />
                    <TextInput
                        style={styles.input}
                        onChangeText={this.props.onChangeText}
                        placeholderTextColor={'#bdbdbe'}
                        placeholder={this.props.placeholder}
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    middleContainer: {
        flexDirection: 'row',
        width: '95%',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e2e2e3',
        alignItems: 'center',
    },

    icon: {
        height: 40,
        width: 40,
    },

    input: {
        fontSize: 20,
        color: '#323233',
    },

});
