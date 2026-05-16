import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DS } from '../theme/tokens';

export default function PostLockHub() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Top Status Badge */}
        <View style={styles.statusChip}>
          <MaterialIcons name="check-circle" size={18} color={DS.colors.black} />
          <Text style={styles.statusText}>PLAN LOCKED</Text>
        </View>

        {/* Venue & Entry Section */}
        <View style={styles.venueSection}>
          <View style={styles.venueInfo}>
             <Text style={styles.venueName}>THE GRID CLUB</Text>
             <Text style={styles.venueLoc}>
               <MaterialIcons name="location-on" size={14} color={DS.colors.outline}/> Koramangala, BLR
             </Text>
          </View>
          <View style={styles.qrCard}>
             {/* Mock Entry QR Code */}
             <Image 
                source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=After7-Grid-Club' }} 
                style={styles.qrImg} 
             />
          </View>
        </View>

        {/* Logistics Bento Grid */}
        <View style={styles.bentoGrid}>
          <TouchableOpacity style={styles.bentoItem}>
             <MaterialIcons name="directions-car" size={32} color={DS.colors.primary} />
             <Text style={styles.bentoLabel}>BOOK RIDE</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.bentoItem}>
             <MaterialIcons name="share-location" size={32} color={DS.colors.secondary} />
             <Text style={styles.bentoLabel}>SHARE ETA</Text>
          </TouchableOpacity>
        </View>

        {/* Action-Aware Chat Bubble */}
        <View style={styles.chatBubble}>
           <Text style={styles.chatText}>
             <Text style={styles.boldText}>Rahul:</Text> "I'm 5 mins away"
           </Text>
        </View>

        {/* Navigation back to Dashboard */}
        <TouchableOpacity style={styles.dashboardBtn} onPress={() => router.replace('/')}>
           <Text style={styles.dashboardBtnText}>RETURN TO DASHBOARD</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Interoperable UPI Commitment Sheet */}
      <View style={styles.upiSheet}>
        <Text style={styles.sheetTitle}>COMMIT NOW</Text>
        <View style={styles.upiRow}>
          {['GPAY', 'PHONEPE', 'PAYTM'].map(app => (
            <View key={app} style={styles.upiBtn}>
              <Text style={styles.upiText}>{app}</Text>
            </View>
          ))}
        </View>
        
        <TouchableOpacity style={styles.finalLockBtn}>
          <Text style={styles.finalLockText}>PAY SHARE: ₹1500</Text>
          <MaterialIcons name="payments" size={24} color={DS.colors.black} style={{marginLeft: 8}}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: DS.colors.background 
  },
  scrollContent: { 
    padding: DS.spacing.margin, 
    paddingTop: 20, 
    paddingBottom: 240 // Clearance for the sticky UPI sheet
  },
  statusChip: { 
    backgroundColor: DS.colors.secondary, 
    alignSelf: 'center', 
    paddingHorizontal: 16, 
    paddingVertical: 10, 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 2, 
    borderColor: DS.colors.black, 
    ...DS.shadows.neoBrutal, 
    marginBottom: 40 
  },
  statusText: { 
    fontFamily: 'SyneExtraBold', 
    fontSize: 14, 
    marginLeft: 8,
    color: DS.colors.black
  },
  venueSection: { 
    backgroundColor: DS.colors.surfaceHigh, 
    borderWidth: 2, 
    borderColor: DS.colors.black, 
    padding: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    ...DS.shadows.neoBrutalLg 
  },
  venueInfo: { 
    flex: 1,
    marginRight: 10
  },
  venueName: { 
    color: DS.colors.white, 
    fontFamily: 'SyneExtraBold', 
    fontSize: 24 
  },
  venueLoc: { 
    color: DS.colors.outline, 
    fontFamily: 'SpaceMedium', 
    fontSize: 14,
    marginTop: 6 
  },
  qrCard: { 
    backgroundColor: DS.colors.white, 
    padding: 8, 
    borderWidth: 2, 
    borderColor: DS.colors.black 
  },
  qrImg: { 
    width: 70, 
    height: 70 
  },
  bentoGrid: { 
    flexDirection: 'row', 
    gap: 16, 
    marginTop: 24 
  },
  bentoItem: { 
    flex: 1, 
    height: 120, 
    backgroundColor: DS.colors.surfaceHigh, 
    borderWidth: 2, 
    borderColor: DS.colors.black, 
    padding: 16, 
    justifyContent: 'space-between', 
    ...DS.shadows.neoBrutal 
  },
  bentoLabel: { 
    color: DS.colors.white, 
    fontFamily: 'SyneExtraBold', 
    fontSize: 12 
  },
  chatBubble: { 
    backgroundColor: DS.colors.primary, 
    padding: 16, 
    marginTop: 32, 
    borderWidth: 2, 
    borderColor: DS.colors.black, 
    ...DS.shadows.neoBrutal 
  },
  chatText: { 
    fontFamily: 'SpaceMedium', 
    fontSize: 14,
    color: DS.colors.black
  },
  boldText: { 
    fontFamily: 'SpaceBold' 
  },
  dashboardBtn: {
    marginTop: 40,
    alignItems: 'center',
    padding: 20
  },
  dashboardBtnText: {
    color: DS.colors.primary,
    fontFamily: 'SyneExtraBold',
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  upiSheet: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: DS.colors.surfaceHigh, 
    padding: 24, 
    borderTopWidth: 4, 
    borderColor: DS.colors.black, 
    shadowColor: DS.colors.black, 
    shadowOffset: { width: 0, height: -10 }, 
    shadowOpacity: 1,
    elevation: 20
  },
  sheetTitle: { 
    color: DS.colors.white, 
    fontFamily: 'SyneExtraBold', 
    fontSize: 20, 
    marginBottom: 16 
  },
  upiRow: { 
    flexDirection: 'row', 
    gap: 10, 
    marginBottom: 20 
  },
  upiBtn: { 
    flex: 1, 
    height: 50, 
    backgroundColor: DS.colors.background, 
    borderWidth: 2, 
    borderColor: DS.colors.black, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  upiText: { 
    color: DS.colors.white, 
    fontFamily: 'SpaceBold', 
    fontSize: 10 
  },
  finalLockBtn: { 
    backgroundColor: DS.colors.primary, 
    height: 64, 
    flexDirection: 'row',
    borderWidth: 2, 
    borderColor: DS.colors.black, 
    justifyContent: 'center', 
    alignItems: 'center', 
    ...DS.shadows.neoBrutal 
  },
  finalLockText: { 
    color: DS.colors.black, 
    fontFamily: 'SyneExtraBold', 
    fontSize: 20 
  }
});