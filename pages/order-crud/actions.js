export const descricaoChange = event => ({
    type: 'DESCRICAO_VALUE_CHANGE',
    payload: event.target.value
})

export const larguraChange = event => ({
    type: 'LARGURA_VALUE_CHANGE',
    payload: event.target.value
})

export const alturaChange = event => ({
    type: 'ALTURA_VALUE_CHANGE',
    payload: event.target.value
})

export const pesoChange = event => ({
    type: 'PESO_VALUE_CHANGE',
    payload: event.target.value
})

export const categoriaChange = event => ({
    type: 'CATEGORIA_VALUE_CHANGE',
    payload: event.target.value
})

export const entregarEmCasaChange = event => ({
    type: 'entrega_EM_CASA_VALUE_CHANGE',
    payload: event.target.value
})

export const enderecoChange = event => ({
    type: 'ENDERECO_VALUE_CHANGE',
    payload: event.target.value
})

export const openStorageSelection = event => ({
    type: 'OPEN_STORAGE_SELECTION',
    payload: event.target.value
})