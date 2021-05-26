/* Contexto utilizado para a realização do Login, Registro e Logout */

/* Imports */
import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

/* Cria o contexto */
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    return(
        <AuthContext.Provider
            value = {{
                user,
                setUser,
                /* Função que faz o login */
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch(e) {
                        console.log(e);
                        Alert.alert("Erro ao fazer Login","Email ou senha incorretos");
                    }
                },

                /* Função que faz o login com Google */
                googleLogin: async () =>{
                    try {
                        const { idToken } = await GoogleSignin.signIn();

                        // Create a Google credential with the token
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                      
                        // Sign-in the user with the credential
                        await auth().signInWithCredential(googleCredential);
                        
                    } catch (error) {
                        console.log(error);
                        Alert.alert("Erro ao fazer Login","ERRO AO REALIZAR LOGIN COM O GOOGLE TENTE NOVAMENTE OU CRIE UMA CONTA GRATIS");
                        
                    }
                },
                
                /* Função que faz o registro */
                register: async(email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch(e) {
                        console.log(e);
                        Alert.alert("Erro ao criar conta","Email invalido ou ja cadastrado");
                    }
                },

                /* Função que faz o logout */
                logout: async() => {
                    try {
                        await auth().signOut();
                    } catch(e) {
                        console.log(e);
                    }
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}