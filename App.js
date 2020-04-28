import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './reducers'

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

export default function App() {

  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <HomeScreen/>
      </ApplicationProvider>
    </Provider>
  )
}