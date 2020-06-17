
import api from '../../server/api'
import { Alert } from 'react-native'

export const getOrderInfo = order_id => {

    return (dispatch, getState) => {
        const config = {
            headers: {
                authorization: getState().login.token
            }
        }

        api.get(`/order/${order_id}`, config)
        .then(result => {

            return dispatch({
                type: 'ORDER_INFO_LOADED',
                payload: result.data
            })

        })
        .catch(error => {
            Alert.alert(error.response.data)
        })
    }
}

export const pageInit = () => ({
    type: 'PAGE_INITIALIZATION'
})