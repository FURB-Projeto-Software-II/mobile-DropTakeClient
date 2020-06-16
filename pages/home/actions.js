import api from '../../server/api'
import { Alert } from 'react-native'

export const getLoggedUserInfo = () => {

    return (dispatch, getState) => {

        if (getState().login.token != "") {
            const config = {
                headers: {
                    authorization: getState().login.token
                }
            }

            api.get('/user', config)
            .then(result => {
                return dispatch({
                    type: 'USER_INFO_RECOVERED',
                    payload: result.data
                })
            })
            .catch(error => {
                Alert.alert(error.response.data);
            })
        }

    }

}

export const searchOrders = () => {

    return (dispatch, getState) => {

        const config = {
            headers: {
                authorization: getState().login.token
            }
        }

        api.get('/order', config)
        .then(result => {

            return dispatch({
                type: 'ORDERS_SEARCHED',
                payload: result.data
            })

        })
        .catch(error => {
            Alert.alert(error.response.data)
        })

    }

}
