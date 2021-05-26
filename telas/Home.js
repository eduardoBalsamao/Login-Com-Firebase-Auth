import React, { useState } from 'react';
import { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome';





const Home = () => {
    const{logout, user} = useContext(AuthContext);




    return(
      /* Header */
      <View style = {estilo.container}>
        <View style = {estilo.header}>
          <Text style = {estilo.welcome}>Bem vindo</Text>
          <Text style = {{alignSelf:'center', color: '#fff', marginBottom:5,}}>Conta: {user.email} </Text>

          <View style={estilo.inputContainer}>
          <View style={estilo.iconStyle}>
            <Icon name='search' size={20} color="#666" />
          </View>
          <TextInput
            style={estilo.input}
            numberOfLines={1}
            placeholder="Nome do Dispotivo"
            placeholderTextColor="#666"

          />
        </View>
        </View>
        {/* Header */}

        <Button onPress = {logout} title = "logout"></Button>
        
      </View>

    )

}

const estilo = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'whitesmoke'
    },

    header: {
      height: 120,
      width: '100%',
      backgroundColor: 'steelblue',
      elevation: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
    },
    welcome: {
        fontSize: 23,
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center'
  },
      appButtonContainer: {
        elevation: 2,
        backgroundColor: 'aliceblue',
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 12,
        height: 30,
        width: 80,
        alignSelf: 'flex-end',
        marginBottom: 5,
        marginRight: 10
      },
      appButtonText: {
        fontSize: 17,
        color: "#333",
        fontWeight: "bold",
        alignSelf: "center",
        
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        alignSelf: 'center'
      },
      iconStyle: {
        paddingBottom: 5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
      },
      input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: 100,
        height: 30,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
      },

})

export default Home;