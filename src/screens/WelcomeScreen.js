import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function WelcomeScreen() {
  return (
  <SafeAreaView 
    //style={GlobalStyles.AndroidSafeArea}
    className="flex-1 flex justify-around bg-[#282828]"
    >
      <View className="space-y-2">
        <Text className="text-center text-4xl font-bold text-white">
           Jaether
        </Text>
        <Text className="text-center tracking-wider text-gray-400 font-semibold">
            Your voice companion, powered by chatGPT.
        </Text>
      </View>
      <View className=" flex-row justify-center">
          <Image source={require('../../assets/images/bot1.png')} className="h-72 w-72" />
      </View>
      <TouchableOpacity className="bg-[#D17842] mx-5 p-4 rounded-2xl">
        <Text className="text-center font-bold text-white">
          Get Started
        </Text>
      </TouchableOpacity>
  </SafeAreaView>
  );
}