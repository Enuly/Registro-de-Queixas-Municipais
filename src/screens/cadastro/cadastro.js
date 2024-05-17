import React from "react";
import {style} from "./style";
import { View, Image, Text, TextInput } from "react-native";
import { useState } from "react";
export default function Cadastro(){
    
    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")
    const [CEP, setCEP] = useState("")
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

            <View style={style.containerCadastroForm}>
                <Text style={style.cadatroTitle}>CADASTRO</Text>

                <TextInput
                style={style.cadatroInput}
                placeholder="Nome" 
                onChangeText={(text)=>{
                    setNome(text)
                }}

                />
            </View>

        </View>
    )

}