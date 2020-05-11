import {combineReducers} from 'redux';
import ReadingsReducer from './reducer-readings';

const allReducers = combineReducers({
    readings: ReadingsReducer,
});
export default allReducers;
