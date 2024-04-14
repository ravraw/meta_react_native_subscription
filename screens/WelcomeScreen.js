import * as React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo.png")}
      />
      <Text style={styles.subheading}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 350,
    resizeMode: "contain",
  },
  subheading: {
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    height: 40,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#495E57",
  },
  buttonText: {
    color: "#FFFFFF",
  },
});

export default WelcomeScreen;
