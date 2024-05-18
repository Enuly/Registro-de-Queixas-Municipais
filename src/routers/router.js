import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome/welcome";
import Login from "../screens/Login/login";
import Cadastro from "../screens/Cadastro/cadastro";
import Profile from "../screens/Profile/profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

export default function Router() {
  const isLogged = async () => {
    const cpf = await AsyncStorage.getItem("cpf");
    if (!cpf || cpf == "") {
      console.log(cpf)
      return false;
    } else {
      console.log(cpf)
      return true;
    }
  };

  return (
    <Stack.Navigator>
      {isLogged() == true ? (
        <>
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </>
      )}
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
    </Stack.Navigator>
  );
}
