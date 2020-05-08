import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { Router, Scene } from 'react-native-router-flux';

import Login from './pages/login/login'
import Signin from './pages/signin/signin'
import OrdersList from './pages/orders-list/orders-list'
import OrderCrud from './pages/order-crud/order-crud'
import StorageFind from './pages/order-find-storage/order-find-storage'
import AddressCrud from './pages/address-crud/address-crud'
import Home from './pages/home/home'
import OrderInfo from './pages/order-info/order-info'
import Configs from './pages/configs/configs'
import StorageProfile from './pages/storage-profile/storage-profile'
import AddressList from './pages/address-list/address-list'
import PaymentMethodsList from './pages/payment-methods-list/payment-methods-list'
import reducers from './reducers'
import orderInfo from './pages/order-info/order-info';

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

export default function App() {

  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Router>
          <Scene key="root">
            <Scene
              key="login"
              component={Login}
              title="Login"
              hideNavBar="true"
              initial
            />

            <Scene 
              key="signin"
              component={Signin}
              title="Sign in"
            />
            
            <Scene 
              key="ordersList"
              component={OrdersList}
              title="Orders List"
              
            />

            <Scene 
              key="orderCrud"
              component={OrderCrud}
              title="Order"
              
            />

            <Scene 
              key="storageFind"
              component={StorageFind}
              title="Find Storage"
              
            />

            <Scene 
              key="addressCrud"
              component={AddressCrud}
              title="Address"
              
            />

            <Scene 
              key="home"
              component={Home}
              title="Home"
              hideNavBar="true"
              
            />

            <Scene 
              key="orderInfo"
              component={OrderInfo}
              title="Order Info"
                
            />

            <Scene 
              key="configs"
              component={Configs}
              title="Configurations"
            />

            <Scene
              key="storageProfile"
              component={StorageProfile}
              title="Storage Profile"
            />

            <Scene
              key="addressList"
              component={AddressList}
              title="Address List"
              
            />

            <Scene
              key="paymentMethodsList"
              component={PaymentMethodsList}
              title="Payment Methods List"
            />
          </Scene>
        </Router>
      </ApplicationProvider>
    </Provider>
  )
}