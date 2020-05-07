import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

import StorageMap from '../order-storage-map/order-storage-map'
import StorageList from '../order-storage-list/order-storage-list'
import { FontAwesome } from 'expo-vector-icons'

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

class OrderFindStorage extends Component {
    
    

    render() {
        return(
            <Router>
                <Scene key="root" hideNavBar="true">
                    <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#FFF'}} hideNavBar="true">
                        <Scene key="map-tab" title="Map" icon={MapIcon}>
                            <Scene 
                                key="map"
                                component={StorageMap}
                                hideNavBar="true"
                            />
                        </Scene>
                        <Scene key="list-tab" title="List" icon={ListIcon} >
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