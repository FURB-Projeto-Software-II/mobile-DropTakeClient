const INITIAL_STATE = {
    email: '',
    password: '',
    token: ''
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'EMAIL_VALUE_CHANGE':
            return {...state, email: action.payload}
        case 'PASSWORD_VALUE_CHANGE':
            return {...state, password: action.payload}
        case 'EXECUTE_LOGIN':
            return {...state, token: action.payload};
        default:
            return state
    }
}