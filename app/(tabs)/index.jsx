import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width; // Get screen width to adjust content styling

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://photosota.club/uploads/posts/2023-06/thumbs/1687191229_photosota-club-p-velosport-simvolika-38.jpg' }} // Replace with your logo URL
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.brandName}>PedalPlanner</Text>

      <Button
        title="Navigation"
        onPress={() => navigation.navigate('explore')}
        color="#007bff"
        style={styles.button}
      />
      <Button
        title="Eateries Nearby"
        onPress={() => navigation.navigate('HelloWorldScreen')}
        color="#007bff"
        style={styles.button}
      />
      <Button
        title="Eatery Search Engine"
        onPress={() => navigation.navigate('EaterySearchEngine')}
        color="#007bff"
        style={styles.button}
      />
      <Button
        title="Troubleshooting Manual"
        onPress={() => navigation.navigate('ManualScreen')}
        color="#007bff"
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    color: 'black',
    marginBottom: 10, // Add space between the 'Welcome to' and 'PedalPlanners'
  },
  brandName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#007bff', // A blue color similar to your button colors
    marginBottom: 20,
  },
  button: {
    marginVertical: 10, // Add space between the buttons
    width: screenWidth * 0.8, // Make buttons take up 80% of the screen width
  },
});

export default HomeScreen;


