/* Tela de Registro */

/* Imports */
import React, { useState } from 'react';
import { useContext } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {AuthContext} from '../navigation/AuthProvider'
import auth from '@react-native-firebase/auth'

/* Função que faz uma linha ------ para separar os itens */
const Separator = () => (
    <View style={estilo.separator}></View>
  );

/* Função principal da pagina de Registro*/
const Registro = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const {register} = useContext(AuthContext); //A função que faz o registro está em ../navigation/AuthProvider
    
    const testeRegistro = () => {
        auth().createUserWithEmailAndPassword(email, password).then(()=>{
            let userId = auth().currentUser;
            database().ref(`/users/${userId.uid}`).set({
                email: userId.email
            })
        })

    }

    const checkTextInput = () => {
        //Verifica se o campo do email não está vazio
        if (email == null) {
            Alert.alert("Erro ao criar a conta","Campo email vazio");
            return;
        }
        //Verifica se o campo do senha não está vazio
        if (password == null) {
            Alert.alert("Erro ao criar a conta","Campo Senha vazio");
            return;
        }
        //Verifica se o campo do confirmeSenha não está vazio
        if(confirmPassword == null){
            Alert.alert("Erro ao criar a conta","Campo Confirmação de Senha vazio");
            return;
        }
        //Verifica se a senha e a confirmeSenha são iguais
        if(password != confirmPassword){
            Alert.alert("Erro ao criar a conta","As senhas digitadas são diferentes");
            return;
        }
        //Caso todas as verificações forem falsas faz o registro disponivel em (AuthProvider)
        register(email, password);
      };

    return(
        /* Container principal */
        <View style={estilo.container}>
            
            {/* Logo */}
            <Image style = {estilo.logo} source = {require('../assets/img/logo.png')} />
            
            {/* Container com inputs de registro */}
            <View style = {estilo.containerLogin}>

                {/* Texto principal (titulo) */}
                <Text style = {estilo.welcomeR}>Crie sua conta</Text>              
                
                {/* Input do email */}
                <TextInput 
                    style = {estilo.input} 
                    placeholder = "Email" 
                    onChangeText = {(userEmail) => setEmail(userEmail)}
                    keyboardType = 'email-address'                    
                >
                </TextInput>

                {/* Input da senha */}
                <TextInput 
                    style = {estilo.input} 
                    placeholder = "Senha" 
                    secureTextEntry = {true}
                    onChangeText = {(userPassword) => setPassword(userPassword)}    
                >
                </TextInput>

                {/* Input da confirmeSenha */}
                <TextInput 
                    style = {estilo.input} 
                    placeholder = "Confirme sua senha"
                    secureTextEntry = {true}
                    onChangeText = {(userPasswordConfirmation) => setConfirmPassword(userPasswordConfirmation)}
                >
                </TextInput>

                {/* Botão para criar a conta */}
                <TouchableOpacity  
                    style={estilo.appButtonContainer}
                    onPress = {testeRegistro}
                >
                    <Text style={estilo.appButtonText}>Criar conta</Text>
                </TouchableOpacity>
                

            </View>
            
        </View>
    );
}

/* Estilos css */
const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'ghostwhite'
    },
    
    containerLogin:{
        justifyContent: 'center',
        marginHorizontal: 30,
        backgroundColor: 'ghostwhite'
    },

    logo: {
        resizeMode: 'center',
        alignSelf: 'center',
        width: 100,
        height: 100,
    },

    welcomeR: {
        fontSize: 30,
        alignSelf: 'center',
        color: '#2b2e36',
        marginBottom: 15,
    },
    
    input: {
        height: 40,
        width: '100%',
        marginVertical: 5,
        borderWidth: 1,
        alignSelf: 'center',
        paddingLeft: 20,
        paddingTop: 10,
        borderRadius: 100,
        backgroundColor: 'ghostwhite',
        borderColor: 'lightgray',
        fontSize: 15,
        color: 'black',
        elevation: 5,
      },

      appButtonContainer: {
        elevation: 8,
        backgroundColor: '#009CFF',
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 12,
        height: 35,
        marginVertical: 20
      },

      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",     
      },

      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})

export default Registro;