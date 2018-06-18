import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,  Button } from 'react-native';
// import { ImagePicker } from 'expo';
import ClavierSwiper from 'clavier-swiper';
import ImagePicker from '../../components/imagePicker/imagePicker'



async function getLocationAsync() {
    const { Location, Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
        return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    } else {
        throw new Error('Location permission not granted');
    }
}

async function test2() {
    const { Permissions } = Expo;
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
        alert('Hey! You might want to enable notifications for my app, they are good.');
    }
}

async function test1() {
    const { Permissions } = Expo;
    const { status } = await Permissions.getAsync(Permissions.CAMERA);
    if (status !== 'granted') {
        alert('Hey! You might want to enable notifications for my app, they are good.');
    }
}
export class HomeScreen extends Component {
    state = {
        image: null,
        result: null,
    };


    askPermissionsAsync = async () => {
        const { Permissions } = Expo;
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        // you would probably do something to verify that permissions
        // are actually granted, but I'm skipping that for brevity
    };

    useLibraryHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: false,
        });
        this.setState({ result });
    };

    useCameraHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: false,
        });
        this.setState({ result });
    };

    

    render() {
        let { image } = this.state;
        return (
            <View style={styles.mainContainer}>
            <ImagePicker/>
                <Button title="launchCameraAsync" onPress={this.useCameraHandler} />
                <Button
                    title="launchImageLibraryAsync"
                    onPress={this.useLibraryHandler}
                />
                <Text style={styles.paragraph}>
                    {JSON.stringify(this.state.result)}
                </Text>
                {/* <ClavierSwiper/> */}
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                />
                {image &&
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

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

});

