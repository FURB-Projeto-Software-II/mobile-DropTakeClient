import { combineReducers } from 'redux'
import loginReducer from './pages/login/reducer'
import signinReducer from './pages/signin/reducer'
import ordersListReducer from './pages/orders-list/reducer'
import orderCrudReducer from './pages/order-crud/reducer'
import addressCrudReducer from './pages/address-crud/reducer'
import homeReducer from './pages/home/reducer'

const rootReducer = combineReducers({
    login: loginReducer,
    signin: signinReducer,
    ordersList: ordersListReducer,
    orderCrud: orderCrudReducer,
    addressCrud:  addressCrudReducer,
    home: homeReducer,
})

export default rootReducer