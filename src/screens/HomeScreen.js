import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPregnancyData, formatDueDate } from '../utils/pregnancyCalc';
import { getSuggestionsForStage, DAILY_AFFIRMATIONS } from '../data/suggestions';
import TrimesterBadge from '../components/TrimesterBadge';
import SuggestionCard from '../components/SuggestionCard';
import HeroLogo from '../components/HeroLogo';

const BABY_SIZE_BY_WEEK = {
  4: 'poppy seed', 6: 'sweet pea', 8: 'raspberry', 10: 'strawberry',
  12: 'lime', 14: 'lemon', 16: 'avocado', 18: 'sweet potato',
  20: 'banana', 22: 'papaya', 24: 'ear of corn', 26: 'head of lettuce',
  28: 'eggplant', 30: 'cabbage', 32: 'squash', 34: 'cantaloupe',
  36: 'honeydew', 38: 'watermelon', 40: 'pumpkin',
};

function getBabySize(weeks) {
  const keys = Object.keys(BABY_SIZE_BY_WEEK).map(Number).sort((a, b) => a - b);
  let size = 'sesame seed';
  for (const k of keys) { if (weeks >= k) size = BABY_SIZE_BY_WEEK[k]; }
  return size;
}

function getTimeOfDay() {
  const h = new Date().getHours();
  if (h < 12) return 'morning';
  if (h < 17) return 'afternoon';
  return 'evening';
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [data, setData] = useState(null);
  const [yourName, setYourName] = useState('');
  const [wifeName, setWifeName] = useState('');
  const [affirmation, setAffirmation] = useState('');
  const [todaySuggestion, setTodaySuggestion] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  async function load() {
    const yn = await AsyncStorage.getItem('herhero_yourName');
    const wn = await AsyncStorage.getItem('herhero_wifeName');
    const cd = await AsyncStorage.getItem('herhero_conceptionDate');
    setYourName(yn || 'Dad');
    setWifeName(wn || 'your partner');
    if (cd) {
      const pd = getPregnancyData(cd);
      setData(pd);
      const suggestions = getSuggestionsForStage(pd.postpartum, pd.trimester.label);
      setTodaySuggestion(suggestions[new Date().getDate() % suggestions.length]);
    }
    setAffirmation(DAILY_AFFIRMATIONS[new Date().getDate() % DAILY_AFFIRMATIONS.length]);
  }

  useEffect(() => { load(); }, []);

  async function onRefresh() { setRefreshing(true); await load(); setRefreshing(false); }

  if (!data) return (
    <View style={styles.loading}>
      <Ionicons name="heart" size={32} color="#E91E63" />
    </View>
  );

  const progressPercent = Math.round(data.progress * 100);
  const babySize = getBabySize(data.weeksPregnant);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingTop: insets.top + 16 }]}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#E91E63" />}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <HeroLogo size="normal" style={{ marginBottom: 2 }} />
            <Text style={styles.greeting}>Good {getTimeOfDay()}, {yourName}</Text>
            <Text style={styles.subGreeting}>{wifeName} needs you today.</Text>
          </View>
          <View style={styles.avatar}>
            <Ionicons name="person" size={20} color="#E91E63" />
          </View>
        </View>

        {/* Affirmation */}
        <View style={styles.affirmationCard}>
          <Ionicons name="sparkles" size={16} color="#E91E63" />
          <Text style={styles.affirmationText}>"{affirmation}"</Text>
        </View>

        {/* Pregnancy Status */}
        <View style={styles.statusCard}>
          <View style={styles.statusTop}>
            <View>
              <Text style={styles.weeksLabel}>Week</Text>
              <Text style={styles.weeksNumber}>{data.weeksPregnant}</Text>
              <Text style={styles.weeksOf}>of 40</Text>
            </View>
            <TrimesterBadge trimester={data.trimester} />
          </View>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, {
              width: `${Math.min(progressPercent, 100)}%`,
              backgroundColor: data.trimester.color,
            }]} />
          </View>
          <View style={styles.progressLabels}>
            <Text style={styles.progressLabel}>Conception</Text>
            <Text style={[styles.progressLabel, { color: data.trimester.color, fontWeight: '700' }]}>{progressPercent}%</Text>
            <Text style={styles.progressLabel}>Due Date</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Ionicons name="calendar-outline" size={15} color="#E91E63" />
              <Text style={styles.statVal}>{Math.max(data.daysUntilDue, 0)}</Text>
              <Text style={styles.statLabel}>{data.postpartum ? 'days since' : 'days to go'}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Ionicons name="resize-outline" size={15} color="#E91E63" />
              <Text style={styles.statVal} numberOfLines={1}>{babySize}</Text>
              <Text style={styles.statLabel}>baby's size</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Ionicons name="heart-outline" size={15} color="#E91E63" />
              <Text style={styles.statVal}>{formatDueDate(data.dueDate).split(',')[0]}</Text>
              <Text style={styles.statLabel}>due day</Text>
            </View>
          </View>
        </View>

        {/* Today's Action */}
        <Text style={styles.sectionTitle}>Today's Action for {wifeName}</Text>
        {todaySuggestion && <SuggestionCard item={todaySuggestion} style={styles.card} />}

        {/* Full due date */}
        <View style={styles.dueDateCard}>
          <View style={styles.dueDateIcon}>
            <Ionicons name="star" size={18} color="#E91E63" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.dueDateLabel}>Expected Due Date</Text>
            <Text style={styles.dueDateVal}>{formatDueDate(data.dueDate)}</Text>
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F8' },
  loading: { flex: 1, backgroundColor: '#FFF5F8', alignItems: 'center', justifyContent: 'center' },
  scroll: { paddingTop: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: 20, marginBottom: 20 },
  greeting: { fontSize: 22, fontWeight: '800', color: '#1A1A2E', letterSpacing: -0.5 },
  subGreeting: { fontSize: 14, color: '#B8A0AA', marginTop: 2 },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FCE4EC',
    borderWidth: 2,
    borderColor: '#F8BBD9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  affirmationCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    borderWidth: 1.5,
    borderColor: '#FADADD',
  },
  affirmationText: { flex: 1, color: '#7B6472', fontSize: 14, fontStyle: 'italic', lineHeight: 21 },
  statusCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1.5,
    borderColor: '#FADADD',
    shadowColor: '#E91E63',
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  statusTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
  weeksLabel: { fontSize: 11, color: '#B8A0AA', textTransform: 'uppercase', letterSpacing: 1, fontWeight: '700' },
  weeksNumber: { fontSize: 56, fontWeight: '900', color: '#E91E63', lineHeight: 62 },
  weeksOf: { fontSize: 13, color: '#B8A0AA', marginTop: -4 },
  progressTrack: { height: 6, backgroundColor: '#FCE4EC', borderRadius: 3, marginBottom: 6, overflow: 'hidden' },
  progressFill: { height: 6, borderRadius: 3 },
  progressLabels: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  progressLabel: { fontSize: 10, color: '#C9A8B8', fontWeight: '600' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  stat: { flex: 1, alignItems: 'center', gap: 4 },
  statDivider: { width: 1, height: 36, backgroundColor: '#FCE4EC' },
  statVal: { fontSize: 13, fontWeight: '700', color: '#1A1A2E', textAlign: 'center' },
  statLabel: { fontSize: 10, color: '#B8A0AA', textAlign: 'center' },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1A1A2E', marginHorizontal: 20, marginBottom: 12 },
  card: { marginHorizontal: 20 },
  dueDateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    marginTop: 14,
    borderWidth: 1.5,
    borderColor: '#FADADD',
    gap: 12,
  },
  dueDateIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FCE4EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dueDateLabel: { fontSize: 11, color: '#E91E63', textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: '700' },
  dueDateVal: { fontSize: 14, color: '#1A1A2E', fontWeight: '600', marginTop: 2 },
});
