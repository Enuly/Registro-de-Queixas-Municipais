import axios from "axios";

export const api = axios.create({
    baseURL:"http://10.0.0.107:5000" 
})

export const login = async(email, senha)=>{
   const data = await api.post("/login",{email,senha})
   console.log(data.data.data)
}