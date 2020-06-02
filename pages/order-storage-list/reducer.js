const INITIAL_STATE = {
    list: [],
    storageId: -1
}

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ORDER_STORAGE_SEARCHED':
            return {...state, list: action.payload}
        case 'STORAGE_SELECTED':
            return {...state, storageId: action.payload}
        default:
            return state
    }
}