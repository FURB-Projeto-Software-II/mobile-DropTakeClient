import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import { search, select, setCurrentRegion } from './actions'
import { Button } from '@ui-kitten/components';

class StorageMap extends Component {
  
  async componentDidMount() {

    this.loadCurrentLocation()

    this.props.search()
  }

  handleRegionChanged = region => {
    this.props.setCurrentRegion(region)
  }

  async loadCurrentLocation() {
    const { granted } = await requestPermissionsAsync();

    if (granted) {
        
        const { coords } = await getCurrentPositionAsync({
            enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        this.props.setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        })

    }

  }

  render() {

    const { list, currentRegion } = this.props

    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}
          onRegionChangeComplete={region => this.handleRegionChanged(region)}
          initialRegion={currentRegion}
        />
        {
          list.map(storage => 
            storage.adresses[0] ? (<Marker
              key={storage._id}
              coordinate={{
                latitude: parseInt(storage.adresses[0].lat),
                longitude: parseInt(storage.adresses[0].lng)
              }}
              title={storage.name}
            >

            </Marker>) : <></>
          )
        }
      </View>
      
    );
  }
}

const mapStateToProps = state => ({
  list: state.orderStoreMap.list,
  lat: state.orderStoreMap.lat,
  currentRegion: state.orderStoreMap.currentRegion
})

const mapDispatchToProps = dispatch => bindActionCreators({ search, select, setCurrentRegion }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StorageMap)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});