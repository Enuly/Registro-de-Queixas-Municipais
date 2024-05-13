import { View, Text, Image} from "react-native"
import { style } from "./style"
export default function Welcome(){
    return(
        <View style={style.container}>
            <View>
            <Image style={{width: "100%"}} source={require("../../../assets/logo-Welcome.png")}></Image>
            </View>
            <View>
                
            </View>
        </View>
    ) 
}