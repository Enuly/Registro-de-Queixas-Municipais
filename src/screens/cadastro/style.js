import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#09579E",
        justifyContent:"center"
    },

    containerImg:{
        flex:1,
        width:"100%",
        heig:"100%",
        alignItems:"center",
        justifyContent:"flex-end"
    },

    img:{
        width:"70%",
        resizeMode:"contain",
    },

    cadatroTitle:{
        color:"white",
        fontSize:30
    }, 

    cadastroInput:{
        width:"80%",
        backgroundColor:"white",
        borderRadius:10,
        color:"gray",
        marginTop:15,
        height:50,
        paddingLeft:20
    },

})