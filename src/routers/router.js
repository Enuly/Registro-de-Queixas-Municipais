import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome/welcome";
const Stack = createStackNavigator();
export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
