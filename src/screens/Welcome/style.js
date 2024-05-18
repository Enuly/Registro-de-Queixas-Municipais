import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#09579E",
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
        width:"100%",
        backgroundColor:"white",
        flex:1,
        padding:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        justifyContent:"space-around"
    },
    textdescrition1:{
        color:"black",
        fontSize:23,
    },
    textdescrition2:{
        color:"gray",
        fontSize:20,
    },

    button:{
        width:200,
        height:50,
        backgroundColor:"#09579E",
        alignSelf:"center",
        padding:7,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15
    },
}) 