import React, { Component } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import { search, select, setCurrentRegion } from './actions'
import { Button } from '@ui-kitten/components';

class StorageMap extends Component {

  async componentDidMount() {

    this.props.search()
    await this.loadCurrentLocation()

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
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        })

    }

  }

  render() {

    const { list, currentRegion, select } = this.props

    if (!currentRegion) {
      return null;
    }

    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}
          onRegionChangeComplete={region => this.handleRegionChanged(region)}
          initialRegion={currentRegion}
        >
        {
          list.map(storage => 
            storage.adresses[0] ? (
              <Marker key={storage._id} coordinate={{latitude: parseInt(storage.adresses[0].lat), longitude: parseInt(storage.adresses[0].lng)}}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF3Cj0ceIsl8A9Mh7jZjs2qKBXdQat-0ohZA&usqp=CAU' }} style={styles.marker}/>
    
                <Callout onPress={() => {select(storage._id, storage.name)}}>
                  <View style={styles.callout}>
                    <Text style={styles.storageName}>{storage.name}</Text>
                    <Text>Clique para selecionar</Text>
                  </View>
                </Callout>
              </Marker>
            ) : <></>
          )
        }
        </MapView>
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
  marker: {
    width: 40,
    height: 40,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF'
  },
  callout: {
    width: 260,
  },
  storageName: {
    fontWeight: 'bold',
    fontSize: 16
  }
});