import React from 'react';
import {
    Image,
    View,
    TouchableHighlight,
    TextInput,
    Text,
    Dimensions,
} from 'react-native';
import {
    RkText,
    RkStyleSheet,
} from 'react-native-ui-kitten';
import { data } from '../../../data';
import { UIConstants } from '../../../config/appConstants';
const { width } = Dimensions.get('window')


export class ConfessWrite extends React.Component {

    static navigationOptions = {
        title: 'Confess Post',
        header: null,
        tabBarVisible: false,
    };

    constructor(props) {
        super(props);
        let { params } = this.props.navigation.state;
        let id = params ? params.id : 1;
        this.data = data.getArticle(id);
    }

    renderImage(uri) {
        return (
            <View style={styles.grid}>
                <TouchableHighlight 
                    onPress={() => this.props.navigation.navigate('ImageBrowser')}
                    underlayColor='transparent'
                    >
                    <Image style={styles.image} source={{ uri: uri }} />
                </TouchableHighlight>
                <TouchableHighlight 
                    style={styles.dot}
                    underlayColor='transparent'
                    onPress={() => this.props.navigation.navigate('ImageBrowser')}
                    >
                    <Text>x</Text>
                </TouchableHighlight>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.padding}></View>
                <View style={styles.headerContainer}>
                    <TouchableHighlight 
                        onPress={() => this.props.navigation.goBack()} 
                        style={styles.left}
                        underlayColor='transparent'>
                        <RkText style={styles.text}>Back</RkText>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        onPress={() => this.test()} 
                        style={styles.right}
                        underlayColor='transparent'>
                        <RkText style={styles.text}>Post</RkText>
                    </TouchableHighlight>
                </View>
                

                <View style={styles.contentContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='2333333' multiline={true}/>
                    </View>

                    <View style={styles.imageContainer}>
                        {this.props.photos.map((photo) => this.renderImage(photo))}
                        <View style={styles.grid}>
                            <TouchableHighlight 
                                style={styles.choose} 
                                onPress={() => this.props.navigation.navigate('ImageBrowser')}
                                underlayColor='transparent'>
                                <Text style={styles.icon}>+</Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({

    container: {
        flex: 1,
        backgroundColor: theme.colors.screen.base,
        alignItems: 'center',
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

    inputContainer: {
        width: '95%'
    },

    input: {
        width: '100%',
        height: 100,
        backgroundColor: theme.colors.screen.background,
        margintop: 20,
        fontSize: 20
    },

    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: 100,
        backgroundColor: theme.colors.screen.background,
    },

    image: {
        height: '95%',
        width: '95%',
        borderRadius: 10,
    },
    
    grid: {
        width: width / 4,
        height: width / 4,
    },
    
    choose: {
        width: '95%',
        height: '95%',
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        fontSize: 25,
    },

    contentContainer: {
        backgroundColor: theme.colors.screen.background,
        width: '100%',
        alignItems: 'center',
    },

    dot: {
        position: 'absolute',
        right: 5,
        top: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: theme.colors.screen.background,
        opacity: 0.5,
        backgroundColor: 'black',
    },


}));