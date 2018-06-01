import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    Image,
    AsyncStorage,
    Button,
} from 'react-native'
import BottomNavigationBar from '../../components/ButtomNavigationBar'


export default class ProfileMainScreen extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
                <Button
                    title="Go to login"
                    onPress={() => {this.props.navigation.navigate('Login')}}
                />
                <BottomNavigationBar/>
            </View>
        );
    }
}