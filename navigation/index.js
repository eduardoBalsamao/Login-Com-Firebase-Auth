/* index.js da pasta navigation */

/* Imports */
import React from 'react';
import Routes from './Routes'; //Arquivo responsavel pelas rotas do aplicativo
import {AuthProvider} from './AuthProvider'

const Providers = () =>{
    return(
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default Providers;