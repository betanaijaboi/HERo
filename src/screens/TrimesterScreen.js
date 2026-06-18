import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPregnancyData } from '../utils/pregnancyCalc';

const TRIMESTER_DETAILS = [
  {
    label: '1st Trimester',
    weeks: 'Weeks 1–12',
    color: '#FF6B9D',
    icon: 'leaf-outline',
    whatHappens: [
      'Baby\'s major organs begin forming',
      'Heart starts beating around week 6',
      'Risk of miscarriage is highest this trimester',
      'Morning sickness, fatigue, and breast tenderness peak',
      'Baby grows from microscopic to about 3 inches',
    ],
    yourRole: [
      'Attend every prenatal appointment',
      'Handle strong smells and nausea triggers in the home',
      'Do not minimize her symptoms — they are intense',
      'Keep the atmosphere at home low-stress and predictable',
    ],
    milestone: 'First ultrasound — you will hear the heartbeat for the first time.',
  },
  {
    label: '2nd Trimester',
    weeks: 'Weeks 13–27',
    color: '#E91E63',
    icon: 'sunny-outline',
    whatHappens: [
      'Energy often returns — this is the "golden trimester"',
      'Baby bump becomes visible',
      'Baby starts moving (quickening) around week 18–20',
      'Anatomy scan reveals baby\'s sex (if you want to know)',
      'Baby develops hearing — can recognize voices',
    ],
    yourRole: [
      'Talk and sing to the bump — baby can hear you',
      'Plan the babymoon or a special getaway',
      'Start building the nursery together',
      'Attend the anatomy scan — it is a major milestone',
    ],
    milestone: 'Anatomy scan at week 18–22. Baby\'s full body is visible and sex can be confirmed.',
  },
  {
    label: '3rd Trimester',
    weeks: 'Weeks 28–40',
    color: '#C2185B',
    icon: 'flame-outline',
    whatHappens: [
      'Baby gains most of its weight in this trimester',
      'Braxton Hicks (practice contractions) begin',
      'Sleep becomes very difficult for her',
      'Anxiety about labor and delivery intensifies',
      'Baby drops lower in preparation for birth',
    ],
    yourRole: [
      'Pack the hospital bag by week 35',
      'Learn the birth plan and be ready to advocate',
      'Learn breathing and labor support techniques',
      'Arrange time off work for the birth and after',
    ],
    milestone: 'Birth plan finalized. Hospital registered. You are almost there.',
  },
  {
    label: 'Postpartum',
    weeks: 'Weeks 40+',
    color: '#880E4F',
    icon: 'star-outline',
    whatHappens: [
      'Her body begins healing from birth (4–6 weeks minimum)',
      'Hormones drop sharply — "baby blues" common in week 1',
      'Breastfeeding can be physically painful and exhausting',
      'Sleep deprivation is severe for both of you',
      'PPD risk is highest in the first 4–8 weeks',
    ],
    yourRole: [
      'Take full parental leave if you have it',
      'Handle all household tasks without being asked',
      'Monitor for PPD signs closely — see the Awareness tab',
      'Let visitors wait — protect her rest first',
      'Tell her she is doing an incredible job, daily',
    ],
    milestone: 'The 6-week check-up. Both mother and baby are assessed. Raise any mental health concerns here.',
  },
];

export default function TrimesterScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const cd = await AsyncStorage.getItem('herhero_conceptionDate');
      if (cd) setData(getPregnancyData(cd));
    }
    load();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Pregnancy Stages</Text>
        <Text style={styles.subheader}>
          Know every phase of her journey — and exactly what she needs from you in each one.
        </Text>

        {TRIMESTER_DETAILS.map(t => {
          const isCurrent = data && data.trimester.label === t.label;
          return (
            <View key={t.label} style={[styles.card, isCurrent && { borderColor: t.color, borderWidth: 2 }]}>
              {isCurrent && (
                <View style={[styles.currentBadge, { backgroundColor: t.color }]}>
                  <Text style={styles.currentBadgeText}>YOU ARE HERE</Text>
                </View>
              )}

              <View style={styles.cardHeader}>
                <View style={[styles.iconBox, { backgroundColor: t.color + '18' }]}>
                  <Ionicons name={t.icon} size={22} color={t.color} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.trimLabel, { color: t.color }]}>{t.label}</Text>
                  <Text style={styles.trimWeeks}>{t.weeks}</Text>
                </View>
                {isCurrent && data && (
                  <View style={[styles.weekPill, { backgroundColor: t.color + '18' }]}>
                    <Text style={[styles.weekPillText, { color: t.color }]}>Wk {data.weeksPregnant}</Text>
                  </View>
                )}
              </View>

              <Text style={styles.subLabel}>What is happening</Text>
              {t.whatHappens.map((w, i) => (
                <View key={i} style={styles.bulletRow}>
                  <View style={[styles.bullet, { backgroundColor: t.color }]} />
                  <Text style={styles.bulletText}>{w}</Text>
                </View>
              ))}

              <Text style={[styles.subLabel, { marginTop: 14 }]}>Your role</Text>
              {t.yourRole.map((r, i) => (
                <View key={i} style={styles.actionRow}>
                  <Ionicons name="checkmark-circle-outline" size={16} color="#E91E63" />
                  <Text style={styles.actionText}>{r}</Text>
                </View>
              ))}

              <View style={[styles.milestoneCard, { backgroundColor: t.color + '10', borderColor: t.color + '30' }]}>
                <Ionicons name="flag-outline" size={15} color={t.color} />
                <Text style={[styles.milestoneText, { color: t.color }]}>{t.milestone}</Text>
              </View>
            </View>
          );
        })}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F8' },
  scroll: { paddingTop: 60, paddingBottom: 24 },
  header: { fontSize: 24, fontWeight: '800', color: '#1A1A2E', marginHorizontal: 20, marginBottom: 8, letterSpacing: -0.5 },
  subheader: { fontSize: 14, color: '#7B6472', lineHeight: 21, marginHorizontal: 20, marginBottom: 22 },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: '#FADADD',
    overflow: 'hidden',
    shadowColor: '#E91E63',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  currentBadge: { position: 'absolute', top: 0, right: 0, paddingHorizontal: 12, paddingVertical: 5, borderBottomLeftRadius: 14 },
  currentBadgeText: { color: '#fff', fontSize: 9, fontWeight: '900', letterSpacing: 1 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  iconBox: { width: 46, height: 46, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  trimLabel: { fontSize: 16, fontWeight: '800' },
  trimWeeks: { fontSize: 12, color: '#B8A0AA', marginTop: 2 },
  weekPill: { borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6 },
  weekPillText: { fontSize: 13, fontWeight: '800' },
  subLabel: { fontSize: 11, fontWeight: '700', color: '#C9A8B8', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 7 },
  bullet: { width: 5, height: 5, borderRadius: 3, marginTop: 8, flexShrink: 0 },
  bulletText: { flex: 1, fontSize: 14, color: '#7B6472', lineHeight: 20 },
  actionRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: 7 },
  actionText: { flex: 1, fontSize: 14, color: '#7B6472', lineHeight: 20 },
  milestoneCard: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginTop: 14, borderRadius: 10, padding: 12, borderWidth: 1 },
  milestoneText: { flex: 1, fontSize: 13, fontWeight: '600', lineHeight: 19 },
});
