import { StyleSheet } from 'react-native';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from '../../components/Themed';
import * as Location from 'expo-location'

interface iMap {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number
}

export default function TabMapsScreen() {
  const initialRegion = {
    latitude: 47.012656935779056,
    longitude: 28.853067289263894,
    latitudeDelta: 0.05677581099559603,
    longitudeDelta: 0.048182311112761056
  }

  const markerRegion = {
    latitude: 47.01487510434715,
    longitude: 28.855909027492018,
    latitudeDelta: 0.0020228886447881678,
    longitudeDelta: 0.0017167786319731704
  }
  const [mapRegion, setMapRegion] = useState<iMap>(initialRegion)


  return (
    <View style={styles.container}>
      <MapView 
        initialRegion={mapRegion}
        style={styles.mapView}>
          <Marker coordinate={markerRegion} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  mapView: {
    width: '100%',
    height: '100%'
  }
});
