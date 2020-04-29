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
              initial
            />
          </Scene>
        </Router>
      </ApplicationProvider>
    </Provider>
  )
}