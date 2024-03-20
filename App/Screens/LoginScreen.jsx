import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import { client } from "../Utils/KindConfig";

export default function LoginScreen() {

const handleSignUp = async () => {
  const token = await client.register();
  if (token) {
    console.log("Authenticated Successfully")
    // User was authenticated
  }
};

const handleSignIn = async () => {
  const token = await client.login();
  if (token) {
    console.log("Authenticated Successfully")
    // User was authenticated
  }
};


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("./../../assets/images/rocket.jpg")}
        style={{
          width: 450,
          height: 400,
          resizeMode: "cover",
          marginBottom: 10,
        }}
      />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 45, fontWeight: "bold", textAlign: "center" }}>
          Welcome to
          <Text style={{ color: Colors.PINK, fontWeight: "bold" }}> IRIS</Text>
          {/* sign in button */}
          <Text style={{ fontSize: 25, marginTop: 15, color: Colors.RED }}>
            {" "}
            Learn Designing & Get Job{" "}
          </Text>
        </Text>
        <TouchableOpacity onPress={(handleSignIn)}style={styles.button}>
          <Text style={{ textAlign: "center", fontSize: 18 }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={(handleSignUp)}>
        <Text
          style={{
            marginTop: 10,
            color: Colors.PINK,
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Create New Account
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: Colors.RED,
    borderRadius: 99,
    marginTop: 20,
  },
});
