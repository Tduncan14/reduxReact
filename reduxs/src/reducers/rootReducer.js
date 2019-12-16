// this the rootReducer. The store manager for all the reducers
// to make a rootReducer// get a method from redux called combinedReducers
import frozenReducer from './reducers';
import{combineReducers} from 'redux';
//combine reducers and hand it a object
// each key in combineRedicer will be a peice of state in the reduxstore
// each value, will be the value of that piece of state in the store

const rootReducer = combineReducers({

    frozen:frozenReducer
})

export default rootReducer;