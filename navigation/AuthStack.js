/* Pilha de autentificação */

/* Imports */
import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

/* Imports das telas */
import Tutorial from '../telas/Tutorial'
import Login from '../telas/Login'
import Registro from '../telas/Registro'

/* Cria a pilha */
const Stack = createStackNavigator();


const AuthStack = () => {
    let routeName;

  const [primeiroAcesso, setPrimeiroAcesso] = useState(null);

  /* Função que verifica se o aplicativo ja foi aberto alguma vez no aparelho */
  useEffect(() =>{
    AsyncStorage.getItem('alreadyLauched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLauched', 'true');
        setPrimeiroAcesso(true);
      } else {
        setPrimeiroAcesso(false)
      }
    });
  
    GoogleSignin.configure({
      webClientId: '976195829519-mmcr8ved24jijqnve8td8ed7agjbofkn.apps.googleusercontent.com',
    });

  }, []);

  /* Caso seja a primeira vez que o app esteja sendo aberto redireciona para a tela de Tutorial */
  if( primeiroAcesso == null){
    return null;
  } else if ( primeiroAcesso == true){
        routeName = 'Tutorial';
  } else {
      routeName = 'Login';
  }
  /* Caso não seja a primeira vez que o app esteja sendo aberto redireciona para a tela de Login */

  /* Função Navigator para a pilha de autentificação */
    return(
        
        <Stack.Navigator initialRouteName={routeName}>
          {/* Tela Tutorial */}
          <Stack.Screen 
            name = "Tutorial" 
            component = {Tutorial} 
            options={{header: () => null}} 
          />

          {/* Tela Login */}
          <Stack.Screen 
            name = "Login" 
            component = {Login} 
            options={{header: () => null}} 
          />

          {/* Tela Registro */}
          <Stack.Screen 
            name = "Registro" 
            component = {Registro} 
            options = {({navigation}) => ({
                title: '',
                headerStyle: {
                    backgroundColor: 'snow',
                    shadowColor: 'snow',
                    elevation: 0
                },
                headerLeft: () => (
                    <View style = {{marginLeft: 10, marginTop: 5}}>
                        {/* Cabeçalho com o botão para voltar a tela de login */}
                        <Icon.Button
                            name = 'long-arrow-left'
                            size = {30}
                            backgroundColor = 'snow'
                            color = '#333'
                            onPress = {() => navigation.navigate('Login')}
                        />
                    </View>
                )
            })}
  
          />
          
        </Stack.Navigator>
    ) 
}

export default AuthStack;