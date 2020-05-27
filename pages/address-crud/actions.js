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

        const zipcode = getState().addressCrud.zipcode
        const state = getState().addressCrud.estado
        const city = getState().addressCrud.cidade
        const neighborhood = getState().addressCrud.neighborhood
        const street = getState().addressCrud.street
        const number = getState().addressCrud.number
        const complement = getState().addressCrud.complement

        api.post(`/user/adress`, { 
            zipcode,
            state,
            city,
            neighborhood,
            street,
            number,
            complement
        })
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