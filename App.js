/* App js é o arquivo que o react-native usa como principal, ou seja,
  é o primeiro arquivo de leitura
*/

/* Imports */
import React from 'react';
import Providers from './navigation' //Referencia para a pasta navigation (lê o index.js dessa pasta)

const App = () => {
  return (
    <Providers />
  )
 
};
export default App;
