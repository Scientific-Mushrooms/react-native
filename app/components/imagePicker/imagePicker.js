import React from 'react';
import { StyleSheet, TouchableOpacity, View, Button, ScrollView, Image, Text, Modal} from 'react-native';
import ImageBrowser from './ImageBrowser';
import ImageViewer from 'react-native-image-zoom-viewer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    name: state.user.name,
    count: state.counter.count,
    photos: state.photos.photos
})

const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // You can pass props to <Image />.
    props: {

    }
}, {
    props: {
        // Or you can set source directory.
        source: require('../../images/avatars/test.png')
    }
}]



export default class ImagePicker extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
        title: 'Confess Wall'
    };

    constructor(props) {
        super(props);
        this.state = {
            imageBrowserOpen: false,
            photos: [],
            index: 0,
            modalVisible: false
        }
    }



    imageBrowserCallback = (callback) => {
        callback.then((photos) => {
            console.log(photos)
            this.setState({
                imageBrowserOpen: false,
                photos
            })
        }).catch((e) => console.log(e))
    }

    renderImage(item, i) {
        return (
            <TouchableOpacity onPress={()=>this.setState({modalVisible: true})}>
                <Image style={styles.image} source={{uri: item.file}} key={i} />
            </TouchableOpacity>
        )
    }

    render() {

        if (this.state.imageBrowserOpen) {
            return(<ImageBrowser max={9} callback={this.imageBrowserCallback}/>);
        }

        return (
            <View style={styles.container}>

                <Modal visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={() => this.setState({ modalVisible: false })}>
                    <ImageViewer imageUrls={images}
                        onClick={() => this.setState({ modalVisible: false })} />
                </Modal>
                

                {this.state.photos.map((item, i) => this.renderImage(item, i))}
                <TouchableOpacity
                    onPress={() => this.setState({ imageBrowserOpen: true })}
                    style={styles.choose}
                    >
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
    },

    image: {
        height: 80,
        width: 80,
        marginLeft: 10,
        marginTop: 10,
    },

    choose: {
        height: 80,
        width : 80,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
    },

    plus: {
        fontSize: 60,
        backgroundColor: 'green',
    }

});
