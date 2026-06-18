import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MOOD_COLORS } from '../data/suggestions';

export default function SuggestionCard({ item, style }) {
  const [done, setDone] = useState(false);
  const moodColor = MOOD_COLORS[item.mood] || '#E91E63';

  return (
    <View style={[styles.card, style, done && styles.cardDone]}>
      <View style={[styles.iconBox, { backgroundColor: moodColor + '18' }]}>
        <Ionicons name={item.icon} size={24} color={done ? '#C9A8B8' : moodColor} />
      </View>
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={[styles.category, { color: moodColor }]}>{item.category}</Text>
          <TouchableOpacity
            onPress={() => setDone(!done)}
            style={[styles.checkBtn, done && { backgroundColor: '#E91E63', borderColor: '#E91E63' }]}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons name={done ? 'checkmark' : 'checkmark-outline'} size={14} color={done ? '#fff' : '#C9A8B8'} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.title, done && styles.titleDone]}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: '#FADADD',
    gap: 14,
    shadowColor: '#E91E63',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardDone: { opacity: 0.5 },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  content: { flex: 1 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  category: { fontSize: 10, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.8 },
  checkBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFF5F8',
    borderWidth: 1.5,
    borderColor: '#F8BBD9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 15, fontWeight: '700', color: '#1A1A2E', marginBottom: 5 },
  titleDone: { textDecorationLine: 'line-through', color: '#C9A8B8' },
  desc: { fontSize: 13, color: '#7B6472', lineHeight: 19 },
});
