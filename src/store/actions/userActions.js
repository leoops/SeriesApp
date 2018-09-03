import firebase from 'firebase';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
})

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = user => ({
    type: USER_LOGOUT,
    user
})

export const CREATE_NEW_USER = CREATE_NEW_USER
const createNewUser = user => {
    type: CREATE_NEW_USER,
    user
}

export const tryLogin = ({ email, password }) => dispatch => {

     return firebase
            .auth()
            .signInWithEmailAndPassword( email, password )
            .then( user => {
                dispatch(userLoginSuccess(user))
            })
}

export const createUser = ({ email, password }) => dispatch => {

     return firebase
            .auth()
            .createUserWithEmailAndPassword( email, password ).dispatch
            .then( user => {
                dispatch(createNewUser( user ))
            })
}