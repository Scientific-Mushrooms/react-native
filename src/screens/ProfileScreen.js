import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}