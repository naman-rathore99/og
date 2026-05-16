import { SpaceGrotesk_500Medium, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { Syne_800ExtraBold, useFonts } from '@expo-google-fonts/syne';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SyneExtraBold: Syne_800ExtraBold,
    SpaceMedium: SpaceGrotesk_500Medium,
    SpaceBold: SpaceGrotesk_700Bold,
  });

  useEffect(() => { if (loaded) SplashScreen.hideAsync(); }, [loaded]);
  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ 
          headerShown: false, 
          contentStyle: { backgroundColor: '#15121b' },
          animation: 'slide_from_bottom', // Premium GenZ transition
          animationDuration: 400,
        }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="swipe" options={{ animation: 'fade_from_bottom' }} />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}