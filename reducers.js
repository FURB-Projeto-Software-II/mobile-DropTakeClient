import { combineReducers } from 'redux'
import loginReducer from './pages/login/reducer'

const rootReducer = combineReducers({
    login: loginReducer
})

export default rootReducer