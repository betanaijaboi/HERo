import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeroLogo({ size = 'normal', color = '#E91E63', style }) {
  const sizes = {
    small:  { her: 18, o: 10, oTop: 4 },
    normal: { her: 28, o: 15, oTop: 6 },
    large:  { her: 42, o: 22, oTop: 10 },
    hero:   { her: 56, o: 28, oTop: 13 },
  };

  const s = sizes[size] || sizes.normal;

  return (
    <View style={[styles.row, style]}>
      <Text style={[styles.her, { fontSize: s.her, color }]}>HER</Text>
      <Text style={[styles.o, { fontSize: s.o, color, marginTop: s.oTop }]}>o</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-end' },
  her: { fontWeight: '900', letterSpacing: 1.5 },
  o: { fontWeight: '700', letterSpacing: 0.5, marginBottom: 1 },
});
