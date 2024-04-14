import * as React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo.png")}
      />
      <Text style={styles.subheading}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable style={styles.button}>
        <Text>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
  },
  logo: {
    // alignSelf: "center",
    width: 150,
    height: 350,
    resizeMode: "contain",
    borderWidth: 2,
    borderColor: "red",
  },
  subheading: {
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontSize: 20,
    borderWidth: 2,
    borderColor: "red",
  },
  button: {
    height: 40,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
  },
});

export default WelcomeScreen;
