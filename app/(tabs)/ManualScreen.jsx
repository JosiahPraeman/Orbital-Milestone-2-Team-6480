import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width; // Get screen width to adjust content styling

const ManualScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://icon-library.com/images/troubleshooting-icon/troubleshooting-icon-5.jpg' }} // Replace with your logo URL
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Troubleshooting Manual</Text>

      <Button
        title="General Troubleshooting"
        onPress={() => navigation.navigate('GeneralTroubleshootingScreen')}
        color="#007bff"
        style={styles.button}
      />
      <View style={styles.spacing} />
      <Button
        title="Fixing Flat Tyre with Tube"
        onPress={() => navigation.navigate('FixingFlatTyreScreen')}
        color="#007bff"
        style={styles.button}
      />
      <View style={styles.homeButtonContainer}>
        <Button title="Return to Home Screen" onPress={() => navigation.navigate('index')} color="#007bff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black', // A blue color similar to your button colors
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginVertical: 10, // Add space between the buttons
    width: screenWidth * 0.8, // Make buttons take up 80% of
  },
  spacing: {
    height: 10, // Space between the buttons
  },
  homeButtonContainer: {
    marginTop: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default ManualScreen;

