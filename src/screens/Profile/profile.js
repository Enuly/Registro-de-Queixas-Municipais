import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl, Dimensions} from "react-native";
import { style } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useCallback, useRef } from "react";
import { getDataProfile, getComplains, setStatus } from "../../services/connectApiBack";

export default function Profile() {
  const ScrollViewRef = useRef()
  const {height} = Dimensions.get("window")
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [admin, setAdmin] = useState();
  const [complains, setComplains] = useState([]);
  const [userComplains, setUserComplains] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const [isChangeStatus, setIsChangeStatus] = useState(false)
  var ids = []

  useEffect(() => {
    getComplainsFromBack([]);
    getUser();
    setLoad(true);
  }, []);

  const handleScroll = (event)=>{
    
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
    var loadNewComplains = true
    setTimeout(()=>{
      if (isCloseToBottom) {
        if(loadNewComplains){
          getComplainsFromBackAgain(ids)
        }
        loadNewComplains = false
      }
    },2000)
    
  }

  const getComplainsFromBack = useCallback(async () => {
    try {
      const response = await getComplains([]);
      setComplains(response);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const getComplainsFromBackAgain = useCallback(async (ids) => {
    try {
      const response = await getComplains(ids);
      setComplains(item =>[...item,...response]);
    } catch (error) {
      console.log(error);
    }
  }, [])
  const getUser = useCallback(async () => {
    const data = await AsyncStorage.getItem("cpf");
    if (!data) {
      navigation.navigate("welcome");
    } else {
      searchUser(data);
    }
  }, [navigation]);

  const getUserWhoComplained = useCallback(async (fk_Usuario) => {
    try {
      const response = await getDataProfile(fk_Usuario);
      const { nome, Endereco } = response.data;
      setUserComplains((prevState) => ({
        ...prevState,
        [fk_Usuario]: { nome, Endereco },
      }));
    } catch (error) {
      console.log("erro get user complain");
    }
  }, []);

  useEffect(() => {
    if (complains.length > 0) {
      complains.forEach((complain) => {
        if (!userComplains[complain.fk_Usuario_cpf]) {
          getUserWhoComplained(complain.fk_Usuario_cpf);
        }
      });
    }
  }, [complains, userComplains, getUserWhoComplained]);

  const refreshing = () => {
    getComplainsFromBack(ids);
  };
  const searchUser = async (cpf) => {
    const response = await getDataProfile(cpf);
    if (response.findIt) {
      const { nome, Endereco, isAdmin } = response.data;
      setNome(nome);
      setEndereco(Endereco);
      setAdmin(isAdmin)
    } else {
      console.log("Usuario não encontrado");
    }
  };

  const quitAccount = async () => {
    
  };

  return (
    <>
      <View style={style.container}>
        <View style={style.userInfo}>
          <View style={style.imgContainer}>
            <Image source={require("../../../assets/logo-guarulhos.png")} style={style.img} />
          </View>
          <View style={style.userDescription}>
            <View style={style.userLeftDescription}>
              <Image source={require("../../../assets/user.png")} style={style.imgUser} />
              <TouchableOpacity style={style.buttonQuit} onPress={async ()=>{
                await AsyncStorage.removeItem("cpf");
                setNome("");
                setEndereco("");
                navigation.navigate("welcome");
              }}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Sair</Text>
              </TouchableOpacity>
            </View>
            <View style={style.userRightDescription}>
              <Text style={style.textName}>{nome}</Text>
              <Text style={style.textEndereco}>{endereco}</Text>
              <TouchableOpacity style={style.button} onPress={() => navigation.navigate("regisDenuncia")}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Fazer Denúncia</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
      ref={ScrollViewRef}
      onScroll={handleScroll}
      scrollEventThrottle={16}
        style={style.containerComplain}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={refreshing}
            colors={['#9Bd35A', '#689F38']}
            tintColor="#689F38"
            title="Carregando..."
            titleColor="#00ff00"
            progressBackgroundColor="#ffffff"
          />
        }
      >
        <Text style={style.titleComplain}>Outras denuncias</Text>
        {complains.map((item, index) => {
          const user = userComplains[item.fk_Usuario_cpf];
          ids.push(item.id_denuncia)
          return (
            <View key={index} style={style.boxComplain}>
              <View style={style.boxComplainUser}>
                <Image source={require("../../../assets/user.png")} style={style.imgUserComplain} />
                <View>
                  <Text style={style.nameUserComplain}>{user?.nome || "Carregando..."}</Text>
                  <Text style={style.enderecoUserComplain}>Endereco: {user?.Endereco || "Carregando..."}</Text>
                </View>
              </View>
              <View>
                <Text style={style.descriptionComplain}>{item.Descricao}</Text>
                <Text style={style.statusComplain}>Status: {item.StatusDenun}</Text>
                {admin == 1 && item.StatusDenun != "Concluido" ? (<TouchableOpacity style={style.buttonModify} onPress={async ()=>{

                  setIsChangeStatus(await setStatus(item.id_denuncia))
                  navigation.navigate("loading")
                }}>
                  <Text style={{ color: "#fff", fontSize: 16 }}>Modificar status</Text>
                </TouchableOpacity>) : (<></>)}
                
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}
