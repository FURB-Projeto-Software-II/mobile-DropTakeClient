const INITIAL_STATE = {
    nome: '',
    dataNascimento: '',
    email: '',
    confirmaEmail: '',
    senha: '',
    confirmarSenha: '',
    lat: undefined,
    lng: undefined
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NOME_VALUE_CHANGE':
            return {...state, nome: action.payload}
        case 'DATA_NASCIMENTO_VALUE_CHANGE':
            return {...state, dataNascimento: action.payload}
        case 'EMAIL_VALUE_CHANGE':
            return {...state, email: action.payload}
        case 'CONFIRMA_EMAIL_VALUE_CHANGE':
            return {...state, confirmaEmail: action.payload}
        case 'SENHA_VALUE_CHANGE':
            return {...state, senha: action.payload}
        case 'CONFIRMA_SENHA_VALUE_CHANGE':
            return {...state, confirmarSenha: action.payload}
        case 'SIGN_UP_EXECUTED':
            return state 
        case 'SET_LATITUDE':
            return {...state, lat: action.payload}
        case 'SET_LONGITUDE':
            return {...state, lng: action.payload}
        default:
            return state
    }
}