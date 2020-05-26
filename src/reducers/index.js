import { combineReducers } from 'redux';

import noteReducer from './note';
import loginReducer from './isLoggedIn';

const namedReducers = () => {
    return {
        notes: noteReducer,
        login: loginReducer,
    }
}

const rootReducer = combineReducers(namedReducers());

export default rootReducer;