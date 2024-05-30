import { View, Text, Image, TouchableOpacity} from "react-native";
import { style } from "./style";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { quitApp } from "../../services/commonFunctions";
export default function Welcome() {
  const navigation = useNavigation()
  //useEffect é a primeira função a rodar;
  useEffect(()=>{
    isLogged()
    quitApp()
  })
  //verifica se há o item cpf salvo no dispositivo, caso haja, redireciona o usuário para tela de login
  const isLogged = async () => {
    const cpf = await AsyncStorage.getItem("cpf");
    if (!cpf || cpf == "") {
      console.log(cpf)
    } else{navigation.navigate("profile")
    }
  };
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
      <View>
      <Text style={style.textdescrition1}>
          Olá! Aqui você pode informar as autoridades local sobre problemas
          ocorrentes na cidade.
        </Text>
        <Text style={style.textdescrition2}>
          Aperte em começar!
        </Text>
      </View>
        

        <TouchableOpacity onPress={()=>{navigation.navigate("login")}} style={style.button}>
            <Text  style={{color:"white"}}>
                Começar
            </Text>

        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}
