import GlobalStyles from './src/components/GlobalStyles.js';
import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/navigation/HomeScreen.js';


export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <Text>App jsxs</Text>
    </SafeAreaView>
  );
}
