import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome/welcome";
import Login from "../screens/login/login";
import cadastro from "../screens/cadastro/cadastro";
const Stack = createStackNavigator();
export default function Router() {
  return (
    <Stack.Navigator>
     
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
     
      <Stack.Screen
      name="login"
      component={Login}
      options={{headerShown:false}}
      />

      <Stack.Screen
      name="cadastro"
      component={cadastro}
      options={{headerShown:false}}
      />

    </Stack.Navigator>
  );
}
