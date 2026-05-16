import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp, useAnimatedStyle, useSharedValue, withRepeat, withTiming, ZoomIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePlanStore } from '../store/usePlanStore';
import { DS } from '../theme/tokens';

export default function AILock() {
  const { isGhostMode, ownerName } = usePlanStore();
  const router = useRouter();
  const scanY = useSharedValue(-100);

  useEffect(() => { 
    scanY.value = withRepeat(withTiming(400, { duration: 2500 }), -1, false); 
  }, []);

  const scanStyle = useAnimatedStyle(() => ({ 
    transform: [{ translateY: scanY.value }] 
  }));

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View entering={ZoomIn.springify()} style={styles.winnerCard}>
        <View style={styles.badge}><Text style={styles.badgeT}>PASSED</Text></View>
        <Text style={styles.title}>LOCKED IN</Text>
        
        <View style={styles.frame}>
          <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCffcXeMudDzSlAaHYHKfWDUfJG0AbqdjnVVKvQjFdCncfwHHbe7ZUxvN0RKjNtLMhWPoBjJiOLFuMaII-2VvQYJ372jRiqJDgGxQ11lbZMp0bSibm2_A4-ogxYcd-Hwld6RaLe7w6qZsPGoNmZhf8Unm7uNLNY3CFqxjCFAjWiaeUrDAOnra4W9Uv_0YRKj508t4ZoZ1Zy5Emeg2wa1BeGgFgomwjAPFVe6zkUsE_cJUhHPMOpzAJ5bwU3Jgfj6GqU3pjTTDKpnDYR' }} style={styles.img} />
          {/* Animated Scanning Bar */}
          <Animated.View style={[styles.scanner, scanStyle]} />
        </View>

        <Animated.View entering={FadeInUp.delay(400)} style={styles.info}>
          <Text style={styles.venue}>SKYFALL LOUNGE</Text>
          {isGhostMode && <Text style={styles.revealed}>SECRET PLAN BY: {ownerName}</Text>}
        </Animated.View>
      </Animated.View>

      <TouchableOpacity style={styles.btn} onPress={() => router.push('/post-lock')}>
        <Text style={styles.btnT}>BET, LOCK IT</Text>
        <MaterialIcons name="lock" size={24} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DS.colors.background, justifyContent: 'center', padding: 20 },
  winnerCard: { backgroundColor: 'rgba(255,255,255,0.03)', borderWidth: 2, borderColor: '#000', padding: 24, alignItems: 'center', ...DS.shadows.neoBrutalLg },
  badge: { backgroundColor: DS.colors.secondary, padding: 6, borderWidth: 2, marginBottom: 20 },
  badgeT: { fontFamily: 'SyneExtraBold', fontSize: 10 },
  title: { color: '#FFF', fontFamily: 'SyneExtraBold', fontSize: 42, fontStyle: 'italic', marginBottom: 20 },
  frame: { width: '100%', aspectRatio: 1, borderWidth: 2, overflow: 'hidden', backgroundColor: '#000', position: 'relative' },
  img: { width: '100%', height: '100%', opacity: 0.7 },
  scanner: { position: 'absolute', width: '100%', height: 6, backgroundColor: DS.colors.primary, shadowColor: DS.colors.primary, shadowRadius: 20, shadowOpacity: 1, elevation: 10 },
  info: { marginTop: 20, alignItems: 'center' },
  venue: { color: '#FFF', fontFamily: 'SyneExtraBold', fontSize: 24 },
  revealed: { color: DS.colors.secondary, fontFamily: 'SpaceBold', fontSize: 12, marginTop: 8 },
  btn: { position: 'absolute', bottom: 60, left: 20, right: 20, backgroundColor: DS.colors.primary, height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 3, ...DS.shadows.neoBrutal },
  btnT: { fontFamily: 'SyneExtraBold', fontSize: 20, marginRight: 10 }
});