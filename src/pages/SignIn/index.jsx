import React,{ useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function SignIn(){

const [user, setUser] = useState(null)
const [password, setPassword] = useState(null)

const navigation = useNavigation()


async function sendForm(){
    let response = await fetch('http://192.168.0.104:8080/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:user,
            password: password
        })
    })
    let json = await response.json()
   console.log(json)

    if(json === 'error'){
        alert('error')
    }else{
        navigation.navigate('Adm', { valor: json.preco, nome: json.name, id:json.id})
    }
  
}

    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem Vindo(a)</Text>
            </Animatable.View>

        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
           
        <Text style={styles.title}>Usuário</Text>
        <TextInput
        placeholder='Digite seu usuário'
        style={styles.input}
        onChangeText={text => setUser(text)}
        >
f
        </TextInput>

        <Text style={styles.title}>Senha</Text>
        <TextInput
        placeholder='Digite sua senha'
        style={styles.input}
        onChangeText={text => setPassword(text)}
        >

        </TextInput>


        <TouchableOpacity style={styles.button} onPress={()=> {    
            sendForm()
           
        
        
        
        }}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.RegisterText}>Não Possui uma conta? Cadastre=se</Text>
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
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText:{
        color: '#a1a1a1',
    }
})