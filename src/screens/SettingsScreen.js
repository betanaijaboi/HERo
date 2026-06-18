import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, ScrollView, StyleSheet,
  TouchableOpacity, Alert, Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPregnancyData, formatDueDate } from '../utils/pregnancyCalc';

export default function SettingsScreen({ onReset }) {
  const insets = useSafeAreaInsets();
  const [yourName, setYourName] = useState('');
  const [wifeName, setWifeName] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [data, setData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [notificationsOn, setNotificationsOn] = useState(true);

  useEffect(() => { load(); }, []);

  async function load() {
    const yn = await AsyncStorage.getItem('herhero_yourName') || '';
    const wn = await AsyncStorage.getItem('herhero_wifeName') || '';
    const cd = await AsyncStorage.getItem('herhero_conceptionDate') || '';
    setYourName(yn);
    setWifeName(wn);
    if (cd) {
      const d = new Date(cd);
      setDateInput(`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`);
      setData(getPregnancyData(cd));
    }
  }

  async function save() {
    const parsed = new Date(dateInput);
    if (isNaN(parsed.getTime())) { Alert.alert('Invalid date', 'Please enter as MM/DD/YYYY'); return; }
    await AsyncStorage.setItem('herhero_yourName', yourName.trim());
    await AsyncStorage.setItem('herhero_wifeName', wifeName.trim());
    await AsyncStorage.setItem('herhero_conceptionDate', parsed.toISOString());
    setData(getPregnancyData(parsed.toISOString()));
    setEditing(false);
    Alert.alert('Saved', 'Your details have been updated.');
  }

  function confirmReset() {
    Alert.alert(
      'Reset App',
      'This will delete all data and return to the setup screen. This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset', style: 'destructive', onPress: async () => {
            await AsyncStorage.multiRemove(['herhero_yourName', 'herhero_wifeName', 'herhero_conceptionDate']);
            onReset();
          }
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.scroll, { paddingTop: insets.top + 16 }]} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Your Profile</Text>
          {editing ? (
            <>
              <Field label="Your name" value={yourName} onChange={setYourName} />
              <Field label="Her name" value={wifeName} onChange={setWifeName} />
              <Field label="Conception date (MM/DD/YYYY)" value={dateInput} onChange={setDateInput} keyboard="numeric" />
              <View style={styles.editBtns}>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => { setEditing(false); load(); }}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveBtn} onPress={save}>
                  <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <InfoRow icon="person-outline" label="Your name" value={yourName} />
              <InfoRow icon="heart-outline" label="Her name" value={wifeName} />
              {data && <InfoRow icon="calendar-outline" label="Due date" value={formatDueDate(data.dueDate)} />}
              <TouchableOpacity style={styles.editBtn} onPress={() => setEditing(true)}>
                <Ionicons name="create-outline" size={16} color="#E91E63" />
                <Text style={styles.editBtnText}>Edit Details</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Reminders</Text>
          <View style={styles.switchRow}>
            <View style={styles.switchLeft}>
              <View style={styles.switchIconBox}>
                <Ionicons name="notifications-outline" size={18} color="#E91E63" />
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.switchLabel}>Daily Reminders</Text>
                <Text style={styles.switchSub}>Morning nudge to check in on her</Text>
              </View>
            </View>
            <Switch
              value={notificationsOn}
              onValueChange={setNotificationsOn}
              trackColor={{ false: '#FCE4EC', true: '#F48FB1' }}
              thumbColor={notificationsOn ? '#E91E63' : '#C9A8B8'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>About HERo</Text>
          <Text style={styles.aboutText}>
            HERo is a pregnancy companion built for men. It tracks your partner's trimester, surfaces evidence-based actions to support her mental and physical wellbeing, and prepares you to recognize and respond to prenatal and postpartum depression.
          </Text>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>

        <TouchableOpacity style={styles.resetBtn} onPress={confirmReset}>
          <Ionicons name="trash-outline" size={17} color="#C62828" />
          <Text style={styles.resetText}>Reset All Data</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={15} color="#E91E63" />
      </View>
      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

function Field({ label, value, onChange, keyboard }) {
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboard || 'default'}
        placeholderTextColor="#C9A8B8"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F8' },
  scroll: { paddingTop: 16, paddingBottom: 24 },
  header: { fontSize: 24, fontWeight: '800', color: '#1A1A2E', marginHorizontal: 20, marginBottom: 22, letterSpacing: -0.5 },
  section: { backgroundColor: '#FFFFFF', marginHorizontal: 20, borderRadius: 18, padding: 18, marginBottom: 14, borderWidth: 1.5, borderColor: '#FADADD' },
  sectionLabel: { fontSize: 11, fontWeight: '800', color: '#C9A8B8', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 },
  infoRow: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#FFF0F4' },
  infoIcon: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#FCE4EC', alignItems: 'center', justifyContent: 'center' },
  infoLabel: { fontSize: 11, color: '#C9A8B8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },
  infoValue: { fontSize: 15, color: '#1A1A2E', fontWeight: '600', marginTop: 2 },
  editBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 14, alignSelf: 'flex-start' },
  editBtnText: { color: '#E91E63', fontSize: 14, fontWeight: '700' },
  fieldLabel: { fontSize: 12, color: '#C9A8B8', fontWeight: '700', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 },
  input: { backgroundColor: '#FFF5F8', borderWidth: 1.5, borderColor: '#F8BBD9', borderRadius: 12, padding: 13, color: '#1A1A2E', fontSize: 15 },
  editBtns: { flexDirection: 'row', gap: 12, marginTop: 4 },
  cancelBtn: { flex: 1, padding: 13, borderRadius: 12, backgroundColor: '#FCE4EC', alignItems: 'center' },
  cancelText: { color: '#C9A8B8', fontWeight: '700' },
  saveBtn: { flex: 1, padding: 13, borderRadius: 12, backgroundColor: '#E91E63', alignItems: 'center' },
  saveText: { color: '#fff', fontWeight: '700' },
  switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  switchLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  switchIconBox: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FCE4EC', alignItems: 'center', justifyContent: 'center' },
  switchLabel: { fontSize: 15, color: '#1A1A2E', fontWeight: '600' },
  switchSub: { fontSize: 12, color: '#B8A0AA', marginTop: 2 },
  aboutText: { fontSize: 14, color: '#7B6472', lineHeight: 21, marginBottom: 10 },
  versionText: { fontSize: 12, color: '#C9A8B8', fontWeight: '600' },
  resetBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginHorizontal: 20, marginTop: 4, padding: 16, borderRadius: 14, backgroundColor: '#FFEBEE', borderWidth: 1.5, borderColor: '#FFCDD2' },
  resetText: { color: '#C62828', fontWeight: '700', fontSize: 15 },
});
