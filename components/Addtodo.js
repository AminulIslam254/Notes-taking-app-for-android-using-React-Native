import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function Addtodo({submitHandler}) {

    const [text1, setText] = useState("")

    const changeHandler=(e)=>{
        setText(e.nativeEvent.text);
        // console.log(text1.nativeEvent.text)
        
    };
    

  return (
    <View style={styles.item}>
        <TextInput
        placeholder='new todo ...'
        onChange={changeHandler}
        
        />
        <Button title='Add Todo' color="coral" onPress={()=>{submitHandler(text1)}}></Button>
    </View>
  )

  
}

const styles = StyleSheet.create({
    item:{
        paddingBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderColor:"#ddd",
    }

});