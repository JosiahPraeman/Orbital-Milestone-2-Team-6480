import React from 'react';
import { Tabs } from 'expo-router';

// Assuming path aliases are correctly configured in your jsconfig
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme() || 'light';  // Fallback to 'light' if undefined

  // Safely access Colors with guaranteed default
  const tabBarActiveTintColor = Colors[colorScheme]?.tint || Colors['light'].tint;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tabBarActiveTintColor,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Navigation',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="HelloWorldScreen"
        options={{
          title: 'Eateries Nearby',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'earth' : 'earth-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
