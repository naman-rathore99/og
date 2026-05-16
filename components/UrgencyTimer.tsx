import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { TOKENS } from '../theme/tokens';

export default function UrgencyTimer({ durationInSeconds = 300 }) {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const progress = new Animated.Value(timeLeft / durationInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Change color from Lime to Violet as time runs out
  const barColor = timeLeft < 60 ? TOKENS.colors.violet : TOKENS.colors.lime;

  return (
    <View style={styles.container}>
      <View style={styles.timerHeader}>
        <Text style={styles.timerText}>PLAN EXPIRES IN:</Text>
        <Text style={[styles.timeValue, { color: barColor }]}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.bar, { width: `${(timeLeft / durationInSeconds) * 100}%`, backgroundColor: barColor }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  timerHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  timerText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  timeValue: { fontWeight: '900', fontSize: 14 },
  track: {
    height: 12,
    backgroundColor: '#333',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 6,
    overflow: 'hidden',
  },
  bar: { height: '100%' }
});