import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function CardHeader(){
    return(
        <View style={styles.container}>
            <Icon name="visibility-off" size={28} color='#666' style={styles.icon}></Icon> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width:'100%',
    },
    icon:{
        marginLeft: 25,
        marginTop: 25
    }
})