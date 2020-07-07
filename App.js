import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { Router, Scene, Actions } from 'react-native-router-flux';

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


import StorageMap from './pages/order-storage-map/order-storage-map'
import StorageList from './pages/order-storage-list/order-storage-list'
import { FontAwesome } from 'expo-vector-icons'

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

const MapIcon = ({selected, title}) => {
  return (
      <FontAwesome name="map-o" size="20" color={selected ? "red" : "black"}/>
  )
}

const ListIcon = ({selected, title}) => {
  return (
      <FontAwesome name="list" size="20" color={selected ? "red" : "black"}/>
  )
}

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
              onBack={()=>{
                Actions.refresh({key: Math.random()})
                Actions.home()
                Actions.refresh({key: Math.random()})
              }} back={true}
            />

            <Scene 
              key="orderCrud"
              component={OrderCrud}
              title="Order"
              onBack={()=>{Actions.home()}} back={true}
            />

            <Scene 
              key="storageFind" tabs tabBarStyle={{backgroundColor: '#FFF'}} hideNavBar="true"
              title="Find Storage"  
            >
              <Scene key="map-tab" title="Map" icon={MapIcon}>
                  <Scene 
                      key="map"
                      component={StorageMap}
                      onBack={()=>{Actions.orderCrud()}} back={true}
                  />
              </Scene>
              <Scene key="list-tab" title="List" icon={ListIcon} >
                  <Scene 
                      key="list"
                      component={StorageList}
                      onBack={()=>{Actions.orderCrud()}} back={true}
                  />
              </Scene>
            </Scene>

            <Scene 
              key="addressCrud"
              component={AddressCrud}
              title="Address"
              onBack={()=>{Actions.addressList()}} back={true}
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
              onBack={()=>{Actions.home()}} back={true}
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
              onBack={()=>{Actions.configs()}} back={true}
            />

            <Scene
              key="paymentMethodsList"
              component={PaymentMethodsList}
              title="Payment Methods List"
              onBack={()=>{Actions.configs()}} back={true}
            />
          </Scene>
        </Router>
      </ApplicationProvider>
    </Provider>
  )
}