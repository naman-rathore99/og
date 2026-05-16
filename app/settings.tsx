import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { DS } from '../theme/tokens';

export default function SettingsScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
           <TouchableOpacity onPress={() => router.back()}><MaterialIcons name="arrow-back" size={28} color={DS.colors.primary} /></TouchableOpacity>
           <Text style={styles.headerTitle}>PROFILE</Text>
           <View style={{width: 28}} />
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatarBorder}><Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAazKwBQaNsac-ZXeqJHsqU_Y1LVHln__uUUonbnKz3DeZ8kvzsFgXitJLeGZOlEMExslL7lR7TODEajk5jm1WbyB69rTCfL5SC0vZwM6TVklGZAVn1Hu2ONK2OXex72Ezf0nCdU7XLkeVoVZs7z_V2AlA3PvFP7lwzU6zpB7YjWVtSW74xhFuUdD_eySvC_mXa1te3UGjX0J2skOL0z4djGqE9g0P_klW30jyhkcZwoIdmkWhUK9zy2GfDgssp2a8UAvvONkpiKv7H' }} style={styles.avatar} /></View>
          <Text style={styles.userName}>ISHAN_SHARMA</Text>
          <View style={styles.vibeScore}><Text style={styles.vibeText}>VIBE SCORE: 92</Text></View>
        </View>

        <Text style={styles.secTitle}>DPDP 2026 PRIVACY</Text>
        <View style={styles.settingBox}>
          <View style={styles.row}><Text style={styles.rowLabel}>DATA NOMAD RIGHTS</Text><Switch value={true} trackColor={{true: DS.colors.secondary}} /></View>
          <View style={styles.row}><Text style={styles.rowLabel}>REAL-TIME FOMO ALERTS</Text><Switch value={true} trackColor={{true: DS.colors.secondary}} /></View>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={() => router.replace('/')}>
          <Text style={styles.logoutText}>LOG OUT OF AFTER7</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DS.colors.background },
  scrollContent: { padding: DS.spacing.margin },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  headerTitle: { color: DS.colors.primary, fontFamily: 'SyneExtraBold', fontSize: 20 },
  profileCard: { alignItems: 'center', marginBottom: 40 },
  avatarBorder: { borderWidth: 4, borderColor: DS.colors.secondary, padding: 4, ...DS.shadows.neoBrutal },
  avatar: { width: 100, height: 100 },
  userName: { color: '#FFF', fontFamily: 'SyneExtraBold', fontSize: 28, marginTop: 16, fontStyle: 'italic' },
  vibeScore: { backgroundColor: DS.colors.primary, paddingHorizontal: 12, paddingVertical: 4, marginTop: 8, borderWidth: 2, borderColor: '#000' },
  vibeText: { fontFamily: 'SyneExtraBold', fontSize: 10, color: '#000' },
  secTitle: { color: DS.colors.outline, fontFamily: 'SyneExtraBold', fontSize: 14, marginBottom: 16 },
  settingBox: { backgroundColor: DS.colors.surfaceHigh, borderWidth: 2, borderColor: '#000', padding: 16, ...DS.shadows.neoBrutal },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  rowLabel: { color: '#FFF', fontFamily: 'SpaceBold', fontSize: 12 },
  logoutBtn: { marginTop: 60, backgroundColor: DS.colors.error, padding: 18, borderWidth: 2, borderColor: '#000', alignItems: 'center', ...DS.shadows.neoBrutal },
  logoutText: { fontFamily: 'SyneExtraBold', fontSize: 14, color: '#000' }
});