import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";

export default function index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>This is home page</Text>
    </View>
  );
}
