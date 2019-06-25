import {
    createStore, compose
} from 'redux'

//ACTIONS
import ACTIONS from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const userLocalStorage = localStorage.getItem('userLogged');

let initialState = {}

if (JSON.parse(userLocalStorage) !== null) {
    initialState = {
        userLogged: JSON.parse(userLocalStorage),
    };
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.USERS.LOGIN:
            //We save the user in localstorage to load it on initial state
            localStorage.setItem('userLogged', JSON.stringify(action.payload));

            return state = {
                ...state,
                userLogged: action.payload
            };

        case ACTIONS.USERS.LOGOUT:
            localStorage.removeItem('userLogged');

            return state = {
                ...state,
                userLogged: undefined
            };

        default:
            return state;
    }
}

const store = createStore(userReducer, composeEnhancers());

export default store;