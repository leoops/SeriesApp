import { AUTENTICATION } from '../../actions';

const INITIAL_STATE = {
    id: null,
    name: '',
    key: false,
};

export const editingTodoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AUTENTICATION:
            return {
                ...state,
                user: action.user
            }
        default:
            return state; 
    }
}