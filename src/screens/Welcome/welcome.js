import { View, Text, Image } from "react-native";
import { style } from "./style";
export default function Welcome() {
  return (
    <View style={style.container}>
      <View style={style.containerImg}>
        <Image
          style={style.img}
          source={require("../../../assets/logo-Welcome.png")}
        ></Image>
      </View>
      <View style={style.containerDescription}></View>
    </View>
  );
}
