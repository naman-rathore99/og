import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInRight, ZoomIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePlanStore } from '../store/usePlanStore';
import { DS } from '../theme/tokens';

export default function Dashboard() {
  const router = useRouter();
  const { isGhostMode, setGhostMode } = usePlanStore();

  const handlePlant = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.push('/swipe');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.header}>
          <Text style={styles.headerTitle}>AFTER7</Text>
          <TouchableOpacity onPress={() => router.push('/settings')}>
            <MaterialIcons name="person" size={28} color={DS.colors.primary} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.Text entering={FadeInDown.delay(300).springify()} style={styles.hero}>
          WHATS THE{"\n"}<Text style={{color: DS.colors.primary, fontStyle: 'italic'}}>VIBE?</Text>
        </Animated.Text>

        <Animated.View entering={ZoomIn.delay(500).duration(400)} style={styles.inputCard}>
          <TextInput placeholder="Beer tonight, Indiranagar..." placeholderTextColor={DS.colors.outline} multiline style={styles.input} />
          <View style={styles.ghostRow}>
            <Text style={styles.ghostText}>GHOST MODE (SURPRISE)</Text>
            <Switch value={isGhostMode} onValueChange={setGhostMode} trackColor={{true: DS.colors.primary}} />
          </View>
          <TouchableOpacity style={styles.plantBtn} onPress={handlePlant}>
            <Text style={styles.btnLabel}>PLANT SEED</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.Text entering={FadeInRight.delay(700)} style={styles.secTitle}>LIVE CONNECTIONS</Animated.Text>
        
        {/* Mystery Connection Card with Pop Animation */}
        <Animated.View entering={ZoomIn.delay(900)} style={styles.mysteryCard}>
          <View style={styles.mysteryIcon}><MaterialIcons name="help-outline" size={32} color={DS.colors.primary} /></View>
          <View><Text style={styles.connTitle}>GHOST VIBE</Text><Text style={styles.connSub}>IDENTITY LOCKED</Text></View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DS.colors.background },
  scrollContent: { padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 },
  headerTitle: { color: DS.colors.primary, fontFamily: 'SyneExtraBold', fontSize: 24, fontStyle: 'italic' },
  hero: { color: '#FFF', fontFamily: 'SyneExtraBold', fontSize: 48, lineHeight: 50, marginBottom: 24 },
  inputCard: { backgroundColor: DS.colors.surfaceHigh, padding: 16, borderWidth: 2, borderColor: '#000', ...DS.shadows.neoBrutalLg },
  input: { color: '#FFF', fontFamily: 'SpaceMedium', fontSize: 18, minHeight: 80 },
  ghostRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 12 },
  ghostText: { color: DS.colors.primary, fontFamily: 'SyneExtraBold', fontSize: 10 },
  plantBtn: { backgroundColor: DS.colors.primary, height: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#000', ...DS.shadows.neoBrutal },
  btnLabel: { fontFamily: 'SyneExtraBold', fontSize: 12, color: '#000' },
  secTitle: { color: '#FFF', fontFamily: 'SyneExtraBold', fontSize: 20, marginTop: 40, marginBottom: 16 },
  mysteryCard: { backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 2, borderColor: DS.colors.primary, borderStyle: 'dashed', flexDirection: 'row', alignItems: 'center', padding: 16 },
  mysteryIcon: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
  connTitle: { color: DS.colors.primary, fontFamily: 'SyneExtraBold', fontSize: 16 },
  connSub: { color: DS.colors.outline, fontFamily: 'SpaceBold', fontSize: 10 }
});