import { combineReducers } from 'redux';

import counter from './reducers/counter'
import user from './reducers/login'

export default combineReducers({
    counter,
    user,
});