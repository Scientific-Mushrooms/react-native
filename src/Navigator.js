import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import MessageScreen from './screens/MessageScreen'
import ProfileScreen from './screens/profile/ProfileMainScreen'
import LoginScreen from './screens/profile/LoginScreen'


const ProfileNavigator = createStackNavigator({
    Home: ProfileScreen,
    Login: LoginScreen,
});


const AppNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Message: MessageScreen,
        Profile: ProfileNavigator,
    }, 
    {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'blue',
        },
    }
);






export { AppNavigator, ProfileNavigator };