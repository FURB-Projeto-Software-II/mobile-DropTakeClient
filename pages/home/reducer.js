const INITIAL_STATE = {
    userName: '',
    userEmail: '',
    orders: [],
    loaded: false
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'USER_INFO_RECOVERED':
            return {...state, userName: action.payload.name, userEmail: action.payload.email}
        case 'ORDERS_INFO_RETRIEVED':
            return {
                ...state, 
                orders: action.payload,
                loaded: true
            }
        case 'PAGE_INIT':
            return {...state, loaded: false}
        default:
            return state
    }
}