import {combineReducers} from 'redux'
import cardItems from "./reducers";
export default combineReducers({
    cardItems // we can merge here all reducer
});