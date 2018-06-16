import { combineReducers } from 'redux';

import counter from './reducers/counter'
import user from './reducers/userReducer'

export default combineReducers({
    counter,
    user,
});