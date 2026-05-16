import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React from 'react';
import { DimensionValue, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePlanStore } from '../store/usePlanStore';
import { DS } from '../theme/tokens';

export default function SwipeDeck() {
  const router = useRouter();
  const addSwipe = usePlanStore((s) => s.addSwipe);
  const transX = useSharedValue(0);
  const scale = useSharedValue(1);

  const gesture = Gesture.Pan()
    .onBegin(() => { scale.value = withSpring(0.95); }) // Press effect
    .onUpdate((e) => { transX.value = e.translationX; })
    .onEnd((e) => {
      scale.value = withSpring(1);
      if (Math.abs(e.translationX) > 150) {
        runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Heavy);
        transX.value = withTiming(e.translationX > 0 ? 600 : -600, {}, () => {
          runOnJS(addSwipe)(); runOnJS(router.push)('/ai-lock');
        });
      } else { transX.value = withSpring(0); }
    });

  const animStyle = useAnimatedStyle(() => {
    const rotate = interpolate(transX.value, [-200, 200], [-10, 10], Extrapolate.CLAMP);
    return {
      transform: [
        { translateX: transX.value },
        { rotate: `${rotate}deg` },
        { scale: scale.value }
      ]
    };
  });

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.timer}><View style={[styles.bar, { width: '60%' as DimensionValue }]} /></View>
      
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.card, animStyle]}>
          <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDZWLulz1_lnUPGSgysxRQ2BJtRG2fiWRs5B03571NA_M7WTRot8YgVTQQtPPqTvEcjyx63DYIuAZCw35aBzvbf7EhChuaIQ3_Pu9XMmX_F0aeXAr0WSy-J-lVBNtJJPADBb93DJBEZP_xdmmzKTpy3oJll3P5n66uSma1mujfaaeEX56utRNEXX15n-NguNwEQJv9ElfaEe3GOxa_U3iic7e0y0eBYbCfIYUhkzO50ANYfRBwcbcT26mbdYwHjAofM93xbg3NFcWn' }} style={styles.img} />
          <BlurView intensity={80} tint="dark" style={styles.glass}>
            <Text style={styles.title}>SOCIAL INDIGO</Text>
            <TouchableOpacity onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)} style={styles.btn}>
               <Text style={styles.btnT}>REVEAL DEALS</Text>
            </TouchableOpacity>
          </BlurView>
        </Animated.View>
      </GestureDetector>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rnd} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); router.back(); }}>
          <MaterialIcons name="close" size={32} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rnd, {backgroundColor: DS.colors.primary}]} onPress={() => { Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); router.push('/ai-lock'); }}>
          <MaterialIcons name="bolt" size={32} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DS.colors.background, padding: 20 },
  timer: { height: 10, backgroundColor: DS.colors.surfaceHigh, marginBottom: 40, borderWidth: 2, borderColor: '#000' },
  bar: { height: '100%', backgroundColor: DS.colors.secondary },
  card: { flex: 1, borderWidth: 4, borderColor: '#000', ...DS.shadows.neoBrutalLg, overflow: 'hidden', backgroundColor: '#000' },
  img: { width: '100%', height: '100%', opacity: 0.8 },
  glass: { position: 'absolute', bottom: 20, left: 20, right: 20, padding: 20, borderWidth: 2, borderColor: 'rgba(255,255,255,0.1)' },
  title: { color: '#FFF', fontFamily: 'SyneExtraBold', fontSize: 26 },
  btn: { backgroundColor: DS.colors.primary, marginTop: 15, padding: 12, alignItems: 'center', borderWidth: 2, borderColor: '#000' },
  btnT: { fontFamily: 'SyneExtraBold', fontSize: 12, color: '#000' },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 30 },
  rnd: { width: 75, height: 75, borderRadius: 40, backgroundColor: DS.colors.surfaceHigh, justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: '#000', ...DS.shadows.neoBrutal }
});