import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#09579E",
    justifyContent: "center",
  },
  containerImg: {
    flex: 1,
    width: "100%",
    heig: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  img: {
    width: "70%",
    resizeMode: "contain",
    height:"60%"
  },
  containerLoginForm: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  loginTitle: {
    color: "white",
    fontSize: 30,
  },
  boxErro:{
    width:"70%",
    height:40,
    backgroundColor:"#a71a5b",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    
  },
  loginErro: {
    color: "#fff",
    fontSize: 20,
  },
  loginInput: {
    width: "80%",
    fontSize:20,
    backgroundColor: "white",
    borderRadius: 10,
    color: "gray",
    marginTop: 15,
    height: 50,
    paddingLeft: 20,
  },
  loginButton: {
    backgroundColor: "#002A49",
    width: 200,
    height: 50,
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    margin: 25,
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  cadastroText: {
    color: "#ABDCFF",
  },
});
