export const emailChange = event => ({
    type: 'EMAIL_VALUE_CHANGE',
    payload: event.target.value
})

export const passwordChange = event => ({
    type: 'PASSWORD_VALUE_CHANGE',
    payload: event.target.value
})

export const executeLogin = () => ({
    type: 'EXECUTE_LOGIN'
})