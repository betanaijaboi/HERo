import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPregnancyData } from '../utils/pregnancyCalc';
import { getSuggestionsForStage } from '../data/suggestions';
import SuggestionCard from '../components/SuggestionCard';
import TrimesterBadge from '../components/TrimesterBadge';

const UNIVERSAL_TIPS = [
  'Put your phone away for one hour each evening and be fully present.',
  'Never compare her pregnancy to others\' experiences.',
  'Handle logistics — appointments, insurance, paperwork — without being asked.',
  'Ask "what do you need from me right now?" instead of assuming.',
  'Never say "you\'re overreacting" or "calm down."',
  'Research PPD symptoms so you recognize them before she does.',
];

export default function SuggestionsScreen() {
  const [pregnancyData, setPregnancyData] = useState(null);
  const [wifeName, setWifeName] = useState('your partner');
  const [activeTab, setActiveTab] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function load() {
      const wn = await AsyncStorage.getItem('herhero_wifeName');
      const cd = await AsyncStorage.getItem('herhero_conceptionDate');
      setWifeName(wn || 'your partner');
      if (cd) {
        const pd = getPregnancyData(cd);
        setPregnancyData(pd);
        setSuggestions(getSuggestionsForStage(pd.postpartum, pd.trimester.label));
      }
    }
    load();
  }, []);

  const displayedSuggestions = activeTab === 0
    ? [suggestions[new Date().getDate() % Math.max(suggestions.length, 1)]].filter(Boolean)
    : suggestions;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Supporting {wifeName}</Text>

        {pregnancyData && (
          <View style={styles.badgeRow}>
            <TrimesterBadge trimester={pregnancyData.trimester} size="small" />
            <View style={styles.weekChip}>
              <Text style={styles.weekChipText}>Week {pregnancyData.weeksPregnant}</Text>
            </View>
          </View>
        )}

        <Text style={styles.intro}>
          Evidence-based actions that reduce prenatal and postpartum depression. Each one matters more than it looks.
        </Text>

        <View style={styles.tabs}>
          {['Today', 'All Actions'].map((t, i) => (
            <TouchableOpacity
              key={t}
              style={[styles.tab, activeTab === i && styles.tabActive]}
              onPress={() => setActiveTab(i)}
            >
              <Text style={[styles.tabText, activeTab === i && styles.tabTextActive]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {displayedSuggestions.map(item => (
          <SuggestionCard key={item.id} item={item} style={styles.card} />
        ))}

        {activeTab === 1 && (
          <>
            <Text style={styles.divider}>Universal — Any Stage</Text>
            <View style={styles.universalCard}>
              {UNIVERSAL_TIPS.map((tip, i) => (
                <View key={i} style={[styles.universalRow, i > 0 && styles.universalBorder]}>
                  <Ionicons name="checkmark-circle" size={18} color="#E91E63" />
                  <Text style={styles.universalText}>{tip}</Text>
                </View>
              ))}
            </View>
          </>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F8' },
  scroll: { paddingTop: 60, paddingBottom: 24 },
  header: { fontSize: 24, fontWeight: '800', color: '#1A1A2E', marginHorizontal: 20, marginBottom: 10, letterSpacing: -0.5 },
  badgeRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 20, marginBottom: 12 },
  weekChip: { backgroundColor: '#FCE4EC', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  weekChipText: { fontSize: 12, color: '#C2185B', fontWeight: '700' },
  intro: { fontSize: 14, color: '#7B6472', lineHeight: 21, marginHorizontal: 20, marginBottom: 20 },
  tabs: { flexDirection: 'row', marginHorizontal: 20, marginBottom: 18, backgroundColor: '#FCE4EC', borderRadius: 12, padding: 4, gap: 4 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  tabActive: { backgroundColor: '#E91E63' },
  tabText: { color: '#C9A8B8', fontSize: 14, fontWeight: '700' },
  tabTextActive: { color: '#fff' },
  card: { marginHorizontal: 20, marginBottom: 12 },
  divider: { fontSize: 12, fontWeight: '700', color: '#C9A8B8', textTransform: 'uppercase', letterSpacing: 1, marginHorizontal: 20, marginTop: 20, marginBottom: 10 },
  universalCard: { backgroundColor: '#FFFFFF', borderRadius: 16, marginHorizontal: 20, borderWidth: 1.5, borderColor: '#FADADD', overflow: 'hidden' },
  universalRow: { flexDirection: 'row', alignItems: 'flex-start', padding: 14, gap: 10 },
  universalBorder: { borderTopWidth: 1, borderTopColor: '#FFF0F4' },
  universalText: { flex: 1, fontSize: 14, color: '#7B6472', lineHeight: 20 },
});
