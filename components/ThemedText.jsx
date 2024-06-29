import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ThemedText = ({ children, type = 'default', style }) => {
  return (
    <Text style={[styles[type], style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    color: 'black',
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'navy',
  },
  subtitle: {
    fontSize: 16,
    color: 'darkgrey',
  },
  eateryInfo: {
    fontSize: 14,
    color: 'green',
  },
  defaultSemiBold: {
    fontWeight: '600',
    color: 'black',
  }
});

export default ThemedText;


