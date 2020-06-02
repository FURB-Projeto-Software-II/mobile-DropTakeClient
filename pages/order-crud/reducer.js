const INITIAL_STATE = {
    descricao: '',
    largura: '',
    altura: '',
    peso: '',
    categoria: '',
    entregarEmCasa: false,
    endereco: -1,
    storage: -1,
    storageDescricao: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
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
            return {...state, entregarEmCasa: action.payload}
        case 'ENDERECO_VALUE_CHANGE':
            return {...state, endereco: action.payload}
        case 'OPEN_STORAGE_SELECTION':
            return {...state, storage: action.payload}
        default:
            return state
    }
}