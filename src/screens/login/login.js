import React from "react";
import { style } from "./style";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { login } from "../../services/connectApiBack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const searchUser = async (email, senha) => {
    if (email == "" || senha == "") {
      setErro("Preencha todos os campos");
    } else {
      const response = await login(email, senha);
      console.log(response);
      if (response.findIt == true) {
        const { CPF } = response.data;
        await AsyncStorage.setItem("cpf", String(CPF));
        navigation.reset({
          index:0,
          routes:[{name:"profile"}],
          actions:[navigation.navigate("profile")]
        })
      } else {
        setErro("Usuario não encontrado");
      }
    }
  };

  return (
    <View style={style.container}>
      <Animatable.View
        animation="fadeInDown"
        delay={600}
        style={style.containerImg}
      >
        <Animatable.Image
          animation="flipInX"
          delay={800}
          source={require("../../../assets/logo-guarulhos.png")}
          style={style.img}
        />
      </Animatable.View>
      <Animatable.View
        animation="fadeInLeft"
        delay={1000}
        style={style.containerLoginForm}
      >
        {}
        <Text style={style.loginTitle}>LOGIN</Text>
        {erro != "" ? (
          <Animatable.View animation="fadeInRight" delay={600} style={style.boxErro}>
            <Text style={style.loginErro}>{erro}</Text>
          </Animatable.View>
        ) : (
          <></>
        )}

        <TextInput
          style={style.loginInput}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={style.loginInput}
          placeholder="Senha"
          onChangeText={(text) => {
            setSenha(text);
          }}
        />
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => {
            searchUser(email, senha);
          }}
        >
          <Text style={{ color: "white", fontSize:20, }}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("cadastro");
          }}
        >
          <Text style={style.cadastroText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
