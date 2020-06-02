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

export const categoriaChange = event => ({
    type: 'CATEGORIA_VALUE_CHANGE',
    payload: event.target.value
})

export const entregarEmCasaChange = event => ({
    type: 'ENTREGA_EM_CASA_VALUE_CHANGE',
    payload: event
})

export const enderecoChange = event => ({
    type: 'ENDERECO_VALUE_CHANGE',
    payload: event.target.value
})

export const openStorageSelection = event => ({
    type: 'OPEN_STORAGE_SELECTION',
    payload: event.target.value
})