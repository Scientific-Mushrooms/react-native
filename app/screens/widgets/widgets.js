import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import {
  RkText,
  RkButton,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/navigation/routes';
import _ from 'lodash';

export class Widgets extends React.Component {

    static navigationOptions = {
        title: 'Favourites'
    };

    constructor(props) {
        super(props);
        this.state = {dimensions: undefined}
    };

    _onLayout = event => {
        if (this.state.height)
            return;
        let dimensions = event.nativeEvent.layout;
        this.setState({dimensions})
    };


    render() {
        let navigate = this.props.navigation.navigate;
        let items = <View/>;
        if (this.state.dimensions) {
            let size = this.state.dimensions.width / 3;
            items = _.find(MainRoutes, { id: 'Widgets' }).children.map(function (route, index) {
                return (
                    <RkButton rkType='tile'
                        style={{height: size, width: size}}
                        key={index}
                        onPress={() => { navigate(route.id) }}
                        >
                        <RkText style={styles.icon} rkType='awesome icon'>{route.icon}</RkText>
                        <RkText rkType='small'>{route.title}</RkText>
                    </RkButton>
                )
            });

         
        }

      return (
          <ScrollView
              style={styles.root}
              onLayout={this._onLayout}
              contentContainerStyle={styles.rootContainer}>
              {items}
          </ScrollView>
      );
    }
}

let styles = RkStyleSheet.create(theme => ({

    root: {
        backgroundColor: theme.colors.screen.base
    },

    rootContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    icon: {
        marginBottom: 16
    }

}));