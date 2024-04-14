import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator>
      <Screen name="welcome" component={WelcomeScreen} />
      <Screen name="subscribe" component={SubscribeScreen} />
    </Navigator>
  );
};

export default RootNavigator;
