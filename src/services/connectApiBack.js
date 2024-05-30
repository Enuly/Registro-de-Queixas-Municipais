
//Arquivo responsavel por fazer a conexão com o back-end
import axios from "axios";
import* as dotenv from "dotenv"
const env = process.env.NODE_ENV || "dev";
dotenv.config({ path: ".env." + env });
const ip = process.env.IP_API
export const api = axios.create({
  baseURL: ip,
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
//função registrar denuncia
export const createComplain = async (data) =>{
  const {locate,descricao,titulo,fkUsuario } = data
  const response = await api.post("/makeComplaint",{locate,descricao,titulo,fkUsuario })
  if(response.data.isComplained){
    return {isSuccess:true}
  }else{
    return {isSuccess:false}
  }
}
export const getComplains = async (ids) =>{
  const response = await api.post("/getDenunciaToShow",{ids:ids})
 return response.data.data
}

export const setStatus = async (id) =>{
  const response = await api.post("/updateStatus",{idDenuncia:id})
 if(response.data.isSuccess){
  return true
 }
}