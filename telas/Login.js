/* Tela de login */

/* Imports */
import React, { useContext, useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, SafeAreaView } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';


/* Função que faz uma linha ------ para separar os itens */
const Separator = () => (
    <View style={estilo.separator}></View>
  );

 
/* 
 Função principal da pagina de Login
 navigation é passado como parametro pois essa pagina da acesso a outras duas paginas
 Registro e EsqueciMinhaSenha
*/
const Login = ({navigation}) => {
    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    const{login, googleLogin} = useContext(AuthContext); //A função que faz o login esta em ../navigation/AuthProvider

    const checkTextInput = () => {
        //Verifica se o campo do email não está vazio
        if (email == null) {
            Alert.alert("Erro ao fazer Login","Campo email vazio");
            return;
        }
        //Verifica se o campo da senha não está vazio
        if (password == null) {  
            Alert.alert("Erro ao fazer Login","Campo Senha vazio");
            return;
        }
        //Caso todas as verificações forem falsas faz o login disponivel em (AuthProvider)
        login(email, password);
      };

    return(
        <SafeAreaView style = {estilo.container}>
        {/* Container principal */}
        <View>

            {/* Logo */}
            <Image style = {estilo.logo} source = {require('../assets/img/logo.png')} />

            {/* Texto de boas vindas */}
            <Text style = {estilo.welcome}> Bem vindo</Text>

            {/* Texto de login */}
            <Text style = {estilo.loginText}> Faça login com sua conta. </Text>

            {/* Container do login */}
            <View style = {estilo.containerLogin}>

                {/* Input do email */}
                <TextInput 
                    style = {estilo.input} 
                    placeholder = "Email" 
                    onChangeText = {(userEmail) => setEmail(userEmail)}
                    keyboardType = 'email-address'
                    autoCorrect = {false}
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

                {/* Botão de login */}
                <TouchableOpacity 
                    style={estilo.appButtonContainer}
                    onPress = {checkTextInput} /* Quando apertado checa os inputs se estiverem corretos tenta o login*/
                >
                    <Text style={estilo.appButtonText}>Login</Text>
                </TouchableOpacity>

                {/* Botão de esqueceu senha */}
                <TouchableOpacity>
                    <Text style = {{color: '#009CFF', alignSelf: 'center', fontSize: 15, }}>Esqueceu sua senha?</Text>
                </TouchableOpacity> 

                {/* Separador */}
                <Separator />
                <Text style = {{alignSelf: 'center', fontSize: 15}}>Ou faça login utilizando:</Text>
                {/* Separador */}

            </View>

            {/* Container com o login por Redes Sociais */}
            <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                

                {/* Botão do Google */}
                <TouchableOpacity
                    onPress = {() => googleLogin()}
                >
                    <Image style = {{height: 50, width: 50, }} source = {require('../assets/img/google.png')}></Image>
                </TouchableOpacity>

            </View>

            {/* Botão para ir para a tela de Registro */}
            <TouchableOpacity
                onPress = {() => navigation.navigate('Registro')}   
            >
                <Text style = {{color: '#009CFF', alignSelf: 'center', fontSize: 15, marginTop:30 }}>Ainda não possui uma conta? Clique aqui</Text>
            </TouchableOpacity> 
            
        </View>
        {loading && <Loading />}
        </SafeAreaView>
    )
}

/* Estilos css */
const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'snow'
    },
    containerLogin:{
        justifyContent: 'center',
        marginVertical: 15,
        marginHorizontal: 40,
        backgroundColor: 'snow'
    },

    logo: {
        resizeMode: 'center',
        alignSelf: 'flex-start',
        marginLeft: 15,
        width: 100,
        marginTop: 5,
        height: 100,
    },
    welcome: {
        fontSize: 30,
        alignSelf: 'flex-start',
        paddingLeft: 10,
        color: '#2b2e36', 
    },

    loginText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        paddingLeft: 15,
        color: '#009CFF',
    },
    input: {
        height: 35,
        width: '100%',
        marginVertical: 5,
        borderWidth: 1,
        alignSelf: 'center',
        paddingLeft: 20,
        paddingTop: 10,
        borderRadius: 100,
        backgroundColor: 'ghostwhite',
        borderColor: 'lightgray',
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

export default Login;