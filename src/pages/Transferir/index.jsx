import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TextInput, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';
import TabsVoltar from '../../components/TabsVoltar';
import CardHeader from '../../components/CardHeader';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function Transferir({ route }){

    const id = route.params.id

const [account, setAccount] = useState(null)
const [value, setValue] = useState(null)

const navigation = useNavigation()

    console.log(route.params.valor)

async function sendForm(){
    let response = await fetch('http://192.168.0.104:8080/transferir', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:account,
            value: value,
            my: id
        })
    })
    let json = await response.json()
   

    if(json === 'error'){
        alert('error')
    }else{
        navigation.navigate('Adm', { nome: route.params.nome, valor:route.params.valor, id:route.params.id})
    }
  
}

    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Transferir</Text>
            </Animatable.View>

        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
           
        <Text style={styles.title}>Conta</Text>
        <TextInput
        placeholder='Digite seu usuário'
        style={styles.input}
        onChangeText={text => setAccount(text)}
        >
f
        </TextInput>

        <Text style={styles.title}>Valor</Text>
        <TextInput
        placeholder='Digite sua senha'
        style={styles.input}
        onChangeText={text => setValue(text)}
        >

        </TextInput>


        <TouchableOpacity style={styles.button} onPress={()=> {    
            sendForm()
        }}>
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonRegister}>
            <TabsVoltar nome={route.params.nome} valor={route.params.valor} id={route.params.id}  >
                
            </TabsVoltar>
        </TouchableOpacity>
        </Animatable.View>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#2FC456",
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '6%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,    
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#2FC456',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 4,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister:{
        marginTop: 50,

    },
    registerText:{
        color: '#a1a1a1',
    }
})