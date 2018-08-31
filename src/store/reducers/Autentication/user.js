import { USER_LOGIN_SUCCESS, USER_LOGOUT, CREATE_NEW_USER } from '../../actions';
const INITIAL_STATE = {
};

export const user = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return action.user
        case USER_LOGOUT:
            return null;
        case CREATE_NEW_USER:
            return action.user
        default:
            return state; 
    }
}