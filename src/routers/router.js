import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome/welcome";
import Login from "../screens/Login/login";
import Cadastro from "../screens/cadastro/cadastro";
import Profile from "../screens/Profile/profile";
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
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
