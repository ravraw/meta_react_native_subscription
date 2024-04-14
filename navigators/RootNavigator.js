import * as React from "react";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "light" ? "#FFF" : "#333333" },
      ]}
    >
      <Navigator>
        {/* <Screen name="Welcome" component={WelcomeScreen} /> */}
        <Screen name="Subscribe" component={SubscribeScreen} />
      </Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootNavigator;
