import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableHighlight,
} from 'react-native';
const { width } = Dimensions.get('window')

class ImageTile extends React.PureComponent {

    render() {
        let { item, index, selected, selectImage } = this.props;
        if (!item) return null;
        return (
            <TouchableHighlight
                style={{ marginTop: 5, width: width / 3, height: width / 3}}
                underlayColor='transparent'
                onPress={() => selectImage(index)}
                >

            
            <Image
                style={{ width: '95%', height: '95%', borderWidth: selected ? 2 : 0}}
                source={{uri: item}}
                />
   
            </TouchableHighlight>
        )
    }
}
export default ImageTile;


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  header: {
    height: 50,
    width: width,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  },

  back: { width: width / 3, height: width / 3, marginTop: 5 },

  dot: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: 'black'
  }

})

