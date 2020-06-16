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

export const edit = address_id => {

    return dispatch => {

        Actions.addressCrud({addressId: address_id});

        return dispatch({
            type: 'EDIT_ADDRESS',
            payload: ''
        })

    }

}