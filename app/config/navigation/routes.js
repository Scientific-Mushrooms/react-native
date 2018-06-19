import { FontAwesome } from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';
import { connect } from 'react-redux';
import ImageBrowser from '../../components/imagePicker/ImageBrowser';

const mapStateToProps = state => ({
    name: state.user.name,
    count: state.counter.count,
    photos: state.photos.photos
})

export const MainRoutes = [

    {
        id: 'Home',
        title: 'Home',
        icon: FontAwesome.home,
        screen: connect(mapStateToProps)(Screens.HomeScreen),
        children: [
            {
                id: 'ImageBrowser',
                title: 'Confess Post',
                screen: connect(mapStateToProps)(ImageBrowser),
                children: []
            },
        

           
        ]
    },

    {
        id: 'Widgets',
        title: 'Widgets',
        icon: FontAwesome.cube,
        screen: Screens.Widgets,
        children: [
            {
                id: 'ConfessWall',
                title: 'Confess Wall',
                icon: FontAwesome.home,
                screen: Screens.ConfessWall,
                children: [
                    {
                        id: 'ConfessPost',
                        title: 'Confess Post',
                        screen: Screens.ConfessPost,
                        children: []
                    },
                    {
                        id: 'ConfessWrite',
                        title: 'Confess Write',
                        screen: Screens.ConfessWrite,
                        children: []
                    },
                ]
            },
            
        ]
    },

    {
        id: 'OtherMenu',
        title: 'Message',
        icon: FontAwesome.envelope,
        screen: Screens.HomeScreen,
        children: [
            {
                id: 'Articles1',
                title: 'Article List V1',
                screen: Screens.Articles1,
                children: []
            },
            {
                id: 'Articles2',
                title: 'Article List V2',
                screen: Screens.Articles2,
                children: []
            },
            {
                id: 'Profile',
                title: 'Article List V2',
                screen: Screens.Profile,
                children: []
            },
        ]
    },

    
    {
        id: 'Profile',
        title: 'Profile',
        icon: FontAwesome.user,
        screen: connect(mapStateToProps)(Screens.Profile),
        children: [
            {
                id: 'GridV1',
                title: 'Grid Menu V1',
                screen: Screens.GridV1,
                children: []
            },
            {
                id: 'SignUp',
                title: 'Sign Up',
                screen: Screens.SignUp,
                children: []
            },
            {
                id: 'Login',
                title: 'Login',
                screen: Screens.Login,
                children: []
            },

            {
                id: 'Login',
                title: 'Login',
                screen: Screens.Login,
                children: []
            },

            {
                id: 'Settings',
                title: 'Settings',
                screen: Screens.Settings,
                children: []
            },

        ]
    },

];


let menuRoutes = _.cloneDeep(MainRoutes);


export const MenuRoutes = menuRoutes;


