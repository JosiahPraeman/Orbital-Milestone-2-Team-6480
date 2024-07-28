import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function UserReview() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const navigation = useNavigation();

  const submitReview = async () => {
    if (!name || !review || !rating) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.97:3000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, review, rating }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Review submitted successfully');
        setName('');
        setReview('');
        setRating('');
      } else {
        Alert.alert('Error', 'Failed to submit review');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to submit review');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{ uri: 'https://cdn5.vectorstock.com/i/1000x1000/88/89/user-feedback-icon-vector-20998889.jpg' }} 
        style={styles.logo}
      />
      <Text style={styles.header}>USER FEEDBACK</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Review"
        value={review}
        onChangeText={setReview}
        multiline
      />
      <Text style={styles.label}>Rating</Text>
      <Picker
        selectedValue={rating}
        style={styles.input}
        onValueChange={(itemValue) => setRating(itemValue)}
      >
        <Picker.Item label="Select Rating" value="" />
        <Picker.Item label="1 Star" value="1" />
        <Picker.Item label="2 Stars" value="2" />
        <Picker.Item label="3 Stars" value="3" />
        <Picker.Item label="4 Stars" value="4" />
        <Picker.Item label="5 Stars" value="5" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="Submit Review" onPress={submitReview} />
      </View>
      <View style={styles.ButtonContainer}>
        <Button title="Return to Home Screen" onPress={() => navigation.navigate('index')} color="#007bff" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    width: '100%',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});