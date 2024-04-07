import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItems from '../../src/components/core/DayListItems';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';


import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const days = [...Array(25)].map((val, index)=>index+1);
console.log(days)

export default function HomeScreen() {
  const[fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic : AmaticSC_400Regular,
    AmaticBold : AmaticSC_700Bold,
  });

  useEffect(()=>{
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
   }
  },[fontsLoaded,fontError]);

  if (!fontsLoaded && !fontError){
    return null;
  }

 
  return (
    <View style={styles.container}>

      <FlatList
      contentContainerStyle = {styles.content}
      columnWrapperStyle = {styles.column}
      numColumns={2}
        data = {days}
        renderItem={({item})=><DayListItems day = {item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content:{
    gap: 10,
    padding : 10,
  },
  column:{
    gap: 10,
  },
});
