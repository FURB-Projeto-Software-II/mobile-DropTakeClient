
import api from '../../server/api'
import { Alert } from 'react-native'

export const getOrderInfo = order_id => {

    const config = {
        headers: {
            authorization: getState().login.token
        }
    }

    api.get(`/order/${order_id}`)
    .then(result => {

        api.get(`/category/${result.data.id_category}`, config)
        .then(result_2 => {
            
            

        })
        .catch(error => {
            Alert.alert(error.response.data)
        })

    })
    .catch(error => {
        Alert.alert(error.response.data)
    })
}