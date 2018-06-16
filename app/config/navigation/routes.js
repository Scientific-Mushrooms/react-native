import { FontAwesome } from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    name: state.user.name,
    count: state.counter.count
})


export const MainRoutes = [

    {
        id: 'Home',
        title: 'Home',
        icon: FontAwesome.home,
        screen: Screens.HomeScreen,
        children: []
    },

    {
        id: 'Widgets',
        title: 'Widgets',
        icon: FontAwesome.cube,
        screen: Screens.Widgets,
        children: [
            {
                id: 'ProfileV1',
                title: 'User Profile V1',
                screen: Screens.ProfileV1,
                children: []
            },
            {
                id: 'ProfileV2',
                title: 'User Profile V2',
                screen: Screens.ProfileV2,
                children: []
            },
            {
                id: 'ProfileV3',
                title: 'User Profile V3',
                screen: Screens.ProfileV3,
                children: []
            },
            {
                id: 'ProfileSettings',
                title: 'Profile Settings',
                screen: Screens.ProfileSettings,
                children: []
            },
            {
                id: 'Notifications',
                title: 'Notifications',
                screen: Screens.Notifications,
                children: []
            },
            {
                id: 'Contacts',
                title: 'Contacts',
                screen: Screens.Contacts,
                children: []
            },
            {
                id: 'Feed',
                title: 'Feed',
                screen: Screens.Feed,
                children: []
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
            {
                id: 'Articles3',
                title: 'Article List V3',
                screen: Screens.Articles3,
                children: []
            },
            {
                id: 'Articles4',
                title: 'Article List V4',
                screen: Screens.Articles4,
                children: []
            },
            {
                id: 'Blogposts',
                title: 'Blogposts',
                screen: Screens.Blogposts,
                children: []
            },
            {
                id: 'Article',
                title: 'Article View',
                screen: Screens.Article,
                children: []
            }
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


