import api from '../../server/api'
import { Actions } from 'react-native-router-flux'
import { Alert } from 'react-native'

export const descricaoChange = text => ({
    type: 'DESCRICAO_VALUE_CHANGE',
    payload: text
})

export const larguraChange = text => ({
    type: 'LARGURA_VALUE_CHANGE',
    payload: text
})

export const alturaChange = text => ({
    type: 'ALTURA_VALUE_CHANGE',
    payload: text
})

export const pesoChange = text => ({
    type: 'PESO_VALUE_CHANGE',
    payload: text
})

export const categoriaChange = value => ({
    type: 'CATEGORIA_VALUE_CHANGE',
    payload: value
})

export const entregarEmCasaChange = event => ({
    type: 'ENTREGA_EM_CASA_VALUE_CHANGE',
    payload: event
})

export const enderecoChange = value => ({
    type: 'ENDERECO_VALUE_CHANGE',
    payload: value
})

export const openStorageSelection = event => ({
    type: 'OPEN_STORAGE_SELECTION',
    payload: event.target.value
})

export const searchAddress = () => {

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

export const searchCategory = () => {

    return (dispatch, getState) => {
        
        const config = {
            headers: {
                authorization: getState().login.token
            }
        }

        api.get('/category', config)
        .then(result => {
            return dispatch({
                type: 'CATEGORY_SEARCHED',
                payload: result.data
            })
        })
        .catch(error => {
            Alert.alert(error.response.data)
        })

    }

}

export const executeConfirm = () => {

    return (dispatch, getState) => {
        
        const id_storage = getState().orderStoreList.storageId
        const id_category = getState().orderCrud.categoria
        const description = getState().orderCrud.descricao
        const weight = getState().orderCrud.peso
        const size = getState().orderCrud.largura * getState().orderCrud.altura
        const id_adress_delivery = getState().orderCrud.endereco

        const config = {
            headers: {
                authorization: getState().login.token
            }
        }

        api.post('/order', {
            id_storage, 
            description, 
            //weight, 
            //size,
            id_adress_delivery,
            id_category
        }, config)
        .then(result => {
            
            Alert.alert("Pedido realizado com sucesso!")
            Actions.home()
            
            return dispatch({
                type: 'ORDER_EXECUTED',
                payload: result.data
            })
            
        }).catch(error => {
            Alert.alert(error.response.data)
        })

    }
}