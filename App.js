import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './src/screens/OnboardingScreen';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [ready, setReady] = useState(false);
  const [onboarded, setOnboarded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 3000);
    async function checkOnboarding() {
      try {
        const cd = await AsyncStorage.getItem('herhero_conceptionDate');
        setOnboarded(!!cd);
      } catch (_) {}
      clearTimeout(timeout);
      setReady(true);
    }
    checkOnboarding();
    return () => clearTimeout(timeout);
  }, []);

  if (!ready) {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: '#FFF5F8', alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator color="#E91E63" size="large" />
        </View>
      </SafeAreaProvider>
    );
  }

  if (!onboarded) {
    return (
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <OnboardingScreen onComplete={() => setOnboarded(true)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <AppNavigator onReset={() => setOnboarded(false)} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
