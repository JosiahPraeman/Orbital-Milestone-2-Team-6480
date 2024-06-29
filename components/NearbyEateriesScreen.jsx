import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import MapView, { Marker } from 'react-native-maps';

const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';

const NearbyEateriesScreen = ({ route }) => {
  const [eateries, setEateries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { latitude, longitude } = route.params; // Assume coordinates are passed to this screen as params

  useEffect(() => {
    fetchNearbyEateries(latitude, longitude);
  }, []);

  const fetchNearbyEateries = async (lat, lon) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
        params: {
          location: `${lat},${lon}`,
          radius: '1500', // Adjust radius in meters
          type: 'restaurant', // Filter by restaurants
          key: API_KEY
        }
      });
      setEateries(response.data.results);
    } catch (error) {
      console.error('Error fetching eateries:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
        {eateries.map((eatery, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: eatery.geometry.location.lat,
              longitude: eatery.geometry.location.lng
            }}
            title={eatery.name}
          />
        ))}
      </MapView>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={eateries}
          keyExtractor={item => item.place_id}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '50%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default NearbyEateriesScreen;
