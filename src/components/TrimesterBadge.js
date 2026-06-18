import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TrimesterBadge({ trimester, size = 'normal' }) {
  const isSmall = size === 'small';
  return (
    <View style={[styles.badge, { backgroundColor: trimester.color + '18', borderColor: trimester.color + '44' }]}>
      <View style={[styles.dot, { backgroundColor: trimester.color }]} />
      <Text style={[styles.label, { color: trimester.color, fontSize: isSmall ? 11 : 13 }]}>
        {trimester.label}
      </Text>
      <Text style={[styles.desc, { fontSize: isSmall ? 10 : 11 }]}>{trimester.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1.5,
    gap: 6,
  },
  dot: { width: 7, height: 7, borderRadius: 4 },
  label: { fontWeight: '700', letterSpacing: 0.2 },
  desc: { color: '#B8A0AA', fontWeight: '500' },
});
