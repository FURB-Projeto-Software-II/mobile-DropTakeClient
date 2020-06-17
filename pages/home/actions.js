import api from '../../server/api'
import { Alert } from 'react-native'

export const pageInit = () => ({
    type: 'PAGE_INIT'
})

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
            dispatch(retrieveDataLastOrders(result.data))
        })
        .catch(error => {
            Alert.alert(error.response.data)
        })

    }

}

export const retrieveDataLastOrders = orders => {

    return (dispatch, getState) => {

        let ordersInfo = []

        const config = {
            headers: {
                authorization: getState().login.token
            }
        }

        api.get(`/order/${orders[orders.length-1]._id}`, config)
        .then(result => {
            ordersInfo.push(result.data)

            if (orders.length > 1) {

                api.get(`/order/${orders[orders.length-2]._id}`, config)
                .then(result => {
                    ordersInfo.push(result.data)

                    return dispatch({
                        type: 'ORDERS_INFO_RETRIEVED',
                        payload: ordersInfo
                    })
                })

            }

            return dispatch({
                type: 'ORDERS_INFO_RETRIEVED',
                payload: ordersInfo
            })
        })

        
    }

}
