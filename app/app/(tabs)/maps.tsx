import { StyleSheet } from 'react-native';

import MapView from 'react-native-maps';
import { View } from '../../components/Themed';

export default function TabMapsScreen() {
  return (
    <View style={styles.container}>
      <MapView 
      initialRegion={{
        latitude: 47.01220812913073,
        longitude: 28.845541157633622,
        latitudeDelta: 0.0815656863339953,
        longitudeDelta: 0.08716846135159884
      }}
      style={styles.mapView} />
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
