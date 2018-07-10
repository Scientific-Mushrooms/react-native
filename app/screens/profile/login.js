import React from 'react';
import {
    View,
    Image,
    Keyboard
} from 'react-native';
import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme
} from 'react-native-ui-kitten';

import {FontAwesome} from '../../assets/icons';
import {GradientButton} from '../../components/gradientButton';
import {scaleVertical} from '../../utils/scale';
import { login, addPhoto } from '../../redux/actions/action'

export class Login extends React.Component {

    static navigationOptions = {
        tabBarVisible: false
    };

    constructor(props) {
        super(props);
    }

    ip = 'http://192.168.239.102:8080'

    _login = () => {

        if (this.account == '' || this.password == '') {
            alert('can not be empty');
        } else {
            let form = new FormData();
            form.append("email", this.account);
            form.append("password", this.password);

            this.post(this.ip + '/api/user/login', form).then((result) => {

                if (result.status == 'fail') {
                    alert(result.description);

                } else {
                    this.props.dispatch(login(result.detail));
                    this.props.navigation.navigate('Profile');
                }
            })
        }
    };

    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form })
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }

    account = '';
    password = '';

    onAccountChanged = (newAccount) => {
        this.account = newAccount;
    };

    onPasswordChanged = (newPassword) => {
        this.password = newPassword;
    };

    render() {

        let renderIcon = () => {
            if (RkTheme.current.name === 'light')
                return <Image style={styles.image} source={require('../../assets/images/logo.png')}/>;
            return <Image style={styles.image} source={require('../../assets/images/logoDark.png')}/>
        };

        return (
            <RkAvoidKeyboard 
                style={styles.screen} 
                onStartShouldSetResponder={ (e) => true}
                onResponderRelease={ (e) => Keyboard.dismiss()}
                >

                <View style={styles.header}>
                    {renderIcon()}
                    <RkText rkType='light h1'>React Native</RkText>
                    <RkText rkType='logo h0'>Learn</RkText>
                </View>

                <View style={styles.content}>
                    <View>

                        <RkTextInput 
                            rkType='rounded' 
                            placeholder='email' 
                            onChangeText={this.onAccountChanged}
                            autoCapitalize='none' 
                            autoCorrect={false}
                        />
                        <RkTextInput 
                            rkType='rounded' 
                            placeholder='password' 
                            secureTextEntry={true}
                            onChangeText={this.onPasswordChanged} />

                        <GradientButton 
                            style={styles.save} 
                            rkType='large' 
                            text='LOGIN' 
                            onPress={this._login}
                            />
                    </View>

                    <View style={styles.buttons}>
                        <RkButton style={styles.button} rkType='social'>
                            <RkText rkType='awesome hero'>{FontAwesome.qq}</RkText>
                        </RkButton>
                        <RkButton style={styles.button} rkType='social'>
                            <RkText rkType='awesome hero'>{FontAwesome.weixin}</RkText>
                        </RkButton>
                        <RkButton style={styles.button} rkType='social'>
                            <RkText rkType='awesome hero'>{FontAwesome.steam}</RkText>
                        </RkButton>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.textRow}>
                            <RkText rkType='primary3'>Don’t have an account?</RkText>
                            <RkButton rkType='clear' onPress={() => this.props.navigation.navigate('SignUp')}>
                                <RkText rkType='header6'> Sign up now </RkText>
                            </RkButton>
                        </View>
                    </View>
                </View>
            </RkAvoidKeyboard>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({

    screen: {
        padding: scaleVertical(16),
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: theme.colors.screen.background
    },

    image: {
        height: scaleVertical(77),
        resizeMode: 'contain'
    },

    header: {
        paddingBottom: scaleVertical(10),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    content: {
        justifyContent: 'space-between'
    },

    save: {
        marginVertical: 20
    },

    buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24),
        marginHorizontal: 24,
        justifyContent: 'space-around',
    },

    textRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    button: {
        borderColor: theme.colors.border.solid
    },

    footer: {}

}));