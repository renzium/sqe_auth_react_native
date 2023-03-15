import React from 'react'
import { TextInput,StyleSheet,View } from 'react-native'

export default function Input({ placeholder, onChange ,name}) {
  const changeHandler = (text)=>onChange(text,name)
  return (
    <View styles={ styles.border }>
      <TextInput onChangeText={()=>changeHandler(text)} placeholder={placeholder}  />
    </View>
  )
}


const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 4,
    width: "100%",
    backgroundColor: "red"

  },
  
})