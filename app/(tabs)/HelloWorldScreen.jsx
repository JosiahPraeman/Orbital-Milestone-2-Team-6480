import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, Linking, Dimensions, Button } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyBzDpQPKlgGgUJ_iSosyDa-OqUZa3eyIEw'; // Use your Google Maps API key

const HelloWorldScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [eateries, setEateries] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      fetchEateries(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchEateries = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=restaurant&key=${GOOGLE_API_KEY}`
      );
      setEateries(response.data.results);
    } catch (error) {
      console.error('Failed to fetch eateries', error);
    }
  };

  const openMaps = (lat, lng) => {
    const scheme = Platform.OS === 'ios' ? 'maps' : 'geo';
    const url = Platform.OS === 'ios'
      ? `maps://app?saddr=${location.coords.latitude},${location.coords.longitude}&daddr=${lat},${lng}`
      : `geo:${location.coords.latitude},${location.coords.longitude}?q=${lat},${lng}`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Displaying eateries within a 5km radius from your location.</Text>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {eateries.map((eatery) => (
            <Marker
              key={eatery.place_id}
              coordinate={{ latitude: eatery.geometry.location.lat, longitude: eatery.geometry.location.lng }}
              title={eatery.name}
              description={eatery.vicinity}
            >
              <Callout onPress={() => openMaps(eatery.geometry.location.lat, eatery.geometry.location.lng)}>
                <Text>{eatery.name}</Text>
                <Text style={styles.link}>Tap to Open in Maps</Text>
              </Callout>
            </Marker>
          ))}
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
            pinColor="blue"
          />
        </MapView>
      ) : errorMsg ? (
        <Text style={styles.centerText}>{errorMsg}</Text>
      ) : (
        <Text style={styles.centerText}>Waiting for location...</Text>
      )}
      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Legend:</Text>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: 'blue' }]} />
          <Text style={styles.legendText}>Live Location</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: 'red' }]} />
          <Text style={styles.legendText}>Eateries within 5km radius</Text>
        </View>
      </View>
      <Button title="Return to Home Screen" onPress={() => navigation.navigate('index')} color="#007bff" />
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
  map: {
    flex: 1,
  },
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    paddingTop: 5,
  },
  legendContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  legendTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendColor: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
  },
});

export default HelloWorldScreen;
