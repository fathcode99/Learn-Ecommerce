const initial_state = {
    id : null,
    username : "",
    password : "",
    role : "",
    errorLogin : false
}

const userReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'LOGIN' :
            return {
                ...state,
                id : action.payload.id,
                username : action.payload.username,
                password : action.payload.password,
                role : action.payload.role
            }
        case 'ERROR_LOGIN' :
            return {
                ...state,
                errorLogin : true
            }
        case 'HANDLE_CLOSE' :
            return {
                ...state,
                errorLogin : false
            }
        case 'LOGOUT' :
            return initial_state
        default :
            return state
    }
}

export default userReducer