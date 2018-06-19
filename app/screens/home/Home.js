import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity} from 'react-native';



import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';


const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    props: {
    }
}, {
    props: {
        source: require('../../images/avatars/test.png')
    }
}]


export class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
    };
    
    state = {
        index: 0,
        modalVisible: false,
        count: 1,
        modalVisible: false
    };
    

    renderImage(uri) {
        return (
            <Image style={styles.image} source={{ uri: uri }}/>
        )
    }

    render() {

        return (
            <View style={styles.mainContainer}>
                <Text>{JSON.stringify(this.props.photos)}</Text>

                {/* {this.props.photos.map((photo) => this.renderImage(photo))} */}
  
                <Button
                    title="Choosedsfadsf"
                    onPress={() => this.props.navigation.navigate('ImageBrowser')}/>
                <Button
                    title="gggggggg"
                    onPress={() => this.setState({ modalVisible: true })} />
                <Button
                    title="go to write"
                    onPress={() => this.props.navigation.navigate('ConfessWrite')} />

                <Modal visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={() => this.setState({ modalVisible: false })}>
                    <ImageViewer imageUrls={images}
                        onClick={() => this.setState({ modalVisible: false })} />
                </Modal>
            </View>
     
        );
    }

    


}


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    contain: {
        height: 150,
        width: 100,
    },

    test: {
        width: 200,
        height: 200,
    },

    image: {
        height:100,
        width:100,
    }


});

