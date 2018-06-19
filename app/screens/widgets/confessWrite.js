import React from 'react';
import {
    ScrollView,
    Image,
    View,
    TouchableOpacity,
    TouchableHighlight,
    TextInput
} from 'react-native';
import {
    RkCard,
    RkText,
    RkStyleSheet,
    RkTextInput,
} from 'react-native-ui-kitten';
import { data } from '../../data';
import { Avatar } from '../../components';
import { SocialBar } from '../../components';
import { UIConstants } from '../../config/appConstants';

let moment = require('moment');


export class ConfessWrite extends React.Component {

    static navigationOptions = {
        title: 'Confess Post',
        header: null
    };

    constructor(props) {
        super(props);
        let { params } = this.props.navigation.state;
        let id = params ? params.id : 1;
        this.data = data.getArticle(id);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.padding}></View>
                <View style={styles.headerContainer}>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.left}>
                        <RkText style={styles.text}>Back</RkText>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.test()} style={styles.choose} style={styles.right}>
                        <RkText style={styles.text}>Post</RkText>
                    </TouchableHighlight>
                </View>


                
                <View>

                    <TextInput 
                        style={styles.input}
                        placeholder='2333333'
                        multiline={true}
                        />

                        
                </View>
                
            </View>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({

    container: {
        flex: 1,
        backgroundColor: theme.colors.screen.background
    },

    padding: {
        height: UIConstants.StatusbarHeight,
        width: '100%',
        backgroundColor: theme.colors.screen.feature
    },

    headerContainer: {
        height: UIConstants.AppbarHeight,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.screen.feature
    },

    left: {
        position: 'absolute',
        left: 15
    },

    right: {
        position: 'absolute',
        right: 15
    },

    text: {
        color: theme.colors.text.button
    },

    input: {
        width: '100%',
        height: 100,
        backgroundColor: theme.colors.screen.background,
        margintop: 20,
        marginHorizontal: 15,
        fontSize: 20
    },

    root: {
        backgroundColor: theme.colors.screen.base
    },

    title: {
        marginBottom: 5
    },

}));