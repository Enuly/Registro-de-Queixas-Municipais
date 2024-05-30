import React from "react";
import { style } from "./style";
import { View, Text, Image, TextInput, TouchableOpacity, } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDataProfile } from "../../services/connectApiBack";
import { useNavigation } from "@react-navigation/native";
import { createComplain } from "../../services/connectApiBack";
import * as Animatable from "react-native-animatable"
const RegistrarDenuncia = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [locate, setEnderecoDenuncia] = useState("");
  const [descricao, setDescricaoDenuncia] = useState("");
  const [titulo, setTituloDenuncia] = useState("");
  const [fkUsuario, setCPF] = useState("")
  const [erro, setErro] = useState("")
  useEffect(() => {
    getUser();
  });

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
      const { nome, Endereco, CPF } = response.data;
      setNome(nome);
      setEndereco(Endereco);
      setCPF(CPF)
    } else {
      setErro("Usuario não encontrado");
    }
  };
  const createDenun = async () => {
    if (locate == "" || descricao == "" || titulo == "") {
      setErro("Preencha todos os campos!")
    } else {
      const response = await createComplain({ locate, descricao, titulo, fkUsuario })
      if (response.isSuccess) {
        navigation.navigate("profile")
      } else {
        setErro("Falha em criar denuncia")
      }
    }

  }
  return (
    <>
      <View style={style.container1}>
        <View style={style.userInfo}>
          <View style={style.imgContainer}>
            <Image
              source={require("../../../assets/logo-guarulhos.png")}
              style={style.img}
            />
          </View>
          <View style={style.userDescription}>
            <View style={style.userLeftDescription}>
              <Image
                source={require("../../../assets/user.png")}
                style={style.imgUser}
              />
            </View>
            <View style={style.userRightDescription}>
              <Text style={style.textName}>{nome}</Text>
              <Text style={style.textEndereco}>{endereco}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.container2}>
        {erro != "" ? (
          <Animatable.View animation="fadeInRight" delay={600} style={style.boxErro}>
            <Text style={style.titleErro}>{erro}</Text>
          </Animatable.View>
        ) : (
          <></>
        )}
        <Text style={style.title}>Faça sua denuncia</Text>
        <View style={style.containerInput}>
          <TextInput
            placeholder="Digite o título da denuncia"
            style={style.inputTitulo}
            onChangeText={(text) => {
              setTituloDenuncia(text)
            }}
          />

          <TextInput
            style={style.inputEndereco}
            placeholder="Endereço"
            onChangeText={(text) => {
              setEnderecoDenuncia(text);
            }}
          />
          <TextInput
            style={style.inputDesc}
            placeholder="descrição"
            multiline={true}
            onChangeText={(text) => {
              setDescricaoDenuncia(text);
            }}
          />

          <TouchableOpacity
            style={style.button}
            onPress={() => {
              createDenun()
            }}
          >
            <Text style={{ color: "white", fontSize: 20, }}>Enviar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </>
  );
};
export default RegistrarDenuncia;
