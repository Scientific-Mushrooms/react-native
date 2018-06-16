import React, { Component } from 'react';
import {  
    View, 
    StyleSheet, 
    ScrollView,
    Text } from 'react-native';

// import BottomNavigationBar from 'BottomNavigationBar';
import IconButton from 'IconButton';
import InfoBar from 'InfoBar';
import Header from 'Header';
import { GradientButton } from '../../components/gradientButton';
import {
    RkButton,
    RkText,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';

export class ProfileMainScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    toLoginPage = () => {
        this.props.navigation.navigate('Login')
        alert()
    }

    render() {
        return (
            <View style={styles.mainContainer}>

                <Header leftIcon={FontAwesome.google} title='账号' leftIconOnPress={this.toLoginPage}/>
                
                <ScrollView  style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <InfoBar name={this.props.name}/>

                    <View style={styles.buttonGroupA}>
                    <Text>{this.props.count}</Text>
                        <RkButton rkType='clear' onPress={() => this.props.navigation.navigate('SignUp')}>
                            <RkText rkType='header6'> Sign up now </RkText>
                        </RkButton>
                        <IconButton title='Setting' onPress={this.toLoginPage} icon={FontAwesome.right}/>
                        <IconButton title='Message' onPress={this.toLoginPage} icon={FontAwesome.right}/>
                        <IconButton title='233333' onPress={this.toLoginPage} icon={FontAwesome.right}/>
                        <IconButton title='233333' onPress={this.toLoginPage} icon={FontAwesome.right}/>
                        <GradientButton
                            style={styles.save}
                            rkType='large'
                            text='LOGIN'
                            onPress={() => this.props.navigation.navigate('SocialMenu')}
                        />
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
