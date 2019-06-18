import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//REACT REDUX
import { Provider } from 'react-redux'

//REDUX STORE
import STORE from './redux/store'

ReactDOM.render(
    <Provider store={STORE}>
        <App />
    </Provider>,
    document.getElementById('root'));
