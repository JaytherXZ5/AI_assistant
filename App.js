import GlobalStyles from './src/components/GlobalStyles.js';
import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/index';


export default function App() {
  return (
    <AppNavigation/>
  );
}
/*<SafeAreaView style={GlobalStyles.AndroidSafeArea}>
  <Text>App jsxs</Text>
</SafeAreaView>*/