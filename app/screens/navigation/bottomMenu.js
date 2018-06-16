import React from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { RkStyleSheet, RkText, RkTheme } from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';


export class BottomMenu extends React.Component {

    constructor(props) {
        super(props);
        this._navigateAction = this._navigate.bind(this);
    }

    _navigate(route) {
        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: route.id })
            ]
        });
        this.props.navigation.dispatch(resetAction)
    }

    render() {

        let menu = MainRoutes.map((route, index) => {
            return (
                <TouchableHighlight
                    style={styles.container}
                    key={route.id}
                    underlayColor={RkTheme.current.colors.button.underlay}
                    activeOpacity={1}
                    onPress={() => this._navigateAction(route)}
                    >
                    <View style={styles.content}>
                        <View style={styles.content}>
                            <RkText rkType='awesome hero' style={styles.arrow}>{route.icon}</RkText>
                            <RkText>{route.title}</RkText>
                        </View>
                    </View>
                </TouchableHighlight>
            )
        });

        return (
            <View style={styles.root}>
                {menu}
            </View>
        )

    }
}

let styles = RkStyleSheet.create(theme => ({

    root: {
        backgroundColor: theme.colors.screen.base,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },

    container: {
        height: 60,
        width: '25%',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border.base,
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    icon: {
        marginRight: 13,
    }

}));