import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GuideScreen from '../screens/GuideScreen';
import GuideDetailScreen from '../screens/GuideDetailScreen';

const Stack = createNativeStackNavigator();

export default function GuideNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GuideHome" component={GuideScreen} />
      <Stack.Screen name="GuideDetail" component={GuideDetailScreen} />
    </Stack.Navigator>
  );
}
