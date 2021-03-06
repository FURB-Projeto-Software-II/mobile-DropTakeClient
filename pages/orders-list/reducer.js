const INITIAL_STATE = {
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ORDER_SEARCHED':
            return {...state, list: action.payload}
        default:
            return state
    }
}