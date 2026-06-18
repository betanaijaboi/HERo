import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GUIDE_TOPICS } from '../data/guideData';

export default function GuideScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Dad's Guide</Text>
        <Text style={styles.subheader}>
          Everything you need to know — researched, plain-language, and built for the man who wants to show up fully.
        </Text>

        {GUIDE_TOPICS.map((topic, i) => (
          <TouchableOpacity
            key={topic.key}
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('GuideDetail', { topicKey: topic.key })}
          >
            <View style={[styles.iconBox, { backgroundColor: topic.color + '18' }]}>
              <Ionicons name={topic.icon} size={26} color={topic.color} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{topic.title}</Text>
              <Text style={styles.cardSub}>{topic.subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#C9A8B8" />
          </TouchableOpacity>
        ))}

        <View style={styles.disclaimer}>
          <Ionicons name="information-circle-outline" size={16} color="#C9A8B8" />
          <Text style={styles.disclaimerText}>
            Content is educational and evidence-based. Always follow guidance from your partner's doctor or midwife for specific medical decisions.
          </Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F8' },
  scroll: { paddingTop: 60 },
  header: { fontSize: 24, fontWeight: '800', color: '#1A1A2E', marginHorizontal: 20, marginBottom: 8, letterSpacing: -0.5 },
  subheader: { fontSize: 14, color: '#7B6472', lineHeight: 21, marginHorizontal: 20, marginBottom: 24 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#FADADD',
    gap: 14,
    shadowColor: '#E91E63',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  iconBox: { width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#1A1A2E', marginBottom: 3 },
  cardSub: { fontSize: 12, color: '#B8A0AA', lineHeight: 17 },
  disclaimer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: '#FCE4EC',
    borderRadius: 12,
    padding: 14,
  },
  disclaimerText: { flex: 1, fontSize: 12, color: '#9B6B7A', lineHeight: 18 },
});
