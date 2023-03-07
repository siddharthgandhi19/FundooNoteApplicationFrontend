import { createStore, combineReducers } from 'redux';
import { Reducer } from './Reducer';


const reducer = combineReducers({
    Reducer : Reducer
})

const store = createStore(reducer);

export default store;