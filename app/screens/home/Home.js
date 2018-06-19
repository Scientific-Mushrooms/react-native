import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,  Button, ScrollView } from 'react-native';
// import { ImagePicker } from 'expo';
import ClavierSwiper from 'clavier-swiper';
import ImagePicker from '../../components/imagePicker/imagePicker'


import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { addPhoto } from '../../redux/actions/action';



const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // You can pass props to <Image />.
    props: {
        // headers: ...
    }
}, {
    props: {
        // Or you can set source directory.
        source: require('../../images/avatars/test.png')
    }
}]


export class HomeScreen extends Component {

    static navigationOptions = {
        tabBarVisible: false,
        title: 'Confess Wall',
        headerLeft: <Text>23</Text>
    };
    
    state = {
        index: 0,
        modalVisible: false
    };
    

    render() {

        return (
            <View style={styles.mainContainer}>
                <Text>2233s{JSON.stringify(this.props.photos)}</Text>
            <ImagePicker/>
            
                <Button
                    title="Choosedsfadsf"
                    onPress={() => this.props.dispatch(addPhoto( {sudh: "asdasd"} ))}/>


                <View style={{
                    padding: 10
                }}>

                    <Modal visible={this.state.modalVisible}
                        transparent={true}
                        onRequestClose={() => this.setState({ modalVisible: false })}>
                        <ImageViewer imageUrls={images}
                            onClick={() => this.setState({ modalVisible: false })} />
                    </Modal>

                </View>



            </View>
     
        );
    }

    

    _pickImage = async () => {
        test1()
        test2()
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
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
    }


});

