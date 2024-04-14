import * as React from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.subheading}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput style={styles.textInput} placeholder="Hello@example.com" />
      <Pressable style={styles.button}>
        <Text>Subscribe</Text>
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
    height: 250,
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
  textInput: {
    height: 50,
    width: "80%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
  },
  button: {
    height: 40,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
  },
});

export default SubscribeScreen;
