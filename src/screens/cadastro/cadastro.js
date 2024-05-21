//Tela de cadastro
import React from "react";
import { style } from "./style";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { createNewUser } from "../../services/connectApiBack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [CPF, setCPF] = useState("");
  const [CEP, setCEP] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Endereco, setEndereco] = useState("");
  const [fillFirstField, setFillFirstField] = useState(false);
  const [erro, setError] = useState("")

  /*Essa é função que ira enviar os dados para a função createNewUser do arquivo connectApiBack.Js, que por sua vez
  faz conecção com o back-end, assim enviando as informações para o banco de dados
  */
  const createUser = async (Email, Endereco, CEP, CPF, nome, Senha)=>{
    data = {Email, Endereco, CEP, CPF, nome, Senha}
    const response = await createNewUser(data)

    if(response.cpfIsLogged || response.emailIsLogged){
      if(response.emailIsLogged && response.cpfIsLogged){
        setError("Cpf e Email já cadastrados")
        setFillFirstField(false)
      }else if(response.cpfIsLogged){
        setError("Cpf Cadastrado")
        setFillFirstField(false)
      }else if(response.emailIsLogged){
        setError("Email Cadastrado")
        setFillFirstField(false)
      }
      
    }else if(response.created == true){
        await AsyncStorage.setItem("cpf", String(CPF))
        navigation.navigate("profile")

    }
  }
  return (
    <View style={style.container}>
      <View style={style.containerImg}>
        <Image
          source={require("../../../assets/logo-guarulhos.png")}
          style={style.img}
        />
      </View>

      <View style={style.containerCadastroForm}>
        <Text style={style.cadatroTitle}>CADASTRO</Text>
        <Text style={style.loginErro}>{erro}</Text>
        <View style={fillFirstField == false ? {display:"flex", width:"100%", alignItems:"center"} : {display:"none"}}>
        <TextInput
            style={style.cadastroInput}
            placeholder="Nome"
            onChangeText={(text) => {
              setNome(text);
            }}
          />
          <TextInput
            style={style.cadastroInput}
            placeholder="CPF"
            onChangeText={(text) => {
              setCPF(text);
            }}
          />
          <TextInput
            style={style.cadastroInput}
            placeholder="CEP"
            onChangeText={(text) => {
              setCEP(text);
            }}
          />
        </View>
          
        
        <View style={fillFirstField == true ? {display:"flex", width:"100%", alignItems:"center"} : {position:"absolute",zIndex:2, left:"-100%"}}>
        <TextInput
          style={style.cadastroInput}
          placeholder="Endereço"
          onChangeText={(text) => {
            setEndereco(text);
          }}
        />
        <TextInput
          style={style.cadastroInput}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={style.cadastroInput}
          placeholder="Senha"
          onChangeText={(text) => {
            setSenha(text);
          }}
        />
        </View>
        

        <TouchableOpacity
          style={style.cadastroButton}
          onPress={() => {
            {fillFirstField == false ? setFillFirstField(true) : createUser(Email, Endereco, CEP, CPF, nome, Senha) }
            ;
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>{fillFirstField == true ? "Cadastrar": "Próximo"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}