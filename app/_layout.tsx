import React from "react";
import { Stack } from "expo-router";
import "../global.css";
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {

  const theme = useColorScheme();

  return (
   <>
    <StatusBar style={theme === 'dark' ? 'light' : 'dark'} backgroundColor={theme === 'dark' ? '#0C426F' : 'white'} />
    <Stack screenOptions={{
    headerShown: false
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
   </>
  )
}


