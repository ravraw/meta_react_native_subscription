import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import KeyboardAvoidingElement from "../components/KeyboardAvoidingElement";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const isValidEmail = () => {
    setIsValid(
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    );
  };

  return (
    <KeyboardAvoidingElement>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo-grey.png")}
        />
        <Text style={styles.subheading}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          value={email}
          placeholder="Hello@example.com"
          onChangeText={setEmail}
          onChange={isValidEmail}
          keyboardType="email-address"
          maxLength={50}
          style={styles.textInput}
          clearButtonMode="always"
        />
        <Pressable
          style={[styles.button, !isValid && { backgroundColor: "gray" }]}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingElement>
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
    height: 250,
    resizeMode: "contain",
  },
  subheading: {
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontSize: 20,
  },
  textInput: {
    height: 50,
    width: "80%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
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

export default SubscribeScreen;
