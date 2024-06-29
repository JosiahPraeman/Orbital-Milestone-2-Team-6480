import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import routeCoordinatesData from '@/components/routeCoordinates'; // Import the actual route data

const locations = {
  PunggolPark: { latitude: 1.3777, longitude: 103.8977, name: "Punggol Park" },
  EastCoastPark: { latitude: 1.303956, longitude: 103.926373, name: "East Coast Park" },
  WestCoastPark: { latitude: 1.2916, longitude: 103.7668, name: "West Coast Park" }
};

const Tab2Screen = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  // Initialize routeCoordinates with null, indicating no route is set initially
  const [routeCoordinates, setRouteCoordinates] = useState(null);

  useEffect(() => {
    const hasPunggol = selectedLocations.some(loc => loc.name === "Punggol Park");
    const hasEastCoast = selectedLocations.some(loc => loc.name === "East Coast Park");
    if (hasPunggol && hasEastCoast) {
      // Set the route coordinates from the imported data if both parks are selected
      setRouteCoordinates(routeCoordinatesData);
    } else {
      // Clear the route coordinates if not both parks are selected
      setRouteCoordinates(null);
    }
  }, [selectedLocations]);

  const handleSelectLocation = (location) => {
    const isAlreadySelected = selectedLocations.some(loc => loc.name === location.name);
    setSelectedLocations(isAlreadySelected
      ? selectedLocations.filter(loc => loc.name !== location.name)
      : [...selectedLocations, location]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.locationList} horizontal showsHorizontalScrollIndicator={false}>
        {Object.values(locations).map(loc => (
          <TouchableOpacity key={loc.name} style={styles.button} onPress={() => handleSelectLocation(loc)}>
            <Text style={styles.buttonText}>{loc.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 1.3521,
          longitude: 103.8198,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}>
        {selectedLocations.map(loc => (
          <Marker key={loc.name} coordinate={{ latitude: loc.latitude, longitude: loc.longitude }} title={loc.name} />
        ))}
        {routeCoordinates && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#0000FF"
            strokeWidth={6}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  locationList: {
    flex: 2,
    padding: 10,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});

export default Tab2Screen;


