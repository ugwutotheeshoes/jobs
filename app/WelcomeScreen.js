import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation, setSetup }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../assets/images/cuate.png")}
        style={{
          marginTop: 100,
          marginBottom: 20,
          width: 400,
          height: 400,
        }}
      />

      <Text style={{ color: "#f96163", fontSize: 35, fontWeight: "bold" }}>
	  Find your perfect job
      </Text>

      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 40,
		  textAlign: "center"
        }}
      >
        Need a job? See what millions of people are looking for on Jobber today.
      </Text>

      <TouchableOpacity
        onPress={() => setSetup(false)}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
