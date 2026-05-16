import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { DimensionValue, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePlanStore } from '../store/usePlanStore';
import { DS } from '../theme/tokens';

export default function PlannerHUD() {
  const { swipesCount, totalFriends } = usePlanStore();
  const progress = `${(swipesCount / totalFriends) * 100}%` as DimensionValue;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.displayLg}>GROUP HUD</Text>
        
        <View style={styles.timerCard}>
          <Text style={styles.timerLabel}>AI CONSENSUS TIMER</Text>
          <Text style={styles.time}>14:02</Text>
          <View style={styles.track}><View style={[styles.bar, { width: progress }]} /></View>
          <Text style={styles.countText}>{swipesCount}/{totalFriends} FRIENDS SWIPED</Text>
        </View>

        <TouchableOpacity style={styles.lockBtn}>
           <MaterialIcons name="bolt" size={32} color="#000" />
           <Text style={styles.lockBtnText}>INSTANT LOCK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.killBtn}>
           <Text style={styles.killText}>KILL PLAN</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DS.colors.background },
  scrollContent: { padding: DS.spacing.margin, paddingTop: 40 },
  displayLg: { color: '#FFF', fontFamily: 'SyneExtraBold', fontSize: 36, marginBottom: 32 },
  timerCard: { backgroundColor: DS.colors.surfaceHigh, padding: 24, borderWidth: 2, borderColor: '#000', ...DS.shadows.neoBrutalLg },
  timerLabel: { color: DS.colors.secondary, fontFamily: 'SyneExtraBold', fontSize: 12 },
  time: { color: DS.colors.error, fontFamily: 'SyneExtraBold', fontSize: 48, marginVertical: 12 },
  track: { height: 16, backgroundColor: DS.colors.surfaceLowest, borderWidth: 2, borderColor: '#000' },
  bar: { height: '100%', backgroundColor: DS.colors.primary },
  countText: { color: DS.colors.outline, fontFamily: 'SpaceBold', marginTop: 16, fontSize: 12 },
  lockBtn: { backgroundColor: DS.colors.secondary, marginTop: 40, height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 4, borderColor: '#000', ...DS.shadows.neoBrutalLg },
  lockBtnText: { fontFamily: 'SyneExtraBold', fontSize: 24, marginLeft: 12, color: '#000' },
  killBtn: { marginTop: 20, backgroundColor: DS.colors.error, padding: 18, borderWidth: 2, borderColor: '#000', alignItems: 'center' },
  killText: { fontFamily: 'SyneExtraBold', fontSize: 14, color: '#000' }
});