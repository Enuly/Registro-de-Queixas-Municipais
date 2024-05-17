import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#09579E",
    justifyContent: "center",
  },
  containerImg: {
    flex: 1,
    width: "100%",
    heig: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  img: {
    width: "70%",
    resizeMode: "contain",
  },
  containerLoginForm: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  loginTitle: {
    color: "white",
    fontSize: 30,
  },
  loginErro: {
    color: "rgb(200,100,40)",
    fontSize: 20,
  },
  loginInput: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    color: "gray",
    marginTop: 15,
    height: 50,
    paddingLeft: 20,
  },
  loginButton: {
    backgroundColor: "#002A49",
    width: 200,
    height: 50,
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    margin: 25,
    marginBottom: 15,
  },

  cadastroText: {
    color: "#ABDCFF",
  },
});
