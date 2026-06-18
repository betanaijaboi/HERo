import React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SuggestionsScreen from '../screens/SuggestionsScreen';
import TrimesterScreen from '../screens/TrimesterScreen';
import PPDScreen from '../screens/PPDScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GuideNavigator from './GuideNavigator';

const Tab = createBottomTabNavigator();

const TABS = [
  { name: 'Home',      component: HomeScreen,       icon: 'home',             label: 'Home' },
  { name: 'Actions',   component: SuggestionsScreen, icon: 'list',            label: 'Actions' },
  { name: 'Guide',     component: GuideNavigator,    icon: 'book',            label: 'Guide' },
  { name: 'Awareness', component: PPDScreen,         icon: 'shield-checkmark', label: 'Awareness' },
  { name: 'Settings',  component: SettingsScreen,    icon: 'settings',         label: 'Settings' },
];

export default function AppNavigator({ onReset }) {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#FADADD',
          borderTopWidth: 1.5,
          height: 56 + insets.bottom,
          paddingTop: 8,
          paddingBottom: insets.bottom || 8,
        },
        tabBarActiveTintColor: '#E91E63',
        tabBarInactiveTintColor: '#C9A8B8',
        tabBarLabelStyle: { fontSize: 10, fontWeight: '700', marginTop: 2 },
        tabBarIcon: ({ focused, color }) => {
          const tab = TABS.find(t => t.name === route.name);
          return (
            <Ionicons
              name={focused ? tab.icon : `${tab.icon}-outline`}
              size={22}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Actions" component={SuggestionsScreen} options={{ tabBarLabel: 'Actions' }} />
      <Tab.Screen name="Guide" component={GuideNavigator} options={{ tabBarLabel: 'Guide' }} />
      <Tab.Screen name="Awareness" component={PPDScreen} options={{ tabBarLabel: 'Awareness' }} />
      <Tab.Screen name="Settings" options={{ tabBarLabel: 'Settings' }}>
        {() => <SettingsScreen onReset={onReset} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
