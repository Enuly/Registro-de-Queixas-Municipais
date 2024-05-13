import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    containerImg:{
        flex:2,
        width:"100%",
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:"#09579E",
        flexDirection:"column"
    },
    img:{
        resizeMode:"contain",
        width:"60%"
    },
    textWelcome:{
        color:"white",
        fontSize:40
    },
    containerDescription:{
        backgroundColor:"white",
        flex:1,
        padding:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        justifyContent:"space-between"
    },
    textdescrition:{
        color:"gray",
        fontSize:18
    },

    button:{
        width:"70%",
        height:70,
        backgroundColor:"#09579E",
        alignSelf:"center",
        padding:7,
        justifyContent:"center",
        alignItems:"center"
    },
}) 