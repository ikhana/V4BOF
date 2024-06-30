// App.js
import React from 'react';
import styled from 'styled-components';




import TokenEconomicsSections from './components/TokenEconomics';
import MainBackground from './components/Background';

import HowToBuy from './components/HowToBuy';

import { GlobalStyle } from './GlobalStyle';

import CTASection from './components/CTASection';


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
        <CTASection/>
        <HowToBuy/>
      
      </AppContainer>
    </>
  );
}

export default App;
