import react from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
export const Loading = ()=>{
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.reset({
            index:0,
            routes:[{name:"profile"}],
            actions:[navigation.navigate("profile")]
              })
        },1000)
        
    })
    return(
        <></>
    )
}