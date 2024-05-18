
import { StyleSheet } from "react-native-web";
export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo:{
    flex:1,
    width:"100%",
    backgroundColor:"#09579E",
  },
  imgContainer:{
    width:"100%",
    height:"20%",
    paddingTop:25,
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
    
  },
  userLeftDescription:{
    width:"40%",
    height:"100%",
  },
  imgUser:{
    width:"100%",
    resizeMode:"contain",
    height:"50%"
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
  }
  
});
