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

        api.get('/storages/nearby', config)
        .then(result => {
            return dispatch({
                type: 'ORDER_STORAGE_SEARCHED',
                payload: result.data
            })
        })
        .catch(error => {
            Alert.alert(error.response.data)
        })

    }

}

export  const select = () => {
    Actions.orderInfo()
    
    return {
        type: 'STORAGE_SELECTED',
        paylaod: 12
    }
        
}