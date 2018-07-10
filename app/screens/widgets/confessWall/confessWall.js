import React from 'react';
import {
    FlatList,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import {
    RkText,
    RkCard, RkStyleSheet
} from 'react-native-ui-kitten';
import {SocialBar} from '../../../components';
import { FontAwesome } from '../../../assets/icons';
import { Gallery } from '../../../components/gallery';

let moment = require('moment');

const articles = [{
    'id': 3,
    'avatar': require('../../../data/img/photo1.png'),
    'photo': require('../../../data/img/photo1.png'),
    'type': 'article',
    'time': -300,
    'author': 'Clavier',
    'text': 'Ferns are a very old group of plants. They first appeared on Earth in the middle Devonian Era about 360 million years ago, just before the Carboniferous Era. Most of the modern fern families we see today first appeared in the Late Cretaceous about 45 or 50 million years ago – during the age of the dinosaurs!',
    'comments': [{
        'id': 1,
        'text': 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
        'time': 0
    }, {
        'id': 2,
        'text': 'Quisque ut erat. Curabitur gravida nisi at nibh.',
        'time': -311
    }, {
        'id': 3,
        'text': 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
        'time': -622
    }, {
        'id': 4,
        'text': 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        'time': -933
    }, {
        'id': 5,
        'text': 'In hac habitasse platea dictumst.',
        'time': -1244
    }, {
        'id': 6,
        'text': 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        'time': -1555
    }, {
        'id': 7,
        'text': 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
        'time': -1866
    }, {
        'id': 8,
        'text': 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        'time': -2177
    }]
}, {
    'id': 2,
        'photo': require('../../../data/img/photo2.png'),
    'type': 'article',
    'time': -1373,
    'header': 'Balloon Trip',
    'text': 'Mostly it’s about hot air - for without that balloons are just big empty bags with baskets on the bottom. ' +
        'The Montgolfier brothers had great hopes when they made the first manned flight. ' +
        'They thought balloons would take off as an available means of commercial flight. ' +
        'Instead, they have remained the province of sport, adventure and enjoyment. ' +
        'Modern balloons are a lot more sophisticated than their ancestors, ' +
        'but they still retain the essential characteristics which makes them so attractive. ' +
        'A plane is claustrophobic and very noisy. Balloons are so gentle and majestic and silent when the burner’s not working.',
    'comments': []
}, 
];


export class ConfessWall extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
        title: 'Confess Wall'
    };

    constructor(props) {
        super(props);
        this.data = articles;
        this.renderItem = this._renderItem.bind(this);
        this.renderHeader = this._renderHeader.bind(this);
    }

    _keyExtractor(post, index) {
        return post.id;
    }

    _renderItem(info) {
        return (
            <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate('ConfessPost', {id: info.item.id})}>
                <RkCard style={styles.card}>
                   
                    <View style={styles.topContainer}>
                        <Image rkCardImg source={info.item.photo} style={styles.avatar} />
                        <View style={styles.rightContainer}>
                            <RkText rkType='header4'>{info.item.author}</RkText>
                            <RkText rkType='secondary2 hintColor'>{moment().add(info.item.time, 'seconds').fromNow()}</RkText>
                        </View>
                    </View>
                    

                    <RkText rkType='primary3 bigLine' style={styles.text}>{info.item.text}</RkText>
                    <Gallery items={[info.item.photo]} />
                    <View style={styles.footer} rkCardFooter>
                    <SocialBar/>
                    </View >
                </RkCard>
            </TouchableOpacity>
        )
    }

    _renderHeader() {
        return (
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('ConfessWrite')}
                    >
                    <RkText rkType='awesome icon'>{FontAwesome.paintBrush}   </RkText>
                    <RkText>表白墙</RkText>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('ConfessWrite')}
                    >
                    <RkText rkType='awesome icon'>{FontAwesome.paw}   </RkText>
                    <RkText>匿名墙</RkText>
                </TouchableOpacity >
            </View>
        )
    } 

    render() {
        return (
            <FlatList
                data={this.data}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.container}
                ListHeaderComponent={this.renderHeader}
                />
        )
    }
}

let styles = RkStyleSheet.create(theme => ({

    container: {
        backgroundColor: theme.colors.screen.scroll,
    },

    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row'
    },

    button: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },

    card: {
        marginBottom: 8
    },

    footer: {
        paddingTop: 16
    },

    time: {
        marginTop: 5
    },

    text: {
        marginLeft: 5,
        marginRight: 5
    },

    images: {
        marginLeft: 5,
        marginRight: 5
    },

    topContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 5,
        marginRight: 10
    },

    rightContainer: {
        flexDirection: 'column'
    }

}));