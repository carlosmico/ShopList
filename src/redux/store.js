import {createStore} from 'redux'

//ACTIONS
import ACTIONS from './actions'

const initialState = {
    userLogged = false,
    user={}
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case ACTIONS.USERS.LOGIN:   
        return state;
        
        default:
            return state;
    }
}

const store = createStore(userReducer);

export default store;