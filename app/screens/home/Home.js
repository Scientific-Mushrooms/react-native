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

    ip = 'http://localhost:8080'

    _lget = () => {

        
            let form = new FormData();
        form.append("date", JSON.stringify(new Date()));
            console.log(JSON.stringify(form))

                this.post(this.ip + '/api/confessPost/get', form).then((result) => {
                alert(JSON.stringify(result));
                // if (result.status == 'fail') {
                //     alert(result.description);

                // } else {
                //     this.props.dispatch(login(result.detail));
                //     this.props.navigation.navigate('Profile');
                // }
            })
        
    };

    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form })
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }

    date = new Date();

    render() {

        return (
            <View style={styles.mainContainer}>
                <Text>{JSON.stringify(this.props.photos)}</Text>

                <Button
                    title="gggggggg"
                    onPress={() => this.setState({ modalVisible: true })} />
                <Button
                    title="confess"
                    onPress={this._lget} />


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

