// App.js
import React from 'react';
import styled from 'styled-components';




import TokenEconomicsSections from './components/TokenEconomics';
import MainBackground from './components/Background';


import { GlobalStyle } from './GlobalStyle';




const AppContainer = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <>
      <MainBackground/>
      <GlobalStyle/>
      <AppContainer>
       
       
      
      
        
       
        <TokenEconomicsSections />
       
      </AppContainer>
    </>
  );
}

export default App;
