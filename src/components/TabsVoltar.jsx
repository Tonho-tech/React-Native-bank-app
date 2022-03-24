import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export default function Tabs(props){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>          
              
            <TouchableOpacity style={styles.tabItem} onPress={() =>navigation.navigate('Adm', {nome : props.nome , valor : props.valor, id: props.id})}>
                    <Icon name="home" size={24} color='#FFF'></Icon>
                    <Text style={styles.text}> Voltar</Text>
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
        backgroundColor: '#2FC456',
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