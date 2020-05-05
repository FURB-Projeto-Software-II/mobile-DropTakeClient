export const nomeChange = event => ({
    type: 'NOME_VALUE_CHANGE',
    payload: event.target.value
})

export const dataNascimentoChange = event => ({
    type: 'DATA_NASCIMENTO_VALUE_CHANGE',
    payload: event.target.value
})

export const emailChange = event => ({
    type: 'EMAIL_VALUE_CHANGE',
    payload: event.target.value
})

export const confirmaEmailChange = event => ({
    type: 'CONFIRMA_EMAIL_VALUE_CHANGE',
    payload: event.target.value
})

export const senhaChange = event => ({
    type: 'SENHA_VALUE_CHANGE',
    payload: event.target.value
})

export const confirmarSenhaChange = event => ({
    type: 'CONFIRMA_SENHA_VALUE_CHANGE',
    payload: event.target.value
})

export const executeSignin = () => {
    type: 'EXECUTE_SIGNIN'
}