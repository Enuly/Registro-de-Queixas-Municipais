import React from "react";
import { style } from "./style";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { api, login } from "../../services/connectApiBack";
import { useNavigation } from "@react-navigation/native";
export default function Login(){
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <View style={style.container}>
            <View style={style.containerImg}>
                <Image
                source={require("../../../assets/logo-guarulhos.png")}
                style={style.img}
                />
            </View>
            <View style={style.containerLoginForm}>
                <Text style={style.loginTitle}>LOGIN</Text>
                <TextInput 
                style={style.loginInput}
                placeholder="Email" 
                onChangeText={(text)=>{
                    setEmail(text)
                }}
                />
                <TextInput
                style={style.loginInput}
                placeholder="Senha"
                onChangeText={(text)=>{
                    setSenha(text)
                }}
                />
                <TouchableOpacity
                style={style.loginButton}
                onPress={async ()=>{ await login(email,senha)}}
                >
                    <Text style={{color:"white"}}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate("cadastro")}}>
                <Text style={style.cadastroText}>
                    Cadastrar-se
                </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}