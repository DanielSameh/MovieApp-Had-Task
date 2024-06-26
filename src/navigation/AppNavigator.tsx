import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import SeeAllScreen from "../screens/SeeAllScreen";
import { RootStackParamList } from "../types";

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="SeeAll"
            component={SeeAllScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
