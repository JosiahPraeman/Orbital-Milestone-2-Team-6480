import React from 'react';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import { StyleSheet } from 'react-native';

const EateryDetails = ({ eatery }) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{eatery.name}</ThemedText>
      <ThemedText type="subtitle">{eatery.type}</ThemedText>
      <ThemedText>{eatery.description}</ThemedText>
      <ThemedText>{`Rating: ${eatery.rating}`}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  }
});

export default EateryDetails;
