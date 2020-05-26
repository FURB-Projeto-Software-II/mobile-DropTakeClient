import api from '../../server/api'
import { Alert } from 'react-native'

export const nomeChange = event => ({
    type: 'NOME_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const dataNascimentoChange = event => ({
    type: 'DATA_NASCIMENTO_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const emailChange = event => ({
    type: 'EMAIL_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const confirmaEmailChange = event => ({
    type: 'CONFIRMA_EMAIL_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const senhaChange = event => ({
    type: 'SENHA_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const confirmarSenhaChange = event => ({
    type: 'CONFIRMA_SENHA_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const validateSignup = () => {

    var valid = true;
    return (dispatch, getState) => {
        if (getState().signup.senha !== getState().signup.confirmarSenha) {
            valid = false;
            dispatch({
                type: 'DIFFERENT_PASSWORLD',
                paylod: ''
            })
        }
    
        if (getState().signup.email !== getState().signup.confirmaEmail) {
            valid = false
            dispatch({
                type: 'DIFFERENT_EMAIL',
                paylod: ''
            })
        }
    
        if (valid) {
            dispatch(executeSignup())
        } else {
            Alert.alert("Email e ou senha não conferem.")
        }

    }

}

export const executeSignup = () => {
    return (dispatch, getState) => {
        api.post('/auth/client/register', {
            nome: getState().signup.nome,
            email: getState().signup.email,
            password: getState().signup.senha
        })
        .then(result => {
            if (result.data.auth === true) {
                Actions.home()

                return dispatch({
                    type: 'SIGN_UP_EXECUTED',
                    payload: result.data.token
                })
            }
            
        }).catch(error => {
            Alert.alert(error.response.data)
        })
    }
}