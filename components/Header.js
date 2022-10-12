import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>My todos</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: "coral",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }

});