//changes to make for MapScreen before milestone submission
//Loading Indicator: Added an ActivityIndicator for better user feedback during route fetching.
//Platform-Specific Styles: Used Platform.OS to adjust colors and styles specific to iOS.
//Picker Placement: Adjusted the picker placement to be more user-friendly.

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Picker } from '@react-native-picker/picker';
import * as Location from 'expo-location';
import polyline from '@mapbox/polyline';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const apiKey = 'AIzaSyBzDpQPKlgGgUJ_iSosyDa-OqUZa3eyIEw'; // Replace with your actual Google Maps API key

const MapScreen = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState(null);
  const [selectedType, setSelectedType] = useState('restaurant');
  const navigation = useNavigation();

  const typeMapping = {
    restaurant: 'restaurant',
    cafe: 'cafe',
    fast_food: 'meal_takeaway',
    bar: 'bar',
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setStartLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    if (startLocation && endLocation) {
      getRoute(startLocation, endLocation);
    }
  }, [startLocation, endLocation]);

  const getRoute = async (origin, destination) => {
    const originStr = `${origin.latitude},${origin.longitude}`;
    const destinationStr = `${destination.latitude},${destination.longitude}`;
    try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${originStr}&destination=${destinationStr}&mode=bicycling&key=${'AIzaSyBzDpQPKlgGgUJ_iSosyDa-OqUZa3eyIEw'}`
    );
    const json = await response.json();
    if (json.routes.length) {
      let points = polyline.decode(json.routes[0].overview_polyline.points);
      let coords = points.map((point) => ({
        latitude: point[0],
        longitude: point[1]
      }));
      setRouteCoordinates(coords);
    } else {
      Alert.alert("No route found", "There was a problem finding a route.");
      setRouteCoordinates(null);
    }
  } catch (error) {
    console.error('Failed to fetch route', error);
  }
};

const handlePlaceSelection = (data, details = null) => {
  if (details) {
    if (selectedType === 'hawker_centre' && !details.name.toLowerCase().includes('hawker')) {
      Alert.alert('Not a Hawker Centre', 'Please select a place that is categorized as a hawker centre.');
      return;
    }
    setEndLocation({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      name: details.name,
    });
  }
};
  

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Singapore Eateries Search Engine and Route Plotting</Text>
      <Picker
        selectedValue={selectedType}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedType(itemValue)}
        >
        <Picker.Item label="Restaurant" value="restaurant" />
        <Picker.Item label="Cafe" value="cafe" />
        <Picker.Item label="Fast Food Restaurant" value="fast_food" />
        <Picker.Item label="Bar" value="bar" />
      </Picker>
      <GooglePlacesAutocomplete
        placeholder='Search for end location'
        onPress={handlePlaceSelection}
        query={{
          key: 'AIzaSyBzDpQPKlgGgUJ_iSosyDa-OqUZa3eyIEw',
          language: 'en',
          types: typeMapping[selectedType], // Use the selected type from the picker
          location: '1.3521,103.8198', // Center of Singapore
          radius: 40000 // Radius in meters (50 km)
        }}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
        }}
        fetchDetails={true}
        debounce={200}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 1.3521, // Default to roughly center over Singapore
          longitude: 103.8198,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {startLocation && (
          <Marker
            coordinate={startLocation}
            title="Start Location"
          />
        )}
        {endLocation && (
          <Marker
            coordinate={endLocation}
            title="End Location"
          />
        )}
        {routeCoordinates && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#0000FF"
            strokeWidth={6}
          />
        )}
      </MapView>
      <View style={styles.homeButtonContainer}>
        <Button title="Return to Home Screen" onPress={() => navigation.navigate('index')} color="#007bff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  picker: {
    height: 50,
    width: screenWidth * 0.9, // Adjust the width as needed
    alignSelf: 'center',
    marginBottom: 20,
  },
  map: {
    flex: 1,
    marginTop: 10  // Add some space between the search bars and the map
  },
  textInputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  textInput: {
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
  },
  homeButtonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default MapScreen;







