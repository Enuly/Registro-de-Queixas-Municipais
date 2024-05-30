import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome/welcome";
import Login from "../screens/Login/login";
import Cadastro from "../screens/Cadastro/cadastro";
import Profile from "../screens/Profile/profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import RegistrarDenuncia from "../screens/RegistrarDenuncia/RegistrarDenuncia";
import { Loading } from "../screens/Loading/Loading";
const Stack = createStackNavigator();

export default function Router() {
  const navigation = useNavigation()

  //verifica se o usuario está logado
  const isLogged = async () => {
    const cpf = await AsyncStorage.getItem("cpf");
    if (!cpf || cpf == "") {
      //se não estiver renderiza a tela de welcome
      navigation.reset({
        index:0,
        routes:[{name:"welcome"}],
        actions:[navigation.navigate("welcome")]
      })
    } else {
      //se estiver renderiza a tela de profile
      navigation.reset({
        index:0,
        routes:[{name:"profile"}],
        actions:[navigation.navigate("profile")]
      })
    }
  };

  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false, headerLeft:null }}
      />

      <Stack.Screen
        name="cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="regisDenuncia"
        component={RegistrarDenuncia}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="loading"
        component={Loading}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
