import React from "react";
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Navbar() {

    return(
        <View style={StyleSheet.navbar}>
            <Icon name="menu" size={50} color='white'/>
        </View>
    )
}

const styels = StyleSheet.create({
    navbar:{
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
})