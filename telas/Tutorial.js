/* Tela de Tutorial */

/* Imports */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

/* Variavel com os slides que iram aparecer no tutorial */
const slides = [
    {
      key: '1',
      title: 'Crie sua conta',
      text: 'Crie uma conta gratuitamente no nosso App e conheça as funcionalidades.',
      link: 'Coisa Ganerica',
      image: require('../assets/img/register.png')
    },
    {
      key: '2',
      title: 'Coisa Ganerica',
      text: 'Coisa Ganerica',
      link: 'Coisa Ganerica',
      image: require('../assets/img/buy.png')
    },
    {
      key: '3',
      title: 'Coisa Ganerica',
      text: 'Coisa Ganerica',
      link: 'Coisa Ganerica',
      image: require('../assets/img/control.png')
    },
];

/* 
 Função principal da pagina de Tutorial
 navigation é passado como parametro pois essa pagina da acesso a pagina
 Login
*/
const Tutorial = ({navigation}) => {
    const [showHome, setShowHome] = useState(false);

    // Função que monta os slides
    function renderSlides({ item }){

        return(
            /* Container principal do slide */
            <View style = {estilo.container}>
                {/* Logo no slide */}
                <Image source = {require('../assets/img/logo.png')} style = {estilo.logo} />

                {/* Imagem do slide */}
                <Image source = {item.image} style = {estilo.imagem} />

                {/* Titulo do slide */}
                <Text style = {estilo.title}> {item.title} </Text> 

                {/* Texto do slide */}
                <Text style = {estilo.text}> {item.text} </Text>

                {/* Link do slide */}
                <Text style = {estilo.link}> {item.link} </Text>
 
            </View>
        )
    }

    return(
      /* Componente que renderiza o slide criado ascima  */
      <AppIntroSlider
        renderItem = {renderSlides} 
        data = {slides}
        activeDotStyle = {estilo.dots}
        renderNextButton = { () => <Text style = {estilo.textButtons}>Proximo</Text>}
        renderDoneButton = { () => <Text style = {estilo.textButtons}>Fim</Text>}
        onDone={ () => navigation.replace("Login")}
      >
      </AppIntroSlider>
    )
}

/* Estilos css */
const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'ghostwhite'
  },
  
  logo: {
    resizeMode: 'center',
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
    marginTop: 15,
    marginLeft: 10
  },

  imagem: {
    resizeMode: 'center',
    height: '40%',
    width: '100%'
  },

  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 23,
    textTransform: 'uppercase',
    color: '#009CFF',
    alignSelf: 'center'
  },

  text: {
    textAlign: 'center',
    color: '#483d8b',
    paddingHorizontal: 25,
    fontSize: 17
  },

  link: {
    textAlign: 'center',
    color: '#009CFF',
    fontSize: 15
  },
  
  dots: {
    backgroundColor: '#009CFF',
    width: 30
  },

  textButtons: { 
    marginRight: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#009CFF',
    
  }

})

export default Tutorial;