import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import AsyncFetchComponent from './component/AsyncFetchComponent';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, AnyAction } from 'redux';
import { rootReducer } from './store';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App message="Hello React + Typescript!" />
        <AsyncFetchComponent />
    </Provider>,
    document.getElementById('root')
);
