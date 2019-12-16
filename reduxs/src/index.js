import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers/rootReducer';

// In order to wire up a redux/react app. we need react-redux.
//We need the provdier react compoonent,to be around everything.


//2 create the redux store, so that redux exists.and the provider has a store.


//reducers populate the store
// always start with rootReducer

//make reducers to hand to the rootReducer
//create the store and pass it the rootreducer made up reducers


const theStore = createStore(rootReducer)
    

ReactDOM.render(<Provider store={theStore}>
    <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
