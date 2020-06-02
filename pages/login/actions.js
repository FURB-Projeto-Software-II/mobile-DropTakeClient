import axios from "axios"
import { Actions } from "react-native-router-flux"
import { Alert } from "react-native"
import api from '../../server/api'

export const emailChange = event => ({
    type: 'EMAIL_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const passwordChange = event => ({
    type: 'PASSWORD_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const  executeLogin = () => {
    return (dispatch, getState) => {

        const email = getState().login.email
        const password = getState().login.password

        api.post(`/auth/login`, { email, password })
        .then(result => {
            if (result.data.auth === true) {
                Actions.home()

                return dispatch({
                    type: 'EXECUTE_LOGIN',
                    payload: result.data.token
                })
            }
            
        }).catch(error => {
            Alert.alert(error.response.data)
        })

    }
    
}