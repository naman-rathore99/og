import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DS } from '../theme/tokens';

export default function ProfessionalCrewHub() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={20} color={DS.colors.outline} />
          <TextInput placeholder="FIND YOUR PEOPLE" placeholderTextColor="rgba(149, 142, 160, 0.4)" style={styles.searchIn} />
        </View>

        <Text style={styles.secTitle}>VIBE CHECKING</Text>
        <View style={styles.glassC}>
           <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh5KXHW4siRog3FHQNPlaOcgxZKpuwOZOjaUcBJzWO5Zc68g4SwBsUZE1OghNyd1PoTWyKMIkmVth2mOK2L3-7l5pyERP9Qof-JvBGSBGU0MHBHxLCtR3UXDF5SDbJMUODDcvaX6VJ8q5yz_JrxPvJTsQVOQJtnrsgjTIAuxSoxKB0P74nfAxoORdFnlJC-RFnhzWJuLc_qVCcnK7s9DWzULXt4OastDcIHnaZbp8hBxVp32i3_GCd_OJi5cxKdn97NF7meK7uOmjc' }} style={styles.avSm} />
           <View style={{flex:1, marginLeft: 16}}><Text style={styles.cName}>ARYAN_X</Text><Text style={styles.cSub}>WANTS TO JOIN</Text></View>
           <TouchableOpacity style={styles.accBtn}><Text style={styles.accLabel}>ACCEPT</Text></TouchableOpacity>
        </View>

        <View style={styles.crewHead}><Text style={[styles.secTitle, {color: DS.colors.primary}]}>THE CREW</Text><Text style={styles.count}>12 ACTIVE</Text></View>
        <View style={styles.glassC}>
          <View style={styles.cardTop}>
             <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuTrXF0DFIr7FwYhMy8PogeKGneET-E8CxRmxQ7gCPLsxhVWpYhFvO2305qRQhbhZZ0J0Y5m5y3dmbLbaDz4GJrflI_XI4HVXbwML47n90DoRUCao9LwIK4QsyEqWssZH-9Bc6Bt_e4fJf1icPZKtfqzHrsBM_2EjKNLtV3lrUz8R-3kcCF1Vfl3MYN0TFUWaNlj6OQkRd_7h8nBaKx3GCrMqIWhTgeCMGVGKD4kNeEMNB7wYm1LoRDWsoloxY2-env2Lchsyt8Gff' }} style={styles.avLg} />
             <View style={{marginLeft: 18}}><Text style={styles.cName}>MEHAK</Text><Text style={styles.statLabel}>ONLINE • SOCIALS</Text></View>
          </View>
          <View style={styles.cardBottom}>
             <View><Text style={styles.metaLabel}>VIBE SCORE</Text><Text style={styles.vVal}>98</Text></View>
             <TouchableOpacity style={styles.lockB}><Text style={styles.lockL}>LOCKED IN</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.fab}><MaterialIcons name="person-add" size={32} color={DS.colors.black} /></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DS.colors.background },
  scrollContent: { padding: DS.spacing.margin, paddingTop: 40, paddingBottom: 120 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: DS.colors.surfaceLowest, borderWidth: 2, borderColor: DS.colors.black, paddingHorizontal: 16, height: 52, ...DS.shadows.neoBrutal },
  searchIn: { flex: 1, color: DS.colors.white, fontFamily: 'SpaceBold', marginLeft: 12 },
  secTitle: { color: DS.colors.secondary, fontFamily: 'SyneExtraBold', fontSize: 22, fontStyle: 'italic', marginTop: 40, marginBottom: 16 },
  glassC: { backgroundColor: 'rgba(255, 255, 255, 0.04)', borderWidth: 2, borderColor: DS.colors.black, padding: 16, ...DS.shadows.neoBrutal, marginBottom: 16 },
  avSm: { width: 50, height: 50, borderWidth: 2, borderColor: DS.colors.black },
  cName: { color: DS.colors.white, fontFamily: 'SyneExtraBold', fontSize: 16 },
  cSub: { color: DS.colors.outline, fontFamily: 'SpaceBold', fontSize: 10 },
  accBtn: { backgroundColor: DS.colors.secondary, padding: 10, borderWidth: 2, borderColor: DS.colors.black },
  accLabel: { fontFamily: 'SyneExtraBold', fontSize: 10, color: DS.colors.black },
  crewHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  count: { color: DS.colors.outline, fontFamily: 'SpaceBold', fontSize: 12, marginBottom: 18 },
  cardTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avLg: { width: 70, height: 70, borderWidth: 4, borderColor: DS.colors.black },
  statLabel: { color: DS.colors.secondary, fontFamily: 'SpaceBold', fontSize: 10 },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.08)', paddingTop: 16 },
  metaLabel: { color: DS.colors.outline, fontFamily: 'SpaceBold', fontSize: 10 },
  vVal: { color: DS.colors.secondary, fontFamily: 'SyneExtraBold', fontSize: 32 },
  lockB: { backgroundColor: DS.colors.primary, padding: 12, borderWidth: 2, borderColor: DS.colors.black },
  lockL: { fontFamily: 'SyneExtraBold', fontSize: 11, color: DS.colors.black },
  fab: { position: 'absolute', bottom: 30, right: 20, width: 68, height: 68, backgroundColor: DS.colors.secondary, justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: DS.colors.black, ...DS.shadows.neoBrutalLg }
});