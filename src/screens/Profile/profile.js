import react from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getDataProfile } from "../../services/connectApiBack";

export default function Profile() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    const data = await AsyncStorage.getItem("cpf");
    if (!data) {
      navigation.navigate("welcome");
    } else {
      searchUser(data);
    }
  };

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
  const quitAccount = async ()=>{
    await AsyncStorage.removeItem("cpf")
    navigation.navigate("welcome")
  }
  return (
    <View style={style.container}>
      <View style={style.containerUser}></View>



      <Text style={{ color: "red" }}>{nome}</Text>
      <Text style={{ color: "red" }}>{cep}</Text>
      <Text style={{ color: "red" }}>{cpf}</Text>
      <Text style={{ color: "red" }}>{email}</Text>
      <Text style={{ color: "red" }}>{endereco}</Text>
      <TouchableOpacity onPress={()=>{
        quitAccount()
      }}>
        <Text>Sair</Text>
      </TouchableOpacity>
      
    </View>
  );
}