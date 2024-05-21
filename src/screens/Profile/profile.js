import react from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { style } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getDataProfile } from "../../services/connectApiBack";
import { BackHandler } from "react-native";

export default function Profile() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getUser();
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }
    
  );


//Proucura se há o cpf do usuário salvo no dispositivo, caso não encontre redireciona o usuário para a tela de welcome
  const getUser = async () => {
    const data = await AsyncStorage.getItem("cpf");
    if (!data) {
      navigation.navigate("welcome");
    } else {
      searchUser(data);
    }
  };
  //Função semelhante a função de login, pois proucura os dados do usuário com base no cpf encontrado no dispositivo
  const searchUser = async (cpf) => {
    const response = await getDataProfile(cpf);
    if (response.findIt == true) {
      const { CPF, nome, Email, CEP, Endereco } = response.data;
      setCep(CEP);
      setCpf(CPF);
      setNome(nome);
      setEmail(Email);
      setEndereco(Endereco);
    } else {
      setErro("Usuario não encontrado");
    }
  };
  //Elimina o cpf salvo no dispositivo e redireciona o usuario para tela de login
  const quitAccount = async ()=>{
    console.log()
    await AsyncStorage.removeItem("cpf")
    setCep("");
    setCpf("");
    setNome("");
    setEmail("");
    setEndereco("");
    navigation.navigate("welcome")
  }
  return (
    <View style={style.container}>
      <View style={style.userInfo}>
        <View style={style.imgContainer}>
          <Image source={require("../../../assets/logo-guarulhos.png")}
          style={style.img}/>
        </View>
        <View style={style.userDescription}>
          <View style={style.userLeftDescription}>
          <Image source={require("../../../assets/user.png")}
          style={style.imgUser}/>
          </View>
          <View style={style.userRightDescription}>
          <Text style={style.textName}>{nome}</Text>
          <Text style={style.textEndereco}>{endereco}</Text>
          <TouchableOpacity style={style.button} onPress={()=>{
            quitAccount()
          }}>
            <Text style={{color:"#fff", fontSize:16}}>Fazer Denúncia</Text>
          </TouchableOpacity>
          </View>
        </View>
        
       
      </View>
      <View style={style.containerDenuncia}>
        <Text style={style.text1}>

        </Text>
      </View>
    </View>
  );
}