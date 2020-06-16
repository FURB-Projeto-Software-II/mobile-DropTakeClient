import api from '../../server/api'
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

export const zipcodeChange = event => ({
    type: 'ZIPCODE_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const estadoChange = event => ({
    type: 'ESTADO_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const cidadeChange = event => ({
    type: 'CIDADE_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const neighborhoodChange = event => ({
    type: 'NEIGHBORHOOD_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const streetChange = event => ({
    type: 'STREET_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const numberChange = event => ({
    type: 'NUMBER_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const complementChange = event => ({
    type: 'COMPLEMENT_VALUE_CHANGE',
    payload: event.nativeEvent.text
})

export const executeCadastrar = () => {

    return (dispatch, getState) => {

        const config = {
            headers: {
                authorization: getState().login.token
            }
        }

        const zipcode = getState().addressCrud.zipcode
        const state = getState().addressCrud.estado
        const city = getState().addressCrud.cidade
        const neighborhood = getState().addressCrud.neighborhood
        const street = getState().addressCrud.street
        const number = getState().addressCrud.number
        const complement = getState().addressCrud.complement

        const id = getState().addressCrud.id
        
        if (!id){

            api.post(`/user/adress`, { 
                zipcode,
                state,
                city,
                neighborhood,
                street,
                number,
                complement
            }, config)
            .then(result => {
                Actions.addressList()

                return dispatch({
                    type: 'EXECUTE_CADASTRAR',
                    payload: result.data
                })
                
            }).catch(error => {
                Alert.alert(error.response.data)
            })

        } else {

            api.put(`/user/adress/${id}`, { 
                zipcode,
                state,
                city,
                neighborhood,
                street,
                number,
                complement
            }, config)
            .then(result => {
                Actions.addressList()

                return dispatch({
                    type: 'EXECUTE_CADASTRAR',
                    payload: result.data
                })
                
            }).catch(error => {
                Alert.alert(error.response.data)
            })

        }

    }
}

export const loadAddressToEdit = id => {

    return (dispatch, getState) => {

        const config = {
            headers: {
                authorization: getState().login.token
            }
        }

        api.get(`/user/adress/${id}`, config)
        .then(result => {

            return dispatch({
                type: 'EDIT_ADDRESS_INFO',
                payload: result.data
            })

        })

    }

}