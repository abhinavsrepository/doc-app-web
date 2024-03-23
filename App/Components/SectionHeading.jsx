import { View, Text } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
export default function SectionHeading({heading}) {
  return (
    <Text
      style={{
        fontFamily: "outfit-medium",
        fontSize: 20,
        marginBottom: 5,
        color: Colors.PURPLE,
      }}
    >
      {heading}
    </Text>
  );
}
