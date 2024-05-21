import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#09579E",
        justifyContent:"center"
    },

    containerImg:{
        width:"100%",
        height:"35%",
        alignItems:"center",
        justifyContent:"flex-end"
    },

    img:{
        width:"70%",
        height:80,
        resizeMode:"contain",
    },

    cadatroTitle:{
        color:"white",
        fontSize:30
    }, 

    containerCadastroForm:{
        paddingTop:"10%",
        width: "100%",
        height:"65%",
        alignItems: "center",
    },

    cadastroInput:{
        width:"80%",
        fontSize:20,
        backgroundColor:"white",
        borderRadius:10,
        color:"gray",
        marginTop:10,
        height:50,
        paddingLeft:20
    },

    cadastroButton: {
        backgroundColor: "#002A49",
        fontSize:20,
        width: 200,
        height: 50,
        alignItems: "center",
        padding: 15,
        borderRadius: 15,
        margin: 25,
        marginBottom: 15,
      },
      loginErro: {
        color: "#fff",
        fontSize: 20,
        marginBottom:10,
        marginTop:10
      },
})