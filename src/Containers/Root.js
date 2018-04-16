import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../Reducers/authReducer'
// Add reducers from Reducer folder

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    // Add reducers from Reducer folder
})

let store = createStore(
    rootReducer, /* preloadedState */
    composeWithDevTools(applyMiddleware(thunk))
);

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
)
