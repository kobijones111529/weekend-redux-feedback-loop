import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { feedback } from './redux/reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const store = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
