
//Arquivo responsavel por fazer a conexão com o back-end
import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.0.35:5000",
});
//função login
export const login = async (email, senha) => {
  const data = await api.post("/login", { email, senha });
  if (data.data.data == 0) {
    return { findIt: false };
  } else {
    return { findIt: true, data: data.data.data };
  }
};
//função pega de dados
export const getDataProfile = async (cpf) => {
  const data = await api.post("/getData", { cpf });
  if (data.data.data == 0) {
    return { findIt: false };
  } else {
    return { findIt: true, data: data.data.data };
  }
};
//função cadastro
export const createNewUser = async (data) =>{
  const {Email, Senha, nome, CEP, CPF, Endereco} = data
  const response = await api.post("/createUser",{Email, Senha, Endereco, nome, CEP,CPF})
  return response.data
}