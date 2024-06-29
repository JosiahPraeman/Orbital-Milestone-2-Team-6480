import React from 'react';
import { View, StyleSheet } from 'react-native';

const ThemedView = ({ children, style }) => {
  return (
    <View style={[styles.default, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { height: 0, width: 0 },
  },
  // Additional styles can be added here
});

export default ThemedView;

