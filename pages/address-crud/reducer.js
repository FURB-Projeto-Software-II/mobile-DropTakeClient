const INITIAL_STATE = {
    zipcode: '',
    estado: '',
    cidade: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ZIPCODE_VALUE_CHANGE':
            return {...state, zipcode: action.payload}
        case 'ESTADO_VALUE_CHANGE':
            return {...state, estado: action.payload}
        case 'CIDADE_VALUE_CHANGE':
            return {...state, cidade: action.payload}
        case 'NEIGHBORHOOD_VALUE_CHANGE':
            return {...state, neighborhood: action.payload}
        case 'STREET_VALUE_CHANGE':
            return {...state, street: action.payload}
        case 'NUMBER_VALUE_CHANGE':
            return {...state, number: action.payload}
        case 'COMPLEMENT_VALUE_CHANGE':
            return {...state, complement: action.payload}
        case 'EXECUTE_CADASTRAR':
            return state
        default:
            return state
    }
}