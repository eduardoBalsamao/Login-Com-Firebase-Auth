/* Pilha do App */

/* Imports */
import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack'

/* Imports das telas */
import Home from '../telas/Home'
 
/* Cria a pilha */
const Stack = createStackNavigator();

/* Função Navigator para a pilha de App */
const AppStack = () => {
       
    return(
        
        <Stack.Navigator initialRouteName={Home}>
          
          {/* Tela home */}
          <Stack.Screen 
            name = "Home" 
            component = {Home} 
            options={{header: () => null}} 
          />
          
        </Stack.Navigator>
    ) 
}

export default AppStack;