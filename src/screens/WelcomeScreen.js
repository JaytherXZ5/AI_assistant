import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles.js';

export default function WelcomeScreen() {
  return (
  <SafeAreaView 
    //style={GlobalStyles.AndroidSafeArea}
    className="flex-1 flex justify-around bg-white"
    >
      <View className="space-y-2">
        <Text className="text-center text-4xl font-bold text-gray-700">
           Jaether
        </Text>
        <Text className="text-center tracking-wider text-gray-400 font-semibold">
            Your voice companion, powered by chatGPT.
        </Text>
      </View>
      <View className=" flex-row justify-center">
          <Image source={require('../../assets/images/bot1.png')} className="h-72 w-72" />
      </View>
    
  </SafeAreaView>
  );
}