import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert, Button, TouchableOpacity, Modal, FlatList } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import polyline from '@mapbox/polyline';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const apiKey = 'AIzaSyBzDpQPKlgGgUJ_iSosyDa-OqUZa3eyIEw'; // Replace with your actual Google Maps API key

const MapScreen = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState(null);
  const [selectedType, setSelectedType] = useState('restaurant');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const typeMapping = {
    restaurant: 'restaurant',
    cafe: 'cafe',
    fast_food: 'meal_takeaway',
    bar: 'bar',
  };

  const types = [
    { label: 'Restaurants / Hawker Centre', value: 'restaurant' },
    { label: 'Cafe', value: 'cafe' },
    { label: 'Fast Food Restaurant', value: 'fast_food' },
    { label: 'Bar', value: 'bar' },
  ];

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
        `https://maps.googleapis.com/maps/api/directions/json?origin=${originStr}&destination=${destinationStr}&mode=bicycling&key=${apiKey}`
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
      <Text style={styles.label}>Type of eatery</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
        <Text style={styles.dropdownText}>{types.find(t => t.value === selectedType).label}</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={types}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedType(item.value);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.autocompleteContainer}>
        <GooglePlacesAutocomplete
          placeholder='Search for end location'
          onPress={handlePlaceSelection}
          query={{
            key: apiKey,
            language: 'en',
            types: typeMapping[selectedType], // Use the selected type from the picker
            location: '1.3521,103.8198', // Center of Singapore
            radius: 40000, // Radius in meters (50 km)
            components: 'country:sg', // Limit results to Singapore
          }}
          styles={{
            container: styles.textInputContainer,
            textInputContainer: styles.textInputContainerInner,
            textInput: styles.textInput,
            listView: styles.listView,
          }}
          fetchDetails={true}
          debounce={200}
        />
      </View>
      <View style={styles.mapContainer}>
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
      </View>
      <View style={styles.homeButtonContainer}>
        <Button title="Return to Home Screen" onPress={() => navigation.navigate('index')} color="#007bff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30, // Adjusted for top padding
  },
  infoText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    width: screenWidth * 0.9, // Adjust the width as needed
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: screenWidth * 0.8,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 16,
  },
  autocompleteContainer: {
    width: screenWidth * 0.9, // Adjust the width as needed
    alignSelf: 'center',
    marginBottom: 10,
  },
  textInputContainer: {
    flex: 0,
    zIndex: 1,
  },
  textInputContainerInner: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
  },
  listView: {
    backgroundColor: 'white',
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Position map at the bottom
  },
  map: {
    height: screenHeight * 0.5, // Set the height to occupy half of the screen
  },
  homeButtonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default MapScreen;
