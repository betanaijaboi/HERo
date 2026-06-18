import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import HeroLogo from '../components/HeroLogo';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen({ onComplete }) {
  const [step, setStep] = useState(0);
  const [yourName, setYourName] = useState('');
  const [wifeName, setWifeName] = useState('');
  const [dateInput, setDateInput] = useState('');

  const steps = [
    {
      icon: 'heart',
      iconColor: '#E91E63',
      title: 'Welcome, Dad.',
      subtitle: 'HERo is built for men who want to show up fully for their pregnant partner. Let\'s get you set up.',
      cta: 'Get Started',
    },
    {
      icon: 'person-circle-outline',
      iconColor: '#E91E63',
      title: 'What\'s your name?',
      subtitle: 'So we can personalize your experience.',
      input: { value: yourName, setter: setYourName, placeholder: 'Your first name', key: 'yourName' },
      cta: 'Next',
    },
    {
      icon: 'heart-outline',
      iconColor: '#E91E63',
      title: 'Who are we supporting?',
      subtitle: 'Enter your partner\'s name.',
      input: { value: wifeName, setter: setWifeName, placeholder: 'Her first name', key: 'wifeName' },
      cta: 'Next',
    },
    {
      icon: 'calendar-outline',
      iconColor: '#E91E63',
      title: 'When did conception happen?',
      subtitle: 'Enter the approximate date of conception. This calculates the trimester and due date.\n\nFormat: MM/DD/YYYY',
      input: { value: dateInput, setter: setDateInput, placeholder: 'MM/DD/YYYY', key: 'date', keyboard: 'numeric' },
      cta: 'Start Tracking',
    },
  ];

  function handleNext() {
    if (step === 0) { setStep(1); return; }
    if (step === 1) {
      if (!yourName.trim()) { Alert.alert('Please enter your name'); return; }
      setStep(2); return;
    }
    if (step === 2) {
      if (!wifeName.trim()) { Alert.alert('Please enter her name'); return; }
      setStep(3); return;
    }
    if (step === 3) {
      const parsed = new Date(dateInput);
      if (isNaN(parsed.getTime())) { Alert.alert('Invalid date', 'Please enter date as MM/DD/YYYY'); return; }
      if (parsed > new Date()) { Alert.alert('Invalid date', 'Conception date cannot be in the future'); return; }
      completeOnboarding(yourName.trim(), wifeName.trim(), parsed.toISOString());
    }
  }

  async function loadDemo() {
    const demoConception = new Date();
    demoConception.setDate(demoConception.getDate() - 7 * 22); // 22 weeks ago → 2nd trimester
    await completeOnboarding('Cole', 'Sophia', demoConception.toISOString());
  }

  async function completeOnboarding(yn, wn, isoDate) {
    await AsyncStorage.setItem('herhero_yourName', yn);
    await AsyncStorage.setItem('herhero_wifeName', wn);
    await AsyncStorage.setItem('herhero_conceptionDate', isoDate);
    onComplete();
  }

  const currentStep = steps[step];

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inner}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

          {/* Progress dots */}
          <View style={styles.progressRow}>
            {steps.map((_, i) => (
              <View key={i} style={[styles.dot, i === step && styles.dotActive, i < step && styles.dotDone]} />
            ))}
          </View>

          {/* Icon */}
          <View style={styles.iconWrap}>
            <Ionicons name={currentStep.icon} size={52} color={currentStep.iconColor} />
          </View>

          {step === 0 && <HeroLogo size="large" style={styles.logoCenter} />}
          <Text style={styles.title}>{currentStep.title}</Text>
          <Text style={styles.subtitle}>{currentStep.subtitle}</Text>

          {currentStep.input && (
            <TextInput
              style={styles.input}
              value={currentStep.input.value}
              onChangeText={currentStep.input.setter}
              placeholder={currentStep.input.placeholder}
              placeholderTextColor="#C9A8B8"
              keyboardType={currentStep.input.keyboard || 'default'}
              autoFocus
              returnKeyType="next"
              onSubmitEditing={handleNext}
            />
          )}

          <TouchableOpacity style={styles.btn} onPress={handleNext} activeOpacity={0.85}>
            <Text style={styles.btnText}>{currentStep.cta}</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" style={{ marginLeft: 8 }} />
          </TouchableOpacity>

          {/* Demo account — only shown on first step */}
          {step === 0 && (
            <TouchableOpacity style={styles.demoBtn} onPress={loadDemo} activeOpacity={0.8}>
              <Ionicons name="eye-outline" size={16} color="#E91E63" />
              <Text style={styles.demoBtnText}>Try Demo Account</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F8' },
  inner: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: 'center', padding: 32 },
  progressRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 44, gap: 8 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FADADD' },
  dotActive: { backgroundColor: '#E91E63', width: 24 },
  dotDone: { backgroundColor: '#F48FB1' },
  iconWrap: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FCE4EC',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 32,
    borderWidth: 2,
    borderColor: '#F8BBD9',
  },
  logoCenter: { alignSelf: 'center', marginBottom: 8 },
  title: { fontSize: 28, fontWeight: '800', color: '#1A1A2E', textAlign: 'center', marginBottom: 12, letterSpacing: -0.5 },
  subtitle: { fontSize: 15, color: '#7B6472', textAlign: 'center', lineHeight: 23, marginBottom: 32 },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#F8BBD9',
    borderRadius: 14,
    padding: 16,
    color: '#1A1A2E',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#E91E63',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  demoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 20,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: '#F48FB1',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  demoBtnText: { color: '#E91E63', fontSize: 14, fontWeight: '700' },
});
