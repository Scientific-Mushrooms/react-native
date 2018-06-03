import { createStackNavigator, 
         createSwitchNavigator,} from 'react-navigation';

import HomeScreen from '../screens/home/HomeScreen'
import MessageScreen from '../screens/message/MessageScreen'
import ProfileScreen from '../screens/profile/ProfileMainScreen'

import LoginScreen from '../screens/profile/LoginScreen'
import SignupScreen from '../screens/profile/SignupScreen'


const ProfileNavigator = createStackNavigator({
    Home: ProfileScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
});

const AppNavigator = createSwitchNavigator(
    {
        Home: HomeScreen,
        Message: MessageScreen,
        Profile: ProfileNavigator,
        HomePage: HomeScreen
    }, 
    {
       
    }
);

export { AppNavigator, ProfileNavigator };