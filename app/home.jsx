import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      {/* PROFILE */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            PRONTO PARA
          </Text>
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-rose-700"
          >
            TREINAR
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.jpg")}
            style={{ height: hp(10), width: wp(20) }}
            className="rounded-full"
          />

          <View
            className="bg-neutral-200 rounded-full justify-center items-center border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* Image Slider */}
    </SafeAreaView>
  );
}
