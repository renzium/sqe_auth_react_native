import React from 'react'
import { View,Image , StyleSheet,Text ,TouchableOpacity} from 'react-native'

function Home({navigate}) {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={ styles.image } source={ require("../assets/logo.png") } />
        <TouchableOpacity
          onPress={ () => navigate("auth") }
          style={ { flex: 1 } }
        >
          <Text style={ { flex: 1, textAlign: "right" } } >logout</Text>
        </TouchableOpacity>
      </View>
      <View style={ [styles.heading, { backgroundColor: "#1e3a8a", padding: 10, borderRadius: 5 },]}>
        <Text style={{fontSize: 16,color: 'white'}}>
          Hello
        </Text>
        <Text style={{fontSize: 16,color: 'white'}}>
          Welcome to SQE Holdings
        </Text>
      </View>
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    fontSize: 20,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 50,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginHorizontal: 10,
    flexDirection: "row"
  }
  ,
  image: {
    width: 120,
    height: 40,
    
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
    padding: 10,
    width: "90%",
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
