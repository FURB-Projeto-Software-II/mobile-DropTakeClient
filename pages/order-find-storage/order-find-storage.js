import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { Text, StyleSheet } from 'react-native'

import StorageMap from '../order-storage-map/order-storage-map'
import StorageList from '../order-storage-list/order-storage-list'

const TabIcon = ({selected, title}) => {
    return (
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
}

class OrderFindStorage extends Component {
    
    

    render() {
        return(
            <Router>
                <Scene key="root" hideNavBar="true">
                    <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#FFF'}} hideNavBar="true">
                        <Scene key="map-tab" title="Map" icon={TabIcon}>
                            <Scene 
                                key="map"
                                component={StorageMap}
                                hideNavBar="true"
                            />
                        </Scene>
                        <Scene key="list-tab" title="List" icon={TabIcon} >
                            <Scene 
                                key="list"
                                component={StorageList}
                                hideNavBar="true"
                            />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        )
    }

}

export default OrderFindStorage