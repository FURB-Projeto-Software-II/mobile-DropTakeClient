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
import reducers from './reducers'

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
              initial
            />
          </Scene>
        </Router>
      </ApplicationProvider>
    </Provider>
  )
}