import { View, Text, Image, TouchableOpacity  } from "react-native";
import { style } from "./style";
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
        <TouchableOpacity  style={style.button}>
            <Text  style={{color:"white"}}>
                Começar
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
