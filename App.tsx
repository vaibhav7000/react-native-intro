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
import CustomStyles from './Components/CustomStyles';
import FlexDirection from './Components/FlexDirection';
import AlignItems from './Components/AlignItems';
import CustomFlexWrap from './Components/FlexWrap';
import UserInteractions from './Components/UserInteractions';
import CustomIndicator from './Components/CustomActivityIndicator';
import { PlatformProvider } from './Context/Store';
import CustomButton from './Components/CustomButton';
import CustomFlatList from './Components/CustomFlatList';
import CustomImage from './Components/CustomImages';
import ShoppingCart from './Components/Storage';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={{
      backgroundColor: "pink"
    }}>
      <SafeAreaView style={{
        backgroundColor: "green",
        flex: 1
      }} edges={['bottom', 'left', 'right', 'top']}>
        <PlatformProvider>
          <AppContent />
        </PlatformProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={{
      backgroundColor: "red",
      flex: 1
    }}>
      {/* <CustomScroll/> */}
      {/* <CustomFlat/> */}
      {/* <CustomSection/> */}

      {/* <CustomPlatform/> */}

      {/* <CustomStyles/> */}

      {/* <FlexDirection/> */}

      {/* <CustomFlexWrap/> */}

      {/* <AlignItems/> */}

      {/* <UserInteractions/> */}

      {/* <CustomIndicator/>

      <CustomButton/> */}

      {/* <CustomFlatList/> */}

      {/* <CustomImage/> */}

      {/* <Storage/> */}

      <ShoppingCart/>
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
