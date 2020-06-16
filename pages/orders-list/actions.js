import api from '../../server/api'
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

export const search = () => {

    return (dispatch, getState) => {
        
        const config = {
            headers: {
                authorization: getState().login.token
            }
        }

        api.get('/order', config)
        .then(result => {
            return dispatch({
                type: 'ORDER_SEARCHED',
                payload: result.data
            })
        })
        .catch(error => {
            Alert.alert(error.response.data)
        })

    }

}

export const openOrderInfo = (order_id) => {

    return dispatch => {
        
        Actions.orderInfo({orderId: order_id })

        return dispatch({
            type: 'ORDER_INFO_ENTERED',
            payload: order_id
        })

    }

}