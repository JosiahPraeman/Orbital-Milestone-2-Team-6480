import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../tabs/HomeScreen';
import ExploreScreen from '../tabs/ExploreScreen';
import HelloWorldScreen from '../tabs/HelloWorldScreen';
import MapScreen from '../tabs/MapScreen';
import ManualScreen from '../tabs/ManualScreen';
import GeneralTroubleshootingScreen from '../components/GeneralTroubleshootingScreen';
import FixingFlatTyreScreen from '../components/FixingFlatTyreScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="HelloWorldScreen" component={HelloWorldScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="ManualScreen" component={ManualScreen} />
      <Stack.Screen name="GeneralTroubleshootingScreen" component={GeneralTroubleshootingScreen} />
      <Stack.Screen name="FixingFlatTyreScreen" component={FixingFlatTyreScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
}




