
import { StyleSheet } from "react-native-web";
export const style = StyleSheet.create({
  container: {
    width:"100%",
    height:"30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"red"
  },
  userInfo:{
    height:"100%",
    width:"100%",
    backgroundColor:"#09579E",
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
  containerComplain:{
    width:"95%",
    padding:20,
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:10,
    
  },
  titleComplain:{
    color: "black",
    fontSize: 26,
    marginBottom:20,
  },
  boxComplain:{
    width:"100%",
    padding:10,
    backgroundColor:"#ccc",
    height:"auto",
    marginBottom:30
  },
  boxComplainUser:{
    width:"100%",
    flexDirection:"row",
    marginBottom:40
  },
  imgUserComplain:{
    width:50,
    resizeMode:"contain",
    height:60,
    marginRight:10
  },
  nameUserComplain:{
    color: "black",
    fontSize: 22,
    flexWrap:"wrap",
    width:"70%",
  },
  enderecoUserComplain:{
    color: "black",
    fontSize: 16,
    flexWrap:"wrap",
    width:"80%",
  },
  descriptionComplain:{
    color: "black",
    fontSize: 18,
    flexWrap:"wrap",
    width:"90%",
    marginLeft:"auto",
    marginRight:"auto"
  },
  statusComplain:{
    color: "gray",
    fontSize: 16,
    flexWrap:"wrap",
    width:"90%",
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:20
  },
  buttonQuit:{
    marginTop:22,
    borderColor:"red",
    borderWidth:2,
    width:"60%",
    height:40,
    alignSelf:"center",
    padding:7,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:7,
  },
  buttonModify:{
    marginTop:22,
    borderColor:"gray",
    borderWidth:2,
    width:"60%",
    height:40,
    alignSelf:"center",
    padding:7,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:7,
  }


});
