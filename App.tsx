/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Button, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Cat from './Components/Cat';
import Dog from './Components/Dog';
import { useState } from 'react';
import CustomInput from './Components/TextInput';
import CustomScroll from './Components/CustomScroll';
import CustomFlat from './Components/CustomFlat';
import CustomSection from './Components/SectionList';
import CustomPlatform from './Components/Platform';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{
        flex: 1,
      }} edges={['bottom', 'left', 'right', 'top']}>
        <AppContent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      {/* <CustomScroll/> */}
      {/* <CustomFlat/> */}
      {/* <CustomSection/> */}

      <CustomPlatform/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

export default App;
