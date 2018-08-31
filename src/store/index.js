import { combineReducers } from 'redux';
import * as Reducers from "./reducers";

const rootReducer = combineReducers({ 
    ...Reducers
});

export default rootReducer;