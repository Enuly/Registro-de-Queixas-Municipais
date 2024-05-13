import { View, Text } from "react-native"
import { style } from "./style"
export default function Welcome(){
    return(
        <View style={style.container}>
            <Text>Essa é a tela de boas-vindas</Text>
        </View>
    )
}