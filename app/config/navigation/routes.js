import { FontAwesome } from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    user: state.user.info,
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
                screen: connect(mapStateToProps)(Screens.ImageBrowser),
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
                        screen: connect(mapStateToProps)(Screens.ConfessWrite),
                        children: []
                    },
                ]
            },
            
        ]
    },

    {
        id: 'ChatList',
        title: 'Chat List',
        icon: FontAwesome.envelope,
        screen: Screens.ChatList,
        children: [
            {
                id: 'Chat',
                title: 'Chat',
                screen: Screens.Chat,
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
                id: 'SignUp',
                title: 'Sign Up',
                screen: Screens.SignUp,
                children: []
            },
            {
                id: 'Login',
                title: 'Login',
                screen: connect(mapStateToProps)(Screens.Login),
                children: []
            },

            {
                id: 'Settings',
                title: 'Settings',
                screen: Screens.Settings,
                children: []
            },

            {
                id: 'ProfileSettings',
                title: 'Profile Settings',
                screen: Screens.ProfileSettings,
                children: []
            },

            {
                id: 'Themes',
                title: 'Themes',
                screen: Screens.Themes,
                children: []
            },

        ]
    },

];


let menuRoutes = _.cloneDeep(MainRoutes);


export const MenuRoutes = menuRoutes;


