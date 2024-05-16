import { View, Text, Image, TouchableOpacity} from "react-native";
import { style } from "./style";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
export default function Welcome() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>

      <View style={style.containerImg}>
        
        <Animatable.Image
          animation="flipInY"
          style={style.img}
          source={require("../../../assets/logo-Welcome.png")}>
          </Animatable.Image>

        <Text style={style.textWelcome}>Bem-Vindo!</Text>
      </View>

      <Animatable.View animation="fadeInUp" delay={600} style={style.containerDescription}>

        <Text style={style.textdescrition}>
          Olá! Aqui você pode informar as autoridades local sobre problemas
          ocorrentes na cidade.
        </Text>

        <TouchableOpacity onPress={()=>{navigation.navigate("login")}} style={style.button}>
            <Text  style={{color:"white"}}>
                Começar
            </Text>

        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}
