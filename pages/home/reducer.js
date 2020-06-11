const INITIAL_STATE = {
    userName: '',
    userEmail: '',
    orders: []
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'USER_INFO_RECOVERED':
            return {...state, userName: action.payload.name, userEmail: action.payload.email}
        case 'ORDERS_SEARCHED':
            return {...state, orders: action.paylaod}
        default:
            return state
    }
}