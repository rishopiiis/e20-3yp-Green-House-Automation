import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useState } from "react";
import login from "./app/Components/Authentication/login";
import register from "./app/Components/Authentication/register";
import about from "./app/about";
import Page from "./app/index";

const Stack = createStackNavigator();

export default function App() {
  const [isLogin, setisLogin] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isLogin ? "page" : "login"}>
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="about" component={about} />
          <Stack.Screen name="page" component={Page} />
          <Stack.Screen name="register" component={register} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
