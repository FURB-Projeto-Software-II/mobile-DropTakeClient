import { combineReducers } from 'redux'
import loginReducer from './pages/login/reducer'
import signupReducer from './pages/signin/reducer'
import ordersListReducer from './pages/orders-list/reducer'
import orderCrudReducer from './pages/order-crud/reducer'
import addressCrudReducer from './pages/address-crud/reducer'
import homeReducer from './pages/home/reducer'
import addressListReducer from './pages/address-list/reducer'
import orderStoreListReducer from './pages/order-storage-list/reducer'
import orderInfoReducer from './pages/order-info/reducer'
import orderStoreMapReducer from './pages/order-storage-map/reducer'

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    ordersList: ordersListReducer,
    orderCrud: orderCrudReducer,
    addressCrud:  addressCrudReducer,
    addressList: addressListReducer,
    home: homeReducer,
    orderStoreList: orderStoreListReducer,
    orderInfo: orderInfoReducer,
    orderStoreMap: orderStoreMapReducer
})

export default rootReducer