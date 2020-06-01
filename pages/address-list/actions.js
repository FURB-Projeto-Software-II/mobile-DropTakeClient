import api from '../../server/api'
import { Alert } from 'react-native'

export const search = () => {

    return (dispatch, getState) => {
        
        const config = {
            headers: {
                authorization: getState().login.token
            }
        }

        api.get('/user/adress', config)
        .then(result => {
            return dispatch({
                type: 'ADDRESS_SEARCHED',
                payload: result.data
            })
        })
        .catch(error => {
            Alert.alert(error.response.data)
        })

    }

}