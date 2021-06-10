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

          
        </View>
        {/* Header */}

        <View style = {{flex: 1, alignContent: 'center'}}>
          <Button onPress = {logout} title = "logout" ></Button>

        </View>
        
      </View>

    )

}

const estilo = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'whitesmoke'
    },

    header: {
      height: 75,
      width: '100%',
      backgroundColor: 'steelblue',
      elevation: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginBottom: 20
    },
    welcome: {
        fontSize: 23,
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center'
  },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },


})

export default Home;