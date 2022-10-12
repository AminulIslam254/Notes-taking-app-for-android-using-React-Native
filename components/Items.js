import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Items({value,pressHandler}) {
  return (
    <TouchableOpacity>
        <Text style={styles.item} onPress={()=>{pressHandler(value.key)}}>{value.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:"#bbb",
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10,

    }

});