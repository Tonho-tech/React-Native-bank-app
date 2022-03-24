import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export default function Tabs(props){
    const navigation = useNavigation()
    console.log(props.nome)
    return(
        <View style={styles.container}>          
                <TouchableOpacity style={styles.tabItem} onPress={() =>navigation.navigate('Transferir', {nome: props.nome, valor: props.valor, id:props.id})}>
                    <Icon name="arrow-upward" size={24} color='#FFF'></Icon>
                    <Text style={styles.text}> Transferir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={() =>navigation.navigate('Depositar', {nome: props.nome, valor: props.valor, id:props.id})}>
                    <Icon name="arrow-downward" size={24} color='#FFF'></Icon>
                    <Text style={styles.text}> Depositar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={() =>navigation.navigate('Suporte', {nome: props.nome, valor: props.valor, id:props.id})}>
                    <Icon name="chat-bubble-outline" size={24} color='#FFF'></Icon>
                    <Text style={styles.text}> Suporte</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({

    container:{
        height: '100%',
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tabItem:{
        width: 100,
        height:100,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        justifyContent: 'space-between'
    },
    text:{
        fontSize: 13,
        color: '#fff'
    }

})