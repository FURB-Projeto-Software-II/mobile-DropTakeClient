
const INITIAL_STATE = {

    order: {
        status: 0,
        _id: "",
        id_client: "",
        id_storage: "",
        id_category: "",
        id_adress_delivery: "",
        description: "",
        price: 0,
        __v: 0
    },
    client: {
        _id: "",
        name: ""
    },
    storage: {
        _id: "",
        name: "",
        adresses: []
    },
    category: {
        _id: "",
        name: ""
    },
    adress: {
        primary: false,
        _id: "",
        zipcode: "",
        city: "",
        neighborhood: "",
        street: "",
        number: ""
    },
    loaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ORDER_INFO_LOADED':
            return {
                ...state, 
                order: action.payload.order,
                client: action.payload.client,
                storage: action.payload.storage,
                category: action.payload.category,
                adress: action.payload.adress,
                loaded: true
            }
        case 'PAGE_INITIALIZATION':
            return {...state, loaded: false}
        default:
            return state
    }
}