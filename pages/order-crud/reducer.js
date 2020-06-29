const INITIAL_STATE = {
    descricao: '',
    largura: '',
    altura: '',
    peso: '',
    categoria: undefined,
    entregarEmCasa: false,
    endereco: undefined,
    storage: -1,
    storageDescricao: '',
    addressList: [],
    categoryList: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ENDERECO_VALUE_CHANGE':
            return {...state, endereco: action.payload}
        case 'DESCRICAO_VALUE_CHANGE':
            return {...state, descricao: action.payload}
        case 'LARGURA_VALUE_CHANGE':
            return {...state, largura: action.payload}
        case 'ALTURA_VALUE_CHANGE':
            return {...state, altura: action.payload}
        case 'PESO_VALUE_CHANGE':
            return {...state, peso: action.payload}
        case 'CATEGORIA_VALUE_CHANGE':
            return {...state, categoria: action.payload}
        case 'ENTREGA_EM_CASA_VALUE_CHANGE':
            return {...state, entregarEmCasa: action.payload, endereco: action.payload == true ? state.endereco : undefined }
        case 'OPEN_STORAGE_SELECTION':
            return {...state, storage: action.payload}
        case 'ADDRESS_SEARCHED':
            return {...state, addressList: action.payload}
        case 'CATEGORY_SEARCHED':
            return {...state, categoryList: action.payload}
        case 'ORDER_EXECUTED':
            return state
        default:
            return state
    }
}