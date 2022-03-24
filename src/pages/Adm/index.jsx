import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Tabs from '../../components/Tabs';
import CardHeader from '../../components/CardHeader';


import AsyncStorage from '@react-native-async-storage/async-storage'

// import { Container } from './styles';

export default function Adm({ route }){


   





const nome = route.params.nome
const valor = route.params.valor
const id = route.params.id







    return(
        <View style={styles.container}>
           <Text style={styles.text1}> Bem vindo de volta</Text>
           <Text style={styles.text}>{nome}</Text>
            <View style={styles.containerInfo}>
                <View style={styles.containerInfoHeader}>
                <CardHeader></CardHeader>
                </View>
                <Text style={styles.textSaldo}>Saldo disponível</Text>
                <Text style={styles.textSaldo}>R$ {valor}</Text>

            </View>
            <View style={styles.containerTabs}>
            <Tabs nome={nome} valor={valor} id={id}></Tabs>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#2FC456',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1:{
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold'

    },
    text:{
        textAlign:'center',
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold'

    },
    textSaldo:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20
    },
    containerInfoHeader:{
    height: '15%',
    width: '100%',
    justifyContent:'space-between'

    },
    containerInfo:{
        width: '90%',
        height: '55%',
        backgroundColor: '#FFF',
    
    },
    containerTabs:{
        
        width: '100%',
        height: 100,
        marginTop: 50
        
    },

})