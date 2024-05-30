
import { StyleSheet } from "react-native-web";
export const style = StyleSheet.create({
  container1: {
    width:"100%",
    height:"30%",
  },
  userInfo:{
    height:"100%",
    width:"100%",
    backgroundColor:"#09579E",
    justifyContent:"center",
    alignItems:"center"

  },
  imgContainer:{
    width:"100%",
    height:"15%",
    paddingTop:20,
    paddingRight:25,
    alignItems:"flex-end"

  },
  img:{
    width:"30%",
    height:40,
    resizeMode:"contain",
    alignSelf:"right",
  },
  userDescription:{
    width:"100%",
    height:"80%",
    flexDirection:"row",
    paddingLeft:25,
    justifyContent:"center",
    alignItems:"center"
    
  },
  userLeftDescription:{
    width:"40%",
    height:"100%",
  },
  imgUser:{
    width:"100%",
    resizeMode:"contain",
    height:"100%"
    
  },
  userLeftDescription:{
    paddingTop:20,
    width:"30%",
    height:"100%",
  },
  userRightDescription:{
    width:"60%",
    maxHeight:"100%",
    paddingTop:20,
  },
  textName:{
    fontSize:20,
    color:"#fff",
    fontWeight:"bold"
  },
  textEndereco:{
    marginTop:10,
    fontSize:16,
    color:"#fff",
  },
  button:{
    marginTop:20,
    width:"100%",
    height:40,
    backgroundColor:"#002A49",
    alignSelf:"center",
    padding:7,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:7,
    
},
  containerDenuncia:{
    flex:2.4,
    backgroundColor:"#fff",
    width:"100%"
  },
  container2:{
    width:"90%",
    padding:30,
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:20,
},

  button: {
    backgroundColor: "#002A49",
    width: 200,
    height: 50,
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    margin: 25,
    marginBottom: 15,
    marginLeft:"auto",
    marginRight:"auto"
},
title:{
  color: "black",
  fontSize: 26,
  marginBottom:20
},
boxErro:{
  width:"100%",
  height:40,
  backgroundColor:"#a71a5b",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:10,
  marginLeft:"auto",
  marginRight:"auto",
  marginBottom:20
  
},
titleErro: {
  color: "#fff",
  fontSize: 20,
},
inputTitulo: {
  borderWidth: 3,
  borderColor: '#ccc',
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  fontSize:20
},
inputEndereco: {
  borderWidth: 3,
  borderColor: '#ccc',
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  fontSize:20
},
inputDesc: {
  borderWidth: 3,
  borderColor: '#ccc',
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  height:100,
  fontSize:20
  
},
});