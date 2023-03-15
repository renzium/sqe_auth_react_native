import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, FlatList, } from 'react-native';




export default function Login({ navigate }) {
  const [inFocus, setInFocus] = useState({})
  const loginList = [
    { name: "email", placeholder: "your email", textContentType: "emailAddress", secureTextEntry: false },
    {
      name: "password", placeholder: "your password", textContentType: "password", secureTextEntry: true
    }
  ]

  const forgotList = [
    { name: "email", placeholder: "your email", textContentType: "emailAddress", secureTextEntry: false },
  ]
  const registerList = [
    { name: "firstName", placeholder: "your first name", textContentType: "givenName", secureTextEntry: false },
    { name: "lastName", placeholder: "your last name", textContentType: "familyName", secureTextEntry: false },
    { name: "email", placeholder: "your email", textContentType: "emailAddress", secureTextEntry: false },
    {
      name: "password", placeholder: "your password", textContentType: "password", secureTextEntry: true
    }
  ]



  const [list, setList] = useState("registerList")
  const lists = {
    registerList,
    forgotList,
    loginList

  }

  const handlerFocus = (name, value) => {
    setInFocus({
      ...inFocus,
      [name]: value || !inFocus[name]
    })
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.imageCtn }>
        <Image style={ styles.image } source={ require("../../assets/logo.png") } />
      </View>
            <FlatList
              style={{flexGrow: 0, width: "90%",paddingHorizontal: 10 }}
              data={ lists[list] }
          renderItem={ ({ item }) => (
            <>
              <View style={ styles.TextInput }>
                <TextInput
                  onBlur={ () => handlerFocus(item.name, false) }
                  onFocus={ () => handlerFocus(item.name, true) }
                  placeholder={ item.placeholder }
                  textContentType={ item.textContentType }
                  style={ [styles.inputView, { borderColor: "black", borderWidth: inFocus[item.name] ? 1 : 0 }] }
                  secureTextEntry={ item.secureTextEntry }
                />
              </View>
                </>
              ) }
              keyExtractor={ item => item.name }
            />

      <View style={ { flexDirection: "row", width: "90%", paddingHorizontal: 10, marginTop: 20 } }>
        <TouchableOpacity
          style={ { flex: 1 } }
          onPress={ () => setList("forgotList") }
        >
          <Text  >Forgot password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => setList(list === "registerList" ? "loginList" : "registerList") }
          style={ { flex: 1 } }
        >
          <Text style={ { flex: 1, textAlign: "right" } } >{ list === "registerList" ? "Sign in" : "Sign up?" }</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPressIn={ () => handlerFocus("button", true) }
        onPressOut={ () => handlerFocus("button", false) }
        style={ { marginTop: 10, width: "90%", paddingHorizontal: 10, } }
        onPress={ () => navigate("home") }>
        <View style={ [styles.appButtonContainer, { borderColor: inFocus["button"] ? "black" : "#0284C7", backgroundColor: inFocus["button"] ? "white" : "#0284C7" }] }>
          <Text style={ { color: inFocus["button"] ? "black" : "white", textAlign: 'center' } } >{ list === "forgotList" ? "Submit" : (list === "registerList" ? "Sign up" : "Sign in") }</Text>
        </View>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: 150,
    height: 50
  },

  inputView: {
    backgroundColor: "#eeeeee",
    borderRadius: 10,
    width: "100%",
    height: 45,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    paddingVertical: 10,
    marginBottom: 10
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  btnWt: {
    color: "black",
    background: "white"
  },
  appButtonContainer: {

    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
