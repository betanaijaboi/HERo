import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPregnancyData } from '../utils/pregnancyCalc';
import { PPD_STAGES } from '../data/ppdInfo';

export default function PPDScreen() {
  const [activeStage, setActiveStage] = useState('prenatal');

  useEffect(() => {
    async function load() {
      const cd = await AsyncStorage.getItem('herhero_conceptionDate');
      if (cd) {
        const pd = getPregnancyData(cd);
        if (pd.postpartum) setActiveStage('postpartum');
      }
    }
    load();
  }, []);

  const stage = PPD_STAGES[activeStage];

  function callHelpline() {
    Alert.alert(
      'Postpartum Support International',
      'Call 1-800-944-4773',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call Now', onPress: () => Linking.openURL('tel:18009444773') },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Depression Awareness</Text>
        <Text style={styles.subheader}>
          1 in 5 pregnant women experience depression. Knowing the signs is part of your job as her partner.
        </Text>

        <View style={styles.tabs}>
          {['prenatal', 'postpartum'].map(key => (
            <TouchableOpacity
              key={key}
              style={[styles.tab, activeStage === key && styles.tabActive]}
              onPress={() => setActiveStage(key)}
            >
              <Text style={[styles.tabText, activeStage === key && styles.tabTextActive]}>
                {PPD_STAGES[key].subtitle}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Stage header card */}
        <View style={[styles.stageCard, { borderColor: stage.color + '44' }]}>
          <View style={[styles.stageIconBox, { backgroundColor: stage.color + '18' }]}>
            <Ionicons name={stage.icon} size={28} color={stage.color} />
          </View>
          <Text style={[styles.stageTitle, { color: stage.color }]}>{stage.title}</Text>
          <Text style={styles.stageDesc}>{stage.description}</Text>
        </View>

        {/* Signs */}
        <View style={styles.section}>
          <View style={styles.sectionHead}>
            <Ionicons name="eye-outline" size={17} color="#E91E63" />
            <Text style={styles.sectionTitle}>Signs to Watch For</Text>
          </View>
          {stage.signs.map((sign, i) => (
            <View key={i} style={styles.signRow}>
              <View style={[styles.signDot, { backgroundColor: stage.color }]} />
              <Text style={styles.signText}>{sign}</Text>
            </View>
          ))}
        </View>

        {/* What you can do */}
        <View style={styles.section}>
          <View style={styles.sectionHead}>
            <Ionicons name="hand-right-outline" size={17} color="#E91E63" />
            <Text style={styles.sectionTitle}>What You Can Do</Text>
          </View>
          {stage.whatYouCanDo.map((action, i) => (
            <View key={i} style={styles.actionRow}>
              <Ionicons name="checkmark-circle" size={17} color="#E91E63" />
              <Text style={styles.actionText}>{action}</Text>
            </View>
          ))}
        </View>

        {activeStage === 'postpartum' && stage.emergency && (
          <View style={styles.emergencyCard}>
            <Ionicons name="warning" size={20} color="#C62828" />
            <Text style={styles.emergencyText}>{stage.emergency}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.helplineBtn} onPress={callHelpline} activeOpacity={0.85}>
          <View style={styles.helplineIcon}>
            <Ionicons name="call" size={18} color="#fff" />
          </View>
          <View>
            <Text style={styles.helplineBtnTitle}>PSI Helpline</Text>
            <Text style={styles.helplineBtnSub}>1-800-944-4773 · Free · Confidential</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.selfCareCard}>
          <View style={styles.selfCareIcon}>
            <Ionicons name="person-circle-outline" size={22} color="#E91E63" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.selfCareTitle}>Your mental health matters too</Text>
            <Text style={styles.selfCareText}>
              Partners also experience depression during and after pregnancy. If you are struggling, reach out to the same helpline — they support partners too.
            </Text>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F8' },
  scroll: { paddingTop: 60, paddingBottom: 24 },
  header: { fontSize: 24, fontWeight: '800', color: '#1A1A2E', marginHorizontal: 20, marginBottom: 8, letterSpacing: -0.5 },
  subheader: { fontSize: 14, color: '#7B6472', lineHeight: 21, marginHorizontal: 20, marginBottom: 20 },
  tabs: { flexDirection: 'row', marginHorizontal: 20, marginBottom: 18, backgroundColor: '#FCE4EC', borderRadius: 12, padding: 4, gap: 4 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  tabActive: { backgroundColor: '#E91E63' },
  tabText: { color: '#C9A8B8', fontSize: 13, fontWeight: '700' },
  tabTextActive: { color: '#fff' },
  stageCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 18,
    padding: 20,
    borderWidth: 1.5,
    alignItems: 'center',
    marginBottom: 14,
  },
  stageIconBox: { width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  stageTitle: { fontSize: 18, fontWeight: '800', marginBottom: 10, textAlign: 'center' },
  stageDesc: { fontSize: 14, color: '#7B6472', lineHeight: 21, textAlign: 'center' },
  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#FADADD',
  },
  sectionHead: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 14 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#1A1A2E' },
  signRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 9 },
  signDot: { width: 6, height: 6, borderRadius: 3, marginTop: 7, flexShrink: 0 },
  signText: { flex: 1, fontSize: 14, color: '#7B6472', lineHeight: 20 },
  actionRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 9 },
  actionText: { flex: 1, fontSize: 14, color: '#7B6472', lineHeight: 20 },
  emergencyCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFEBEE',
    borderWidth: 1.5,
    borderColor: '#FFCDD2',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 14,
    gap: 12,
  },
  emergencyText: { flex: 1, fontSize: 13, color: '#C62828', lineHeight: 20, fontWeight: '600' },
  helplineBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E91E63',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    gap: 14,
  },
  helplineIcon: { width: 38, height: 38, borderRadius: 19, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
  helplineBtnTitle: { color: '#fff', fontWeight: '800', fontSize: 16 },
  helplineBtnSub: { color: 'rgba(255,255,255,0.75)', fontSize: 12, marginTop: 2 },
  selfCareCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#FADADD',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    gap: 12,
  },
  selfCareIcon: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#FCE4EC', alignItems: 'center', justifyContent: 'center' },
  selfCareTitle: { fontSize: 14, fontWeight: '700', color: '#1A1A2E', marginBottom: 5 },
  selfCareText: { fontSize: 13, color: '#7B6472', lineHeight: 20 },
});
