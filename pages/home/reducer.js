const INITIAL_STATE = {
    userName: '',
    userEmail: ''
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'USER_INFO_RECOVERED':
            return {...state, userName: action.payload.name, userEmail: action.payload.email}
        default:
            return state
    }
}