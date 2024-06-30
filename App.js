import { useAssets } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Tabs from './navigation/Tabs';
import { Ionicons } from '@expo/vector-icons';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(Ionicons.font);
  const [assets] = useAssets([
    require('./assets/snack-icon.png')
  ]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && assets) await SplashScreen.hideAsync();
  }, [fontsLoaded, assets]);  
  if (!fontsLoaded || !assets) {
    return null;
  }  
  return (
    <NavigationContainer>
      <Tabs />
      <StatusBar style={'light'} />
    </NavigationContainer>
  );
}
