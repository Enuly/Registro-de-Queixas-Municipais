import { View, Text, Image, Touchable } from "react-native";
import { style } from "./style";
import { TouchableOpacity } from "react-native-web";
export default function Welcome() {
  return (
    <View style={style.container}>
      <View style={style.containerImg}>
        <Image
          style={style.img}
          source={require("../../../assets/logo-Welcome.png")}
        ></Image>
        <Text style={style.textWelcome}>Bem-Vindo</Text>
      </View>
      <View style={style.containerDescription}>
        <Text style={style.textdescrition}>
          Olá! Aqui você pode informar as autoridades local sobre problemas
          ocorrentes na cidade.
        </Text>
        <TouchableOpacity>
            <Text style={style.button}>
                Começar
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
