/* Define a rota */

/* Imports */
import React, {useContext, useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'


import AuthStack from './AuthStack' //Stack de autentificação (Tutorial, Login e Registro)
import AppStack from './AppStack' //Stack do App (Telas abertas apenas depois do login realizado)

const Routes = () => {
    
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    //Logica disponibilizada pelo proprio firebase
    const onAuthStateChanged = (user) =>{
        setUser(user);
        if(initializing) setInitializing(false);
    }
    //Logica disponibilizada pelo proprio firebase
    useEffect(() =>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    },[]);

    if(initializing) return null;

    /* 
        Resumindo a função verifica se houve mudança na autentificação, ou seja, login
        Caso falso (Login não realizado) retorna => AuthStack (Pilha de autentificação)
        Caso verdadeiro (Login realizado) retorna => AppStack (Pilha do aplicativo)
    
    */
    return (
        <NavigationContainer>
            {user ? <AppStack/> : <AuthStack />}
        </NavigationContainer>
    )
}
export default Routes;