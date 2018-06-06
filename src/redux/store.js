import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';


const preloadedState = {

    counter: {
        count: 10,
        factor: 1
    },

    user : {
        name: null,
        post: 0,
        follower: 1,
        following: 3,
    }
}

const store = createStore (
    rootReducer,
    preloadedState
);

export default store;
