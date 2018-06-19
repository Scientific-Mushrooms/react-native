import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    CameraRoll,
    FlatList,
    Dimensions,
    Button,
    TouchableHighlight,
    Image
} from 'react-native';
import { RkText, RkButton, RkStyleSheet } from 'react-native-ui-kitten';
import { UIConstants } from '../../config/appConstants';

const { width } = Dimensions.get('window')
import { addPhoto } from '../../redux/actions/action';


export default class ImageBrowser extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
        title: 'Confess Wall',
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            selected: {},
            after: null,
            has_next_page: true,
        }
    }

    componentDidMount() {
        this.getPhotos()
    }

    getPhotos = () => {
        let params = { first: 50, mimeTypes: ['image/jpeg'] };
        if (this.state.after) params.after = this.state.after
        if (!this.state.has_next_page) return
        CameraRoll
            .getPhotos(params)
            .then(this.processPhotos)
    }

    test = () => {
        let selectedPhotos = this.state.photos.filter((item, index) => {
            return (this.state.selected[index])
        });
        this.props.dispatch(addPhoto(selectedPhotos))
        this.props.navigation.goBack()
    }

    selectImage = (index) => {
        let newSelected = {...this.state.selected};
        if (newSelected[index]) {
            delete newSelected[index];
        } else {
            newSelected[index] = true
        }
        if (Object.keys(newSelected).length > this.props.max) return;
        if (!newSelected) newSelected = {};
        this.setState({ selected: newSelected })
    }

    processPhotos = (r) => {
        if (this.state.after === r.page_info.end_cursor) return;
        let uris = r.edges.map(i=> i.node).map(i=> i.image).map(i=>i.uri)
        this.setState({
            photos: [...this.state.photos, ...uris],
            after: r.page_info.end_cursor,
            has_next_page: r.page_info.has_next_page
        });
    }

    renderImageTile = ({item, index}) => {
        let selected = this.state.selected[index] ? true : false
        if (!item) return null;
        return (  
            <View style={styles.imageContainer}>
                <View style={index%3 === 1 ? styles.midCol : index%3 === 0 ? styles.leftCol : styles.rightCol}>
                    <TouchableHighlight onPress={() => this.selectImage(index)} >
                        <Image style={[{borderWidth: selected ? 2 : 0 }, styles.image]} source={{ uri: item }} />
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={selected? styles.selectedDot : styles.dot} 
                        onPress={() => this.selectImage(index)}
                        underlayColor='transparent'
                        >
                        <RkText style={styles.dotText}>{index}</RkText>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

    renderImages() {
        return (
            <FlatList
                data={this.state.photos}
                numColumns={3}
                renderItem={this.renderImageTile}
                keyExtractor={(_,index) => index}
                onEndReached={()=> {this.getPhotos()}}
                onEndReachedThreshold={0.5}
                initialNumToRender={24}
                ListHeaderComponent={<View style={styles.topPadding}></View>}
                />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.padding}></View>
                <View style={styles.headerContainer}>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.left}>
                        <RkText style={styles.text}>Back</RkText>
                    </TouchableHighlight>
                    <RkText style={styles.text}>{Object.keys(this.state.selected).length} selected</RkText>
                    <TouchableHighlight onPress={() => this.test()} style={styles.choose} style={styles.right}>
                        <RkText style={styles.text}>Choose</RkText>
                    </TouchableHighlight>
                </View>

                {this.renderImages()}
            </View>
        );
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

    imageContainer: { 
        width: width / 3, 
        height: width / 3
    },

    image: {
        width: '100%', 
        height: '100%',
        borderColor: theme.colors.screen.feature,
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

    layoutContainer: {
        width: '95%',
        height: '95%',
        position: 'absolute'
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

    selectedDot: {
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
        opacity: 1, 
        backgroundColor: theme.colors.screen.feature,
    },

    dotText: {
        fontSize: 13,
        color: theme.colors.screen.background,
    },

    leftCol: {
        width: '95%',
        height: '95%',
        position: 'absolute',
        left: 0,
    },

    midCol: {
        width: '95%',
        height: '95%',
        position: 'absolute',
        left: '2.5%',
    },

    rightCol: {
        width: '95%',
        height: '95%',
        position: 'absolute',
        right: 0
    },

    topPadding: {
        height: 10,
    }

}));
